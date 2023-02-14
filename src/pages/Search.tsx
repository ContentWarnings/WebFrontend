import SearchBar from "../components/Search/SearchBar";
import MovieCell from "../components/Search/MovieCell";

function Search() {
    return (
        <div className="mx-auto max-w-3xl mt-20">
          <SearchBar />
          <div id="results" className="text-white">
              <MovieCell
                  name="Movie Name"
                  desc="This is the story of a fake movie."
                  img="https://www.themoviedb.org/t/p/w440_and_h660_face/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg"
                  genres={["Action", "Adventure"]}
                  normalTriggers={["Trigger 1", "Trigger 2"]}
                  flaggedTriggers={["Trigger 3"]}
                  releaseDate="2000-02-24T00:00:00.000Z"
                  runtime={139}
              />
          </div>
        </div>
    )
}

export default Search