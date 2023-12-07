import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={["full" , '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>Welcome back</Heading>

          <Input
            placeholder={'Enter your E-mail here.....'}
            type={'email'}
            required
            focusBorderColor={'purple.500'}
          />

          <Input
            placeholder={'Enter your Password.....'}
            type={'password'}
            required
            focusBorderColor={'purple.500'}
          />

          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget Password</Link>
          </Button>

          <Button colorScheme={'purple'} type={'submit'}>
            Log in
          </Button>
          <Text textAlign={'right'}>New user??    {" "} {" "}
          
          <Button variant={'link'} alignSelf={'flex-end'} colorScheme={'purple'}>
            <Link to={'/signup'}>Sign Up</Link>
          </Button></Text>
         
          
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
