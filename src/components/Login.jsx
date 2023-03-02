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
    <Container maxW={'container.xl'} h="100vh" p="16">
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          margin="auto"
          my="16"
        >
          <Heading textAlign={'center '}>Welcome Back</Heading>
          <Input
            placeholder="Email"
            type="email"
            required
            focusBorderColor="purple"
          />
          <Input
            placeholder="Password"
            type="password"
            required
            focusBorderColor="purple"
          />
          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget Password</Link>
          </Button>
          <Button colorScheme="purple" type="submit">
            Login
          </Button>
          <Text textAlign={'right'}>
            New User?{' '}
            <Button variant={'link'} colorScheme="purple">
              <Link to={'/signup'}>sign up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
