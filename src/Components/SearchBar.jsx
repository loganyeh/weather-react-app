import { search } from "../assets/images";
import colors from "../assets/colors";

function SearchBar({ handleDropdown }) {
  return (
    <>
      <div className="flex justify-between items-end pl-22 pr-26 pt-5 row-start-3 row-end-4 col-start-4 col-end-11">
        <div
          className="h-full w-4/5 flex justify-center items-center border-2 border-black rounded-2xl"
          style={{
            backgroundColor: colors.neutral700,
            border: `2px solid ${colors.neutral300}`,
          }}
        >
          <img
            onClick={handleDropdown}
            className="h-1/2 w-1/12 rounded-l-2xl object-contain cursor-pointer"
            src={search}
            alt=""
          />
          <input
            className="h-full w-11/12 text-white cursor-pointer rounded-r-2xl"
            type="text"
            placeholder="Search for a place..."
          />
        </div>
        <button
          className="h-full w-1/6 rounded-2xl text-xl hover:border-2 hover:border-blue-900 cursor-pointer"
          style={{ backgroundColor: colors.blue500 }}
        >
          Search
        </button>
      </div>
    </>
  );
}

export default SearchBar;
