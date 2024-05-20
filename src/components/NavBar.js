import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';

const NavBar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      px="30px"
      py="20px"
      ml="10%"
      mr="10%"
      mt="2.5%"
      textAlign={'center'}
      fontFamily={'Josefin Sans, sans-serif'}
      bgcolor="#FFF" // White background color
      borderRadius="15px" // Border radius
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)" // Shadow
    >
      <Link to="/">
        <img src={Logo} alt="Logo" style={{ width: '70%', margin: '0 20px' }} />
      </Link>

      <Stack direction="row" gap="45px" fontSize="20px" alignItems="center" >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#3A1212',
            fontWeight: 'bold',
            fontSize: '20px',
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{
            textDecoration: 'none',
            color: '#3A1214',
            fontWeight: 'bold',
            fontSize: '20px',
          }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default NavBar;
