import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  useTheme,
  Grid,
} from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import DrawerComponent from "./drawerComponent";
import { useMediaQuery } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Logonavbar from "../assets/Logonav.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { makeStyles } from "@material-ui/core";
import Cart from "../cart/Components/Cart";

const useStyles = makeStyles({
  logoNav: {
    height: "30px",
  },
  basicMenu: {
    display: "grid",
    justifyItems: "left",
    marginRight: "20px",
    marginBottom: "5px",
    marginTop: "5px",
  },
  listaCategorias: {
    marginTop: "3px",
  },
});

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(true); //

  //Theme instance
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  console.log(matches);
  console.log(matches);
  const openMenu = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <>
      <AppBar
        elevation={1}
        sx={{ backgroundColor: "#0F0F0D" }}
        position="sticky"
      >
        <Toolbar sx={{ backgroundColor: "#0F0F0D" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
            item
            xs={12}
            sm={4}
            component="div"
          >
            {/*Logo*/}
            <IconButton className={classes.logoNav} href="./">
              <Box className={classes.logoNav} sx={{ display: "flex" }}>
                <img src={Logonavbar} alt="Logo"></img>
              </Box>
            </IconButton>
            {/*Links*/}
            {matches ? (
              <DrawerComponent
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
              />
            ) : (
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "white",
                    fontWeight: 'bold'
                  }}
                  href="./"
                >
                  Inicio
                </Typography>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "white",
                    fontWeight: 'bold'
                  }}
                  aria-controls={classes.basicMenu}
                  aria-haspopup="true"
                  aria-expanded={openMenu ? "true" : undefined}
                  onClick={handleClick}
                >
                  Categorías
                </Typography>
                {/*Dropdown Items */}
                <Menu
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleClose}
                  sx={{ marginTop: 0.5 }}
                >
                  <Box className={classes.basicMenu}>
                    <ul>
                      <li>
                        <MenuItem onClick={handleClose}>Camperas</MenuItem>
                      </li>
                      <li className={classes.listaCategorias}>
                        <MenuItem onClick={handleClose}>Pantalones</MenuItem>
                      </li>
                      <li className={classes.listaCategorias}>
                        <MenuItem onClick={handleClose}>Remeras</MenuItem>
                      </li>
                      <li className={classes.listaCategorias}>
                        <MenuItem onClick={handleClose}>Sweaters</MenuItem>
                      </li>
                      <li className={classes.listaCategorias}>
                        <MenuItem onClick={handleClose}>Ropa Interior</MenuItem>
                      </li>
                      <li className={classes.listaCategorias}>
                        <MenuItem onClick={handleClose}>Accesorios</MenuItem>
                      </li>
                    </ul>
                  </Box>
                </Menu>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "white",
                    fontWeight: 'bold'
                  }}
                >
                  Ofertas
                </Typography>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "white",
                    fontWeight: 'bold'
                  }}
                >
                  Nosotros
                </Typography>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "white",
                    fontWeight: 'bold'
                  }}
                >
                  FAQ´s
                </Typography>
              </Box>
            )}
            {/*Botón*/}
            <Grid
              sx={{
                color: "white",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <IconButton color="inherit" sx={{ marginTop: 0 }}>
                <Badge>
                  <SearchRoundedIcon />
                </Badge>
              </IconButton>

              <IconButton color="inherit">
                <Badge>
                  <PersonRoundedIcon />
                </Badge>
              </IconButton>
              {matches ? (
                <IconButton color="inherit" onClick={() => setOpenDrawer(true)}>
                  <MenuRoundedIcon />
                </IconButton>
              ) : (
                <Box sx={{marginLeft: 8.5, marginBottom: 1}}>
                  <Cart />
                </Box>
              )}
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
