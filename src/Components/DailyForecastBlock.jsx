import {
  bgTodayLarge,
  bgTodaySmall,
  favicon,
  checkmark,
  drizzle,
  dropdown,
  error,
  fog,
  loading,
  overcast,
  partlyCloudy,
  rain,
  retry,
  search,
  snow,
  storm,
  sunny,
  units,
  logo,
} from "../assets/images";
import colors from "../assets/colors.js";
import DailyForecastDayBlock from "./DailyForecastDayBlock";

function DailyForecastBlock() {
  return (
    <>
      <div className="flex flex-col justify-around row-start-10 row-end-13 col-start-2 col-end-10 mr-32">
        <h4 className="h-1/12 w-full text-xl">Daily Forecast</h4>
        <div className="h-10/12 w-full flex justify-between items-center">
          <DailyForecastDayBlock
            day={"Tue"}
            weatherImg={rain}
            high={"20°"}
            low={"14°"}
          />
          <DailyForecastDayBlock
            day={"Wed"}
            weatherImg={rain}
            high={"21°"}
            low={"15°"}
          />
          <DailyForecastDayBlock
            day={"Thu"}
            weatherImg={sunny}
            high={"23°"}
            low={"14°"}
          />
          <DailyForecastDayBlock
            day={"Fri"}
            weatherImg={partlyCloudy}
            high={"25°"}
            low={"13°"}
          />
          <DailyForecastDayBlock
            day={"Sat"}
            weatherImg={storm}
            high={"21°"}
            low={"15°"}
          />
          <DailyForecastDayBlock
            day={"Sun"}
            weatherImg={snow}
            high={"25°"}
            low={"16°"}
          />
          <DailyForecastDayBlock
            day={"Mon"}
            weatherImg={fog}
            high={"24°"}
            low={"15°"}
          />
        </div>
      </div>
    </>
  );
}

export default DailyForecastBlock;
