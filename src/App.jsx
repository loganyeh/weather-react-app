import "./App.css";
import Home from "./Pages/Home";
import { MyContext } from "./Context/MyContext";
import { useState } from "react";

function App() {
  const [page, setPage] = useState([]);
  const [queryData, setQueryData] = useState([]);
  // const [data, setData] = useState(null);

  return (
    <>
      <MyContext.Provider value={{page, setPage, queryData, setQueryData}}>
        <Home />
      </MyContext.Provider>
    </>
  );
}

export default App;
