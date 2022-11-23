import { React, useState } from "react";
import List from "../List";
import Navbar from "../components/nav";
import { Routes,Route } from "react-router-dom";

function Search() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (y) => {
    //convert input text to lower case
    var lowerCase = y.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <>
   <Navbar/>
    <div className="searchb">
      <div className="search-box">
        <input type="text"
            placeholder="Search Movies" 
          onChange={inputHandler}
          id="search-input" />
      </div>
      <div class="searchres">
        <List input={inputText} />
      </div>
    </div>
    </>
  );
}

export default Search;