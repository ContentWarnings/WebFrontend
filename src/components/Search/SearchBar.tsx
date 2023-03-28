import Primary2Button from "../shared/Primary2Button";
import Dropdown from "../shared/Dropdown";
import { FaSearch, FaFilter } from "react-icons/fa";
import { useState } from "react";
import URLHelper from "../../helpers/URLHelper";

function SearchBar(props: any) {
  // Populate from GET queries
  let text_default: string = URLHelper.populateDefaultFromURL("q", "");
  let genre_default: string = URLHelper.populateDefaultFromURL(
    "genre",
    "Disregard"
  );
  let sort_default: string = URLHelper.populateDefaultFromURL(
    "sort",
    "default_ascending"
  );

  const [text, setText] = useState(text_default);

  const handleClick = () => {
    console.log("Button was clicked");
  };

  const handleChangeGenre = (evt: any) => {
    URLHelper.editURLByParam("genre", evt.target.value);

    props.handleSubmit();
  };

  const handleChangeSort = (evt: any) => {
    URLHelper.editURLByParam("sort", evt.target.value);

    props.handleSubmit();
  };

  const handleFilterClick = (e: any) => {
    e.preventDefault();

    let filterDiv = document.getElementById("filters");

    if (filterDiv !== null) {
      if (filterDiv.className.indexOf("hidden") !== -1) {
        filterDiv.className = filterDiv.className.replace("hidden", "block");
      } else {
        filterDiv.className = filterDiv.className.replace("block", "hidden");
      }
    }
  };

  const handleChange = (evt: any) => {
    URLHelper.editURLByParam("q", evt.target.value);
    setText(evt.target.value);
  };

  return (
    <form
      data-testid="search-bar-2"
      className="w-full"
      onSubmit={props.handleSubmit}
    >
      <div className="box-border flex items-center py-2">
        <input
          type="text"
          className="bg-ligh-1 w-2/3 flex-auto appearance-none rounded-lg border-2 border-light-3 py-2 px-4 leading-tight text-gray-700 focus:outline-primary-2 dark:border-none dark:bg-light-2 dark:focus:outline-none"
          placeholder="Search movies..."
          value={text}
          onChange={handleChange}
        />
        <span className="ml-2 mr-2 flex-none">
          <Primary2Button
            name="Search"
            icon={<FaSearch />}
            handleClick={handleClick}
          />
          <Primary2Button
            name="Filter"
            role="button"
            icon={<FaFilter />}
            handleClick={handleFilterClick}
          />
        </span>
      </div>
      <div
        id="filters"
        className="hidden w-full rounded-lg bg-primary-2 p-2 text-white"
      >
        <Dropdown
          id="genre"
          options={[
            { display: "All Genres", value: "Disregard" },
            { display: "Action", value: "Action" },
            { display: "Adventure", value: "Adventure" },
            { display: "Animation", value: "Animation" },
            { display: "Comedy", value: "Comedy" },
            { display: "Crime", value: "Crime" },
            { display: "Documentary", value: "Documentary" },
            { display: "Drama", value: "Drama" },
            { display: "Family", value: "Family" },
            { display: "Fantasy", value: "Fantasy" },
            { display: "History", value: "History" },
            { display: "Horror", value: "Horror" },
            { display: "Music", value: "Music" },
            { display: "Mystery", value: "Mystery" },
            { display: "Romance", value: "Romance" },
            { display: "Science Fiction", value: "Science Fiction" },
            { display: "TV Movie", value: "TV Movie" },
            { display: "Thriller", value: "Thriller" },
            { display: "War", value: "War" },
            { display: "Western", value: "Western" },
          ]}
          label="Filter by Genre:"
          default={genre_default}
          handleChange={handleChangeGenre}
        />
        <Dropdown
          id="sort"
          options={[
            { display: "Default (Ascending)", value: "default_ascending" },
            { display: "Default (Descending)", value: "default_descending" },
            { display: "Title (Ascending)", value: "title_ascending" },
            { display: "Title (Descending)", value: "title_descending" },
            { display: "Release Date (Ascending)", value: "release_ascending" },
            {
              display: "Release Date (Descending)",
              value: "release_descending",
            },
            { display: "Content Rating (Ascending)", value: "mpa_ascending" },
            { display: "Content Rating (Descending)", value: "mpa_descending" },
            { display: "Reviews (Ascending)", value: "rating_ascending" },
            { display: "Reviews (Descending)", value: "rating_descending" },
          ]}
          label="Sort By:"
          default={sort_default}
          handleChange={handleChangeSort}
        />
      </div>
    </form>
  );
}

export default SearchBar;
