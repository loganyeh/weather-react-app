import { bgTodayLarge, bgTodaySmall, favicon, checkmark, drizzle, dropdown, error, fog,
    loading, overcast, partlyCloudy, rain, retry, search, snow, storm, sunny, units, logo } from "../assets/images";

function Home(){

    return(
        <>
            <div id="home-page-borders" className="h-screen w-screen grid grid-rows-12 grid-cols-12 font-mono border-2 border-red-600">

                {/* WEATHER NOW - TOP LEFT */}
                <div className="flex row-start-1 row-end-2 col-start-2 col-end-4 border-2 border-red-600">
                    <img className="h-full w-1/2 flex justify-center items-center border-2 border-red-600" src={logo} alt="weather app logo" />
                    <h1 className="h-full w-1/2 flex justify-center items-center border-2 border-red-600">Weather Now</h1>
                </div>

                {/* UNITS */}
                <div className="row-start-1 row-end-2 col-start-11 col-end-12 border-2 border-red-600">
                    <h2 className="h-full w-full flex justify-center items-center">Units</h2>
                </div>

                {/* TITLE */}
                <div className="flex justify-center items-center row-start-2 row-end-3 col-start-4 col-end-11 border-2 border-red-600">
                    <h1 className="text-6xl border-2 border-red-600 whitespace-nowrap overflow-visible">How's the Sky Looking Today?</h1>
                </div>

                {/* SEARCH BAR AND SUBMIT BUTTON */}
                <div className="flex justify-between pl-22 pr-26 py-3 row-start-3 row-end-4 col-start-4 col-end-11 border-2 border-red-600">                    
                    <input className="h-full w-4/5 border-2 border-black rounded-2xl" type="text" placeholder="Search for a place..." />
                    <button className="h-full w-1/6 border-2 border-black rounded-2xl hover:bg-gray-300 active:bg-gray-200">Search</button>
                </div>



                <div className="row-start-4 row-end-8 col-start-2 col-end-10 border-2 border-red-600">Berlin, Germany</div>



                <div className="row-start-8 row-end-10 col-start-2 col-end-10 border-2 border-red-600">Feels Like</div>



                <div className="row-start-10 row-end-13 col-start-2 col-end-10 border-2 border-red-600">Daily Forecast</div>



                <div className="row-start-4 row-end-13 col-start-10 col-end-12 border-2 border-red-600">Hourly Forecast</div>




            </div>
        </>
    )
}

export default Home;