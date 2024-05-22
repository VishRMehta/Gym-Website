import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box>
      <Stack alignItems="center" justifyContent="center" p="20px" sx={{backgroundColor:'rgba(255, 255, 255, 0.8)', color: '#fff'}}>
        <img src={Logo} alt="Logo" width="200px" height="50px"/>
        
      </Stack>
    </Box>
  )
}

export default Footer