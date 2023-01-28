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
      // @todo - search for that movie on search page
      setText("");
    }
  };

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      <div className="items-center py-2">
        <input
          type="text"
          className="appearance-none border-none w-full text-gray-700 py-1 px-4 leading-tight focus:outline-none rounded-lg"
          placeholder="Search movies..."
          value={text}
          onChange={handleChange}
        />
        {/* Make sure to add hover colors!!! */}
        <Primary2Button
          name="Search"
          icon={<FaSearch />}
          onClick={handleClick}
        />
      </div>
    </form>
  );
}

export default SearchBar;
