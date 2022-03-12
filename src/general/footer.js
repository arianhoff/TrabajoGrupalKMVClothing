import React from 'react'
import '../style/footerKMV.css'

const footer = (props) => {
    if (!props.year) {
     return ( <footer className='derechos'>Todos los derechos reservados / KMV Clothing / 2022</footer>)
    } else {
     return (<footer>{`MiApp todos los derechos reservados ${props.year}`}</footer>)
   }
};   
export default footer;