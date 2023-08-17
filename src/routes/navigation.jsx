import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "../Pages/About/About";
import Cart from "../pages/cart/cart";
import Header from "../components/header/header";
import Home from "../pages/home/home";
import Login from "../Pages/Login/Login";
import Menu from "../pages/menu/menu";
import PageNotFound from "../pages/page-not-found/page-not-found";
import Payment from "../pages/payment/payment";
import Register from "../pages/register/register";

const Navigation = () => {
	console.log("hki");
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="login" element={<Login />} />
				<Route path="cart" element={<Cart />} />
				<Route path="menu" element={<Menu />} />
				<Route path="register" element={<Register />} />
				<Route path="payment" element={<Payment />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Navigation;
