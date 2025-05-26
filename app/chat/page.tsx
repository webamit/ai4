'use client';
/*eslint-disable*/

import Link from '@/components/link/Link';
import MessageBoxChat from '@/components/MessageBoxChat';
import { ChatBody, OpenAIModel } from '@/types/types';
import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  Text,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { useState } from 'react';
import { MdAutoAwesome, MdPerson } from 'react-icons/md';
import Bg from '../../public/img/chat/bg-image.png';

export default function Chat() {
  // Input States
  const [inputOnSubmit, setInputOnSubmit] = useState<string>('');
  const [inputCode, setInputCode] = useState<string>('');
  // Response message
  const [outputCode, setOutputCode] = useState<string>('');
  // ChatGPT model set to GPT-4
  const [model] = useState<OpenAIModel>('gpt-4-1106-preview');
  // Loading state
  const [loading, setLoading] = useState<boolean>(false);
  // Conversation history
  const [conversationHistory, setConversationHistory] = useState<any[]>([]);

  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
  const inputColor = useColorModeValue('navy.700', 'white');
  const gray = useColorModeValue('gray.500', 'white');
  const textColor = useColorModeValue('navy.700', 'white');
  const placeholderColor = useColorModeValue(
    { color: 'gray.500' },
    { color: 'whiteAlpha.600' },
  );

  const handleTranslate = async () => {
    let apiKey = localStorage.getItem('apiKey');
    setInputOnSubmit(inputCode);

    // Chat post conditions (maximum number of characters, valid message etc.)
    const maxCodeLength = 700;

    if (!apiKey?.includes('sk-')) {
      alert('Please enter an API key.');
      return;
    }

    if (!inputCode) {
      alert('Please enter your subject.');
      return;
    }

    if (inputCode.length > maxCodeLength) {
      alert(
        `Please enter code less than ${maxCodeLength} characters. You are currently at ${inputCode.length} characters.`,
      );
      return;
    }

    setOutputCode(' ');
    setLoading(true);
    const controller = new AbortController();
    const body: ChatBody = {
      inputCode,
      model,
      apiKey,
    };

    // -------------- Fetch --------------
    const response = await fetch('/api/chatAPI', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      setLoading(false);
      alert(
        'Something went wrong fetching from the API. Make sure to use a valid API key.',
      );
      return;
    }

    const data = response.body;

    if (!data) {
      setLoading(false);
      alert('Something went wrong');
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    let responseText = '';

    while (!done) {
      setLoading(true);
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      responseText += chunkValue;
    }

    setLoading(false);
    setOutputCode(responseText);

    // Ensure the first response shows correctly
    setConversationHistory((prevHistory) => [
      ...prevHistory,
      { user: inputCode, bot: responseText },
    ]);

    // Clear the input field after submitting
    setInputCode('');
  };

  const handleChange = (Event: any) => {
    setInputCode(Event.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleTranslate();
    }
  };

  return (
    <Flex
      w="100%"
      pt={{ base: '70px', md: '0px' }}
      direction="column"
      position="relative"
      align="center"
      justify="center"
      minH="100vh"
    >
      <Image
        src={Bg.src}
        position={'absolute'}
        w="350px"
        left="50%"
        top="50%"
        transform={'translate(-50%, -50%)'}
      />
      <Flex
        direction="column"
        mx="auto"
        w={{ base: '100%', md: '100%', xl: '100%' }}
        minH="75vh"
        maxW="1000px"
        overflow="auto"
        pb="20px"
      >
        {/* Chat Conversation */}
        <Flex
          direction="column"
          w="100%"
          mx="auto"
          mb="auto"
          maxH="70vh"
          overflowY="scroll"
        >
          {conversationHistory.map((conversation, index) => (
            <div key={index}>
              <Flex w="100%" align={'center'} mb="10px">
                <Flex
                  borderRadius="full"
                  justify="center"
                  align="center"
                  bg={'transparent'}
                  border="none"
                  me="20px"
                  h="40px"
                  minH="40px"
                  minW="40px"
                >
                  <Icon
                    as={MdPerson}
                    width="20px"
                    height="20px"
                    color={textColor}
                  />
                </Flex>
                <Flex
                  p="22px"
                  border="none"
                  borderRadius="14px"
                  w="100%"
                  bg="transparent"
                  zIndex={'2'}
                >
                  <Text
                    color={textColor}
                    fontWeight="600"
                    fontSize={{ base: 'sm', md: 'md' }}
                    lineHeight={{ base: '24px', md: '26px' }}
                  >
                    {conversation.user}
                  </Text>
                </Flex>
              </Flex>

              <Flex w="100%">
                <Flex
                  borderRadius="full"
                  justify="center"
                  align="center"
                  bg={'linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%)'}
                  me="20px"
                  h="40px"
                  minH="40px"
                  minW="40px"
                >
                  <Icon
                    as={MdAutoAwesome}
                    width="20px"
                    height="20px"
                    color="white"
                  />
                </Flex>
                <MessageBoxChat
                  output={conversation.bot}
                  height="auto" // Allow the box height to auto-expand
                  minHeight="200px" // Ensures the box is at least 200px
                  border="none" // Removed border from the response box
                  bg="transparent" // Removed background
                />
              </Flex>
            </div>
          ))}
        </Flex>

        {/* Chat Input Field */}
        <Flex
          direction="column"
          mx="auto"
          w="100%"
          align="center"
          mb={conversationHistory.length > 0 ? '20px' : 'auto'}
        >
          <Text fontSize="2xl" color={textColor} fontWeight="700">
            Hello Jemell, Ready to grow your business?
          </Text>
          <Flex mt="20px" w="100%" align="center" justify="center">
            <Input
              minH="120px" // Adjusted height for input field (similar to ChatGPT's input box)
              w="100%"
              border="2px solid"
              borderColor={useColorModeValue('#dcdcdc', '#3e3e3e')} // Light border for the input field
              borderRadius="15px" // Rounded corners for the input box
              p="20px" // Extra padding for a modern look
              me="10px"
              fontSize="sm"
              fontWeight="500"
              color={inputColor}
              _placeholder={placeholderColor}
              placeholder="Type your message here..."
              value={inputCode}
              onChange={handleChange}
              onKeyDown={handleKeyPress}
              _hover={{
                borderColor: '#9b9b9b', // Hover effect on input
              }}
              _focus={{
                borderColor: '#6c6c6c', // Focused input border
              }}
            />
            <Button
              variant="primary"
              py="20px"
              px="16px"
              fontSize="sm"
              borderRadius="45px"
              ms="auto"
              w={{ base: '160px', md: '210px' }}
              h="54px"
              bg="linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%)"
              _hover={{
                boxShadow: 'none',
                bg: 'linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%)',
              }}
              onClick={handleTranslate}
              isLoading={loading ? true : false}
            >
              Submit
            </Button>
          </Flex>
        </Flex>

        <Flex
          justify="center"
          mt="20px"
          direction={{ base: 'column', md: 'row' }}
          alignItems="center"
        >
          <Text fontSize="xs" textAlign="center" color={gray}>
            Free Research Preview. ChatGPT may produce inaccurate information
            about people, places, or facts.
          </Text>
          <Link href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes">
            <Text
              fontSize="xs"
              color={textColor}
              fontWeight="500"
              textDecoration="underline"
            >
              ChatGPT May 12 Version
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
