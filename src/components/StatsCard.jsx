const StatsCard = ({ category, current, previous, lastPeriodMsg }) => {
  return (
    <div className={`stats-container ${category}`}>
      <div className="details">
        <div>
          <h2>{category}</h2>
          <div className="setting-dots" role="button">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div>
          <p className="current-time-spent">{current}hrs</p>
          <p className="previous-time-spent">
            {lastPeriodMsg} - {previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
