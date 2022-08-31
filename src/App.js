import React, { useState, useEffect } from "react";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import "./App.css"

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchData, setFetchData] = useState([]);
  let { info, results } = fetchData;   

  let rickAndMortyApi = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    // IFE function
    (async function () {
      let data = await fetch(rickAndMortyApi).then((res) => res.json());
      setFetchData(data);
    })();
  }, [rickAndMortyApi]);
  return (
    <div className="rickAndMortyApp">
      <h1>Rick and Morty</h1>
      <Filters />
      <div>
        <div className="Cards">
          <Cards results={results} />
        </div>
      </div>
    </div>
  );
}

export default App;
