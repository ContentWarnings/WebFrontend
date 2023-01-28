import Primary2Button from "../components/shared/Primary2Button";
import { FaSearch } from "react-icons/fa";

function Home() {
  const handleClick = () => {
    console.log("Button was clicked");
  };

  return (
    <div className="items-center">
      <Primary2Button name="Search" icon={<FaSearch />} onClick={handleClick} />
    </div>
  );
}

export default Home;
