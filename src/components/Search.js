import React from 'react'
import { useState } from 'react'
import { Box, Button, TextField, Stack } from '@mui/material'
import { fetch_data, options } from '/Users/vishvamehta/Desktop/gym-react-project/src/utils/fetch_data.js'

const Search = ({setExercises}) => {

    const [search, setSearch] = useState('');

    const handleSearchRequest =  async () => {
        if(search) {
            const exerciseData = await fetch_data(`https://exercisedb.p.rapidapi.com/exercises`, options);
            //console.log(exerciseData);
            const exercisesReturned = exerciseData.filter((exercise) => exercise.name.toLowerCase().includes(search) || exercise.target.toLowerCase().includes(search) || exercise.equipment.toLowerCase().includes(search) 
            || exercise.bodyPart.toLowerCase().includes(search)
            );
            setSearch('');
            setExercises(exercisesReturned);
        }
    }


  return (
    <Stack alignItems="center" mt="37px" justifyContent={'center'} p='20px'>
        
        <Box position={'relative'} mb={'65px'} >
            <TextField
                id="Search"
                label="Search Exercises"
                variant="outlined"
                value = {search}
                onChange = {(e) => setSearch(e.target.value.toLowerCase())}
            
                sx={{
                    width: { lg: '60em', xs: '30em' },
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    borderRadius: '15px',
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '15px',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                    '& .MuiInputLabel-root': {
                        color: 'rgba(0, 0, 0, 0.6)',
                    },
                    '& .MuiOutlinedInput-input': {
                        padding: '14px 14px',
                    },
                }}
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