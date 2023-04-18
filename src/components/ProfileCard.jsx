import { useContext } from "react";
import TimeframeContext from "../context/TimeframeContext";

const ProfileCard = ({ name, img }) => {
  const timeframes = ["Daily", "Weekly", "Monthly"];
  const [curentTimeframe, setCurentTimeframe] = useContext(TimeframeContext);

  return (
    <div className="profile-container">
      <div className="profile">
        <div className="img-container">
          <img src={img} alt="profile" />
        </div>

        <div className="profile-name">
          <span>Report for</span>
          <h1>{name}</h1>
        </div>
      </div>

      <div className="timeframes">
        {/*         <button>Daily</button>
        <button className="active">Weekly</button>
        <button>Monthly</button> */}
        {timeframes.map((timeframe) => {
          return (
            <button
              key={timeframe}
              className={`${timeframe === curentTimeframe ? "active" : null}`}
              onClick={() => {
                setCurentTimeframe(timeframe);
              }}
            >
              {timeframe}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileCard;
