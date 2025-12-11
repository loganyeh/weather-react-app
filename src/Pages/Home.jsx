import { bgTodayLarge, bgTodaySmall, favicon, checkmark, drizzle, dropdown, error, fog,
    loading, overcast, partlyCloudy, rain, retry, search, snow, storm, sunny, units, logo } from "../assets/images";
import colors from '../assets/colors.js';
import { useState } from "react";

function Home(){
    const [isUnitsDropdown, setIsUnitsDropdown] = useState(true);
    const [isSearchDropdown, setIsSearchDropdown] = useState(true);
    const [isHourlyForecastDropdown, setIsHourlyForecastDropdown] = useState(true);

    function handleIsUnitsDropdown() {
        setIsUnitsDropdown(prev => !prev);
    }

    function handleIsSearchDropdown() {
        setIsSearchDropdown(prev => !prev);
    }

    function handleIsHourlyForecastDropdown() {
        console.log('hourly forecast clicked');
        setIsHourlyForecastDropdown(prev => prev = !prev);
    }

    function handleCloseDropdowns() {
        console.log('close dropdowns clicked');
        setIsUnitsDropdown(prev => prev = true);
        setIsSearchDropdown(prev => prev = true);
        setIsHourlyForecastDropdown(prev => prev = true);
    }

    const handleConsoleReset = () => {
        console.clear();
    }

    return(
        <>
            <div id="home-page-borders" className="h-screen w-screen grid grid-rows-12 grid-cols-12 font-mono border-2 border-red-600 z-0">
            {/* <div id="home-page-borders" className="h-screen w-screen grid grid-rows-12 grid-cols-12 font-mono border-2 border-red-600" style={{backgroundColor: {colors.neutral900}}}> */}

                {/* WEATHER NOW - TOP LEFT */}
                <div onClick={handleConsoleReset} className="flex row-start-1 row-end-2 col-start-2 col-end-4 border-2 border-red-600 cursor-pointer">
                    <img className="h-full w-3/12 flex justify-center items-center object-contain" src={logo} alt="weather app logo" />
                    <h1 className="h-full w-9/12 flex justify-center items-center text-2xl font-medium whitespace-nowrap overflow-visible">Weather Now</h1>
                </div>

                {/* UNITS */}
                <div className="flex justify-end items-center row-start-1 row-end-2 col-start-11 col-end-12">
                    <h2 onClick={handleIsUnitsDropdown} className="h-2/3 w-30 flex justify-center items-center hover:bg-gray-300 active:bg-gray-200 whitespace-nowrap cursor-pointer rounded-2xl border-2 border-red-600">⚙️ Units \/</h2>
                </div>

                {/* UNITS DROP DOWN */}
                <div className={`row-start-2 row-end-7 col-start-10 col-end-12 bg-gray-200 border-4 border-purple-600 opacity-50 z-10
                    ${isUnitsDropdown ? 'hidden' : ''}
                `}></div>

                {/* TITLE */}
                <div className="flex justify-center items-center row-start-2 row-end-3 col-start-4 col-end-11">
                    <h1 className="text-6xl whitespace-nowrap overflow-visible">How's the Sky Looking Today?</h1>
                </div>

                {/* SEARCH BAR AND SUBMIT BUTTON */}
                <div className="flex justify-between items-end pl-22 pr-26 pt-5 row-start-3 row-end-4 col-start-4 col-end-11">                    
                    <div className="h-full w-4/5 flex justify-center items-center border-2 border-black rounded-2xl">
                        <img onClick={handleIsSearchDropdown} className="h-1/2 w-1/12 rounded-l-2xl object-contain cursor-pointer" src={search} alt="" />
                        <input className="h-full w-11/12" type="text" placeholder="Search for a place..." />
                    </div>
                    <button className="h-full w-1/6 border-2 border-black rounded-2xl hover:bg-gray-300 active:bg-gray-200 cursor-pointer">Search</button>
                </div>

                {/* SEARCH BAR DROPDOWN */}
                <div className={`ml-23 mr-65 row-start-4 row-end-8 col-start-4 col-end-11 bg-gray-200 border-4 border-purple-600 opacity-50 z-10
                    ${isSearchDropdown ? 'hidden' : ''}
                `}></div>

                {/* CITY STATE TEMPERATURE */}
                <div className="grid grid-rows-6 grid-cols-5 row-start-4 row-end-8 col-start-2 col-end-10 my-4 mr-10 border-2 border-red-600 bg-center bg-cover bg-no-repeat rounded-3xl">
                    <h1 className="flex items-end pl-2 pb-2 row-start-2 row-end-4 col-start-1 col-end-3 text-2xl border-2 border-red-600">Berlin, Germany</h1>
                    <h2 className="flex justify-start pl-2 pt-2 row-start-4 row-end-6 col-start-1 col-end-3 text-md border-2 border-red-600">Tuesday. Aug 5, 2025</h2>
                    <img className="h-full w-full row-start-2 row-end-6 col-start-4 col-end-5 border-2 border-red-600 object-contain" src={sunny} alt="weather-img" />
                    <h1 className="h-full w-full flex justify-center items-center row-start-2 row-end-6 col-start-5 col-end-6 text-9xl border-2 border-red-600">20°</h1>
                </div>

                {/* CITY STATE WEATHER DETAILS */}
                <div className="flex justify-between my-1 row-start-8 row-end-10 col-start-2 col-end-10 mr-10">

                    <div className="h-full w-64 border-2 border-red-600 rounded-3xl">
                        <h3 className="flex items-center pl-2 h-1/2 w-full text-lg border-2 border-black rounded-t-3xl">Feels Like</h3>
                        <h3 className="flex items-center pl-2 h-1/2 w-full text-3xl border-2 border-black rounded-b-3xl">18°</h3>
                    </div>

                    <div className="h-full w-64 border-2 border-red-600 rounded-3xl">
                        <h3 className="flex items-center pl-2 h-1/2 w-full text-lg border-2 border-black rounded-t-3xl">Humidity</h3>
                        <h3 className="flex items-center pl-2 h-1/2 w-full text-3xl border-2 border-black rounded-b-3xl">46%</h3>
                    </div>


                    <div className="h-full w-64 border-2 border-red-600 rounded-3xl">
                        <h3 className="flex items-center pl-2 h-1/2 w-full text-lg border-2 border-black rounded-t-3xl">Wind</h3>
                        <h3 className="flex items-center pl-2 h-1/2 w-full text-3xl border-2 border-black rounded-b-3xl">14 km/h</h3>
                    </div>


                    <div className="h-full w-64 border-2 border-red-600 rounded-3xl">
                        <h3 className="flex items-center pl-2 h-1/2 w-full text-lg border-2 border-black rounded-t-3xl">Precipitation</h3>
                        <h3 className="flex items-center pl-2 h-1/2 w-full text-3xl border-2 border-black rounded-b-3xl">0 mm</h3>
                    </div>
                </div>

                {/* DAILY FORECAST */}
                <div className="flex flex-col justify-around row-start-10 row-end-13 col-start-2 col-end-10 mr-10">
                    <h4 className="h-1/12 w-full text-lg">Daily Forecast</h4>

                    <div className="h-10/12 w-full flex justify-between items-center">
                        
                        {/* 1 */}
                        <div className="h-11/12 w-32 border-2 border-black rounded-3xl">
                            <div className="h-1/4 w-full border-2 border-red-600 rounded-t-3xl">
                                <h4 className="h-full w-full flex justify-center items-center text-xl">Tue</h4>
                            </div>
                            <div className="h-2/4 w-full border-2 border-red-600">
                                <img className="h-full w-full object-contain" src={rain} alt="" />
                            </div>
                            <div className="h-1/4 w-full flex justify-between items-center border-2 border-red-600 rounded-b-3xl">
                                <h5 className="m-2 text-lg border-2 border-blue-600">20°</h5>
                                <h5 className="m-2 text-lg border-2 border-blue-600">14°</h5>
                            </div>
                        </div>

                        {/* 2 */}
                        <div className="h-11/12 w-32 border-2 border-black rounded-3xl">
                            <div className="h-1/4 w-full border-2 border-red-600 rounded-t-3xl">
                                <h4 className="h-full w-full flex justify-center items-center text-xl">Wed</h4>
                            </div>
                            <div className="h-2/4 w-full border-2 border-red-600">
                                <img className="h-full w-full object-contain" src={drizzle} alt="" />
                            </div>
                            <div className="h-1/4 w-full flex justify-between items-center border-2 border-red-600 rounded-b-3xl">
                                <h5 className="m-2 text-lg border-2 border-blue-600">21°</h5>
                                <h5 className="m-2 text-lg border-2 border-blue-600">15°</h5>
                            </div>
                        </div>

                        {/* 3 */}
                        <div className="h-11/12 w-32 border-2 border-black rounded-3xl">
                            <div className="h-1/4 w-full border-2 border-red-600 rounded-t-3xl">
                                <h4 className="h-full w-full flex justify-center items-center text-xl">Thu</h4>
                            </div>
                            <div className="h-2/4 w-full border-2 border-red-600">
                                <img className="h-full w-full object-contain" src={sunny} alt="" />
                            </div>
                            <div className="h-1/4 w-full flex justify-between items-center border-2 border-red-600 rounded-b-3xl">
                                <h5 className="m-2 text-lg border-2 border-blue-600">24°</h5>
                                <h5 className="m-2 text-lg border-2 border-blue-600">14°</h5>
                            </div>
                        </div>

                        {/* 4 */}
                        <div className="h-11/12 w-32 border-2 border-black rounded-3xl">
                            <div className="h-1/4 w-full border-2 border-red-600 rounded-t-3xl">
                                <h4 className="h-full w-full flex justify-center items-center text-xl">Fri</h4>
                            </div>
                            <div className="h-2/4 w-full border-2 border-red-600">
                                <img className="h-full w-full object-contain" src={partlyCloudy} alt="" />
                            </div>
                            <div className="h-1/4 w-full flex justify-between items-center border-2 border-red-600 rounded-b-3xl">
                                <h5 className="m-2 text-lg border-2 border-blue-600">25°</h5>
                                <h5 className="m-2 text-lg border-2 border-blue-600">13°</h5>
                            </div>
                        </div>

                        {/* 5 */}
                        <div className="h-11/12 w-32 border-2 border-black rounded-3xl">
                            <div className="h-1/4 w-full border-2 border-red-600 rounded-t-3xl">
                                <h4 className="h-full w-full flex justify-center items-center text-xl">Sat</h4>
                            </div>
                            <div className="h-2/4 w-full border-2 border-red-600">
                                <img className="h-full w-full object-contain" src={storm} alt="" />
                            </div>
                            <div className="h-1/4 w-full flex justify-between items-center border-2 border-red-600 rounded-b-3xl">
                                <h5 className="m-2 text-lg border-2 border-blue-600">21°</h5>
                                <h5 className="m-2 text-lg border-2 border-blue-600">15°</h5>
                            </div>
                        </div>

                        {/* 6 */}
                        <div className="h-11/12 w-32 border-2 border-black rounded-3xl">
                            <div className="h-1/4 w-full border-2 border-red-600 rounded-t-3xl">
                                <h4 className="h-full w-full flex justify-center items-center text-xl">Sun</h4>
                            </div>
                            <div className="h-2/4 w-full border-2 border-red-600">
                                <img className="h-full w-full object-contain" src={snow} alt="" />
                            </div>
                            <div className="h-1/4 w-full flex justify-between items-center border-2 border-red-600 rounded-b-3xl">
                                <h5 className="m-2 text-lg border-2 border-blue-600">25°</h5>
                                <h5 className="m-2 text-lg border-2 border-blue-600">16°</h5>
                            </div>
                        </div>

                        {/* 7 */}
                        <div className="h-11/12 w-32 border-2 border-black rounded-3xl">
                            <div className="h-1/4 w-full border-2 border-red-600 rounded-t-3xl">
                                <h4 className="h-full w-full flex justify-center items-center text-xl">Mon</h4>
                            </div>
                            <div className="h-2/4 w-full border-2 border-red-600">
                                <img className="h-full w-full object-contain" src={fog} alt="" />
                            </div>
                            <div className="h-1/4 w-full flex justify-between items-center border-2 border-red-600 rounded-b-3xl">
                                <h5 className="m-2 text-lg border-2 border-blue-600">24°</h5>
                                <h5 className="m-2 text-lg border-2 border-blue-600">15°</h5>
                            </div>
                        </div>
                        
                    </div>
                </div>

                {/* HOURLY FORECAST */}
                <div className="flex flex-col row-start-4 row-end-13 col-start-10 col-end-12 mt-4 mb-3 border-2 border-red-600 rounded-3xl">

                    {/* ONE HOUR BLOCK */}
                    <div className="h-14 w-full pt-2 flex justify-around items-center">
                        <h3 className="h-full w-2/4 flex justify-start items-center text-lg ml-3 whitespace-nowrap">Hourly Forecast</h3>
                        <h3 onClick={handleIsHourlyForecastDropdown} className="h-10 w-4/12 flex justify-center items-center text-sm border-2 border-red-600 hover:bg-gray-300 active:bg-gray-200 rounded-xl cursor-pointer">Tuesday \/</h3>
                    </div>

                    <div className="h-11/12 w-full flex flex-col justify-around items-center">

                        {/* 1 */}
                        <div className="h-15 w-70 flex justify-between border-2 border-red-600 rounded-2xl">
                            <div className="h-full w-1/2 flex">
                                <img className="h-full w-1/2 object-contain" src={overcast} alt="" />
                                <h4 className="h-full w-1/2 flex justify-start items-center text-xl">3 PM</h4>
                            </div>
                            <h5 className="h-full w-1/4 flex justify-center items-center text-lg">20°</h5>
                        </div>


                        {/* 2 */}
                        <div className="h-15 w-70 flex justify-between border-2 border-red-600 rounded-2xl">
                            <div className="h-full w-1/2 flex">
                                <img className="h-full w-1/2 object-contain" src={partlyCloudy} alt="" />
                                <h4 className="h-full w-1/2 flex justify-start items-center text-xl">4 PM</h4>
                            </div>
                            <h5 className="h-full w-1/4 flex justify-center items-center text-lg">20°</h5>
                        </div>
                        

                        {/* 3 */}
                        <div className="h-15 w-70 flex justify-between border-2 border-red-600 rounded-2xl">
                            <div className="h-full w-1/2 flex">
                                <img className="h-full w-1/2 object-contain" src={sunny} alt="" />
                                <h4 className="h-full w-1/2 flex justify-start items-center text-xl">5 PM</h4>
                            </div>
                            <h5 className="h-full w-1/4 flex justify-center items-center text-lg">20°</h5>
                        </div>


                        {/* 4 */}
                        <div className="h-15 w-70 flex justify-between border-2 border-red-600 rounded-2xl">
                            <div className="h-full w-1/2 flex">
                                <img className="h-full w-1/2 object-contain" src={overcast} alt="" />
                                <h4 className="h-full w-1/2 flex justify-start items-center text-xl">6 PM</h4>
                            </div>
                            <h5 className="h-full w-1/4 flex justify-center items-center text-lg">19°</h5>
                        </div>


                        {/* 5 */}
                        <div className="h-15 w-70 flex justify-between border-2 border-red-600 rounded-2xl">
                            <div className="h-full w-1/2 flex">
                                <img className="h-full w-1/2 object-contain" src={snow} alt="" />
                                <h4 className="h-full w-1/2 flex justify-start items-center text-xl">7 PM</h4>
                            </div>
                            <h5 className="h-full w-1/4 flex justify-center items-center text-lg">18°</h5>
                        </div>


                        {/* 6 */}
                        <div className="h-15 w-70 flex justify-between border-2 border-red-600 rounded-2xl">
                            <div className="h-full w-1/2 flex">
                                <img className="h-full w-1/2 object-contain" src={fog} alt="" />
                                <h4 className="h-full w-1/2 flex justify-start items-center text-xl">8 PM</h4>
                            </div>
                            <h5 className="h-full w-1/4 flex justify-center items-center text-lg">18°</h5>
                        </div>


                        {/* 7 */}
                        <div className="h-15 w-70 flex justify-between border-2 border-red-600 rounded-2xl">
                            <div className="h-full w-1/2 flex">
                                <img className="h-full w-1/2 object-contain" src={snow} alt="" />
                                <h4 className="h-full w-1/2 flex justify-start items-center text-xl">9 PM</h4>
                            </div>
                            <h5 className="h-full w-1/4 flex justify-center items-center text-lg">17°</h5>
                        </div>


                        {/* 8 */}
                        <div className="h-15 w-70 flex justify-between border-2 border-red-600 rounded-2xl">
                            <div className="h-full w-1/2 flex">
                                <img className="h-full w-1/2 object-contain" src={overcast} alt="" />
                                <h4 className="h-full w-1/2 flex justify-start items-center text-xl">1 0PM</h4>
                            </div>
                            <h5 className="h-full w-1/4 flex justify-center items-center text-lg">17°</h5>
                        </div>

                    </div>
                </div>

                {/* HOURLY FORECAST DROPDOWN */}
                <div className={`row-start-5 row-end-9 col-start-10 col-end-12 bg-gray-200 border-4 border-purple-600 opacity-50 z-10
                    ${isHourlyForecastDropdown ? 'hidden' : ''}
                `}></div>

            </div>
        </>
    )
}

export default Home;