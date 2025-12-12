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
import DailyForecastBlock from "../Components/DailyForecastBlock.jsx";
import HourlyForecastTimeBlock from "../Components/HourlyForecastTimeBlock.jsx";
import HourlyForecastBlock from "../Components/HourlyForecastBlock.jsx";

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
        {/* WEATHER NOW - TOP LEFT */}
        <div
          onClick={handleConsoleReset}
          className="h-full w-full flex justify-center items-center row-start-1 row-end-2 col-start-2 col-end-4 cursor-pointer overflow-visible"
        >
          <img
            className="h-11/12 w-full object-contain"
            src={logo}
            alt="weather app logo"
          />
        </div>

        {/* UNITS */}
        <div className="flex justify-end items-center row-start-1 row-end-2 col-start-11 col-end-12">
          <h2
            onClick={handleIsUnitsDropdown}
            className={`h-2/3 w-30 flex justify-center items-center hover:border-2 active:border-white whitespace-nowrap cursor-pointer rounded-2xl ${
              isUnitsDropdown ? "colors.neutral700" : "border-2 border-white"
            }`}
            style={{ backgroundColor: colors.neutral600 }}
          >
            ⚙️ Units \/
          </h2>
        </div>

        {/* UNITS DROP DOWN */}
        <div
          className={`flex flex-col justify-around row-start-2 row-end-7 col-start-10 col-end-12 ml-16 font-sans bg-gray-200 opacity-100 z-10 rounded-3xl ${
            isUnitsDropdown ? "hidden" : ""
          }`}
          style={{
            backgroundColor: colors.neutral800,
            border: `2px solid ${colors.neutral600}`,
          }}
        >
          <div className="h-12 w-full flex flex-col justify-center items-center">
            <h3 className="h-10 w-58 flex justify-start items-center pl-3 bg-gray-500 hover:border-1 hover:border-white rounded-lg hover:border-1 hover:border-white cursor-pointer">
              Switch to Imperial
            </h3>
          </div>
          <div className="h-28 w-full flex flex-col justify-around items-center border-b-1 border-gray-700">
            <h3 className="h-7 w-58 flex items-center pl-3 text-base text-gray-400 rounded-lg">
              Temperature
            </h3>
            <h4 className="h-9 w-58 flex justify-between items-center pl-2 text-lg bg-gray-500 rounded-lg hover:border-1 hover:border-white cursor-pointer">
              Celsius (°C)<span className="mr-4 text-3xl text-white">O</span>
            </h4>
            <h4 className="h-9 w-58 flex justify-start items-center pl-2 text-lg rounded-lg hover:border-1 hover:border-white cursor-pointer">
              Fahrenheit (°F)
            </h4>
          </div>
          <div className="h-28 w-full flex flex-col justify-around items-center border-b-1 border-gray-700">
            <h3 className="h-7 w-58 flex items-center pl-3 text-base text-gray-400 rounded-lg">
              Wind Speed
            </h3>
            <h4 className="h-9 w-58 flex justify-between items-center pl-2 text-lg bg-gray-500 items-center rounded-lg hover:border-1 hover:border-white cursor-pointer">
              km/h<span className="mr-4 text-3xl text-white">O</span>
            </h4>
            <h4 className="h-9 w-58 flex justify-start items-center pl-2 text-lg rounded-lg hover:border-1 hover:border-white cursor-pointer">
              mph
            </h4>
          </div>
          <div className="h-28 w-full flex flex-col justify-around items-center">
            <h3 className="h-7 w-58 flex items-center pl-3 text-base text-gray-400 rounded-lg">
              Precipitation
            </h3>
            <h4 className="h-9 w-58 flex justify-between items-center pl-2 bg-gray-500 text-lg items-center rounded-lg hover:border-1 hover:border-white cursor-pointer">
              Millimeters (mm)
              <span className="mr-4 text-3xl text-white">O</span>
            </h4>
            <h4 className="h-9 w-58 flex justify-start items-center pl-2 text-lg rounded-lg hover:border-1 hover:border-white cursor-pointer">
              Inches (in)
            </h4>
          </div>
        </div>

        {/* TITLE */}
        <div className="flex justify-center items-center row-start-2 row-end-3 col-start-4 col-end-11">
          <h1 className="text-6xl whitespace-nowrap overflow-visible">
            How's the Sky Looking Today?
          </h1>
        </div>

        {/* SEARCH BAR AND SUBMIT BUTTON */}
        <div className="flex justify-between items-end pl-22 pr-26 pt-5 row-start-3 row-end-4 col-start-4 col-end-11">
          <div
            className="h-full w-4/5 flex justify-center items-center border-2 border-black rounded-2xl"
            style={{
              backgroundColor: colors.neutral700,
              border: `2px solid ${colors.neutral300}`,
            }}
          >
            <img
              onClick={handleIsSearchDropdown}
              className="h-1/2 w-1/12 rounded-l-2xl object-contain cursor-pointer"
              src={search}
              alt=""
            />
            <input
              className="h-full w-11/12 text-white cursor-pointer rounded-r-2xl"
              type="text"
              placeholder="Search for a place..."
            />
          </div>
          <button
            className="h-full w-1/6 rounded-2xl text-xl hover:border-2 hover:border-blue-900 cursor-pointer"
            style={{ backgroundColor: colors.blue500 }}
          >
            Search
          </button>
        </div>

        {/* SEARCH BAR DROPDOWN */}
        <div
          className={`flex flex-col justify-around ml-22 mr-72 mt-2 row-start-4 row-end-7 col-start-4 col-end-11 bg-gray-200 border-4 border-purple-600 opacity-100 z-10 rounded-3xl overflow-visible
                    ${isSearchDropdown ? "hidden" : ""}
                `}
          style={{
            backgroundColor: colors.neutral700,
            border: `1px solid ${colors.neutral300}`,
          }}
        >
          <h3 className="h-3/12 w-176 flex items-center mx-4 mt-2 pl-4 bg-gray-500 rounded-lg hover:border-2 hover:border-white cursor-pointer">
            City Name
          </h3>
          <h3 className="h-3/12 w-176 flex items-center mx-4 mt-2 pl-4 rounded-lg hover:border-2 hover:border-white cursor-pointer">
            City Name
          </h3>
          <h3 className="h-3/12 w-176 flex items-center mx-4 mt-2 pl-4 rounded-lg hover:border-2 hover:border-white cursor-pointer">
            City Name
          </h3>
          <h3 className="h-3/12 w-176 flex items-center mx-4 mt-2 pl-4 rounded-lg hover:border-2 hover:border-white cursor-pointer">
            City Name
          </h3>
        </div>

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
        <div className="flex flex-col justify-around row-start-10 row-end-13 col-start-2 col-end-10 mr-32">
          <h4 className="h-1/12 w-full text-xl">Daily Forecast</h4>
          <div className="h-10/12 w-full flex justify-between items-center">
            <DailyForecastBlock day={"Tue"} weatherImg={rain} high={"20°"} low={"14°"}/>
            <DailyForecastBlock day={"Wed"} weatherImg={rain} high={"21°"} low={"15°"}/>
            <DailyForecastBlock day={"Thu"} weatherImg={sunny} high={"23°"} low={"14°"}/>
            <DailyForecastBlock day={"Fri"} weatherImg={partlyCloudy} high={"25°"} low={"13°"}/>
            <DailyForecastBlock day={"Sat"} weatherImg={storm} high={"21°"} low={"15°"}/>
            <DailyForecastBlock day={"Sun"} weatherImg={snow} high={"25°"} low={"16°"}/>
            <DailyForecastBlock day={"Mon"} weatherImg={fog} high={"24°"} low={"15°"}/>
          </div>Time
        </div>

        {/* HOURLY FORECAST */}
        <div
          className={`flex flex-col row-start-4 row-end-13 col-start-9 col-end-12 mt-4 ml-16 mb-3 rounded-3xl`}
          style={{
            backgroundColor: colors.neutral800,
            border: `2px solid ${colors.neutral700}`,
          }}
        >



          <HourlyForecastBlock handleDropdown={handleIsHourlyForecastDropdown} isDropdown={isHourlyForecastDropdown} />

        </div>

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
