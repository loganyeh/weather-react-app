import "./App.css";
import Home from "./Pages/Home";
import { MyContext } from "./Context/MyContext";
import { useState } from "react";

function App() {
  const [page, setPage] = useState([]);
  const [queryData, setQueryData] = useState([]);
  const [data, setData] = useState(null);
  const [isMPH, setIsMPH] = useState(false);
  const [isImperial, setIsImperial] = useState(false);
  const [isFahrenheit, setIsFahrenheit] = useState(false);
  const [isInches, setIsInches] = useState(false);

  return (
    <>
      <MyContext.Provider value={{page, setPage, queryData, setQueryData, data, setData, isMPH, setIsMPH, isImperial, setIsImperial, isFahrenheit, setIsFahrenheit, isInches, setIsInches}}>
        <Home />
      </MyContext.Provider>
    </>
  );
}

export default App;
