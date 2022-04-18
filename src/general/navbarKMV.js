import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import "../style/navbarKMV.css";
import DrawerComponent from "./drawerComponent";
import { useMediaQuery } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Logonavbar from "../assets/Logonav.png";
import SearchAppBar from "./buscador";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

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

  const [cambiarBuscador, setCambiarBuscador] = useState(false);

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
            <IconButton className="Logonav" href="./">
              <Box className="Logonav" sx={{ display: "flex" }}>
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
                  }}
                  aria-controls="basic-menu"
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
                  <Box className="basic-menu">
                    <MenuItem onClick={handleClose}>Camperas</MenuItem>
                    <MenuItem onClick={handleClose}>Pantalones</MenuItem>
                    <MenuItem onClick={handleClose}>Remeras</MenuItem>
                    <MenuItem onClick={handleClose}>Sweaters</MenuItem>
                    <MenuItem onClick={handleClose}>Ropa Interior</MenuItem>
                    <MenuItem onClick={handleClose}>Accesorios</MenuItem>
                  </Box>
                </Menu>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "white",
                  }}
                >
                  Ofertas
                </Typography>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "white",
                  }}
                >
                  Nosotros
                </Typography>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "white",
                  }}
                >
                  FAQ´s
                </Typography>
              </Box>
            )}
            {/*Botón*/}
            <Box
              sx={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {cambiarBuscador ? (
                <IconButton onBlur={() => setCambiarBuscador(false)}  color="inherit" sx={{ marginTop: 0 }}>
                  <Badge>
                    <SearchAppBar />
                  </Badge>
                </IconButton>
              ) : (
                <IconButton onClick={() => setCambiarBuscador(true)} color="inherit" sx={{ marginTop: 0 }}>
                  <Badge>
                    <SearchRoundedIcon />
                  </Badge>
                </IconButton>
              )}

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
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="primary">
                    <ShoppingCartRoundedIcon color="inherit" />
                  </Badge>
                </IconButton>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
