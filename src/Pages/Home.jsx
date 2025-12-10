import { bgTodayLarge, bgTodaySmall, favicon, checkmark, drizzle, dropdown, error, fog,
    loading, overcast, partlyCloudy, rain, retry, search, snow, storm, sunny, units, logo } from "../assets/images";
import { useState } from "react";

function Home(){
    const [isUnitsDropdown, setIsUnitsDropdown] = useState(false);
    const [isSearchDropdown, setIsSearchDropdown] = useState(false);
    const [isHourlyForecastDropdown, setIsHourlyForecastDropdown] = useState(false);


    return(
        <>
            <div id="home-page-borders" className="h-screen w-screen grid grid-rows-12 grid-cols-12 font-mono border-2 border-red-600">

                {/* WEATHER NOW - TOP LEFT */}
                <div className="flex row-start-1 row-end-2 col-start-2 col-end-4 border-2 border-red-600">
                    <img className="h-full w-3/12 flex justify-center items-center border-2 border-red-600 object-contain" src={logo} alt="weather app logo" />
                    <h1 className="h-full w-9/12 flex justify-center items-center text-2xl font-medium border-2 border-red-600 whitespace-nowrap overflow-visible">Weather Now</h1>
                </div>

                {/* UNITS */}
                <div className="row-start-1 row-end-2 col-start-11 col-end-12 border-2 border-red-600">
                    <h2 className="h-full w-full flex justify-center items-center">⚙️ Units</h2>
                </div>

                {/* UNITS DROP DOWN */}
                <div className="hidden row-start-2 row-end-7 col-start-10 col-end-12 border-4 border-purple-600"></div>

                {/* TITLE */}
                <div className="flex justify-center items-center row-start-2 row-end-3 col-start-4 col-end-11 border-2 border-red-600">
                    <h1 className="text-6xl border-2 border-red-600 whitespace-nowrap overflow-visible">How's the Sky Looking Today?</h1>
                </div>

                {/* SEARCH BAR AND SUBMIT BUTTON */}
                <div className="flex justify-between items-end pl-22 pr-26 pt-5 row-start-3 row-end-4 col-start-4 col-end-11 border-2 border-red-600">                    
                    <div className="h-full w-4/5 flex justify-center items-center border-2 border-black rounded-2xl">
                        <img className="h-1/2 w-1/12 rounded-l-2xl object-contain" src={search} alt="" />
                        <input className="h-full w-11/12" type="text" placeholder="Search for a place..." />
                    </div>
                    <button className="h-full w-1/6 border-2 border-black rounded-2xl hover:bg-gray-300 active:bg-gray-200 cursor-pointer">Search</button>
                </div>

                {/* SEARCH BAR DROPDOWN */}
                <div className="hidden ml-23 mr-65 row-start-4 row-end-8 col-start-4 col-end-11 border-4 border-purple-600"></div>


                {/* CITY STATE TEMPERATURE */}
                <div className="grid grid-rows-6 grid-cols-5 row-start-4 row-end-8 col-start-2 col-end-10 border-2 border-red-600">
                    <h1 className="flex items-end pl-2 pb-2 row-start-2 row-end-4 col-start-1 col-end-3 text-2xl border-2 border-red-600">Berlin, Germany</h1>
                    <h2 className="flex justify-start pl-2 pt-2 row-start-4 row-end-6 col-start-1 col-end-3 text-lg border-2 border-red-600">Tuesday. Aug 5, 2025</h2>
                    <img className="h-full w-full row-start-2 row-end-6 col-start-4 col-end-5 border-2 border-red-600 object-contain" src={sunny} alt="weather-img" />
                    <h1 className="h-full w-full flex justify-center items-center row-start-2 row-end-6 col-start-5 col-end-6 text-9xl border-2 border-red-600">20°</h1>
                </div>



                <div className="row-start-8 row-end-10 col-start-2 col-end-10 border-2 border-red-600">Feels Like</div>



                <div className="row-start-10 row-end-13 col-start-2 col-end-10 border-2 border-red-600">Daily Forecast</div>


                {/* HOURLY FORECAST */}
                <div className="row-start-4 row-end-13 col-start-10 col-end-12 border-2 border-red-600">Hourly Forecast</div>
                {/* HOURLY FORECAST DROPDOWN */}
                <div className="hidden ow-start-5 row-end-9 col-start-10 col-end-12 border-4 border-purple-600"></div>



            </div>
        </>
    )
}

export default Home;