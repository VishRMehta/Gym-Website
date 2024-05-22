import React, { useState } from 'react';
import { Box } from '@mui/material';
import Exercises from '../components/Exercises';
import Search from '../components/Search';
import Banner from '../components/Banner';

const Home = () => {
  const [exercises, setExercises] = useState([]); // Add a state for exercises
  const [bodyPart, setBodyPart] = useState('all'); // Add a state for bodyPart
  
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Banner />
      <Search setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;
