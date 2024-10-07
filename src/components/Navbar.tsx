import React from 'react';
import { Box, HStack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <Box bg="gray.800" p={4}>
      <HStack spacing={6}>
        <Link to="/">
          <Button colorScheme="teal" variant="ghost">Home</Button>
        </Link>
        <Link to="/portfolio">
          <Button colorScheme="teal" variant="ghost">Portfolio</Button>
        </Link>
        <Link to="/login">
          <Button colorScheme="teal" variant="ghost">Login</Button>
        </Link>
      </HStack>
    </Box>
  );
};

export default Navbar;
