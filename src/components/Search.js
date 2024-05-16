import React from 'react'
import { useEffect, useState } from 'react'
import { Box, Button, Typography, TextField, Stack } from '@mui/material'

const Search = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent={'center'} p='20px'>
        <Typography fontWeight={650} sx={{ fontSize: {lg: '44px', xs: '30px'}}} mb="50px" textAlign="Center" backgroundColor="rgba(255,255,255,0.8)" boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)" borderRadius='15px' p="5%">
            Unleash Your Potential
        </Typography>
        <Box position={'relative'} mb={'65px'}>
            <TextField
                id="search"
                label="Search"
                variant="outlined"
            
                sx={{ borderRadius: '15px' , width: '100%', backgroundColor: 'rgba(255,255,255,0.8)', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '15px'}}
            />
            <Button
                variant="contained"
                color="error"
                sx={{ position: 'absolute', right: 0, top: 0, bottom: 0}}
            >
                Search
            </Button>
        </Box>
    </Stack>
  )
}

export default Search