import colors from "../assets/colors";
import Day from "./Day";

function HourlyForecastDropdown({ bool }) {
  return (
    <>
      <div
        className={`flex flex-col justify-around items-center ml-20 mr-8 row-start-5 row-end-9 col-start-10 col-end-12 bg-gray-200 text-white opacity-100 z-10 rounded-lg ${
          bool ? "hidden" : ""
        }`}
        style={{
          backgroundColor: colors.neutral800,
          border: `2px solid ${colors.neutral600}`,
        }}
      >
        {/* <h3 className="h-10 w-48 flex justify-start items-center pl-4 bg-gray-500 hover:border-1 hover:border-white rounded-lg cursor-pointer">
            Tuesday
          </h3> */}
        <Day day={"Sunday"} />
        <Day day={"Monday"} />
        <Day day={"Tuesday"} />
        <Day day={"Wednesday"} />
        <Day day={"Thursday"} />
        <Day day={"Friday"} />
        <Day day={"Saturday"} />
      </div>
    </>
  );
}

export default HourlyForecastDropdown;
