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
import { useState } from "react";
import MainCard from "../Components/MainCard.jsx";
import SmallCard from "../Components/SmallCard.jsx";
import DailyForecastDayBlock from "../Components/DailyForecastDayBlock.jsx";
import HourlyForecastBlock from "../Components/HourlyForecastBlock.jsx";
import Title from "../Components/Title.jsx";
import SearchBar from "../Components/SearchBar.jsx";
import Logo from "../Components/Logo.jsx";
import Units from "../Components/Units.jsx";
import DailyForecastBlock from "../Components/DailyForecastBlock.jsx";
import UnitsDropdown from "../Components/UnitsDropdown.jsx";
import SearchBarDropdown from "../Components/SearchBarDropdown.jsx";

function Home() {
  const [isUnitsDropdown, setIsUnitsDropdown] = useState(true);
  const [isSearchDropdown, setIsSearchDropdown] = useState(true);
  const [isHourlyForecastDropdown, setIsHourlyForecastDropdown] =
    useState(true);

  function handleIsUnitsDropdown() {
    setIsUnitsDropdown((prev) => !prev);
  }

  function handleIsSearchDropdown() {
    setIsSearchDropdown((prev) => !prev);
  }

  function handleIsHourlyForecastDropdown() {
    setIsHourlyForecastDropdown((prev) => !prev);
  }

  function handleCloseDropdowns() {
    console.log("close dropdowns clicked");
    setIsUnitsDropdown((prev) => (prev = true));
    setIsSearchDropdown((prev) => (prev = true));
    setIsHourlyForecastDropdown((prev) => (prev = true));
  }

  const handleConsoleReset = () => {
    console.clear();
  };

  return (
    <>
      <div
        id="home-page-borders"
        className="h-screen w-screen grid grid-rows-12 grid-cols-12 text-white font-mono"
        style={{ backgroundColor: colors.neutral900 }}
      >
        {/* WEATHER NOW LOGO*/}
        <Logo handleFn={handleConsoleReset} />

        {/* UNITS */}
        <Units handleDropdown={handleIsUnitsDropdown} bool={isUnitsDropdown} />

        {/* UNITS DROP DOWN */}
        <UnitsDropdown bool={isUnitsDropdown} />

        {/* TITLE */}
        <Title />

        {/* SEARCH BAR AND SUBMIT BUTTON */}
        <SearchBar handleDropdown={handleIsSearchDropdown} />

        {/* SEARCH BAR DROPDOWN */}
        <SearchBarDropdown bool={isSearchDropdown}/>

        {/* CITY STATE TEMPERATURE */}
        <MainCard />

        {/* CITY STATE WEATHER DETAILS */}
        <div className="flex justify-between my-1 row-start-8 row-end-10 col-start-2 col-end-10 mr-32 mb-6">
          <SmallCard title={"Feels Like"} value={"18°"}/>
          <SmallCard title={"Humidity"} value={"46%"}/>
          <SmallCard title={"Wind"} value={"14 km/h"}/>
          <SmallCard title={"Precipitation"} value={"0 mm"}/>
        </div>

        {/* DAILY FORECAST */}
        <DailyForecastBlock />

        {/* HOURLY FORECAST */}
        <HourlyForecastBlock handleDropdown={handleIsHourlyForecastDropdown} isDropdown={isHourlyForecastDropdown} />

        {/* HOURLY FORECAST DROPDOWN */}
        <div
          className={`flex flex-col justify-around items-center ml-20 mr-8 row-start-5 row-end-9 col-start-10 col-end-12 bg-gray-200 text-white opacity-100 z-10 rounded-lg ${
            isHourlyForecastDropdown ? "hidden" : ""
          }`}
          style={{
            backgroundColor: colors.neutral800,
            border: `2px solid ${colors.neutral600}`,
          }}
        >
          <h3 className="h-10 w-48 flex justify-start items-center pl-4 hover:border-1 hover:border-white rounded-lg cursor-pointer">
            Sunday
          </h3>
          <h3 className="h-10 w-48 flex justify-start items-center pl-4 hover:border-1 hover:border-white rounded-lg cursor-pointer">
            Monday
          </h3>
          <h3 className="h-10 w-48 flex justify-start items-center pl-4 bg-gray-500 hover:border-1 hover:border-white rounded-lg cursor-pointer">
            Tuesday
          </h3>
          <h3 className="h-10 w-48 flex justify-start items-center pl-4 hover:border-1 hover:border-white rounded-lg cursor-pointer">
            Wednesday
          </h3>
          <h3 className="h-10 w-48 flex justify-start items-center pl-4 hover:border-1 hover:border-white rounded-lg cursor-pointer">
            Thursday
          </h3>
          <h3 className="h-10 w-48 flex justify-start items-center pl-4 hover:border-1 hover:border-white rounded-lg cursor-pointer">
            Friday
          </h3>
          <h3 className="h-10 w-48 flex justify-start items-center pl-4 hover:border-1 hover:border-white rounded-lg cursor-pointer">
            Saturday
          </h3>
        </div>

      </div>
    </>
  );
}

export default Home;
