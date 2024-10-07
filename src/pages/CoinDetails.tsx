import React from 'react';
import { useParams } from 'react-router-dom';

const CoinDetails: React.FC = () => {
  const { coinId } = useParams<{ coinId: string }>();

  return (
    <div>
      <h1>Coin Details for Coin ID: {coinId}</h1>
    </div>
  );
};

export default CoinDetails;
