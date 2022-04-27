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
import Products from "./homeCardKMV";
import Separador from "./separador";

const RoutesKMV = () => {
  return (
    <Cartprovider>
      <Router>
        <EnviosKMV />
        <Navbar />
        <Header />
        <Separador />
        <Article />
        <Products />
        <Proveedor />
        <Carousel />
        <Redes />
        <Footer />
        <RightsKMV />
      </Router>
    </Cartprovider>
  );
};

export default RoutesKMV;
