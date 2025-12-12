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
} from "../assets/images.js";
import colors from "../assets/colors.js";
import HourlyForecastTimeBlock from "./HourlyForecastTimeBlock";

function HourlyForecastBlock({handleDropdown, isDropdown}) {
  return (
    <>
      {/* ONE HOUR BLOCK */}
      <div className="h-14 w-full pt-2 flex justify-around items-center">
        <h3 className="h-full w-2/4 flex justify-start items-center text-lg ml-3 whitespace-nowrap">
          Hourly Forecast
        </h3>
        <h3
          onClick={handleDropdown}
          className={`h-10 w-4/12 flex justify-center items-center text-sm rounded-xl hover:border-2 hover:border-white cursor-pointer
              ${isDropdown ? `` : "border-2 border-white"}
              `}
          style={{
            backgroundColor: colors.neutral600,
            // border: `2px solid ${colors.neutral700}`,
          }}
        >
          Tuesday \/
        </h3>
      </div>

      <div className="h-11/12 w-full flex flex-col justify-around items-center">
        <HourlyForecastTimeBlock
          weatherImg={overcast}
          time={"3 PM"}
          temp={"20°"}
        />
        <HourlyForecastTimeBlock
          weatherImg={partlyCloudy}
          time={"4 PM"}
          temp={"20°"}
        />
        <HourlyForecastTimeBlock
          weatherImg={sunny}
          time={"5 PM"}
          temp={"20°"}
        />
        <HourlyForecastTimeBlock
          weatherImg={overcast}
          time={"6 PM"}
          temp={"19°"}
        />
        <HourlyForecastTimeBlock weatherImg={snow} time={"7 PM"} temp={"18°"} />
        <HourlyForecastTimeBlock weatherImg={fog} time={"8 PM"} temp={"18°"} />
        <HourlyForecastTimeBlock weatherImg={snow} time={"9 PM"} temp={"17°"} />
        <HourlyForecastTimeBlock
          weatherImg={overcast}
          time={"10 PM"}
          temp={"17°"}
        />
      </div>
    </>
  );
}

export default HourlyForecastBlock;
