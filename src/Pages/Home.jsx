
function Home(){

    return(
        <>
            <div id="home-page-borders" className="h-screen w-screen grid grid-rows-12 grid-cols-12 border-2 border-red-600">
                <div className="row-start-1 row-end-2 col-start-2 col-end-4 border-2 border-red-600">Weather Now</div>
                <div className="row-start-1 row-end-2 col-start-11 col-end-12 border-2 border-red-600">Units</div>
                <div className="row-start-2 row-end-3 col-start-4 col-end-11 border-2 border-red-600">How's the Sky Looking Today?</div>
                <input className="row-start-3 row-end-4 col-start-4 col-end-11 border-2 border-red-600" type="text" />
                <div className="row-start-4 row-end-8 col-start-2 col-end-10 border-2 border-red-600">How's the Sky Looking Today?</div>
                <div className="row-start-8 row-end-10 col-start-2 col-end-10 border-2 border-red-600">How's the Sky Looking Today?</div>
                <div className="row-start-10 row-end-13 col-start-2 col-end-10 border-2 border-red-600">How's the Sky Looking Today?</div>
                <div className="row-start-4 row-end-13 col-start-10 col-end-12 border-2 border-red-600">How's the Sky Looking Today?</div>

            </div>
        </>
    )
}

export default Home;