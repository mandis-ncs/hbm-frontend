import PropTypes from "prop-types";
import "./BPMDisplay.css";

const BPMDisplay = ({ bpm }) => {
    return (
        <div className="bpm-container">
            <span className="bpm-value">{bpm}</span>
            <span className="bpm-label">bpm</span>
        </div>
    );
};

BPMDisplay.propTypes = {
    bpm: PropTypes.number,
};

export default BPMDisplay;