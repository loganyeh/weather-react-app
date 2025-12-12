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

function Logo({ handleFn}) {
  return (
    <>
      <div
        onClick={handleFn}
        className="h-full w-full flex justify-center items-center row-start-1 row-end-2 col-start-2 col-end-4 cursor-pointer overflow-visible"
      >
        <img
          className="h-11/12 w-full object-contain"
          src={logo}
          alt="weather app logo"
        />
      </div>
    </>
  );
}

export default Logo;
