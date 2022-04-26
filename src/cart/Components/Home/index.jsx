import React from "react";
import Products from "../../../general/homeCardKMV";
import Cart from "../Cart";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  home: {
    width: "1519px",
    height: "1295px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <Cart />
      <Products />
    </div>
  );
};

export default Home;
