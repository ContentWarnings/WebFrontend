import SearchBar from "../components/Home/SearchBar";
import TrendingMovieSection from "../components/Home/TrendingMoviesSection";
import GenresSection from "../components/Home/GenresSection";
// import GenreButton from "../components/Home/GenreButton";

function Home() {
  return (
    <div className="relative px-6 h-screen">
      <div className="text-center">
        {/* Header */}
        <h1 className="text-6xl text-light-1 font-bold mt-20">
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
