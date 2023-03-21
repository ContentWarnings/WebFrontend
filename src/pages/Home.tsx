import SearchBar from "../components/Home/SearchBar";
import TrendingMovieSection from "../components/Home/TrendingMoviesSection";
import GenresSection from "../components/Home/GenresSection";

function Home() {
  return (
    <div className="relative px-6 h-fit mb-10">
      <div className="text-center">
        {/* Header */}
        <h1 className="text-6xl text-light-1 font-bold mt-48 md:mt-32">
          Find movies for
          <span className="italic"> you</span>
        </h1>
        <SearchBar />
      </div>
      <TrendingMovieSection />
      <GenresSection />
    </div>
  );
}

export default Home;
