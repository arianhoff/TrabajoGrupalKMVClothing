import React from 'react'
import '../style/headerKMV.css'
import Logo from "../assets/Logo.png"
import { Box } from '@mui/system'
const Header = () => {
  return (
  <div className='principal'>   


    <div className='headerPortada' alt='da'>
        <Box xs={6} md={4} lg={2}>
          <img src= {Logo} alt='imagensecundaria'></img>
          <div className='descripcionPortada'>
            <h1> Krueger, Myers and Voorhees Clothing Co. </h1>
            <p> KMV es una casa de modas Argentina, fundada en Buenos Aires, en 2003. </p> 
            <p> La marca se especializa en diseñar y confeccionar artículos de lujo.</p>
          </div>
        </Box>
    </div>

    
    
  </div>
  )
}

export default Header;