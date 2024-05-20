import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Exercise from './pages/Exercise';
import Footer from './components/Footer';
import backgroundImage from './assets/images/gym-background.avif'; // Adjust the path to your background image

const App = () => {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0.35)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Ensure the background covers the entire viewport
        width: '100%',
        overflowX: 'hidden', // Prevent horizontal scrolling
      }}
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<Exercise />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
