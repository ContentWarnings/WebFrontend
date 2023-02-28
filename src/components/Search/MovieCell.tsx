// References
// https://stackoverflow.com/a/64253626

import GenreCell from "../shared/GenreCell";
import CWCell from "../shared/CWCell";
import { FaExclamationTriangle } from "react-icons/fa";

function MovieCell(props: any) {
  let date: Date = new Date(props.releaseDate);
  let opts: Object = { year: 'numeric', month: 'short', day: 'numeric' };
  let date_str: string = date.toLocaleDateString("en-us", opts);
  if (date_str === "Invalid Date")
    date_str = "Unknown Release Date";

  let hours: Number = Math.floor(props.runtime / 60);
  let mins: Number = props.runtime % 60;

  let time_str = mins + "min";
  if (hours > 0)
    time_str = hours + "hr " + time_str;
  if (time_str === "0min")
    time_str = "";
  else
    time_str = " - " + time_str;

  let genre_list = [];
  for (let i = 0; i < props.genres.length; i++) {
    genre_list.push(<GenreCell genre={props.genres[i]} />);
  }

  let cw_list = [];
  for (let i = 0; i < props.flaggedTriggers.length; i++) {
    cw_list.push(<CWCell flag={true} genre={props.flaggedTriggers[i]} />);
  }
  for (let i = 0; i < props.normalTriggers.length; i++) {
    cw_list.push(<CWCell genre={props.normalTriggers[i]} />);
  }

  let if_we_have_mpa = ""
  if (props.mpa && props.mpa !== "Unknown") {
    if_we_have_mpa = " - " + props.mpa;
  }

  let exclaim = <span></span>;
  if (props.flaggedTriggers.length !== 0)
    exclaim = <FaExclamationTriangle className="inline mr-3 -translate-y-0.5" />;


  return (
    <a data-testid="movie-cell" href={"/movie/" + props.id} className="flex transition ease-in-out delay-100 hover:border-white rounded-md border-2 border-transparent my-5">
      <div className="flex-none w-36 pr-5">
        <img className="rounded-md" src={props.img} alt={"Movie poster for " + props.name}/>
      </div>
      <div className="flex-auto">
        <h2 className="text-2xl">{exclaim}{props.name}</h2>
        <p className="opacity-75">{date_str}{time_str}{if_we_have_mpa}</p>
        <div className="flex flex-wrap pt-1">
          {genre_list}
        </div>
        <div className="flex flex-wrap pt-1">
          {cw_list}
        </div>
        <p style={{
          maxWidth: '100%',
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 2,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>{props.desc}</p>
      </div>
    </a>
  );
}

export default MovieCell;
