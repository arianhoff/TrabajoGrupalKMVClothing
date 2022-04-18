

import { Box, Button } from '@mui/material'
import React from 'react'
import '../style/Proveedor.css'
import sarkany from '../assets/sarkany.png'


const Proveedor = () => {
  return (
    <Box className="holas" textAlign={'center'} height={'auto'} >
      <img src={sarkany} alt="Logo-Sarkany" className='img-proveedor'></img>
      <br/>
      <Button href='https://www.rickysarkany.com/' style={{margin:'0px 100px 90px 100px'}} color='primary' variant='contained'>
          ¡New colecction  winter 22!
      </Button>
    </Box>
  );
}

export default Proveedor