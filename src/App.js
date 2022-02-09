/** @format */
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CheckoutSuccess from "./pages/Checkout";
import ContactSeller from "./pages/ContactSeller";
import Home from "./pages/HomeDashboard";
import ProductDetails from "./pages/ProductDetails";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/product/:productLink" element={<ProductDetails />} />
					<Route path="/contact-seller" element={<ContactSeller />} />
					<Route path="/checkout-success" element={<CheckoutSuccess />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
