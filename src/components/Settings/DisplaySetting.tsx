import { useContext } from "react";
import { FaPalette, FaSun, FaMoon, FaLaptop } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";

function DisplaySetting() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="mb-4">
      <div className="flex items-center text-2xl">
        <FaPalette className="mr-2" />
        <h1 className="font-bold">Display</h1>
      </div>
      <div className="mt-2 flex w-3/4 justify-between font-bold">
        <label className="flex items-center">
          <input
            type="radio"
            name="display"
            value="system"
            className="mr-1 h-6 w-6"
            checked={theme === "system"}
            onChange={(e) => setTheme(e.target.value)}
          />
          <FaLaptop className="mr-2 h-6 w-6" />
          System Settings
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="display"
            value="light"
            className="mr-1 h-6 w-6"
            checked={theme === "light"}
            onChange={(e) => setTheme(e.target.value)}
          />
          <FaSun className="mr-2 h-6 w-6" />
          Light Mode
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="display"
            value="dark"
            className="mr-1 h-6 w-6"
            checked={theme === "dark"}
            onChange={(e) => setTheme(e.target.value)}
          />
          <FaMoon className="mr-2 h-6 w-6" />
          Dark Mode
        </label>
      </div>
    </div>
  );
}

export default DisplaySetting;
