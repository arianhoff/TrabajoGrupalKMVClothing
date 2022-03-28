import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./homeKMV";
import Cart from "./cartKMV";
import Navbar from "./navbarKMV";
import Article from "./article";

const RoutesKMV = () => {
	return (
		<Router>
			<Navbar />
			<Article />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</Router>
	);
}

export default RoutesKMV;