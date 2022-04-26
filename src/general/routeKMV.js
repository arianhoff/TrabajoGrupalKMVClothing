import { BrowserRouter as Router } from "react-router-dom";
import Redes from "./socialMediaKMV";
import Navbar from "./navbarKMV";
import Footer from "./footer";
import RightsKMV from "./rightsKMV.js";
import Header from "./headerKMV";
import EnviosKMV from "./enviosKMV";
import Article from "./article";
import Proveedor from "./Proveedor";
import Carousel from "./carousel";
import { Cartprovider } from "../cart/Context/CartContext";
import Home from "../cart/Components/Home";

const RoutesKMV = () => {
  return (
    <Router>
      <EnviosKMV />
      <Navbar />
      <Header />
      <Article />
      <Cartprovider>
        <Home />
      </Cartprovider>
      <Proveedor />
      <Carousel />
      <Redes />
      <Footer />
      <RightsKMV />
    </Router>
  );
};

export default RoutesKMV;
