import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Pagination } from '@mui/material/Pagination'
import { fetch_data, options } from '../utils/fetch_data'
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises }) => {
  
  console.log('Exercises: ', exercises);

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
        variant='h3'
        sx={{
          width: 'fit-content',
          textAlign: 'center',
          borderBottom: '3px red solid',
          fontSize: '30px',
          fontWeight: '550',
          padding: '10px',
          borderRadius: '15px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)'
        }}
        fontSize={'24px'}
        fontWeight={'600'}
      >
        Showing Results
      </Typography>

      {exercises.length > 0 ? (
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
      ) : (
        <Typography variant="h6" mt="20px">
          No exercises found.
        </Typography>
      )}

      {/* <Pagination
        count={10} // Example pagination, adjust as needed
        color="primary"
        shape="rounded"
        sx={{ mt: '30px' }}
      /> */}
    </Box>
  );
};

export default Exercises;
