import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, Button, Typography } from '@mui/material'

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card">
        <img src={exercise.gifUrl} loading="lazy"/>
        <Stack direction="row">
          <Button sx={{ ml: '20px', color: '#fff', backgroundColor: '#ffa9a9', borderRadius: '15px', textTransform: 'capitalize', color: 'black' }}>
            {exercise.bodyPart}
          </Button>
          <Button sx={{ ml: '20px', color: '#fff', backgroundColor: '#fcc757', borderRadius: '15px', textTransform: 'capitalize', color: 'black' }}>
            {exercise.target}
          </Button>
        </Stack>
        <Typography variant="h5" sx={{ mt: '10px', fontWeight: '550', textTransform: 'capitalize', color: 'black' }}>
          {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard