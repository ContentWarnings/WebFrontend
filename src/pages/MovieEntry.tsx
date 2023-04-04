// References
// https://daily-dev-tips.com/posts/center-elements-with-tailwind-css/
// https://codingbeautydev.com/blog/javascript-filter-duplicate-objects-from-array/

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
  if (path.indexOf("&") !== -1) path = path.split("&")[0];
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
        <FaSpinner className="inline animate-spin text-center text-6xl text-light-3 dark:text-light-1" />
      </div>
    );
  } else {
    return (
      <div className="relative mx-4 mb-10 mt-36 sm:mt-32 lg:mx-20">
        <img
          src={poster}
          className="m-auto block w-60 rounded-lg md:hidden"
          alt={title}
        />
        <div className="flex">
          <img
            src={poster}
            className="mr-10 hidden w-60 rounded-lg md:block"
            alt={title}
          />
          <div className="flex flex-col">
            <h1 className="text-6xl font-bold text-dark-3 dark:text-light-1">
              {title}
            </h1>
            <h2 className="my-3 text-2xl text-dark-1 dark:text-light-3">
              {date}
              {time}
            </h2>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre, index: any) => (
                <GenreCell genre={genre} key={index} />
              ))}
            </div>
            <StarRating value={rating} />
            <div className="mt-2 flex flex-wrap gap-2">
              {contentWarnings
                .filter(
                  (obj: any, index: any) =>
                    contentWarnings.findIndex(
                      (item: any) => item.name === obj.name
                    ) === index
                )
                .map((contentWarning: any, index: any) => (
                  <CWCell flag={true} genre={contentWarning.name} key={index} />
                ))}
              {warnings
                .filter(
                  (obj: any, index: any) =>
                    warnings.findIndex(
                      (item: any) => item.name === obj.name
                    ) === index
                )
                .map((warning: any, index: any) => (
                  <CWCell genre={warning.name} key={index} />
                ))}
            </div>
            <div className="my-2 flex items-center">
              {mpa !== "Unknown" && (
                <div className="mr-5 border-4 border-dark-3 p-1 text-3xl font-bold text-dark-3 dark:border-light-1 dark:text-light-1">
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
          <div className="mt-2 flex flex-wrap gap-2">
            {streaming.map((streamer: any, index: any) => (
              <StreamingButton
                streamer={streamer[0]}
                icon={streamer[1]}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="mt-5 text-dark-3 dark:text-light-1">
          <h1 className="text-3xl font-bold">Summary</h1>
          <p>{summary}</p>
        </div>
        <div className="my-5 flex justify-between text-dark-3 dark:text-light-1">
          <h1 className="text-3xl font-bold">Content Warnings</h1>
          {localStorage.getItem("token") !== undefined &&
            localStorage.getItem("token") !== null &&
            localStorage.getItem("token") !== "" && (
              <AddContentWarning movieId={movieId} />
            )}
        </div>
        <div className="flex grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {contentWarnings.map((contentWarning: any, index: any) => (
            <ContentWarningButton flag={true} cw={contentWarning} key={index} />
          ))}
          {warnings.map((warning: any, index: any) => (
            <ContentWarningButton flag={false} cw={warning} key={index} />
          ))}
        </div>
        {contentWarnings.length === 0 && warnings.length === 0 && (
          <h3 className="text-dark-3 dark:text-light-1">
            There are no content warnings associated with this film in our
            database.
            <br />
            Please proceed with caution while watching this movie.
          </h3>
        )}
      </div>
    );
  }
}

export default MovieEntry;
