import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

function StreamingButton(props: any) {
  const handleClick = () => {
    console.log(`${props.link} Button was clicked`);
  };

  return (
    <button
      onClick={handleClick}
      className={`h-12 w-36 transition ease-in-out delay-100 bg-dark-3 rounded border-1 border-dark-2 hover:border-light-1 text-light-1 py-1 px-2 rounded-lg`}
    >
      <div className="flex items-center px-1">
        {props.icon && (
          <img
            className="object-scale-down h-8 w-4 mr-2"
            src={props.icon}
            alt="logo"
          />
        )}
        <div className="px-1 font-sans font-bold">{props.streamType}</div>
        <BsFillPlayFill />
      </div>
    </button>
  );
}

export default StreamingButton;
