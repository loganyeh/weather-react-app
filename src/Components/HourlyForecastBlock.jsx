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
import { useState, useEffect } from "react";

function HourlyForecastBlock({ handleDropdown, isDropdown, data }) {
  const [isPM, setPM] = useState(true);
  const timeSlotsArray = [];
  const date = new Date();
  let currentTime = date.getHours() % 12;
  for(let i = 0; i < 8; i++){
    timeSlotsArray.push(currentTime % 12);
    currentTime++;
  }
  // const weatherImgArray = [];
  const [weatherTempArray, setWeatherTempArray] = useState([]);
  
  // console.log(date.getHours());
  // console.log(data?.hourlyWeatherCodeArray[weatherImgArray[0]]);
  
  // FOR HOURLY FORECAST TEMPERATURE
  useEffect(() => {
    let weatherImgCounter = date.getHours();
    for(let i = 0; i < 8; i++){
      setWeatherTempArray(prev => [...prev, weatherImgCounter]);
      // tempArray.push(weatherImgCounter);
      // console.log(weatherImgCounter);
      weatherImgCounter++;
    }
    console.log(tempArray);
  }, [])

  const tempArray = [];
  let tempGetHours = date.getHours();
  console.log(typeof tempGetHours);
  for(let i = 0; i < 8; i++){
    tempArray.push(tempGetHours);
    tempGetHours++;
  }

  console.log(tempArray);

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
            weatherImg={overcast}
            time={`${timeSlotsArray[0]}`}
            temp={`${data?.hourlyTemperatureArray[tempArray[0]].toFixed(0)}°`}
          />
          <HourlyForecastTimeBlock
            weatherImg={partlyCloudy}
            time={`${timeSlotsArray[1]}`}
            temp={`${data?.hourlyTemperatureArray[tempArray[1]].toFixed(0)}°`}
          />
          <HourlyForecastTimeBlock
            weatherImg={sunny}
            time={`${timeSlotsArray[2]}`}
            temp={`${data?.hourlyTemperatureArray[tempArray[2]].toFixed(0)}°`}
          />
          <HourlyForecastTimeBlock
            weatherImg={overcast}
            time={`${timeSlotsArray[3]}`}
            temp={`${data?.hourlyTemperatureArray[tempArray[3]].toFixed(0)}°`}
          />
          <HourlyForecastTimeBlock
            weatherImg={snow}
            time={`${timeSlotsArray[4]}`}
            temp={`${data?.hourlyTemperatureArray[tempArray[4]].toFixed(0)}°`}
          />
          <HourlyForecastTimeBlock
            weatherImg={fog}
            time={`${timeSlotsArray[5]}`}
            temp={`${data?.hourlyTemperatureArray[tempArray[5]].toFixed(0)}°`}
          />
          <HourlyForecastTimeBlock
            weatherImg={snow}
            time={`${timeSlotsArray[6]}`}
            temp={`${data?.hourlyTemperatureArray[tempArray[6]].toFixed(0)}°`}
          />
          <HourlyForecastTimeBlock
            weatherImg={overcast}
            time={`${timeSlotsArray[7]}`}
            temp={`${data?.hourlyTemperatureArray[tempArray[7]].toFixed(0)}°`}
          />
        </div>

      </div>
    </>
  );
}

export default HourlyForecastBlock;
