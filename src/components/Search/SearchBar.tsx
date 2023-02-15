import Primary2Button from "../shared/Primary2Button";
import Dropdown from "../shared/Dropdown";
import { FaSearch, FaFilter } from "react-icons/fa";
import { useState } from "react";

function SearchBar() {
  const [text, setText] = useState("");

  const handleClick = () => {
    console.log("Button was clicked");
  };

  const handleFilterClick = () => {
    let filterDiv = document.getElementById("filters");

    if (filterDiv !== null) {
      if (filterDiv.className.indexOf("hidden") !== -1) {
        filterDiv.className = filterDiv.className.replace("hidden", "block");
      } else {
        filterDiv.className = filterDiv.className.replace("block", "hidden");
      }
    }
  };

  const handleChange = (e: any) => setText(e.target.value);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (text !== "") {
      // @todo - search for that movie on search page
      setText("");
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="flex items-center py-2 box-border">
        <input
          type="text"
          className="appearance-none bg-light-2 border-none w-2/3 text-gray-700 py-2 px-4 leading-tight focus:outline-none rounded-lg flex-auto"
          placeholder="Search movies..."
          value={text}
          onChange={handleChange}
        />
        <span className="flex-none ml-2 mr-2">
          <Primary2Button
            name="Search"
            icon={<FaSearch />}
            handleClick={handleClick}
          />
          <Primary2Button
            name="Filter"
            icon={<FaFilter />}
            handleClick={handleFilterClick}
          />
        </span>
      </div>
      <div id="filters" className="w-full hidden bg-primary-2 rounded-lg p-2 text-white">
        <Dropdown
          id="genre"
          options={[
              {"display":"All Genres","value":"Disregard"},
              {"display":"Action","value":"Action"},
              {"display":"Adventure","value":"Adventure"},
              {"display":"Animation","value":"Animation"},
              {"display":"Comedy","value":"Comedy"},
              {"display":"Crime","value":"Crime"},
              {"display":"Documentary","value":"Documentary"},
              {"display":"Drama","value":"Drama"},
              {"display":"Family","value":"Family"},
              {"display":"Fantasy","value":"Fantasy"},
              {"display":"History","value":"History"},
              {"display":"Horror","value":"Horror"},
              {"display":"Music","value":"Music"},
              {"display":"Mystery","value":"Mystery"},
              {"display":"Romance","value":"Romance"},
              {"display":"Science Fiction","value":"Science Fiction"},
              {"display":"TV Movie","value":"TV Movie"},
              {"display":"Thriller","value":"Thriller"},
              {"display":"War","value":"War"},
              {"display":"Western","value":"Western"}
          ]}
          label="Filter by Genre:"
        />
        <Dropdown
          id="sort"
          options={[
            {"display": "Title", "value": "title"},
            {"display": "Release Date", "value": "release"},
            {"display": "Content Rating (MPA)", "value": "mpa"},
            {"display": "Reviews", "value": "rating"}
          ]}
          label="Sort By:"
        />
      </div>
    </form>
  );
}

export default SearchBar;
