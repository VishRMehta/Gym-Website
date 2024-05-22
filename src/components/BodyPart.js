import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/images/Icon.png'

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        mt="20px"
        type="button"
        className='bodyPart-card'
        sx= {
            bodyPart === item ? {
                borderTop: '3px red solid',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderBottomLeftRadius: '15px',
                cursor: 'pointer',
                gap: '50px',
            } : {
                cursor: 'pointer',
                gap: '50px',
            }
        } 
    >
        <img src={Icon} styles={{width: '100px', height: '100px'}} alt="Icon" />
    </Stack>
  )
}

export default BodyPart