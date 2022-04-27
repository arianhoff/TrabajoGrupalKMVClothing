import React from 'react'
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    final: {
        height:'30px',
        backgroundColor:'#0F0F0D',
    }
})
const Separador = () => {
    const classes = useStyles();
  return (
    <div className={classes.final}></div>
  )
}

export default Separador;