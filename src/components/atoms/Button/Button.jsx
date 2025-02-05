import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ children, onClick, variant = "primary" }) => {
    return (
        <button className={`button ${variant}`} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;
