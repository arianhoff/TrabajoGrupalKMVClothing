import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./homeKMV"
import Cart from "./cartKMV"
import Navbar from "./navbarKMV"
import Redes from "./socialMediaKMV"

const RoutesKMV = () => {
    return(   
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={ <Home/>}/>
                <Route path="/cart" element={ <Cart/>}/>
            </Routes>
            <Redes/>
        </Router>
    )
}

export default RoutesKMV;

