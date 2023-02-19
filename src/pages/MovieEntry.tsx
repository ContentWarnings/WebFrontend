import { useState } from "react";
import StarRating from "../components/MovieEntry/StarRating";
import FlaggedContent from "../components/MovieEntry/FlaggedContent";
import StreamingButton from "../components/MovieEntry/StreamingButton";

function MovieEntry() {
  const [title, setTitle] = useState("DC League of Super-Pets");
  const [poster, setPoster] = useState(
    "https://m.media-amazon.com/images/M/MV5BMTI2MTY5Y2UtZDljZC00ZjcxLWI2ZTItMGQzNjY0MmM0NzI4XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg"
  );
  const [date, setDate] = useState("July 27, 2022");
  const [time, setTime] = useState("1 hr 24min");
  const [rating, setRating] = useState(3.5);
  const [flagged, setFlagged] = useState(true);
  const [genres, setGenres] = useState([
    "Genre 1",
    "Genre 2",
    "Genre 3",
    "Genre 4",
  ]);
  const [contentWarnings, setContentWarnings] = useState([
    "Trigger 1",
    "Trigger 2",
    "Trigger 3",
  ]);
  const [summary, setSummary] = useState(
    "When Superman and the rest of the Justice League are kidnapped, Krypto the Super-Dog must convince a rag-tag shelter pack - Ace the hound, PB the potbellied pig, Merton the turtle and Chip the squirrel - to master their own newfound powers."
  );

  return (
    <div className="relative lg:mx-20 h-screen mb-10 mt-32">
      <div className="flex">
        <img
          src={poster}
          className="h-96 w-60 rounded-lg hover:border-2 mr-10"
          alt={"Name"}
        />
        <div className="flex flex-col">
          <h1 className="text-7xl text-light-1 font-bold">{title}</h1>
          <h2 className="text-3xl text-light-3 my-3">
            {date} - {time}
          </h2>
          <div className="flex grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3">
            {genres.map((genre) => (
              <h6 className="text-white">{genre}</h6>
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
      <StreamingButton
        link="https://netflix.com"
        icon="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png"
        streamType="Stream"
      />
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

export default MovieEntry;
