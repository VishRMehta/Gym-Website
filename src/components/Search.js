import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Stack, Typography } from '@mui/material';
import { fetch_data, options } from '../utils/fetch_data';
import '../styles.css';

const Search = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
  // const [bodyPart, setBodyPart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const bodyPartData = await fetch_data(`https://exercisedb.p.rapidapi.com/exercises/bodyPartList`, options);
      setBodyParts(['all', ...bodyPartData]);
    };
    fetchData();
  }, []);

  const handleSearchRequest = async () => {
    if (search) {
      const exerciseData = await fetch_data(`https://exercisedb.p.rapidapi.com/exercises`, options);
      const searchedExercises = exerciseData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );
      console.log('Raw data', exerciseData);
      console.log('Filtered Exercises', searchedExercises);
      setSearch('');
      setExercises(searchedExercises);
    }
  };
  
  const handleTagClick = (part) => {
    setBodyPart(part);
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Box position="relative" mb="65px">
        <TextField
          id="exercises"
          label="Search Exercises"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
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
          sx={{ position: 'absolute', right: 0, top: 0, bottom: 0 }}
          className="search-btn"
          onClick={handleSearchRequest}
        >
          Search
        </Button>
      </Box>

      <Stack
        direction="row"
        spacing={2}
        flexWrap="wrap"
        justifyContent="center"
        className="custom-margin"
        sx={{ width: '100%', p: '25px'}}
      >
        {bodyParts.map((part, index) => (
          <Box
            key={index}
            color="white"
            height="100%"
            sx={{
              m: 1,
              p: 1,
              mb: 4,
              border: '3px solid red',
              borderRadius: '20px',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'red',
                color: 'white',
              },
            }}
            onClick={() => handleTagClick(part)}
          >
            <Typography textTransform={'capitalize'}
            fontFamily={''}
            fontWeight={'bold'}
            fontSize={'20px'}
            >
              {part}
            </Typography>
          </Box>
        ))}
      </Stack>

    </Stack>
  );
};

export default Search;
