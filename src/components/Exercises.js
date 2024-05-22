import React, { useState, useEffect } from 'react';
import { Box, Pagination, Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import { fetch_data, options } from '../utils/fetch_data';

const Exercises = ( { exercises, setExercises, bodyPart} ) => {
  console.log(exercises);
  var results = "Showing Results";
  var noResults = "No Results Found";

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetch_data('https://exercisedb.p.rapidapi.com/exercises', options);
      } else {
        exercisesData = await fetch_data(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, options);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography
        sx={{
          width: 'fit-content',
          textAlign: 'center',
          fontSize: '20px',
          fontWeight: 'bold',
          padding: '10px',
          borderRadius: '15px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        }}
      >
        {exercises.length !== 0 ? results: noResults}
      </Typography>

      <Stack
        direction="row"
        sx={{ gap: { lg: '90px', xs: '30px' } }}
        flexWrap="wrap"
        justifyContent="center"
        mt="20px"
      >
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
