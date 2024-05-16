import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import BannerImage from '../assets/images/banner.png';

const Banner = () => {
  return (
    <Box
      sx={{
        margin: '0 auto',
        textAlign: 'center',
        mt: { xs: '70px', lg: '200px' },
        ml: { sm: '60px' },
        mr: { sm: '60px' },
        backgroundColor: '#f8f8f8',
        py: '40px', // Increased padding top and bottom
        borderRadius: '15px',
        // minWidth: '800px',
        // width: 'max-content',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
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

      {/* <img src={BannerImage} className="hero-banner-img"/> */}
    </Box>
  );
};

export default Banner;
