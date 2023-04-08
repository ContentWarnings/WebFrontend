// References
// https://tailwindui.com/components/marketing/sections/heroes

import SearchBar from "../components/Home/SearchBar";
import TrendingMovieSection from "../components/Home/TrendingMoviesSection";
import GenresSection from "../components/Home/GenresSection";
import { Tooltip } from "@mui/material";

function Home() {
  return (
    <div className="relative mb-10 h-fit px-6">
      <div className="text-center">
        {/* Header */}
        <div className="mt-48 flex items-end justify-center md:mt-32">
          <h1 className="text-6xl font-bold text-dark-3 dark:text-light-1">
            Find movies for
            <span className="italic"> you</span>
          </h1>
          <Tooltip title="What is this?" placement="top">
            <a
              href="about/"
              className={
                "h-min rounded-full border border-transparent bg-primary-2 py-1 px-2 text-xs italic text-dark-3 transition delay-100 ease-in-out hover:bg-primary-1"
              }
            >
              ?
            </a>
          </Tooltip>
        </div>
        <SearchBar />
      </div>
      <TrendingMovieSection />
      <GenresSection />
    </div>
  );
}

export default Home;
