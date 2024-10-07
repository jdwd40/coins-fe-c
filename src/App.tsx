import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CoinDetails from './pages/CoinDetails.tsx';
import Portfolio from './pages/Portfolio.tsx';
import Login from './pages/Login.tsx';
import Navbar from './components/Navbar.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins/:coinId" element={<CoinDetails />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
