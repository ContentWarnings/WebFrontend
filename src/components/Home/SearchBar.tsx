import Primary2Button from "../shared/Primary2Button";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

function SearchBar() {
  const [text, setText] = useState("");

  const handleClick = () => {
    console.log("Button was clicked");
  };

  const handleChange = (e: any) => setText(e.target.value);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (text !== "") {
      window.location.href = `/search?q=${text}`;
    }
  };

  return (
    <div data-testid="search-bar" className="mx-auto mt-20 max-w-2xl">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="items-center py-2">
          <input
            type="text"
            className="w-full appearance-none rounded-lg border-2 border-light-3 bg-light-2 py-2 px-4 leading-tight text-gray-700 focus:outline-secondary-2 dark:border-none dark:focus:outline-none"
            placeholder="Search movies..."
            value={text}
            onChange={handleChange}
          />
          <div className="m-6"></div>
          {/* Make sure to add hover colors!!! */}
          <Primary2Button
            name="Search"
            icon={<FaSearch />}
            handleClick={handleClick}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
