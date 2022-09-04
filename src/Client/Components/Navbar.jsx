import { Stack } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import logo from "..//../Assets/logo.jpg";
import Searchbar from './Searchbar';

const Navbar = () => {
  return (
    <Stack
    direction="row"
    alignItems="center"
    p={2} sx={{ position:  "sticky",
    background: '#4671ff',
    top: 0, 
    justifyContent: "space-between"
     }}>
    <Link to="/" style={{ display: "flex",
     alignItems: "center" }}>
      <img src={logo} alt="logo" height={50} />
    </Link>
    <Searchbar />
  </Stack>
  )
}

export default Navbar;