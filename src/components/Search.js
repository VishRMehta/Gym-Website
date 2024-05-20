import React from 'react'
import { useEffect, useState } from 'react'
import { Box, Button, Typography, TextField, Stack } from '@mui/material'
import { fetch_data, options } from '/Users/vishvamehta/Desktop/gym-react-project/src/utils/fetch_data.js'

const Search = () => {

    const [first, setfirst] = useState('');
    const handleSearchRequest =  async () => {
        if(first) {
            const exerciseData = await fetch_data(`https://exercisedb.p.rapidapi.com/exercises`, options);
            console.log(exerciseData);
        }
    }


  return (
    <Stack alignItems="center" mt="37px" justifyContent={'center'} p='20px'>
        <Typography fontWeight={650} sx={{ fontSize: {lg: '44px', xs: '30px'}}} mb="50px" textAlign="Center" backgroundColor="rgba(255,255,255,0.8)" boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)" borderRadius='15px' p="5%">
            Unleash Your Potential
        </Typography>
        <Box position={'relative'} mb={'65px'}>
            <TextField
                id="Search"
                label="Search Exercises"
                variant="outlined"
                value = {first}
                onChange = {(e) => setfirst(e.target.value.toLowerCase())}

                sx={{ borderRadius: '15px' , width: {lg:'60em', xs:"30em"}, backgroundColor: 'rgba(255,255,255,0.8)', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '15px'}}
            />
            <Button
                variant="contained"
                color="error"
                sx={{ position: 'absolute', right: 0, top: 0, bottom: 0}}
                className='search-btn'
                onClick={handleSearchRequest}
            >
                Search
                
            </Button>
        </Box>
    </Stack>
  )
}

export default Search