// References
// https://tailwindui.com/components/marketing/sections/heroes

import SearchBar from "../components/Home/SearchBar";
import TrendingMovieSection from "../components/Home/TrendingMoviesSection";
import GenresSection from "../components/Home/GenresSection";

function Home() {
  return (
    <div className="relative mb-10 h-fit px-6">
      <div className="text-center">
        {/* Header */}
        <h1 className="mt-48 text-6xl font-bold text-dark-3 dark:text-light-1 md:mt-32">
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
