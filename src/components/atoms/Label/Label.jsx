import PropTypes from "prop-types";
import "./Label.css";

const Label = ({ text, type }) => {
    return <span className={`label ${type}`}>{text}</span>;
};

Label.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["normal", "irregular"]).isRequired,
};

export default Label;
