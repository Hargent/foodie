import Button from "../../utils/Button/button";
import FoodBanner from "../../Assets/images/pizza_banner.png";
import { Link } from "react-router-dom";

const Banner = () => {
	return (
		<div className="banner__container">
			<div className="banner__description">
				<h1>Foodie</h1>
				<h2>Food Ordering Made Easy</h2>
				<p>Get Started today</p>

				<div className="banner__buttons">
					<Link to="/order">
						<Button additionalClass="button">Order Now</Button>
					</Link>
					<Link to="/menu">
						<Button additionalClass="anchor">See Menu</Button>
					</Link>
				</div>
			</div>
			<div className="banner__image__container">
				<div className="banner__image">
					<img src={FoodBanner} alt="Foodie" />
				</div>
			</div>
		</div>
	);
};

export default Banner;
