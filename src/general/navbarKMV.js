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
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import "../style/navbarKMV.css";
import Envios from "../general/enviosKMV.js";
import DrawerComponent from "./drawerComponent";
import { useMediaQuery } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

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

  return (
    <>
      <AppBar elevation={1} sx={{ backgroundColor: "#0F0F0D" }}>
        <Envios />
        <Toolbar>
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
              <Box className="Logonav" sx={{ width: "10%" }}></Box>
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
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Camperas</MenuItem>
                  <MenuItem onClick={handleClose}>Pantalones</MenuItem>
                  <MenuItem onClick={handleClose}>Remeras</MenuItem>
                  <MenuItem onClick={handleClose}>Sweaters</MenuItem>
                  <MenuItem onClick={handleClose}>Ropa Interior</MenuItem>
                  <MenuItem onClick={handleClose}>Accesorios</MenuItem>
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
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton color="inherit">
                <Badge>
                  <PersonRoundedIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge>
                  <SearchRoundedIcon />
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
