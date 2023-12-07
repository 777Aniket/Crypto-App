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
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Join Here
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email Here...."
              border="none"
              borderRadius={'none'}
              outline={'none'}
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textAlign={'center'} textTransform={'uppercase'}>
            Video Hub
          </Heading>
          <Text>All Right Received</Text>
        </VStack>

        <VStack w={'full'} >
            <Heading size={'md'} textTransform={'uppercase'}>
                Social Media
            </Heading>
            <Button variant={'link'} colorScheme={'purple'}  > 
                <a href='https://youtube.com'> YouTube</a>
            </Button>

            <Button variant={'link'} colorScheme={'purple'}  > 
                <a href='https://instragram.com'> Instagram</a>
            </Button>

            <Button variant={'link'} colorScheme={'purple'}  > 
                <a href='https://github.com'> GitHub</a>
            </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
