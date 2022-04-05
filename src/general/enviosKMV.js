import React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import "../style/enviosKMV.css";


export default function enviosKMV() {
    return(
        <Box className="alertbar">
            <span>Hasta 12 cuotas y envio gratis con tu compra superior a $9000!</span>
            <Button className="botonclose">
                <CloseRoundedIcon sx={{color:"white"}}/>
            </Button>
        </Box>
    )
};