import axios from 'axios';

const API_URL = 'https://jdwd40.com/api';

// Function to get a list of coins
export const getCoins = async () => {
    try {
        const response = await axios.get(`${API_URL}/coins`);
        return response.data;
    } catch (error) {
        console.error('Error fetching coins:', error);
        throw error;
    }
};

export const getCoinDetails = async (coinId: string) => {
    try {
        const response = await axios.get(`${API_URL}/coins/${coinId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching coin:', error);
        throw error;
    }
};

// Function to get market stats
export const getMarketStats = async () => {
    try {
        const response = await axios.get(`${API_URL}/stats`);
        return response.data;
    } catch (error) {
        console.error('Error fetching market stats:', error);
        throw error;
    }
};