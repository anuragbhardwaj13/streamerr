import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
const Footer = () => {
  return (
    <Box bgColor={'purple.900'} minH={'40'} p={'16'} color={'whiteAlpha.900'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w="full" px="4">
          <Heading size={'md'} textTransform={'uppercase'}>
            Join us and level up your game
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email Here"
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              variant={'unstyled'}
              focusBorderColor={'none'}
            />
            <Button
              p={'0'}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w="full"
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            streamerr
          </Heading>
          <Text> &#169; all rights reserved by Anurag Bhardwaj</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size="md" textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant="link" colorScheme="white">
            <a href="https://www.github.com/anuragbhardwaj13" target="blank">
              Github
            </a>
          </Button>
          <Button variant="link" colorScheme="white">
            <a
              href="https://www.linkedin.com/in/anuragbhardwaj13"
              target="blank"
            >
              LinkedIn
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
