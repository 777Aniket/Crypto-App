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
        zIndex={'overlay'}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme={'purple'}
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>DVD Plyer</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button
                colorScheme={'purple'}
                variant={'ghost'}
                onClick={onClose}
              >
                <Link to={'/'}>Home</Link>
              </Button>

              <Button
                colorScheme={'purple'}
                variant={'ghost'}
                onClick={onClose}
              >
                <Link to={'/videos'}>Videos</Link>
              </Button>

              <Button
                colorScheme={'purple'}
                variant={'ghost'}
                onClick={onClose}
              >
                <Link to={'/videos/Category=free'}>Free Videos</Link>
              </Button>

              <Button
                colorScheme={'purple'}
                variant={'ghost'}
                onClick={onClose}
              >
                <Link to={'/uplode'}>Uplode Videos</Link>
              </Button>
            </VStack>

            <HStack
              pos={'absolute'}
              bottom={'10'}
              left={'0'}
              onClick={onClose}
              justifyContent={'space-evenly'}
              width={'full'}
            >
              <Button colorScheme={'purple'} onClick={onClose}>
                <Link to={'/login'}>Log in </Link>
              </Button>

              <Button
                colorScheme={'purple'}
                variant={'outline'}
                onClick={onClose}
              >
                <Link to={'/Signup'}>Sign Up </Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
