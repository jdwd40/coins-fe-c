import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, VStack, Spinner } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { getCoins, getMarketStats } from '../services/coinService';
import CoinListItem from '../components/CoinListItem';

interface Coin {
  coin_id: number;
  name: string;
  symbol: string;
  current_price: number;
}

interface MarketStats {
  event: {
    type: string;
    start_time: string;
    end_time: string;
    details: string | null;
    time_left: number;
  };
  marketValue: string;
  last5minsMarketValue: string;
  percentage5mins: string;
  last10minsMarketValue: string;
  percentage10mins: string;
  last30minsMarketValue: string;
  percentage30mins: string;
}

const Home: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [marketStats, setMarketStats] = useState<MarketStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCoinsAndStats = async () => {
      try {
        const [coinsData, statsData] = await Promise.all([getCoins(), getMarketStats()]);
        setCoins(coinsData.sort((a: Coin, b: Coin) => b.current_price - a.current_price));
        setMarketStats(statsData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCoinsAndStats();
  }, []);

  const handleCoinClick = (coinId: number) => {
    navigate(`/coins/${coinId}`);
  };

  return (
    <Box p={8} textAlign="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" color="brand.500">
          Welcome to Coins App
        </Heading>
        {loading ? (
          <Spinner size="xl" color="teal.500" />
        ) : (
          <>
            {marketStats && (
              <Box mb={8}>
                <Text fontSize="xl" color="gray.300">
                  Market Event: {marketStats.event.type}
                </Text>
                <Text fontSize="lg" color="gray.400">
                  Start Time: {marketStats.event.start_time}
                </Text>
                <Text fontSize="lg" color="gray.400">
                  End Time: {marketStats.event.end_time}
                </Text>
                <Text fontSize="lg" color="gray.400">
                  Time Left: {marketStats.event.time_left.toFixed(2)} minutes
                </Text>

                <Box mt={4}>
                  <Heading as="h3" size="md" color="brand.500" mb={2}>
                    Market Statistics
                  </Heading>
                  <Text fontSize="lg" color="teal.400">Market Value: {marketStats.marketValue}</Text>
                  <Text fontSize="lg" color="teal.400">5 min Change: {marketStats.percentage5mins}</Text>
                  <Text fontSize="lg" color="teal.400">10 min Change: {marketStats.percentage10mins}</Text>
                  <Text fontSize="lg" color="teal.400">30 min Change: {marketStats.percentage30mins}</Text>
                </Box>
              </Box>
            )}
            <VStack spacing={4} w="full">
              {coins.map((coin) => (
                <Box key={coin.coin_id} onClick={() => handleCoinClick(coin.coin_id)} cursor="pointer">
                  <CoinListItem coin={coin} />
                </Box>
              ))}
            </VStack>
          </>
        )}
      </VStack>
    </Box>
  );
};

export default Home;