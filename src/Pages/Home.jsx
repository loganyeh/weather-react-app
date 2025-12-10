import { bgTodayLarge, bgTodaySmall, favicon, checkmark, drizzle, dropdown, error, fog,
    loading, overcast, partlyCloudy, rain, retry, search, snow, storm, sunny, units, logo } from "../assets/images";

function Home(){

    return(
        <>
            <div id="home-page-borders" className="h-screen w-screen grid grid-rows-12 grid-cols-12 border-2 border-red-600">

                {/* WEATHER NOW - TOP LEFT */}
                <div className="flex row-start-1 row-end-2 col-start-2 col-end-4 border-2 border-red-600">
                    <img className="h-full w-1/2 border-2 border-red-600" src={logo} alt="weather app logo" />
                    <h1 className="h-full w-1/2 border-2 border-red-600">Weather Now</h1>
                </div>







                <div className="row-start-1 row-end-2 col-start-11 col-end-12 border-2 border-red-600">Units</div>
                <div className="row-start-2 row-end-3 col-start-4 col-end-11 border-2 border-red-600">How's the Sky Looking Today?</div>
                <input className="row-start-3 row-end-4 col-start-4 col-end-11 border-2 border-red-600" type="text" placeholder="Search for a place..." />
                <div className="row-start-4 row-end-8 col-start-2 col-end-10 border-2 border-red-600">Berlin, Germany</div>
                <div className="row-start-8 row-end-10 col-start-2 col-end-10 border-2 border-red-600">Feels Like</div>
                <div className="row-start-10 row-end-13 col-start-2 col-end-10 border-2 border-red-600">Daily Forecast</div>
                <div className="row-start-4 row-end-13 col-start-10 col-end-12 border-2 border-red-600">Hourly Forecast</div>

            </div>
        </>
    )
}

export default Home;