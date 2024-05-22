import React from 'react'
import { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import { Box } from '@mui/material'
import  Details  from '../components/Details'
import { fetch_data, options } from '../utils/fetch_data'

const Exercise = () => {
  
  const[exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const exerciseURL = 'https://exercisedb.p.rapidapi.com';
      const exerciseDetails = await fetch_data(`${exerciseURL}/exercises/exercise/${id}`, options);
      setExerciseDetail(exerciseDetails);
  }
    fetchData();
  }, [id]);

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
    </Box>
  )
}

export default Exercise