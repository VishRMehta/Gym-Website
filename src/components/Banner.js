import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import BannerImage from '../assets/images/banner.png';

const Banner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',
        padding: '40px',
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          mt: { xs: '40px', lg: '80px' },
          ml: { sm: '60px' },
          mr: { sm: '60px' },
          p: '40px',
          borderRadius: '15px',
          width: 'max-content',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        }}
      >
        <Typography color="#FF2621" fontWeight="bold" fontSize="40px" mb={2} lineHeight="1.2">
          Club for Athletes <br /> Built by Athletes
        </Typography>

        <Typography fontWeight="600" fontSize="24px" lineHeight="1.5" mb={3}>
          Discover Your Prime Athletism with Us
        </Typography>

        <Typography fontSize="18px" mb={3}>
          Check out the latest exercises
        </Typography>

        <Button href="#exercises" variant="contained" color="error">
          Learn More
        </Button>
      </Box>

      <Box
        sx={{
          ml: '20px',
          display: { xs: 'none', md: 'block' },
        }}
      >
        {/* <img src={BannerImage} alt="Banner" style={{ maxWidth: '100%', height: 'auto' }} /> */}
      </Box>
    </Box>
  );
};

export default Banner;
