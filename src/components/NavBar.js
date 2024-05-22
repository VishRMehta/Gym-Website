import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';

const NavBar = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: '#3A1212',
    fontWeight: 'bold',
    fontSize: '20px',
    transition: 'all 0.1s ease', // Smooth transition for hover effect
  };

  const hoverStyle = {
    textDecoration: 'underline',
    textDecorationColor: 'red',
    textUnderlineOffset: '5px',
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      px="30px"
      py="20px"
      ml="10%"
      mr="10%"
      mt="2.5%"
      textAlign="center"
      fontFamily="Josefin Sans, sans-serif"
      bgcolor="#FFF"
      borderRadius="15px"
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
    >
      <Link to="/">
        <img src={Logo} alt="Logo" style={{ width: '70%', margin: '0 20px' }} />
      </Link>

      <Stack direction="row" gap="45px" fontSize="20px" alignItems="center">
        <Link
          to="/"
          style={linkStyle}
          onMouseEnter={(e) => {
            e.target.style.textDecoration = hoverStyle.textDecoration;
            e.target.style.textDecorationColor = hoverStyle.textDecorationColor;
            e.target.style.textUnderlineOffset = hoverStyle.textUnderlineOffset;
          }}
          onMouseLeave={(e) => {
            e.target.style.textDecoration = 'none';
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={linkStyle}
          onMouseEnter={(e) => {
            e.target.style.textDecoration = hoverStyle.textDecoration;
            e.target.style.textDecorationColor = hoverStyle.textDecorationColor;
            e.target.style.textUnderlineOffset = hoverStyle.textUnderlineOffset;
          }}
          onMouseLeave={(e) => {
            e.target.style.textDecoration = 'none';
          }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default NavBar;
