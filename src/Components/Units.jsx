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

function Units({ handleDropdown, bool }) {
  return (
    <>
      <div className="flex justify-end items-center row-start-1 row-end-2 col-start-11 col-end-12">
        <h2
          onClick={handleDropdown}
          className={`h-2/3 w-30 flex justify-center items-center hover:border-2 active:border-white whitespace-nowrap cursor-pointer rounded-2xl ${
            bool ? "colors.neutral700" : "border-2 border-white"
          }`}
          style={{ backgroundColor: colors.neutral600 }}
        >
          ⚙️ Units \/
        </h2>
      </div>
    </>
  );
}

export default Units;
