import Primary2Button from "../components/shared/Primary2Button";
import { FaSearch } from "react-icons/fa";

function Home() {
  const handleClick = () => {
    console.log("Button was clicked");
  };

  return (
    <div className="">
      <div className="text-6xl text-light-1 font-bold">Find movies for you</div>
      <Primary2Button name="Search" icon={<FaSearch />} onClick={handleClick} />
    </div>
  );
}

export default Home;
