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
import { useState, useEffect } from "react";
import WeatherCodeFn from "../assets/weatherCode.js";

function DailyForecastBlock({data}) {

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
            high={data?.tempMaxArray[0].toFixed(0)}
            low={data?.tempMinArray[0].toFixed(0)}
          />
          <DailyForecastDayBlock
            day={dayArray[1]}
            weatherImg={WeatherCodeFn(data?.weatherCodeArray[1])}
            high={data?.tempMaxArray[1].toFixed(0)}
            low={data?.tempMinArray[1].toFixed(0)}
          />
          <DailyForecastDayBlock
            day={dayArray[2]}
            weatherImg={WeatherCodeFn(data?.weatherCodeArray[2])}
            high={data?.tempMaxArray[2].toFixed(0)}
            low={data?.tempMinArray[2].toFixed(0)}
          />
          <DailyForecastDayBlock
            day={dayArray[3]}
            weatherImg={WeatherCodeFn(data?.weatherCodeArray[3])}
            high={data?.tempMaxArray[3].toFixed(0)}
            low={data?.tempMinArray[3].toFixed(0)}
          />
          <DailyForecastDayBlock
            day={dayArray[4]}
            weatherImg={WeatherCodeFn(data?.weatherCodeArray[4])}
            high={data?.tempMaxArray[4].toFixed(0)}
            low={data?.tempMinArray[4].toFixed(0)}
          />
          <DailyForecastDayBlock
            day={dayArray[5]}
            weatherImg={WeatherCodeFn(data?.weatherCodeArray[5])}
            high={data?.tempMaxArray[5].toFixed(0)}
            low={data?.tempMinArray[5].toFixed(0)}
          />
          <DailyForecastDayBlock
            day={dayArray[6]}
            weatherImg={WeatherCodeFn(data?.weatherCodeArray[6])}
            high={data?.tempMaxArray[6].toFixed(0)}
            low={data?.tempMinArray[6].toFixed(0)}
          />
        </div>
      </div>
    </>
  );
}

export default DailyForecastBlock;
