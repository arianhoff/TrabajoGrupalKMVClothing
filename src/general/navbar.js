import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from "react-router-dom"
import '../style/Navbar.css'


const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className ="NavBar">
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div"   style={{ width: "100%" }} 
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 1,
          m: 1,
          borderRadius: 1,
        }}
      >
             <NavLink to="/" activeClassName="active"> Inicio</NavLink>
             <NavLink to="/Cart" activeClassName="active"> Carrito</NavLink>
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>

  )
}
export default Navbar;
