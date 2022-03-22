import React from 'react'
import '../style/headerKMV.css'
import Logo from "../assets/Logo.png"
import { Box } from '@mui/system'

const Header = () => {
  return (
  <div className='principal'>   
    <Box className='logo' >
      <img src= {Logo} alt='LogoKmv'></img>
    </Box>
    <Box className='descripcionPortada'>
      <p> Krueger, Myers and Voorhees Clothing Co.  <br/>
          KMV es una casa de modas Argentina, fundada en Buenos Aires, en 2003.   <br/>
          La marca se especializa en diseñar y confeccionar artículos de lujo. </p>
    </Box>
  </div>
  );
}

export default Header;
