import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <Box p={8} textAlign="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" color="brand.500">
          Welcome to Coins App
        </Heading>
        <Text fontSize="xl" color="gray.300">
          Manage your cryptocurrency portfolio with ease and explore real-time coin data.
        </Text>
        <Button colorScheme="teal" size="lg" onClick={handleLogin}>
          Go to Login
        </Button>
      </VStack>
    </Box>
  );
};

export default Home;
