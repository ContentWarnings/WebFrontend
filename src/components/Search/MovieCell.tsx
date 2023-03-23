// References
// https://stackoverflow.com/a/64253626
// www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/

import GenreCell from "../shared/GenreCell";
import CWCell from "../shared/CWCell";
import { FaExclamationTriangle } from "react-icons/fa";

function MovieCell(props: any) {
  let date: Date = new Date(props.releaseDate);
  let opts: Object = { year: "numeric", month: "short", day: "numeric" };
  let date_str: string = date.toLocaleDateString("en-us", opts);
  if (date_str === "Invalid Date") date_str = "Unknown Release Date";

  let hours: Number = Math.floor(props.runtime / 60);
  let mins: Number = props.runtime % 60;

  let time_str = mins + "min";
  if (hours > 0) time_str = hours + "hr " + time_str;
  if (time_str === "0min") time_str = "";
  else time_str = " - " + time_str;

  let genre_list = [];
  for (let i = 0; i < props.genres.length; i++) {
    genre_list.push(<GenreCell genre={props.genres[i]} />);
  }

  let cw_list = [];
  const uniqueFlaggedTriggers = props.flaggedTriggers.filter(
    (trigger: any, index: any) => {
      return props.flaggedTriggers.indexOf(trigger) === index;
    }
  );
  for (let i = 0; i < uniqueFlaggedTriggers.length; i++) {
    cw_list.push(<CWCell flag={true} genre={uniqueFlaggedTriggers[i]} />);
  }
  const uniqueNormalTriggers = props.normalTriggers.filter(
    (trigger: any, index: any) => {
      return props.normalTriggers.indexOf(trigger) === index;
    }
  );
  for (let i = 0; i < uniqueNormalTriggers.length; i++) {
    cw_list.push(<CWCell genre={uniqueNormalTriggers[i]} />);
  }

  let if_we_have_mpa = "";
  if (props.mpa && props.mpa !== "Unknown") {
    if_we_have_mpa = " - " + props.mpa;
  }

  let exclaim = <span></span>;
  if (props.flaggedTriggers.length !== 0)
    exclaim = (
      <FaExclamationTriangle className="mr-3 inline -translate-y-0.5" />
    );

  return (
    <a
      data-testid="movie-cell"
      href={"/movie/" + props.id}
      className="my-5 flex rounded-md border-2 border-transparent transition delay-100 ease-in-out hover:border-white"
    >
      <div className="w-36 flex-none pr-5">
        <img
          className="rounded-md"
          src={props.img}
          alt={"Movie poster for " + props.name}
        />
      </div>
      <div className="flex-auto">
        <h2 className="text-2xl">
          {exclaim}
          {props.name}
        </h2>
        <p className="opacity-75">
          {date_str}
          {time_str}
          {if_we_have_mpa}
        </p>
        <div className="flex flex-wrap pt-1">{genre_list}</div>
        <div className="flex flex-wrap pt-1">{cw_list}</div>
        <p
          style={{
            maxWidth: "100%",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {props.desc}
        </p>
      </div>
    </a>
  );
}

export default MovieCell;
