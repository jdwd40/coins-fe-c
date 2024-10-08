import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Text, VStack, Spinner } from '@chakra-ui/react';
import { getCoinDetails } from '../services/coinService';

interface CoinDetails {
  coin_id: number;
  name: string;
  symbol: string;
  current_price: string;
  market_cap: string;
  supply: string;
  description: string;
  date_added: string;
}

const CoinDetailsPage: React.FC = () => {
  const { coinId } = useParams<{ coinId: string }>();
  const [coinDetails, setCoinDetails] = useState<CoinDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCoinDetails = async () => {
      if (!coinId) return;
      try {
        const details = await getCoinDetails(coinId);
        setCoinDetails(details);
      } catch (error) {
        console.error('Failed to fetch coin details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCoinDetails();
  }, [coinId]);

  if (loading) {
    return (
      <Box p={8} textAlign="center">
        <Spinner size="xl" color="teal.500" />
      </Box>
    );
  }

  if (!coinDetails) {
    return (
      <Box p={8} textAlign="center">
        <Text fontSize="xl" color="red.500">
          Coin details not found.
        </Text>
      </Box>
    );
  }

  // Convert current_price to number
  const currentPrice = parseFloat(coinDetails.current_price);

  return (
    <Box p={8} textAlign="left">
      <VStack spacing={6} alignItems="flex-start">
        <Heading as="h1" size="2xl" color="brand.500">
          {coinDetails.name} ({coinDetails.symbol})
        </Heading>
        <Text fontSize="lg" color="gray.300">
          Current Price: ${currentPrice.toFixed(2)}
        </Text>
        <Text fontSize="lg" color="gray.300">
          Market Cap: ${coinDetails.market_cap}
        </Text>
        <Text fontSize="lg" color="gray.300">
          Supply: {coinDetails.supply}
        </Text>
        <Text fontSize="lg" color="gray.300">
          Date Added: {new Date(coinDetails.date_added).toDateString()}
        </Text>
        <Text fontSize="lg" color="gray.300">
          Description: {coinDetails.description || 'No description available.'}
        </Text>
      </VStack>
    </Box>
  );
};

export default CoinDetailsPage;