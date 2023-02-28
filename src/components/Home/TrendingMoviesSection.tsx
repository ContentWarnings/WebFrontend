// References
// - https://linguinecode.com/post/understanding-react-componentdidmount

import Primary2Button from "../shared/Primary2Button";
import MovieButton from "./MovieButton";
import Backend from "../../helpers/Backend";
import { FaSpinner } from "react-icons/fa";
import { useState, useEffect } from "react";

async function getData(setMovies: any) {
  const resp = await Backend.getRequest("/search");
  const data = resp.jsonResponse.results;

  // Get CW data from memory
  const prefsRaw = localStorage.getItem("cw");
  let prefs: any = {};
  if (prefsRaw)
    prefs = JSON.parse(prefsRaw);

  let output = [];

  for (let i = 0; i < data.length; i++) {
    let allTriggers = data[i].cw;
    let block: boolean = false;

    // See if we need to hide this CW...
    for (let j = 0; j < allTriggers.length; j++) {
      if (prefs[allTriggers[j]] !== "show") {
        block = true;
      }
    }

    if (!block) {
      output.push(<MovieButton name={data[i].title} id={data[i].id} image={data[i].img}/>);
    }
  }

  setMovies(output);
}

function TrendingMoviesSection() {
  const spinner = (
    <div className="width-full text-center m-4">
      <FaSpinner className="inline text-white text-2xl animate-spin" />
    </div>
  );
  const [movies, setMovies] = useState([spinner]);

  useEffect(() => {
    getData(setMovies);
  }, [])

  return (
    <div className="px-10">
      <div className="flex justify-between mt-20 mb-2">
        <h1 className="text-2xl text-light-1 font-bold">
          Trending Movies For You
        </h1>
        <Primary2Button href="/search" name="View More" />
      </div>
      <div className={"flex grid gap-3 " + (movies.length > 1 ? "grid-cols-1 xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2" : "")}>
        {movies}
      </div>
    </div>
  );
}

export default TrendingMoviesSection;
