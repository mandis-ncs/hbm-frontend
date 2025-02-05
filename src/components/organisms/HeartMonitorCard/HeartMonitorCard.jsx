import PropTypes from "prop-types";
import BPMDisplay from "../../molecules/BPMDisplay/BPMDisplay.jsx";
import StatusIndicator from "../../molecules/StatusIndicator/StatusIndicator.jsx";
import Button from "../../atoms/Button/Button.jsx";
import "./HeartMonitorCard.css";

// eslint-disable-next-line no-unused-vars
const HeartMonitorCard = ({ bpm, isAnomaly, irregularityType, onHistoryClick }) => {
    return (
        <div className="heart-monitor-card">
                <BPMDisplay bpm={bpm} />
                <StatusIndicator isAnomaly={isAnomaly} />

            <Button onClick={onHistoryClick}>See history</Button>

            <p className="heart-monitor-text">
                ** HBM Life maintains the last 30 days history saved.
            </p>
        </div>
    );
};

HeartMonitorCard.propTypes = {
    bpm: PropTypes.number.isRequired,
    isAnomaly: PropTypes.bool.isRequired,
    irregularityType: PropTypes.oneOf(["BIP", "BIP_BIP", null]),
    onHistoryClick: PropTypes.func.isRequired,
};

export default HeartMonitorCard;
