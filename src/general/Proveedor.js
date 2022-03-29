

import { Box, Button } from '@mui/material'
import React from 'react'
import '../style/Proveedor.css'
import sarkany from '../assets/sarkany.png'


const Proveedor = () => {
  return (
    <Box className="holas" textAlign={'center'} height={'auto'} >
      <img src={sarkany} className='img-proveedor'></img>
      <br/>
      <Button href='https://www.rickysarkany.com/' style={{margin:'100px 100px'}} color='primary' variant='contained'>
          ¡Descubre la coleccion de otoño!
      </Button>
    </Box>
  );
}

export default Proveedor