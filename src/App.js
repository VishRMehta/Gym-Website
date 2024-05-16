import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Exercise from './pages/Exercise';
import Footer from './components/Footer';
import backgroundImage from './assets/images/gym-background.png'; // Adjust the path to your background image

const App = () => {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.45), rgba(255,255,255,0.45)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensure the background covers the entire viewport
        width: { xl: '1500px' },
        minWidth: '100%',
      }}
      width="400px"
    >
      <br/>
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
