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
import WeatherCodeFn from "../assets/weatherCode";
import { toCelsius } from "../assets/unitDropdownFunctions";
import { useContext } from "react";
import { MyContext } from "../Context/MyContext";

function MainCard({value}) {
  const {isFahrenheit, setIsFahrenheit} = useContext(MyContext);

  const date = new Date().toString();
  // console.log(date);
  const splitDate = date.split(" ");

  return (
    <>
      <div
        className="grid grid-rows-6 grid-cols-5 row-start-4 row-end-8 col-start-2 col-end-10 my-4 mr-32 border-2 border-blue-900 rounded-3xl bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${bgTodayLarge})` }}
      >
        <h1 className="flex items-end pl-5 pb-2 row-start-2 row-end-4 col-start-1 col-end-3 text-4xl whitespace-nowrap">
          {value?.city}, {value?.state}
        </h1>
        <h2 className="flex justify-start pl-5 pt-2 row-start-4 row-end-6 col-start-1 col-end-3 text-lg">
          {`${splitDate[0]}day. ${splitDate[1]} ${splitDate[2]}, ${splitDate[3]}`}
        </h2>
        <img
          className="h-full w-full row-start-2 row-end-6 col-start-4 col-end-5 object-contain"
          src={WeatherCodeFn(value?.weatherCodeArray[0])}
          alt="weather-img"
        />
        <h1 className="h-full w-full flex justify-center items-center pr-8 row-start-2 row-end-6 col-start-5 col-end-6 font-sans text-9xl">
          {isFahrenheit ? toCelsius(value?.currentTemp) : value?.currentTemp.toFixed(0)}°
        </h1>
      </div>
    </>
  );
}

export default MainCard;
