import React from 'react'
import '../style/estiloGeneral.css'
import Logo from "../assets/Logo.png"
import { Box } from '@mui/system'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles ({
principal: {
  backgroundSize: 'cover',
  display: 'block',
  paddingBottom: '5%',
  paddingTop:' 5%'
},
logo: {
  justifyItems: 'center',
  display: 'flex',
  margin: 'auto',
  justifyContent: 'center',
  textAlign: 'center',
  marginBottom: '5%',
  marginTop: '5%'
},
descripcionPortada: {
  display: 'block',
  width: '40%',
  color: 'white',
  justifyContent: 'center',
  textAlign: 'center',
  margin: 'auto',
  marginBottom: '5%',
}
})

const Header = () => {
  const classes = useStyles ();
  return (
  <div id='principal' className={classes.principal}>   
    <Box className={classes.logo} >
      <img src= {Logo} alt='LogoKmv'></img>
    </Box>
    <Box className={classes.descripcionPortada}>
      <p> Krueger, Myers and Voorhees Clothing Co.  <br/>
          KMV es una casa de modas Argentina, fundada en Buenos Aires, en 2003.   <br/>
          La marca se especializa en diseñar y confeccionar artículos de lujo. </p>
    </Box>
  </div>
  );
}

export default Header;
