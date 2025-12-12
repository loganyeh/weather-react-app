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

function Home() {
  const [isUnitsDropdown, setIsUnitsDropdown] = useState(true);
  const [isSearchDropdown, setIsSearchDropdown] = useState(true);
  const [isHourlyForecastDropdown, setIsHourlyForecastDropdown] =
    useState(false);

  function handleIsUnitsDropdown() {
    setIsUnitsDropdown((prev) => !prev);
  }

  function handleIsSearchDropdown() {
    // setIsSearchDropdown(prev => !prev);
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
            className={`h-2/3 w-30 flex justify-center items-center hover:bg-gray-300 active:bg-gray-200 whitespace-nowrap cursor-pointer rounded-2xl ${
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
            <h3 className="h-10 w-58 flex justify-start items-center pl-3 bg-gray-500 border-1 border-white rounded-lg hover:border-1 hover:border-white cursor-pointer">
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
              className="h-full w-11/12 text-white"
              type="text"
              placeholder="Search for a place..."
            />
          </div>
          <button
            className="h-full w-1/6 border-2 border-black rounded-2xl text-xl hover:bg-red-700 active:bg-gray-200 cursor-pointer"
            style={{ backgroundColor: colors.blue500 }}
          >
            Search
          </button>
        </div>

        {/* SEARCH BAR DROPDOWN */}
        <div
          className={`ml-23 mr-65 row-start-4 row-end-8 col-start-4 col-end-11 bg-gray-200 border-4 border-purple-600 opacity-50 z-10
                    ${isSearchDropdown ? "hidden" : ""}
                `}
        ></div>

        {/* CITY STATE TEMPERATURE */}
        <div
          className="grid grid-rows-6 grid-cols-5 row-start-4 row-end-8 col-start-2 col-end-10 my-4 mr-32 border-2 border-blue-900 rounded-3xl bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${bgTodayLarge})` }}
        >
          <h1 className="flex items-end pl-5 pb-2 row-start-2 row-end-4 col-start-1 col-end-3 text-4xl">
            Berlin, Germany
          </h1>
          <h2 className="flex justify-start pl-5 pt-2 row-start-4 row-end-6 col-start-1 col-end-3 text-lg">
            Tuesday. Aug 5, 2025
          </h2>
          <img
            className="h-full w-full row-start-2 row-end-6 col-start-4 col-end-5 object-contain"
            src={sunny}
            alt="weather-img"
          />
          <h1 className="h-full w-full flex justify-center items-center pr-8 row-start-2 row-end-6 col-start-5 col-end-6 font-sans text-9xl">
            20°
          </h1>
        </div>

        {/* CITY STATE WEATHER DETAILS */}
        <div className="flex justify-between my-1 row-start-8 row-end-10 col-start-2 col-end-10 mr-32 mb-6">
          <div
            className="h-full w-64 rounded-3xl shadow-2xl"
            style={{
              backgroundColor: colors.neutral800,
              border: `2px solid ${colors.neutral600}`,
            }}
          >
            <h3 className="flex items-center pl-6 h-1/2 w-full text-lg rounded-t-3xl">
              Feels Like
            </h3>
            <h3 className="flex items-center pl-6 h-1/2 w-full text-3xl rounded-b-3xl">
              18°
            </h3>
          </div>

          <div
            className="h-full w-64 rounded-3xl shadow-2xl"
            style={{
              backgroundColor: colors.neutral800,
              border: `2px solid ${colors.neutral600}`,
            }}
          >
            <h3 className="flex items-center pl-6 h-1/2 w-full text-lg rounded-t-3xl">
              Humidity
            </h3>
            <h3 className="flex items-center pl-6 h-1/2 w-full text-3xl rounded-b-3xl">
              46%
            </h3>
          </div>

          <div
            className="h-full w-64 rounded-3xl shadow-2xl"
            style={{
              backgroundColor: colors.neutral800,
              border: `2px solid ${colors.neutral600}`,
            }}
          >
            <h3 className="flex items-center pl-6 h-1/2 w-full text-lg rounded-t-3xl">
              Wind
            </h3>
            <h3 className="flex items-center pl-6 h-1/2 w-full text-3xl rounded-b-3xl">
              14 km/h
            </h3>
          </div>

          <div
            className="h-full w-64 rounded-3xl shadow-2xl"
            style={{
              backgroundColor: colors.neutral800,
              border: `2px solid ${colors.neutral600}`,
            }}
          >
            <h3 className="flex items-center pl-6 h-1/2 w-full text-lg rounded-t-3xl">
              Precipitation
            </h3>
            <h3 className="flex items-center pl-6 h-1/2 w-full text-3xl rounded-b-3xl">
              0 mm
            </h3>
          </div>
        </div>

        {/* DAILY FORECAST */}
        <div className="flex flex-col justify-around row-start-10 row-end-13 col-start-2 col-end-10 mr-32">
          <h4 className="h-1/12 w-full text-xl">Daily Forecast</h4>

          <div className="h-10/12 w-full flex justify-between items-center">
            {/* 1 */}
            <div
              className="h-11/12 w-32 rounded-3xl"
              style={{
                backgroundColor: colors.neutral800,
                border: `2px solid ${colors.neutral600}`,
              }}
            >
              <div className="h-1/4 w-full rounded-t-3xl">
                <h4 className="h-full w-full flex justify-center items-center text-xl">
                  Tue
                </h4>
              </div>
              <div className="h-2/4 w-full">
                <img
                  className="h-full w-full object-contain"
                  src={rain}
                  alt=""
                />
              </div>
              <div className="h-1/4 w-full flex justify-between items-center rounded-b-3xl">
                <h5 className="m-4 text-lg">20°</h5>
                <h5 className="m-4 text-lg">14°</h5>
              </div>
            </div>

            {/* 2 */}
            <div
              className="h-11/12 w-32 rounded-3xl"
              style={{
                backgroundColor: colors.neutral800,
                border: `2px solid ${colors.neutral600}`,
              }}
            >
              <div className="h-1/4 w-full rounded-t-3xl">
                <h4 className="h-full w-full flex justify-center items-center text-xl">
                  Wed
                </h4>
              </div>
              <div className="h-2/4 w-full">
                <img
                  className="h-full w-full object-contain"
                  src={drizzle}
                  alt=""
                />
              </div>
              <div className="h-1/4 w-full flex justify-between items-center rounded-b-3xl">
                <h5 className="m-4 text-lg">21°</h5>
                <h5 className="m-4 text-lg">15°</h5>
              </div>
            </div>

            {/* 3 */}
            <div
              className="h-11/12 w-32 rounded-3xl"
              style={{
                backgroundColor: colors.neutral800,
                border: `2px solid ${colors.neutral600}`,
              }}
            >
              <div className="h-1/4 w-full rounded-t-3xl">
                <h4 className="h-full w-full flex justify-center items-center text-xl">
                  Thu
                </h4>
              </div>
              <div className="h-2/4 w-full">
                <img
                  className="h-full w-full object-contain"
                  src={sunny}
                  alt=""
                />
              </div>
              <div className="h-1/4 w-full flex justify-between items-center rounded-b-3xl">
                <h5 className="m-4 text-lg">24°</h5>
                <h5 className="m-4 text-lg">14°</h5>
              </div>
            </div>

            {/* 4 */}
            <div
              className="h-11/12 w-32 rounded-3xl"
              style={{
                backgroundColor: colors.neutral800,
                border: `2px solid ${colors.neutral600}`,
              }}
            >
              <div className="h-1/4 w-full rounded-t-3xl">
                <h4 className="h-full w-full flex justify-center items-center text-xl">
                  Fri
                </h4>
              </div>
              <div className="h-2/4 w-full">
                <img
                  className="h-full w-full object-contain"
                  src={partlyCloudy}
                  alt=""
                />
              </div>
              <div className="h-1/4 w-full flex justify-between items-center rounded-b-3xl">
                <h5 className="m-4 text-lg">25°</h5>
                <h5 className="m-4 text-lg">13°</h5>
              </div>
            </div>

            {/* 5 */}
            <div
              className="h-11/12 w-32 rounded-3xl"
              style={{
                backgroundColor: colors.neutral800,
                border: `2px solid ${colors.neutral600}`,
              }}
            >
              <div className="h-1/4 w-full rounded-t-3xl">
                <h4 className="h-full w-full flex justify-center items-center text-xl">
                  Sat
                </h4>
              </div>
              <div className="h-2/4 w-full">
                <img
                  className="h-full w-full object-contain"
                  src={storm}
                  alt=""
                />
              </div>
              <div className="h-1/4 w-full flex justify-between items-center rounded-b-3xl">
                <h5 className="m-4 text-lg">21°</h5>
                <h5 className="m-4 text-lg">15°</h5>
              </div>
            </div>

            {/* 6 */}
            <div
              className="h-11/12 w-32 rounded-3xl"
              style={{
                backgroundColor: colors.neutral800,
                border: `2px solid ${colors.neutral600}`,
              }}
            >
              <div className="h-1/4 w-full rounded-t-3xl">
                <h4 className="h-full w-full flex justify-center items-center text-xl">
                  Sun
                </h4>
              </div>
              <div className="h-2/4 w-full">
                <img
                  className="h-full w-full object-contain"
                  src={snow}
                  alt=""
                />
              </div>
              <div className="h-1/4 w-full flex justify-between items-center rounded-b-3xl">
                <h5 className="m-4 text-lg">25°</h5>
                <h5 className="m-4 text-lg">16°</h5>
              </div>
            </div>

            {/* 7 */}
            <div
              className="h-11/12 w-32 rounded-3xl"
              style={{
                backgroundColor: colors.neutral800,
                border: `2px solid ${colors.neutral600}`,
              }}
            >
              <div className="h-1/4 w-full rounded-t-3xl">
                <h4 className="h-full w-full flex justify-center items-center text-xl">
                  Mon
                </h4>
              </div>
              <div className="h-2/4 w-full">
                <img
                  className="h-full w-full object-contain"
                  src={fog}
                  alt=""
                />
              </div>
              <div className="h-1/4 w-full flex justify-between items-center rounded-b-3xl">
                <h5 className="m-4 text-lg">24°</h5>
                <h5 className="m-4 text-lg">15°</h5>
              </div>
            </div>
          </div>
        </div>

        {/* HOURLY FORECAST */}
        <div
          className="flex flex-col row-start-4 row-end-13 col-start-9 col-end-12 mt-4 ml-16 mb-3 border-2 border-red-600 rounded-3xl"
          style={{
            backgroundColor: colors.neutral800,
            border: `2px solid ${colors.neutral700}`,
          }}
        >
          {/* ONE HOUR BLOCK */}
          <div className="h-14 w-full pt-2 flex justify-around items-center">
            <h3 className="h-full w-2/4 flex justify-start items-center text-lg ml-3 whitespace-nowrap">
              Hourly Forecast
            </h3>
            <h3
              onClick={handleIsHourlyForecastDropdown}
              className="h-10 w-4/12 flex justify-center items-center text-sm hover:bg-gray-300 active:bg-gray-200 rounded-xl cursor-pointer"
              style={{
                backgroundColor: colors.neutral600,
                border: `2px solid ${colors.neutral700}`,
              }}
            >
              Tuesday \/
            </h3>
          </div>

          <div className="h-11/12 w-full flex flex-col justify-around items-center">
            {/* 1 */}
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
                  src={overcast}
                  alt=""
                />
                <h4 className="h-full w-1/2 flex justify-start items-center text-xl">
                  3 PM
                </h4>
              </div>
              <h5 className="h-full w-1/4 flex justify-center items-center text-lg">
                20°
              </h5>
            </div>

            {/* 2 */}
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
                  src={partlyCloudy}
                  alt=""
                />
                <h4 className="h-full w-1/2 flex justify-start items-center text-xl">
                  4 PM
                </h4>
              </div>
              <h5 className="h-full w-1/4 flex justify-center items-center text-lg">
                20°
              </h5>
            </div>

            {/* 3 */}
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
                  src={sunny}
                  alt=""
                />
                <h4 className="h-full w-1/2 flex justify-start items-center text-xl">
                  5 PM
                </h4>
              </div>
              <h5 className="h-full w-1/4 flex justify-center items-center text-lg">
                20°
              </h5>
            </div>

            {/* 4 */}
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
                  src={overcast}
                  alt=""
                />
                <h4 className="h-full w-1/2 flex justify-start items-center text-xl">
                  6 PM
                </h4>
              </div>
              <h5 className="h-full w-1/4 flex justify-center items-center text-lg">
                19°
              </h5>
            </div>

            {/* 5 */}
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
                  src={snow}
                  alt=""
                />
                <h4 className="h-full w-1/2 flex justify-start items-center text-xl">
                  7 PM
                </h4>
              </div>
              <h5 className="h-full w-1/4 flex justify-center items-center text-lg">
                18°
              </h5>
            </div>

            {/* 6 */}
            <div
              className="h-15 w-90 flex justify-between rounded-2xl"
              style={{
                backgroundColor: colors.neutral700,
                border: `2px solid ${colors.neutral600}`,
              }}
            >
              <div className="h-full w-1/2 flex">
                <img className="h-full w-1/2 object-contain" src={fog} alt="" />
                <h4 className="h-full w-1/2 flex justify-start items-center text-xl">
                  8 PM
                </h4>
              </div>
              <h5 className="h-full w-1/4 flex justify-center items-center text-lg">
                18°
              </h5>
            </div>

            {/* 7 */}
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
                  src={snow}
                  alt=""
                />
                <h4 className="h-full w-1/2 flex justify-start items-center text-xl">
                  9 PM
                </h4>
              </div>
              <h5 className="h-full w-1/4 flex justify-center items-center text-lg">
                17°
              </h5>
            </div>

            {/* 8 */}
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
                  src={overcast}
                  alt=""
                />
                <h4 className="h-full w-1/2 flex justify-start items-center text-xl">
                  1 0PM
                </h4>
              </div>
              <h5 className="h-full w-1/4 flex justify-center items-center text-lg">
                17°
              </h5>
            </div>
          </div>
        </div>

        {/* HOURLY FORECAST DROPDOWN */}
        <div
          className={`flex flex-col justify-around items-center ml-20 mr-8 row-start-5 row-end-9 col-start-10 col-end-12 bg-gray-200 text-white opacity-100 z-10 rounded-lg ${
            isHourlyForecastDropdown ? "hidden" : ""
          }`} 
          style={{backgroundColor: colors.neutral800, border: `2px solid ${colors.neutral600}`}}
        >
          <h3 className="h-10 w-48 flex justify-start items-center pl-4 hover:border-1 hover:border-white rounded-lg">
            Sunday
          </h3>
          <h3 className="h-10 w-48 flex justify-start items-center pl-4 hover:border-1 hover:border-white rounded-lg">
            Monday
          </h3>
          <h3 className="h-10 w-48 flex justify-start items-center pl-4 bg-gray-500 hover:border-1 hover:border-white rounded-lg">
            Tuesday
          </h3>
          <h3 className="h-10 w-48 flex justify-start items-center pl-4 hover:border-1 hover:border-white rounded-lg">
            Wednesday
          </h3>
          <h3 className="h-10 w-48 flex justify-start items-center pl-4 hover:border-1 hover:border-white rounded-lg">
            Thursday
          </h3>
          <h3 className="h-10 w-48 flex justify-start items-center pl-4 hover:border-1 hover:border-white rounded-lg">
            Friday
          </h3>
          <h3 className="h-10 w-48 flex justify-start items-center pl-4 hover:border-1 hover:border-white rounded-lg">
            Saturday
          </h3>
        </div>
        
      </div>
    </>
  );
}

export default Home;
