import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import "../style/descripcionKMV.css";

import React from "react";

const descripcionKMV = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={16} sm={6} className="grid-global-uno">
          <Box></Box>
        </Grid>
        <Grid item xs={12} sm={6} className="grid-global-dos">
          <Box></Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={6} className="grid-global-tres">
          <Box className="box-informacion">
            <h3 className="nombre-colleccion">Colección 2018</h3>
            <p className="informacion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut
              neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed
              scelerisque magna consectetur. Amet convallis quis gravida
              facilisis vulputate. Faucibus facilisi habitasse ipsum interdum
              dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada
              integer. Aenean praesent viverra nulla nullam natoque volutpat
              curabitur auctor. Viverra viverra ullamcorper scelerisque risus
              dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra
              sed diam.
            </p>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} className="grid-global-cuatro"></Grid>
      </Grid>
    </div>
  );
};

export default descripcionKMV;