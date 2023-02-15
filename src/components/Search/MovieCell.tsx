import GenreCell from "../shared/GenreCell";
import CWCell from "../shared/CWCell";
import { useState } from "react";

function MovieCell(props: any) {
  const handleClick = () => {
    console.log("Button was clicked");
  };

  let date: Date = new Date(props.releaseDate);
  let opts: Object = { year: 'numeric', month: 'short', day: 'numeric' };
  let date_str = date.toLocaleDateString("en-us", opts);

  let hours: Number = Math.floor(props.runtime / 60);
  let mins: Number = props.runtime % 60;

  let time_str = mins + "min";
  if (hours > 0)
    time_str = hours + "hr " + time_str;

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

  return (
    <a href={"/movie/" + props.id} className="flex transition ease-in-out delay-100 hover:opacity-60 my-5">
      <div className="flex-none w-36 pr-5">
        <img className="rounded-md" src={props.img} alt={"Movie poster for " + props.name}/>
      </div>
      <div className="flex-auto">
        <h2 className="text-2xl">{props.name}</h2>
        <p className="opacity-75">{date_str} - {time_str}</p>
        <div className="flex py-1">
          {genre_list}
        </div>
        <div className="flex py-1">
          {cw_list}
        </div>
        <p>{props.desc}</p>
      </div>
    </a>
  );
}

export default MovieCell;
