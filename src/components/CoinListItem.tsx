import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

interface CoinProps {
  coin: {
    coin_id: number;
    name: string;
    symbol: string;
    current_price: number | string;
  };
}

const CoinListItem: React.FC<CoinProps> = ({ coin }) => {
  const currentPrice = typeof coin.current_price === 'string' ? parseFloat(coin.current_price) : coin.current_price;

  return (
    <Box w="full" p={4} borderWidth={1} borderRadius="md" mb={4} boxShadow="md" _hover={{ boxShadow: 'lg' }}>
      <Flex justify="space-between" align="center">
        <Text fontWeight="bold" fontSize="lg">
          {coin.name}
        </Text>
        <Text fontSize="md" color="gray.500">
          {coin.symbol}
        </Text>
        <Text fontSize="lg" color="teal.500" fontWeight="medium">
          ${currentPrice.toFixed(2)}
        </Text>
      </Flex>
    </Box>
  );
};

export default CoinListItem;
