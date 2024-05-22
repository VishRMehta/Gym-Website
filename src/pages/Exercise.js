import React from 'react'
import { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import { Box } from '@mui/material'
import  Details  from '../components/Details'

const Exercise = () => {
  
  const[exerciseDetail, setExercuseDetail] = useState({});
  const { id } = useParams();

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
    </Box>
  )
}

export default Exercise