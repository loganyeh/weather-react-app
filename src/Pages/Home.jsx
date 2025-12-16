import colors from "../assets/colors.js";
import { useEffect, useState, useContext } from "react";
import MainCard from "../Components/MainCard.jsx";
import SmallCard from "../Components/SmallCard.jsx";
import HourlyForecastBlock from "../Components/HourlyForecastBlock.jsx";
import Title from "../Components/Title.jsx";
import SearchBar from "../Components/SearchBar.jsx";
import Logo from "../Components/Logo.jsx";
import Units from "../Components/Units.jsx";
import DailyForecastBlock from "../Components/DailyForecastBlock.jsx";
import UnitsDropdown from "../Components/UnitsDropdown.jsx";
import SearchBarDropdown from "../Components/SearchBarDropdown.jsx";
import HourlyForecastDropdown from "../Components/HourlyForecastDropdown.jsx";
import { MyContext } from "../Context/MyContext.jsx";

// API IMPORT
import { FetchAtlanta } from "../API/api.js";

function Home() {
  const [isUnitsDropdown, setIsUnitsDropdown] = useState(true);
  const [isSearchDropdown, setIsSearchDropdown] = useState(true);
  const [isHourlyForecastDropdown, setIsHourlyForecastDropdown] =
    useState(true);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const date = new Date();
  // console.log(date);
  // console.log(date.getDay());

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

  // SANDBOX
  useEffect(() => {
    const getAtlantaWeather = async () => {
      const data = await FetchAtlanta();
      setData(data);
    }
    getAtlantaWeather();

  }, []);

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
        <SearchBarDropdown bool={isSearchDropdown} />
        {/* CITY STATE TEMPERATURE */}
        <MainCard value={data}/>
        {/* CITY STATE WEATHER DETAILS */}
        <div className="flex justify-between my-1 row-start-8 row-end-10 col-start-2 col-end-10 mr-32 mb-6">
          <SmallCard title={"Feels Like"} value={`${data?.apparentTemp.toFixed(0)}°`} />
          <SmallCard title={"Humidity"} value={`${data?.humidity.toFixed(0)}%`} />
          <SmallCard title={"Wind"} value={`${data?.wind.toFixed(0)} mph`} />
          <SmallCard title={"Precipitation"} value={`${data?.precipitation.toFixed(0)} in`} />
        </div>
        {/* DAILY FORECAST */}
        <DailyForecastBlock data={data} />
        {/* HOURLY FORECAST */}
        <HourlyForecastBlock
          handleDropdown={handleIsHourlyForecastDropdown}
          isDropdown={isHourlyForecastDropdown}
        />
        <HourlyForecastDropdown bool={isHourlyForecastDropdown} />
      </div>
    </>
  );
}

export default Home;
