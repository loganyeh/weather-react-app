import colors from "../assets/colors";

function SearchBarDropdown({ bool }) {
  return (
    <>
      <div
        className={`flex flex-col justify-around ml-22 mr-72 mt-2 row-start-4 row-end-7 col-start-4 col-end-11 bg-gray-200 border-4 border-purple-600 opacity-100 z-10 rounded-3xl overflow-visible
                    ${bool ? "hidden" : ""}
                `}
        style={{
          backgroundColor: colors.neutral700,
          border: `1px solid ${colors.neutral300}`,
        }}
      >
        <h3 className="h-3/12 w-176 flex items-center mx-4 mt-2 pl-4 bg-gray-500 rounded-lg hover:border-2 hover:border-white cursor-pointer">
          City Name
        </h3>
        <h3 className="h-3/12 w-176 flex items-center mx-4 mt-2 pl-4 rounded-lg hover:border-2 hover:border-white cursor-pointer">
          City Name
        </h3>
        <h3 className="h-3/12 w-176 flex items-center mx-4 mt-2 pl-4 rounded-lg hover:border-2 hover:border-white cursor-pointer">
          City Name
        </h3>
        <h3 className="h-3/12 w-176 flex items-center mx-4 mt-2 pl-4 rounded-lg hover:border-2 hover:border-white cursor-pointer">
          City Name
        </h3>
      </div>
    </>
  );
}

export default SearchBarDropdown;
