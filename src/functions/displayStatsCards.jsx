import datas from "../data/data.json";
import StatsCard from "../components/StatsCard";

function displayStatsCards(timeframe) {
  return datas.map((data) => {
    switch (timeframe) {
      case "Daily":
        return (
          <StatsCard
            key={data.title}
            category={data.title}
            current={data.timeframes.daily.current}
            previous={data.timeframes.daily.previous}
            lastPeriodMsg="Yesterday"
          />
        );
      case "Weekly":
        return (
          <StatsCard
            key={data.title}
            category={data.title}
            current={data.timeframes.weekly.current}
            previous={data.timeframes.weekly.previous}
            lastPeriodMsg="Last Week"
          />
        );
      case "Monthly":
        return (
          <StatsCard
            key={data.title}
            category={data.title}
            current={data.timeframes.monthly.current}
            previous={data.timeframes.monthly.previous}
            lastPeriodMsg="Last Month"
          />
        );
    }
  });
}

export default displayStatsCards;
