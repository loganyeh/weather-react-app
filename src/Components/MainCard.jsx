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

function MainCard({value}) {
  return (
    <>
      <div
        className="grid grid-rows-6 grid-cols-5 row-start-4 row-end-8 col-start-2 col-end-10 my-4 mr-32 border-2 border-blue-900 rounded-3xl bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${bgTodayLarge})` }}
      >
        <h1 className="flex items-end pl-5 pb-2 row-start-2 row-end-4 col-start-1 col-end-3 text-4xl whitespace-nowrap">
          Lawrenceville, Georgia
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
          {value?.currentTemp.toFixed(0)}°
        </h1>
      </div>
    </>
  );
}

export default MainCard;
