import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import HeartMonitorCard from "../../components/organisms/HeartMonitorCard/HeartMonitorCard.jsx";
import { connectWebSocket } from "../../services/websocket.js";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/imgs/logo.png";
import "./Home.css";

const Home = () => {
  const [bpm, setBpm] = useState(80);
  const [isAnomaly, setIsAnomaly] = useState(false);
  const [irregularityType, setIrregularityType] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const socket = connectWebSocket((data) => {
      setBpm(data.value ?? 0);
      setIsAnomaly(data.isAnomaly ?? false);
      setIrregularityType(data.irregularityType ?? null);
    });

    return () => socket.close();
  }, []);

  return (
    <div className="home-container">
      <img src={Logo} alt="HBM Life" className="heart-monitor-logo" />
      <HeartMonitorCard
        bpm={bpm}
        isAnomaly={isAnomaly}
        irregularityType={irregularityType}
        onHistoryClick={() => navigate("/history")}
      />
    </div>
  );
};

Home.propTypes = {
  bpm: PropTypes.number,
  isAnomaly: PropTypes.bool,
  irregularityType: PropTypes.string,
};

export default Home;