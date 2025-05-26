'use client';

import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { useColorModeValue } from '@chakra-ui/react';
import { HSeparator } from '@/components/separator/Separator';

export function SidebarBrand() {
  // 👇 This picks the right logo based on current mode
  const logoSrc = useColorModeValue('/logo-dark.png', '/logo-white.png');

  return (
    <Flex alignItems="center" flexDirection="column">
      <Image
        src={logoSrc}        // Light or dark logo dynamically
        alt="Horizon Logo"
        width={146}
        height={26}
        style={{ marginTop: '30px', marginBottom: '30px' }}
      />
      <HSeparator mb="20px" w="284px" />
    </Flex>
  );
}

export default SidebarBrand;
