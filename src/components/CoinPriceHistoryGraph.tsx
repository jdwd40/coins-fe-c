import React, { useEffect, useState } from 'react';
import { Box, Spinner } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface PriceHistoryEntry {
  timestamp: string;
  price: number;
}

interface CoinPriceHistoryProps {
  coinId: number;
}

const CoinPriceHistoryGraph: React.FC<CoinPriceHistoryProps> = ({ coinId }) => {
  const [priceHistory, setPriceHistory] = useState<PriceHistoryEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPriceHistory = async () => {
      try {
        const response = await axios.get(`https://jdwd40.com/api/history/${coinId}`);
        const historyData = response.data.map((entry: any) => ({
          timestamp: entry.timestamp,
          price: parseFloat(entry.price),
        }));
        setPriceHistory(historyData);
      } catch (error) {
        console.error('Error fetching price history:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPriceHistory();
  }, [coinId]);

  const filteredData = priceHistory.filter((entry) => {
    const thirtyMinutesAgo = new Date().getTime() - 30 * 60 * 1000;
    return new Date(entry.timestamp).getTime() >= thirtyMinutesAgo;
  });

  const data = {
    labels: filteredData.map((entry) => new Date(entry.timestamp)),
    datasets: [
      {
        label: 'Price History',
        data: filteredData.map((entry) => entry.price),
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'minute',
          stepSize: 5,
        },
        title: {
          display: true,
          text: 'Time (Last 30 Minutes)',
        },
      },
      y: {
        beginAtZero: false,
        position: 'right',
        title: {
          display: true,
          text: 'Price (USD)',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `Price: $${context.formattedValue}`,
        },
      },
    },
  };

  return (
    <Box w="full" h={400} p={4} borderWidth={1} borderRadius="md" boxShadow="md">
      {loading ? (
        <Spinner size="xl" color="teal.500" />
      ) : (
        <Line data={data} options={options} />
      )}
    </Box>
  );
};

export default CoinPriceHistoryGraph;