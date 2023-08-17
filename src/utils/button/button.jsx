import PropTypes from "prop-types";

const Button = ({ additionalClass, children }) => {
	return (
		<button className={additionalClass} type="button" >
			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.string,
	additionalClass: PropTypes.string,
};

export default Button;
