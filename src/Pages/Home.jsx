import { bgTodayLarge, bgTodaySmall, favicon, checkmark, drizzle, dropdown, error, fog,
    loading, overcast, partlyCloudy, rain, retry, search, snow, storm, sunny, units, logo } from "../assets/images";
import { neutral900, neutral800, neutral700, neutral600, neutral300, neutral200, neutral0, orange500, blue500, blue700 } from '../assets/colors.js';
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
                    <h2 className="h-full w-full flex justify-center items-center hover:bg-gray-300 active:bg-gray-200 cursor-pointer">⚙️ Units \/</h2>
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
                    <h2 className="flex justify-start pl-2 pt-2 row-start-4 row-end-6 col-start-1 col-end-3 text-md border-2 border-red-600">Tuesday. Aug 5, 2025</h2>
                    <img className="h-full w-full row-start-2 row-end-6 col-start-4 col-end-5 border-2 border-red-600 object-contain" src={sunny} alt="weather-img" />
                    <h1 className="h-full w-full flex justify-center items-center row-start-2 row-end-6 col-start-5 col-end-6 text-9xl border-2 border-red-600">20°</h1>
                </div>


                {/* CITY STATE WEATHER DETAILS */}
                <div className="flex justify-between row-start-8 row-end-10 col-start-2 col-end-10 border-2 border-red-600">
                    <div className="h-full w-72 border-2 border-red-600">
                        <h3 className="flex items-center pl-2 h-1/2 w-full text-lg border-2 border-black">Feels Like</h3>
                        <h3 className="flex items-center pl-2 h-1/2 w-full text-3xl border-2 border-black">18°</h3>
                    </div>


                    <div className="h-full w-72 border-2 border-red-600">
                        <h3 className="flex items-center pl-2 h-1/2 w-full text-lg border-2 border-black">Humidity</h3>
                        <h3 className="flex items-center pl-2 h-1/2 w-full text-3xl border-2 border-black">46%</h3>
                    </div>


                    <div className="h-full w-72 border-2 border-red-600">
                        <h3 className="flex items-center pl-2 h-1/2 w-full text-lg border-2 border-black">Wind</h3>
                        <h3 className="flex items-center pl-2 h-1/2 w-full text-3xl border-2 border-black">14 km/h</h3>
                    </div>


                    <div className="h-full w-72 border-2 border-red-600">
                        <h3 className="flex items-center pl-2 h-1/2 w-full text-lg border-2 border-black">Precipitation</h3>
                        <h3 className="flex items-center pl-2 h-1/2 w-full text-3xl border-2 border-black">0 mm</h3>
                    </div>
                </div>


                {/* DAILY FORECAST */}
                <div className="flex flex-col justify-around row-start-10 row-end-13 col-start-2 col-end-10 border-2 border-red-600">
                    <h4 className="h-1/12 w-full text-lg border-2 border-red-600">Daily Forecast</h4>

                    <div className="h-10/12 w-full flex justify-between items-end border-2 border-purple-600">
                        
                        {/* 1 */}
                        <div className="h-full w-40 border-2 border-black">
                            <div className="h-1/4 w-full border-2 border-red-600">
                                <h4 className="h-full w-full flex justify-center items-center text-xl">Tue</h4>
                            </div>
                            <div className="h-2/4 w-full border-2 border-red-600">
                                <img className="h-full w-full object-contain" src={rain} alt="" />
                            </div>
                            <div className="h-1/4 w-full flex justify-between items-center border-2 border-red-600">
                                <h5 className="m-2 text-lg border-2 border-blue-600">20°</h5>
                                <h5 className="m-2 text-lg border-2 border-blue-600">14°</h5>
                            </div>
                        </div>

                        {/* 2 */}
                        <div className="h-full w-40 border-2 border-black">
                            <div className="h-1/4 w-full border-2 border-red-600">
                                <h4 className="h-full w-full flex justify-center items-center text-xl">Wed</h4>
                            </div>
                            <div className="h-2/4 w-full border-2 border-red-600">
                                <img className="h-full w-full object-contain" src={drizzle} alt="" />
                            </div>
                            <div className="h-1/4 w-full flex justify-between items-center border-2 border-red-600">
                                <h5 className="m-2 text-lg border-2 border-blue-600">21°</h5>
                                <h5 className="m-2 text-lg border-2 border-blue-600">15°</h5>
                            </div>
                        </div>

                        {/* 3 */}
                        <div className="h-full w-40 border-2 border-black">
                            <div className="h-1/4 w-full border-2 border-red-600">
                                <h4 className="h-full w-full flex justify-center items-center text-xl">Thu</h4>
                            </div>
                            <div className="h-2/4 w-full border-2 border-red-600">
                                <img className="h-full w-full object-contain" src={sunny} alt="" />
                            </div>
                            <div className="h-1/4 w-full flex justify-between items-center border-2 border-red-600">
                                <h5 className="m-2 text-lg border-2 border-blue-600">24°</h5>
                                <h5 className="m-2 text-lg border-2 border-blue-600">14°</h5>
                            </div>
                        </div>

                        {/* 4 */}
                        <div className="h-full w-40 border-2 border-black">
                            <div className="h-1/4 w-full border-2 border-red-600">
                                <h4 className="h-full w-full flex justify-center items-center text-xl">Fri</h4>
                            </div>
                            <div className="h-2/4 w-full border-2 border-red-600">
                                <img className="h-full w-full object-contain" src={partlyCloudy} alt="" />
                            </div>
                            <div className="h-1/4 w-full flex justify-between items-center border-2 border-red-600">
                                <h5 className="m-2 text-lg border-2 border-blue-600">25°</h5>
                                <h5 className="m-2 text-lg border-2 border-blue-600">13°</h5>
                            </div>
                        </div>

                        {/* 5 */}
                        <div className="h-full w-40 border-2 border-black">
                            <div className="h-1/4 w-full border-2 border-red-600">
                                <h4 className="h-full w-full flex justify-center items-center text-xl">Sat</h4>
                            </div>
                            <div className="h-2/4 w-full border-2 border-red-600">
                                <img className="h-full w-full object-contain" src={storm} alt="" />
                            </div>
                            <div className="h-1/4 w-full flex justify-between items-center border-2 border-red-600">
                                <h5 className="m-2 text-lg border-2 border-blue-600">21°</h5>
                                <h5 className="m-2 text-lg border-2 border-blue-600">15°</h5>
                            </div>
                        </div>

                        {/* 6 */}
                        <div className="h-full w-40 border-2 border-black">
                            <div className="h-1/4 w-full border-2 border-red-600">
                                <h4 className="h-full w-full flex justify-center items-center text-xl">Sun</h4>
                            </div>
                            <div className="h-2/4 w-full border-2 border-red-600">
                                <img className="h-full w-full object-contain" src={snow} alt="" />
                            </div>
                            <div className="h-1/4 w-full flex justify-between items-center border-2 border-red-600">
                                <h5 className="m-2 text-lg border-2 border-blue-600">25°</h5>
                                <h5 className="m-2 text-lg border-2 border-blue-600">16°</h5>
                            </div>
                        </div>

                        {/* 7 */}
                        <div className="h-full w-40 border-2 border-black">
                            <div className="h-1/4 w-full border-2 border-red-600">
                                <h4 className="h-full w-full flex justify-center items-center text-xl">Mon</h4>
                            </div>
                            <div className="h-2/4 w-full border-2 border-red-600">
                                <img className="h-full w-full object-contain" src={fog} alt="" />
                            </div>
                            <div className="h-1/4 w-full flex justify-between items-center border-2 border-red-600">
                                <h5 className="m-2 text-lg border-2 border-blue-600">24°</h5>
                                <h5 className="m-2 text-lg border-2 border-blue-600">15°</h5>
                            </div>
                        </div>
                        
                    </div>
                </div>


                {/* HOURLY FORECAST */}
                <div className="flex flex-col row-start-4 row-end-13 col-start-10 col-end-12 border-2 border-red-600">

                    {/* ONE HOUR BLOCK */}
                    <div className="h-24 w-full flex border-2 border-red-600">
                        <h3 className="h-full w-2/3 flex justify-start items-center border-2 border-red-600">Hourly Forecast</h3>
                        <h3 className="h-full w-1/3 flex justify-end items-center border-2 border-red-600 hover:bg-gray-300 active:bg-gray-200 cursor-pointer">Tuesday \/</h3>
                    </div>

                    <div className="h-11/12 w-full flex flex-col justify-around border-2 border-black">

                        {/* 1 */}
                        <div className="h-18 w-full flex justify-between border-2 border-red-600">
                            <div className="h-full w-1/2 flex border-2 border-red-600">
                                <img className="h-full w-1/2 border-2 border-black object-contain" src={overcast} alt="" />
                                <h4 className="h-full w-1/2 flex justify-center items-center text-xl border-2 border-black">3 PM</h4>
                            </div>
                            <h5 className="h-full w-1/4 flex justify-center items-center text-xl border-2 border-red-600">20°</h5>
                        </div>


                        {/* 2 */}
                        <div className="h-18 w-full flex justify-between border-2 border-red-600">
                            <div className="h-full w-1/2 flex border-2 border-red-600">
                                <img className="h-full w-1/2 border-2 border-black object-contain" src={partlyCloudy} alt="" />
                                <h4 className="h-full w-1/2 flex justify-center items-center text-xl border-2 border-black">4 PM</h4>
                            </div>
                            <h5 className="h-full w-1/4 flex justify-center items-center text-xl border-2 border-red-600">20°</h5>
                        </div>
                        

                        {/* 3 */}
                        <div className="h-18 w-full flex justify-between border-2 border-red-600">
                            <div className="h-full w-1/2 flex border-2 border-red-600">
                                <img className="h-full w-1/2 border-2 border-black object-contain" src={sunny} alt="" />
                                <h4 className="h-full w-1/2 flex justify-center items-center text-xl border-2 border-black">5 PM</h4>
                            </div>
                            <h5 className="h-full w-1/4 flex justify-center items-center text-xl border-2 border-red-600">20°</h5>
                        </div>


                        {/* 4 */}
                        <div className="h-18 w-full flex justify-between border-2 border-red-600">
                            <div className="h-full w-1/2 flex border-2 border-red-600">
                                <img className="h-full w-1/2 border-2 border-black object-contain" src={overcast} alt="" />
                                <h4 className="h-full w-1/2 flex justify-center items-center text-xl border-2 border-black">6 PM</h4>
                            </div>
                            <h5 className="h-full w-1/4 flex justify-center items-center text-xl border-2 border-red-600">19°</h5>
                        </div>


                        {/* 5 */}
                        <div className="h-18 w-full flex justify-between border-2 border-red-600">
                            <div className="h-full w-1/2 flex border-2 border-red-600">
                                <img className="h-full w-1/2 border-2 border-black object-contain" src={snow} alt="" />
                                <h4 className="h-full w-1/2 flex justify-center items-center text-xl border-2 border-black">7 PM</h4>
                            </div>
                            <h5 className="h-full w-1/4 flex justify-center items-center text-xl border-2 border-red-600">18°</h5>
                        </div>


                        {/* 6 */}
                        <div className="h-18 w-full flex justify-between border-2 border-red-600">
                            <div className="h-full w-1/2 flex border-2 border-red-600">
                                <img className="h-full w-1/2 border-2 border-black object-contain" src={fog} alt="" />
                                <h4 className="h-full w-1/2 flex justify-center items-center text-xl border-2 border-black">8 PM</h4>
                            </div>
                            <h5 className="h-full w-1/4 flex justify-center items-center text-xl border-2 border-red-600">18°</h5>
                        </div>


                        {/* 7 */}
                        <div className="h-18 w-full flex justify-between border-2 border-red-600">
                            <div className="h-full w-1/2 flex border-2 border-red-600">
                                <img className="h-full w-1/2 border-2 border-black object-contain" src={snow} alt="" />
                                <h4 className="h-full w-1/2 flex justify-center items-center text-xl border-2 border-black">9 PM</h4>
                            </div>
                            <h5 className="h-full w-1/4 flex justify-center items-center text-xl border-2 border-red-600">17°</h5>
                        </div>


                        {/* 8 */}
                        <div className="h-18 w-full flex justify-between border-2 border-red-600">
                            <div className="h-full w-1/2 flex border-2 border-red-600">
                                <img className="h-full w-1/2 border-2 border-black object-contain" src={overcast} alt="" />
                                <h4 className="h-full w-1/2 flex justify-center items-center text-xl border-2 border-black">10 PM</h4>
                            </div>
                            <h5 className="h-full w-1/4 flex justify-center items-center text-xl border-2 border-red-600">17°</h5>
                        </div>



                    </div>


                </div>


                {/* HOURLY FORECAST DROPDOWN */}
                <div className="hidden ow-start-5 row-end-9 col-start-10 col-end-12 border-4 border-purple-600"></div>



            </div>
        </>
    )
}

export default Home;