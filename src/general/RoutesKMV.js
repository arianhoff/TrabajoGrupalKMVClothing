import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home"
import Cart from "./cart"
import Navbar from "./navbar";

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