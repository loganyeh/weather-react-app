import colors from "../assets/colors";
import { useState } from "react";

function UnitsDropdown({ bool }) {
    const [isMPH, setIsMPH] = useState(false);

    const handleIsMPH = () => {
      setIsMPH(prev => !prev);
      console.log(isMPH);
    }

    return(
        <>
        <div
          className={`flex flex-col justify-around row-start-2 row-end-7 col-start-10 col-end-12 ml-16 font-sans bg-gray-200 opacity-100 z-10 rounded-3xl ${
            bool ? "hidden" : ""
          }`}
          style={{
            backgroundColor: colors.neutral800,
            border: `2px solid ${colors.neutral600}`,
          }}
        >
          <div className="h-12 w-full flex flex-col justify-center items-center">
            <h3 className="h-10 w-58 flex justify-start items-center pl-3 bg-gray-500 hover:border-1 hover:border-white rounded-lg hover:border-1 hover:border-white cursor-pointer">
              Switch to Imperial
            </h3>
          </div>
          <div className="h-28 w-full flex flex-col justify-around items-center border-b-1 border-gray-700">
            <h3 className="h-7 w-58 flex items-center pl-3 text-base text-gray-400 rounded-lg">
              Temperature
            </h3>
            <h4 className="h-9 w-58 flex justify-between items-center pl-2 text-lg bg-gray-500 rounded-lg hover:border-1 hover:border-white cursor-pointer">
              Celsius (°C)<span className="mr-4 text-3xl text-white">O</span>
            </h4>
            <h4 className="h-9 w-58 flex justify-start items-center pl-2 text-lg rounded-lg hover:border-1 hover:border-white cursor-pointer">
              Fahrenheit (°F)
            </h4>
          </div>
          <div className="h-28 w-full flex flex-col justify-around items-center border-b-1 border-gray-700">
            <h3 className="h-7 w-58 flex items-center pl-3 text-base text-gray-400 rounded-lg">
              Wind Speed
            </h3>
            <h4 onClick={handleIsMPH} className={`h-9 w-58 flex justify-between items-center pl-2 text-lg items-center rounded-lg hover:border-1 hover:border-white cursor-pointer
              ${isMPH ? `` : `bg-gray-500`}
            `}>
              km/h<span className={`${isMPH ? `hidden` : ``} mr-4 text-3xl text-white`}>O</span>
            </h4>
            <h4 onClick={handleIsMPH} className={`h-9 w-58 flex justify-between items-center pl-2 text-lg items-center rounded-lg hover:border-1 hover:border-white cursor-pointer
              ${isMPH ? `bg-gray-500` : ``}
            `}>
              mph<span className={`${isMPH ? `` : `hidden`} mr-4 text-3xl text-white`}>O</span>
            </h4>
          </div>
          <div className="h-28 w-full flex flex-col justify-around items-center">
            <h3 className="h-7 w-58 flex items-center pl-3 text-base text-gray-400 rounded-lg">
              Precipitation
            </h3>
            <h4 className="h-9 w-58 flex justify-between items-center pl-2 bg-gray-500 text-lg items-center rounded-lg hover:border-1 hover:border-white cursor-pointer">
              Millimeters (mm)
              <span className="mr-4 text-3xl text-white">O</span>
            </h4>
            <h4 className="h-9 w-58 flex justify-start items-center pl-2 text-lg rounded-lg hover:border-1 hover:border-white cursor-pointer">
              Inches (in)
            </h4>
          </div>
        </div>
        </>
    )
}

export default UnitsDropdown;