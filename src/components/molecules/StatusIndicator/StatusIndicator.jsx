import PropTypes from "prop-types";
import Label from "../../atoms/Label/Label.jsx";
import "./StatusIndicator.css";

// eslint-disable-next-line no-unused-vars
const StatusIndicator = ({ isAnomaly, irregularityType }) => {
    return (
        <div className="status-indicator">
            <Label
                text={isAnomaly ? "Irregular" : "Normal"}
                type={isAnomaly ? "irregular" : "normal"}
            />
            <p className="status-text">The normal bpm is between 70 and 90</p>
        </div>
    );
};

StatusIndicator.propTypes = {
    isAnomaly: PropTypes.bool,
    irregularityType: PropTypes.oneOf(["BIP", "BIP_BIP", null]),
};

export default StatusIndicator;
