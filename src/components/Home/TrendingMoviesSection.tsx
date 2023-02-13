import Primary2Button from "../shared/Primary2Button";
import MovieButton from "./MovieButton";
import { useState } from "react";

function TrendingMoviesSection(props: any) {
  const [movies, setMovies] = useState([]);

  const handleClick = () => {
    console.log("Button was clicked");
  };

  return (
    <div>
      <div className="flex justify-between mt-20 px-10">
        <h1 className="text-2xl text-light-1 font-bold">
          Trending Movies For You
        </h1>
        <Primary2Button name="View More" handleClick={handleClick} />
      </div>
      <div className="flex grid grid-cols-1 gap-8 xl:grid-cols-4 lg:-grid-cols-3 md:grid-cols-2">
        {/* {movies.map((movie) => (
          <MovieButton name={movie.name} link={movie.link} image={movie.image} />
        ))} */}
        <MovieButton name="DC League of Super-Pets" />
      </div>
    </div>
  );
}

export default TrendingMoviesSection;
