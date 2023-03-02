import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h="100vh" p="16">
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          margin="auto"
          my="4"
        >
          <Heading textAlign={'center '}>streamerr</Heading>
          <Avatar alignSelf={'center'} boxSize={'16'}></Avatar>
          <Input
            placeholder="Name"
            type="text"
            required
            focusBorderColor="purple"
          />
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

          <Button colorScheme="purple" type="submit">
            Signup
          </Button>
          <Text textAlign={'right'}>
            Already Signed up?{' '}
            <Button variant={'link'} colorScheme="purple">
              <Link to={'/login'}>Login Now</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
 