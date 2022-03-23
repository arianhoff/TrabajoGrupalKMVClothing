import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./homeKMV";
import Redes from "./socialMediaKMV"
import Cart from "./cartKMV";
import Navbar from "./navbarKMV";
import Footer from "./footer";
import RightsKMV from "./rightsKMV.js";
import DescripcionKMV from "./descripcionKMV";
import Header from "./headerKMV";
import EnviosKMV from "./enviosKMV";

const RoutesKMV = () => {
    return(   
        <Router>
            <EnviosKMV />
            <Navbar/>
            <Header />
            <DescripcionKMV />
            <Routes>
                <Route path="/" element={ <Home/>}/>
                <Route path="/cart" element={ <Cart/>}/>
            </Routes>
            <Redes/>
            <Footer />
            <RightsKMV />
        </Router>
    )
}

export default RoutesKMV;

