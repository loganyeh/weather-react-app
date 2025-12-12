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

function DailyForecastDayBlock({ day, weatherImg, high, low }) {
  return (
    <>
      <div
        className="h-11/12 w-32 rounded-3xl"
        style={{
          backgroundColor: `${colors.neutral800}`,
          border: `2px solid ${colors.neutral600}`,
        }}
      >
        <div className="h-1/4 w-full rounded-t-3xl">
          <h4 className="h-full w-full flex justify-center items-center text-xl">
            {day}
          </h4>
        </div>
        <div className="h-2/4 w-full">
          <img
            className="h-full w-full object-contain"
            src={weatherImg}
            alt=""
          />
        </div>
        <div className="h-1/4 w-full flex justify-between items-center rounded-b-3xl">
          <h5 className="m-4 text-lg">{high}</h5>
          <h5 className="m-4 text-lg">{low}</h5>
        </div>
      </div>
    </>
  );
}

export default DailyForecastDayBlock;
