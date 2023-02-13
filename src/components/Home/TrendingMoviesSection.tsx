import Primary2Button from "../shared/Primary2Button";
import MovieButton from "./MovieButton";
import { useState } from "react";

function TrendingMoviesSection(props: any) {
  const [movies, setMovies] = useState([]);

  const handleClick = () => {
    console.log("Button was clicked");
  };

  return (
    <div className="px-10">
      <div className="flex justify-between mt-20 mb-2">
        <h1 className="text-2xl text-light-1 font-bold">
          Trending Movies For You
        </h1>
        <Primary2Button name="View More" handleClick={handleClick} />
      </div>
      <div className="flex grid gap-3 grid-cols-1 xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-3">
        {/* {movies.map((movie) => (
          <MovieButton name={movie.name} link={movie.link} image={movie.image} />
        ))} */}
        <MovieButton name="DC League of Super-Pets" />
        <MovieButton name="DC League of Super-Pets" />
        <MovieButton name="DC League of Super-Pets" />
        <MovieButton name="DC League of Super-Pets" />
        <MovieButton name="DC League of Super-Pets" />
        <MovieButton name="DC League of Super-Pets" />
        <MovieButton name="DC League of Super-Pets" />
      </div>
    </div>
  );
}

export default TrendingMoviesSection;
