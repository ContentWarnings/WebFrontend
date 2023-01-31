import SearchBar from "../components/Home/SearchBar";

function Home() {
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
    </div>
  );
}

export default Home;
