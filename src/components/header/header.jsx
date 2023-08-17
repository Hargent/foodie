import Cart from "../../assets/icons/cart.svg";
import { Link } from "react-router-dom";
import foody from "../../assets/images/foody.png";

const Header = () => {
	return (
		<nav id="header">
			<div className="header__container">
				<div className="header__logo__container">
					<Link to="/" className="header__link">
						<img
							src={foody}
							alt="Foodie"
							className="header__logo"
						/>
					</Link>
				</div>
				<div className="header__menu">
					<Link to="/" className="header__link">
						<div>Home</div>
					</Link>
					<Link to="/about" className="header__link">
						<div>About</div>
					</Link>
				</div>
				<div className="header__status">
					<Link to="/cart" className="header__link">
						<svg className="header__cart">
							<use xlinkHref={Cart}></use>
						</svg>
					</Link>
					<Link to="/login" className="header__link">
						<div>Log In</div>
					</Link>
					<Link to="/register" className="header__link">
						<div>Sign up</div>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Header;
