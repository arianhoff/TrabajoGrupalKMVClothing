

import { Box, Button } from '@mui/material'
import React from 'react'
import '../style/Proveedor.css'
import Sarkany from '../assets/Sarkany.jpg'


const Proveedor = () => {
  return (
    <Box className="box-principal" textAlign={'center'} height={'381px'} >
      <Button href='https://www.rickysarkany.com/' style={{marginTop:250}} color='primary' variant='contained'>
          ¡Nueva colección invierno 2022!
      </Button>
    </Box>
  );
}

export default Proveedor