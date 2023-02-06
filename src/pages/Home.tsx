import SearchBar from "../components/Home/SearchBar";
import Primary2Button from "../components/shared/Primary2Button";

function Home() {
  const handleClick = () => {
    console.log("Button was clicked");
  };

  return (
    <div className="relative px-6 h-screen">
      <div className="text-center">
        <h1 className="text-6xl text-light-1 font-bold mt-20">
          Find movies for
          <span className="italic"> you</span>
        </h1>
        <div className="mx-auto max-w-2xl mt-20">
          <SearchBar />
        </div>
      </div>
      <div className="flex justify-between mt-20 px-10">
        <h1 className="text-2xl text-light-1 font-bold">
          Trending Movies For You
        </h1>
        <Primary2Button name="View More" handleClick={handleClick} />
      </div>
    </div>
  );
}

export default Home;
