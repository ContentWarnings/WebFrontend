// References
// https://daily-dev-tips.com/posts/center-elements-with-tailwind-css/

import { useEffect, useState } from "react";
import StarRating from "../components/MovieEntry/StarRating";
import FlaggedContent from "../components/MovieEntry/FlaggedContent";
import StreamingButton from "../components/MovieEntry/StreamingButton";
import Backend from "../helpers/Backend";
import { FaSpinner } from "react-icons/fa";
import GenreCell from "../components/shared/GenreCell";
import CWCell from "../components/shared/CWCell";
import ContentWarningButton from "../components/MovieEntry/ContentWarningButton";
import AddContentWarning from "../components/MovieEntry/AddContentWarning";

async function getData(
  setIsLoading: any,
  setMovieId: any,
  setTitle: any,
  setPoster: any,
  setDate: any,
  setTime: any,
  setRating: any,
  setGenres: any,
  setWarnings: any,
  setContentWarnings: any,
  setMpa: any,
  setStreaming: any,
  setSummary: any
) {
  let path = window.location.pathname;
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

  // Logic that takes CWs and sorts them 'normal' and 'flagged'.
  // If 'hide', block render of movie.
  for (let i = 0; i < all_triggers.length; i++) {
    if (prefs[all_triggers[i].name] === "flag") {
      flagged_triggers.push(all_triggers[i]);
    } else {
      normal_triggers.push(all_triggers[i]);
    }
  }

  let date: Date = new Date(data.release);
  let opts: Object = { year: "numeric", month: "short", day: "numeric" };
  let date_str: string = date.toLocaleDateString("en-us", opts);
  if (date_str === "Invalid Date") date_str = "Unknown Release Date";

  let hours: Number = Math.floor(data.runtime / 60);
  let mins: Number = data.runtime % 60;

  let time_str = mins + "min";
  if (hours > 0) time_str = hours + "hr " + time_str;
  if (time_str === "0min") time_str = "";
  else time_str = " - " + time_str;

  setMovieId(data.id);
  setTitle(data.title);
  setSummary(data.overview);
  setPoster(data.img);
  setGenres(data.genres);
  setDate(date_str);
  setRating(data.rating / 2);
  if (data.streaming_info !== null) setStreaming(data.streaming_info.providers);
  setWarnings(normal_triggers);
  setContentWarnings(flagged_triggers);
  setTime(time_str);
  setMpa(data.mpa);
  setIsLoading(false);
}

function MovieEntry() {
  const [movieId, setMovieId] = useState("");
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState();
  const [date, setDate] = useState("Date Not Found");
  const [time, setTime] = useState("Time Unknown");
  const [rating, setRating] = useState(null);
  const [flagged, setFlagged] = useState(false);
  const [genres, setGenres] = useState([]);
  const [warnings, setWarnings] = useState([]);
  const [contentWarnings, setContentWarnings] = useState([]);
  const [summary, setSummary] = useState("Plot Unknown");
  const [isLoading, setIsLoading] = useState(true);
  const [streaming, setStreaming] = useState([]);
  const [mpa, setMpa] = useState("Unknown");

  useEffect(() => {
    if (contentWarnings.length > 0) setFlagged(true);
  }, [contentWarnings]);

  // Initial load of data
  if (isLoading) {
    getData(
      setIsLoading,
      setMovieId,
      setTitle,
      setPoster,
      setDate,
      setTime,
      setRating,
      setGenres,
      setWarnings,
      setContentWarnings,
      setMpa,
      setStreaming,
      setSummary
    );
    return (
      <div className={"grid h-screen place-items-center"}>
        <FaSpinner className="inline animate-spin text-center text-6xl text-light-1" />
      </div>
    );
  } else {
    return (
      <div className="relative mb-10 mt-32 h-fit lg:mx-20">
        <div className="flex">
          <img
            src={poster}
            className="mr-10 h-fit w-60 rounded-lg"
            alt={title}
          />
          <div className="flex flex-col">
            <h1 className="text-6xl font-bold text-light-1">{title}</h1>
            <h2 className="my-3 text-2xl text-light-3">
              {date}
              {time}
            </h2>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre, index: any) => (
                <GenreCell genre={genre} key={index} />
              ))}
            </div>
            <StarRating value={rating} />
            {contentWarnings.length === 0 && warnings.length === 0 ? (
              <h3 className="text-light-1">
                There are no content warnings associated with this film in our
                database.
                <br />
                Please proceed with caution while watching this movie.
              </h3>
            ) : (
              <div className="mt-2 flex flex-wrap gap-2">
                {contentWarnings.map((contentWarning: any, index: any) => (
                  <CWCell flag={true} genre={contentWarning.name} key={index} />
                ))}
                {warnings.map((warning: any, index: any) => (
                  <CWCell genre={warning.name} key={index} />
                ))}
              </div>
            )}
            <div className="my-2 flex items-center">
              {mpa !== "Unknown" && (
                <div className="mr-5 w-fit border-4 border-light-1 p-1 text-3xl font-bold text-light-1">
                  {mpa}
                </div>
              )}
              {flagged && <FlaggedContent />}
            </div>
          </div>
        </div>
        <div className="mt-4">
          {streaming.length !== 0 && (
            <h3 className="text-sm text-light-3">
              Streaming Information Provided by JustWatch
            </h3>
          )}
          <div className="mt-2 flex grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9">
            {streaming.map((streamer: any, index: any) => (
              <StreamingButton
                streamer={streamer[0]}
                icon={streamer[1]}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="mt-5 text-light-1">
          <h1 className="text-3xl font-bold">Summary</h1>
          <p className="text-1xl">{summary}</p>
        </div>
        <div className="my-5 flex justify-between text-light-1">
          <h1 className="text-3xl font-bold">Content Warnings</h1>
          <AddContentWarning movieId={movieId} />
        </div>
        <div className="flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {contentWarnings.map((contentWarning: any, index: any) => (
            <ContentWarningButton flag={true} cw={contentWarning} key={index} />
          ))}
          {warnings.map((warning: any, index: any) => (
            <ContentWarningButton flag={false} cw={warning} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default MovieEntry;
