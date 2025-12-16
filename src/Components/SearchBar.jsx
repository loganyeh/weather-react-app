import { search } from "../assets/images";
import colors from "../assets/colors";
import { useState, useContext } from "react";
import { FetchWeather } from "../API/api";
import { MyContext } from "../Context/MyContext";

function SearchBar({ handleDropdown }) {
  const {queryData, setQueryData, data, setData} = useContext(MyContext);
  const [inputValue, setInputValue] = useState(``);
  const [queryLatitude, setQueryLatitude] = useState();
  const [queryLongitude, setQueryLongitude] = useState();

  const handleInput = (event) => {
    setInputValue(event.target.value);
  }

  async function handleSearch(){
      try {
        const data = await FetchWeather(inputValue);
        setQueryLatitude(data?.latitude);
        setQueryLongitude(data?.longitude);
        const data2 = await FetchWeather(inputValue);
        console.log(data2);
        setQueryData(data2);
        setInputValue("");
      } catch (error) {
            
      }
  }

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
            onChange={handleInput}
            value={inputValue}
            className="h-full w-11/12 text-white cursor-pointer rounded-r-2xl"
            type="text"
            placeholder="Search for a place..."
          />
        </div>
        <button
          onClick={handleSearch}
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
