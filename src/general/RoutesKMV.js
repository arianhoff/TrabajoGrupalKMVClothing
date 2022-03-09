import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home"
import Cart from "./Cart"
import Navbar from "./Navbar";

const RoutesKMV = () => {
    return(   
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={ <Home/>}/>
                <Route path="/cart" element={ <Cart/>}/>
            </Routes>
        </Router>
    )
}

export default RoutesKMV;