'use client';

import Link from '@/components/link/Link';
import MessageBoxChat from '@/components/MessageBoxChat';
import { ChatBody, OpenAIModel } from '@/types/types';
import {
  Button,
  Flex,
  Icon,
  Img,
  Input,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { MdAutoAwesome, MdEdit, MdPerson } from 'react-icons/md';
import Bg from '../../public/img/chat/bg-image.png';

export default function Chat() {
  const [inputCode, setInputCode] = useState<string>('');
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [model] = useState<OpenAIModel>('gpt-4'); // Always use GPT-4
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
  const inputColor = useColorModeValue('navy.700', 'white');
  const textColor = useColorModeValue('navy.700', 'white');
  const placeholderColor = useColorModeValue({ color: 'gray.500' }, { color: 'whiteAlpha.600' });

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    const apiKey = localStorage.getItem('apiKey');
    if (!apiKey || !inputCode.trim()) return;

    const userMessage = inputCode.trim();
    const chatHistory = messages.map((msg) => `${msg.sender}: ${msg.text}`).join('\n');
    const prompt = `${chatHistory}\nUser: ${userMessage}`;

    setMessages((prev) => [...prev, { sender: 'User', text: userMessage }]);
    setInputCode('');
    setLoading(true);

    const body: ChatBody = { inputCode: prompt, model, apiKey };
    const response = await fetch('/api/chatAPI', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      setLoading(false);
      alert('API error');
      return;
    }

    const data = response.body;
    if (!data) {
      setLoading(false);
      alert('No response body');
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;
    let fullResponse = '';

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunk = decoder.decode(value);
      fullResponse += chunk;
    }

    setMessages((prev) => [...prev, { sender: 'AI', text: fullResponse }]);
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <Flex
      w="100%"
      pt={{ base: '70px', md: '0px' }}
      direction="column"
      position="relative"
    >
      <Img src={Bg.src} position={'absolute'} w="350px" left="50%" top="50%" transform={'translate(-50%, -50%)'} />
      <Flex
        direction="column"
        mx="auto"
        w="100%"
        minH={{ base: '75vh', '2xl': '85vh' }}
        maxW="1000px"
        px={{ base: 4, md: 6 }}
      >
        <Text
          fontSize={{ base: 'lg', md: '2xl' }}
          fontWeight="bold"
          color={textColor}
          textAlign="left"
          mb={4}
        >
          Hello Jemell, Ready to grow your business?
        </Text>

        {messages.map((msg, idx) => (
          <Flex key={idx} align="flex-start" mb={4}>
            <Flex
              borderRadius="full"
              justify="center"
              align="center"
              bg={msg.sender === 'User' ? 'transparent' : 'linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%)'}
              border={msg.sender === 'User' ? '1px solid' : 'none'}
              borderColor={borderColor}
              me="20px"
              h="40px"
              minW="40px"
            >
              <Icon
                as={msg.sender === 'User' ? MdPerson : MdAutoAwesome}
                width="20px"
                height="20px"
                color={msg.sender === 'User' ? textColor : 'white'}
              />
            </Flex>
            <MessageBoxChat output={msg.text} />
          </Flex>
        ))}

        <Flex mt="auto" justifySelf="flex-end">
          <Input
            ref={inputRef}
            minH="54px"
            border="1px solid"
            borderColor={borderColor}
            borderRadius="45px"
            p="15px 20px"
            me="10px"
            fontSize="sm"
            fontWeight="500"
            color={inputColor}
            _placeholder={placeholderColor}
            placeholder="Type your message here..."
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <Button
            variant="primary"
            px="16px"
            fontSize="sm"
            borderRadius="45px"
            w={{ base: '160px', md: '210px' }}
            h="54px"
            onClick={handleSubmit}
            isLoading={loading}
          >
            Submit
          </Button>
        </Flex>

        <Flex justify="center" mt="20px" direction={{ base: 'column', md: 'row' }} alignItems="center">
          <Text fontSize="xs" textAlign="center" color={textColor}>
            Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts.
          </Text>
          <Link href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes">
            <Text fontSize="xs" color={textColor} fontWeight="500" textDecoration="underline">
              ChatGPT May 12 Version
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
