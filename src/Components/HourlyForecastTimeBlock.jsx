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

function HourlyForecastTimeBlock({ weatherImg, time, temp }) {
  return (
    <>
      <div
        className="h-15 w-90 flex justify-between rounded-2xl"
        style={{
          backgroundColor: colors.neutral700,
          border: `2px solid ${colors.neutral600}`,
        }}
      >
        <div className="h-full w-1/2 flex">
          <img
            className="h-full w-1/2 object-contain"
            src={weatherImg}
            alt=""
          />
          <h4 className="h-full w-1/2 flex justify-start items-center text-xl">
            {time}
          </h4>
        </div>
        <h5 className="h-full w-1/4 flex justify-center items-center text-lg">
          {temp}
        </h5>
      </div>
    </>
  );
}

export default HourlyForecastTimeBlock;
