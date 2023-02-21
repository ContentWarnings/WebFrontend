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
    <div data-testid="search-bar" className="mx-auto max-w-2xl mt-20">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="items-center py-2">
          <input
            type="text"
            className="appearance-none border-none w-full text-gray-700 py-2 px-4 leading-tight focus:outline-none rounded-lg bg-light-2"
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
