import ReactDOM from "react-dom/client";
import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import displayStatsCards from "./functions/displayStatsCards";
import TimeframeContext from "./context/TimeframeContext";
import profileImg from "./images/image-jeremy.png";

const App = () => {
  const curentTimeframeHook = useState("Daily");

  return (
    <TimeframeContext.Provider value={curentTimeframeHook}>
      <div className="app-container">
        <ProfileCard name="Jeremy Robson" img={profileImg} />
        {displayStatsCards(curentTimeframeHook[0])}
      </div>
    </TimeframeContext.Provider>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
