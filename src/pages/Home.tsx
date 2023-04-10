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
        <div className="mt-48 justify-center md:mt-32">
          <h1 className="text-6xl font-bold text-dark-3 dark:text-light-1">
            Find movies for
            <span className="italic"> you</span>
          </h1>
          <a
            href="about/"
            className="text-xs italic text-light-3 underline transition delay-100 ease-in-out hover:text-dark-3 dark:text-light-3 hover:dark:text-light-1"
          >
            What is this?
          </a>
        </div>
        <SearchBar />
      </div>
      <TrendingMovieSection />
      <GenresSection />
    </div>
  );
}

export default Home;
