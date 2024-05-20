import React from 'react'
import { Box } from '@mui/material'
import Exercises from '../components/Exercises'
import Search from '../components/Search'
import Banner from '../components/Banner'
import { useState } from 'react'

const Home = () => {
  
  const [exercises, setExercises] = useState([]) // Add a state for exercises

  return (
    <Box
      sx={{
        textAlign: 'center', // Align content to the center
      }}
    >
      <Banner />
      <Search
        setExercises={setExercises}
      />
      <Exercises 
        exercises={exercises}
        setExercises={setExercises}
      />
    </Box>
  )
}

export default Home
