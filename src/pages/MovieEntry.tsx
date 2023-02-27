import { useState } from "react";
import StarRating from "../components/MovieEntry/StarRating";
import FlaggedContent from "../components/MovieEntry/FlaggedContent";
import StreamingButton from "../components/MovieEntry/StreamingButton";
import Backend from "../helpers/Backend";
import { FaSpinner } from "react-icons/fa";
import GenreCell from "../components/shared/CWCell";

async function getData(
  setIsLoading: any,
  setTitle: any,
  setPoster: any,
  setDate: any,
  setRating: any,
  setGenres: any,
  setStreaming: any,
  setSummary: any
) {
  let path = window.location.pathname;
  console.log(path);

  const resp = await Backend.getRequest(path);
  const data = resp.jsonResponse;

  // Get CW preferences
  const prefs_raw = localStorage.getItem("cw");
  let prefs: any = {};
  if (prefs_raw) prefs = JSON.parse(prefs_raw);

  // CW filtering
  let all_triggers = data.cw;
  let normal_triggers = [];
  let flagged_triggers = [];
  let block = false;

  // Logic that takes CWs and sorts them 'normal' and 'flagged'.
  // If 'hide', block render of movie.
  for (let j = 0; j < all_triggers.length; j++) {
    if (prefs[all_triggers[j]] === "flag") {
      flagged_triggers.push(all_triggers[j]);
    } else if (prefs[all_triggers[j]] === "show") {
      normal_triggers.push(all_triggers[j]);
    } else {
      block = true;
    }
  }
  setTitle(data.title);
  setSummary(data.overview);
  setPoster(data.img);
  setGenres(data.genres);
  setDate(data.release);
  setRating(data.rating / 2);
  setStreaming(data.streaming_info.providers);
  // setTime();
  // id={data[i].id}
  // normalTriggers={normal_triggers}
  // flaggedTriggers={flagged_triggers}
  // runtime={data[i].runtime}
  // mpa={data[i].mpa}
  setIsLoading(false);
}

function MovieEntry() {
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState();
  const [date, setDate] = useState("Date Not Found");
  const [time, setTime] = useState("Time Unknown");
  const [rating, setRating] = useState(null);
  const [flagged, setFlagged] = useState(false);
  const [genres, setGenres] = useState([]);
  const [contentWarnings, setContentWarnings] = useState([]);
  const [summary, setSummary] = useState("Plot Unknown");
  const [isLoading, setIsLoading] = useState(true);
  const [streaming, setStreaming] = useState([]);

  // Initial load of data
  if (isLoading) {
    getData(
      setIsLoading,
      setTitle,
      setPoster,
      setDate,
      setRating,
      setGenres,
      setStreaming,
      setSummary
    );
    return (
      <div className={"w-full h-screen"}>
        <FaSpinner className="mt-40 inline text-center text-white text-6xl animate-spin" />
      </div>
    );
  } else {
    return (
      <div className="relative lg:mx-20 h-fit mb-10 mt-32">
        <div className="flex">
          <img
            src={poster}
            className="h-fit w-60 rounded-lg hover:border-2 mr-10"
            alt={title}
          />
          <div className="flex flex-col">
            <h1 className="text-7xl text-light-1 font-bold">{title}</h1>
            <h2 className="text-3xl text-light-3 my-3">
              {date} - {time}
            </h2>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <GenreCell genre={genre} />
              ))}
            </div>
            <StarRating value={rating} />
            {contentWarnings.length === 0 ? (
              <h6 className="text-white">
                There are no content warnings associated with this film in our
                database.
                <br />
                Please proceed with caution while watching this movie.
              </h6>
            ) : (
              <div className="flex grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3">
                {contentWarnings.map((contentWarning) => (
                  <h6 className="text-white">{contentWarning}</h6>
                ))}
              </div>
            )}
            {flagged && <FlaggedContent />}
          </div>
        </div>
        <div className="mt-6 flex">
          <div className="flex flex-wrap gap-2">
            {streaming.map((streamer) => (
              <StreamingButton icon={streamer[1]} streamType="Stream" />
            ))}
          </div>
        </div>

        <div className="mt-5 text-light-1">
          <h1 className="text-3xl font-bold">Summary</h1>
          <p className="text-1xl">{summary}</p>
        </div>
        <div className="mt-5 text-light-1">
          <h1 className="text-3xl font-bold">Content Warnings</h1>
        </div>
      </div>
    );
  }
}

export default MovieEntry;
