import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme={'purple'}
        w={'10'}
        h={'10'}
        p={'0'}
        borderRadius={'full'}
        onClick={onOpen}
        variant={'solid'}
        zIndex={'overlay'}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>
      <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>streamerr</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button
                onClick={onClose}
                colorScheme={'purple'}
                variant={'ghost'}
              >
                <Link to={'/'}>Home</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={'purple'}
                variant={'ghost'}
              >
                <Link to={'/stream'}>View Streams</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={'purple'}
                variant={'ghost'}
              >
                <Link to={'/stream?category=free'}>Free Streams</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={'purple'}
                variant={'ghost'}
              >
                <Link to={'/upload'}>Start Stream</Link>
              </Button>
            </VStack>
            <HStack
              pos={'absolute'}
              bottom={'10'}
              left={'0'}
              width={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme={'purple'}>
                <Link to={'/login'}>Login</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={'purple'}
                variant={'outline'}
              >
                <Link to={'/signup'}>Sign up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
