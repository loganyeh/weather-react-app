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
import DailyForecastDayBlock from "./DailyForecastDayBlock";
import { useState, useEffect, useContext } from "react";
import { MyContext } from "../Context/MyContext.jsx";
import WeatherCodeFn from "../assets/weatherCode.js";
import { toCelsius } from "../assets/unitDropdownFunctions.js";

function DailyForecastBlock({data}) {
  const {isFahrenheit, setIsFahrenheit} = useContext(MyContext);

  const date = new Date();
  let dateCurrentDay = date.getDay();
  const [dayArray, setDayArray] = useState([]);
  const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    let dayCounter = dateCurrentDay;
    for(let i = 0; i < daysOfTheWeek.length; i++){
      let day = '';
      switch(dayCounter % 7){
            case 0:
              day = "Sun";
              break;
            case 1: 
              day = "Mon";
              break;
            case 2: 
              day = "Tue";
              break;
            case 3:
              day = "Wed"; 
              break;
            case 4: 
              day = "Thu";
              break;
            case 5: 
              day = "Fri";
              break;
            case 6: 
              day = "Sat";
              break;
            default:
              console.log(`reached default block of switch statement`);
          }
      setDayArray(prev => [...prev, day]);
      dayCounter++;
  }

  }, []);

  return (
    <>
      <div className="flex flex-col justify-around row-start-10 row-end-13 col-start-2 col-end-10 mr-32">
        <h4 className="h-1/12 w-full text-xl">Daily Forecast</h4>
        <div className="h-10/12 w-full flex justify-between items-center">
          <DailyForecastDayBlock
            day={dayArray[0]}
            weatherImg={WeatherCodeFn(data?.weatherCodeArray[0])}
            high={isFahrenheit ? `${toCelsius(data?.tempMaxArray[0])}` : data?.tempMaxArray[0].toFixed(0)}
            low={isFahrenheit ? `${toCelsius(data?.tempMinArray[0])}` : data?.tempMinArray[0].toFixed(0)}
          />
          <DailyForecastDayBlock
            day={dayArray[1]}
            weatherImg={WeatherCodeFn(data?.weatherCodeArray[1])}
            high={isFahrenheit ? `${toCelsius(data?.tempMaxArray[1])}` : data?.tempMaxArray[1].toFixed(0)}
            low={isFahrenheit ? `${toCelsius(data?.tempMinArray[1])}` : data?.tempMinArray[1].toFixed(0)}
          />
          <DailyForecastDayBlock
            day={dayArray[2]}
            weatherImg={WeatherCodeFn(data?.weatherCodeArray[2])}
            high={isFahrenheit ? `${toCelsius(data?.tempMaxArray[2])}` : data?.tempMaxArray[2].toFixed(0)}
            low={isFahrenheit ? `${toCelsius(data?.tempMinArray[2])}` : data?.tempMinArray[2].toFixed(0)}
          />
          <DailyForecastDayBlock
            day={dayArray[3]}
            weatherImg={WeatherCodeFn(data?.weatherCodeArray[3])}
            high={isFahrenheit ? `${toCelsius(data?.tempMaxArray[3])}` : data?.tempMaxArray[3].toFixed(0)}
            low={isFahrenheit ? `${toCelsius(data?.tempMinArray[3])}` : data?.tempMinArray[3].toFixed(0)}
          />
          <DailyForecastDayBlock
            day={dayArray[4]}
            weatherImg={WeatherCodeFn(data?.weatherCodeArray[4])}
            high={isFahrenheit ? `${toCelsius(data?.tempMaxArray[4])}` : data?.tempMaxArray[4].toFixed(0)}
            low={isFahrenheit ? `${toCelsius(data?.tempMinArray[4])}` : data?.tempMinArray[4].toFixed(0)}
          />
          <DailyForecastDayBlock
            day={dayArray[5]}
            weatherImg={WeatherCodeFn(data?.weatherCodeArray[5])}
            high={isFahrenheit ? `${toCelsius(data?.tempMaxArray[5])}` : data?.tempMaxArray[5].toFixed(0)}
            low={isFahrenheit ? `${toCelsius(data?.tempMinArray[5])}` : data?.tempMinArray[5].toFixed(0)}
          />
          <DailyForecastDayBlock
            day={dayArray[6]}
            weatherImg={WeatherCodeFn(data?.weatherCodeArray[6])}
            high={isFahrenheit ? `${toCelsius(data?.tempMaxArray[6])}` : data?.tempMaxArray[6].toFixed(0)}
            low={isFahrenheit ? `${toCelsius(data?.tempMinArray[6])}` : data?.tempMinArray[6].toFixed(0)}
          />
        </div>
      </div>
    </>
  );
}

export default DailyForecastBlock;
