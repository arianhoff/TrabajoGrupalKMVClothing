import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./homeKMV";
import Cart from "./cartKMV";
import Navbar from "./navbarKMV";
import Footer from "./footer";
import RightsKMV from "./rightsKMV.js";


const RoutesKMV = () => {
    return(   
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={ <Home/>}/>
                <Route path="/cart" element={ <Cart/>}/>
            </Routes>
            <Footer />
            <RightsKMV />
        </Router>
    )
}

export default RoutesKMV;