import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material'

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card">
        <img src={exercise.gifUrl} loading="lazy"/>
    </Link>
  )
}

export default ExerciseCard