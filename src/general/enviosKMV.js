import React, {useState} from "react";
import { Box } from "@mui/system";
import { Button, Collapse } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "../style/enviosKMV.css";

export default function TransionAlerts() {
  const [open, setOpen] = useState(true);
  return (
    <Box className="alertbar">
      <Collapse in={open}>
        <span>
          Hasta 12 cuotas y envio gratis con tu compra superior a $9000!
        </span>
        <Button className="botonclose" onClick={() => {
                setOpen(false);
              }}>
          <CloseRoundedIcon sx={{ color: "white" }} />
        </Button>
      </Collapse>
    </Box>
  );
}
