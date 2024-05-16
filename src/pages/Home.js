import React from 'react'
import { Box } from '@mui/material'
import Exercises from '../components/Exercises'
import Search from '../components/Search'
import Banner from '../components/Banner'
import backgroundImage from '../assets/images/gym-background.png' // Adjust the path to your background image

const Home = () => {
  return (
    <Box
      sx={{
        textAlign: 'center', // Align content to the center
      }}
    >
      <Banner />
      <Search />
      <Exercises />
    </Box>
  )
}

export default Home
