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
import { toCelsius, toKMH, toMM } from "../assets/unitDropdownFunctions.js";

// API IMPORT
import { FetchAtlanta } from "../API/api.js";

function Home() {
  const {queryData, setQueryData, data, setData, isMPH, setIsMPH, isImperial, setIsImperial, isFahrenheit, setIsFahrenheit, isInches, setIsInches} = useContext(MyContext);
  const [isUnitsDropdown, setIsUnitsDropdown] = useState(true);
  const [isSearchDropdown, setIsSearchDropdown] = useState(true);
  const [isHourlyForecastDropdown, setIsHourlyForecastDropdown] =
    useState(true);
  // const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [resetEffect, setResetEffect] = useState(false);

  function handleIsUnitsDropdown() {
    setIsUnitsDropdown((prev) => !prev);
  }

  function handleIsSearchDropdown() {
    setIsSearchDropdown((prev) => !prev);
  }

  function handleIsHourlyForecastDropdown() {
    setIsHourlyForecastDropdown((prev) => !prev);
  }

  const handleConsoleReset = () => {
    console.clear();
    setResetEffect(prev => !prev);
  };


  // SANDBOX
  useEffect(() => {
    const getAtlantaWeather = async () => {
      const data = await FetchAtlanta();
      // console.log(data)
      setData(data);
    }
    getAtlantaWeather();

  }, [resetEffect]);

  // async function handleQueryData() {
  //   try {
  //     const data = await(queryData);
  //     // console.log(data);
  //     // setData(data);
  //   } catch (error) {
      
  //   }
  // }

  // handleQueryData();

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
          <SmallCard title={"Feels Like"} value={isFahrenheit ? `${toCelsius(data?.apparentTemp)}°`: `${data?.apparentTemp.toFixed(0)}°`} />
          <SmallCard title={"Humidity"} value={`${data?.humidity.toFixed(0)}%`} />
          <SmallCard title={"Wind"} value={`${isMPH ? toKMH(data?.wind) : data?.wind.toFixed(0)} ${isMPH ? 'km/h' : 'mph'}`} />
          <SmallCard title={"Precipitation"} value={`${isInches ? toMM(data?.precipitation) : data?.precipitation.toFixed(0)} ${isInches ? 'mm' : 'in'}`} />
        </div>
        {/* DAILY FORECAST */}
        <DailyForecastBlock data={data} />
        {/* HOURLY FORECAST */}
        <HourlyForecastBlock
          handleDropdown={handleIsHourlyForecastDropdown}
          isDropdown={isHourlyForecastDropdown}
          data={data}
        />
        <HourlyForecastDropdown bool={isHourlyForecastDropdown} />
      </div>
    </>
  );
}

export default Home;
