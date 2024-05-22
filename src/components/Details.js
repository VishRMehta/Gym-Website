import React from 'react'
import { Stack, Button, Typography} from '@mui/material'
import BodyIcon from '../assets/icons/body-part.png'
import TargetIcon from '../assets/icons/target.png'
import EquipmentIcon from '../assets/icons/equipment.png'

const Details = ({exerciseDetail}) => {
  const { name, gifUrl, description, target, equipment, bodyPart } = exerciseDetail;


  const iconDetails = [
    {
        icon: BodyIcon,
        name: bodyPart,   
    },
    {
        icon: TargetIcon,
        name: target,   
    },
    {
        icon: EquipmentIcon,
        name: equipment,
    },
  ]

  return (
    <Stack gap="50px" sx={{flexDirection: { lg: 'row' }, p:'20px', alignItems: 'center', justifyContent: 'center', height: '100vh'}}> 
        <img src={gifUrl} alt={name} loading="lazy" className="exercise-card"/>
        <Stack alignItems={'center'} justifyContent={'center'} borderRadius='15px'
          width='auto'
          boxShadow='0px 4px 10px rgba(0, 0, 0, 0.1)'
          backgroundColor='rgba(255, 255, 255, 0.8)'
          padding={'20px'}>
            <Typography variant="h3" textTransform={'capitalize'}>
                {name}
            </Typography>
            <Typography mt={'30px'} textAlign={'center'} fontSize={'20px'} width="auto">
                This is one of the best exercises to target your {target}. It will help improve strength and endurance in this area.
            </Typography>
            {iconDetails.map((item) => (
                <Stack justifyContent={'start'} alignItems={'start'} flexDirection={'row'}>
                    <Stack key={item.name} alignItems={'center'} justifyContent={'center'} gap={'10px'} flexDirection={'row'} mt="20px">
                        <Button sx={{ background: '#fff2db', borderRadius: '45%', width: '80px', height: '80px'}}>
                            <img src={item.icon} alt={item.name} />
                        </Button>
                        
                        <Typography textTransform={'capitalize'} variant='h6'>
                            {item.name}
                        </Typography>
                    </Stack>
                </Stack>
            ))}
        </Stack>
    </Stack>
  )
}

export default Details