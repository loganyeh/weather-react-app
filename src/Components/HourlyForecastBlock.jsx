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
import HourlyForecastDropdown from "./HourlyForecastDropdown.jsx";
import WeatherCodeFn from "../assets/weatherCode.js";
import { useState, useEffect, useContext } from "react";
import { MyContext } from "../Context/MyContext.jsx";
import { toCelsius } from "../assets/unitDropdownFunctions.js";
import { postMeredian } from "../assets/functions.js";

function HourlyForecastBlock({ handleDropdown, isDropdown, data }) {
  const {isFahrenheit, setIsFahrenheit} = useContext(MyContext);
  const timeSlotsArray = [];
  const date = new Date();
  let currentTime = date.getHours() % 12;
  for(let i = 0; i < 8; i++){
    timeSlotsArray.push(currentTime % 12);
    currentTime++;
  }

  const tempArray = [];
  let tempGetHours = date.getHours();
  for(let i = 0; i < 8; i++){
    tempArray.push(tempGetHours);
    tempGetHours++;
  }

  const date2 = new Date();
  let date2Num = date2.getHours();
  let pmArray = [];
  for(let i = 0; i < 8; i++){
    pmArray.push(date2Num % 24);
    date2Num++;
  }

  return (
    <>
      <div
        className={`flex flex-col row-start-4 row-end-13 col-start-9 col-end-12 mt-4 ml-16 mb-3 rounded-3xl`}
        style={{
          backgroundColor: colors.neutral800,
          border: `2px solid ${colors.neutral700}`,
        }}
      >
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
            weatherImg={WeatherCodeFn(data?.hourlyWeatherCodeArray[tempArray[0]])}
            time={`${timeSlotsArray[0]}`}
            temp={isFahrenheit ? `${toCelsius(data?.hourlyTemperatureArray[tempArray[0]])}°` : `${data?.hourlyTemperatureArray[tempArray[0]].toFixed(0)}°`}
            xm={postMeredian(pmArray[0])}
          />
          <HourlyForecastTimeBlock
            weatherImg={WeatherCodeFn(data?.hourlyWeatherCodeArray[tempArray[1]])}
            time={`${timeSlotsArray[1]}`}
            temp={isFahrenheit ? `${toCelsius(data?.hourlyTemperatureArray[tempArray[1]])}°` : `${data?.hourlyTemperatureArray[tempArray[1]].toFixed(0)}°`}
            xm={postMeredian(pmArray[1])}
          />
          <HourlyForecastTimeBlock
            weatherImg={WeatherCodeFn(data?.hourlyWeatherCodeArray[tempArray[2]])}
            time={`${timeSlotsArray[2]}`}
            temp={isFahrenheit ? `${toCelsius(data?.hourlyTemperatureArray[tempArray[2]])}°` : `${data?.hourlyTemperatureArray[tempArray[2]].toFixed(0)}°`}
            xm={postMeredian(pmArray[2])}
          />
          <HourlyForecastTimeBlock
            weatherImg={WeatherCodeFn(data?.hourlyWeatherCodeArray[tempArray[3]])}
            time={`${timeSlotsArray[3]}`}
            temp={isFahrenheit ? `${toCelsius(data?.hourlyTemperatureArray[tempArray[3]])}°` : `${data?.hourlyTemperatureArray[tempArray[3]].toFixed(0)}°`}
            xm={postMeredian(pmArray[3])}
          />
          <HourlyForecastTimeBlock
            weatherImg={WeatherCodeFn(data?.hourlyWeatherCodeArray[tempArray[4]])}
            time={`${timeSlotsArray[4]}`}
            temp={isFahrenheit ? `${toCelsius(data?.hourlyTemperatureArray[tempArray[4]])}°` : `${data?.hourlyTemperatureArray[tempArray[4]].toFixed(0)}°`}
            xm={postMeredian(pmArray[4])}
          />
          <HourlyForecastTimeBlock
            weatherImg={WeatherCodeFn(data?.hourlyWeatherCodeArray[tempArray[5]])}
            time={`${timeSlotsArray[5]}`}
            temp={isFahrenheit ? `${toCelsius(data?.hourlyTemperatureArray[tempArray[5]])}°` : `${data?.hourlyTemperatureArray[tempArray[5]].toFixed(0)}°`}
            xm={postMeredian(pmArray[5])}
          />
          <HourlyForecastTimeBlock
            weatherImg={WeatherCodeFn(data?.hourlyWeatherCodeArray[tempArray[6]])}
            time={`${timeSlotsArray[6]}`}
            temp={isFahrenheit ? `${toCelsius(data?.hourlyTemperatureArray[tempArray[6]])}°` : `${data?.hourlyTemperatureArray[tempArray[6]].toFixed(0)}°`}
            xm={postMeredian(pmArray[6])}
          />
          <HourlyForecastTimeBlock
            weatherImg={WeatherCodeFn(data?.hourlyWeatherCodeArray[tempArray[7]])}
            time={`${timeSlotsArray[7]}`}
            temp={isFahrenheit ? `${toCelsius(data?.hourlyTemperatureArray[tempArray[7]])}°` : `${data?.hourlyTemperatureArray[tempArray[7]].toFixed(0)}°`}
            xm={postMeredian(pmArray[7])}
          />
        </div>

      </div>
    </>
  );
}

export default HourlyForecastBlock;
