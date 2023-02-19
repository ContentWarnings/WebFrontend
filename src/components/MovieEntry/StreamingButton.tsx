import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

function StreamingButton(props: any) {
  const handleClick = () => {
    console.log(`${props.link} Button was clicked`);
  };

  return (
    <button
      onClick={handleClick}
      className={`transition ease-in-out delay-100 bg-dark-3 text-light-1 border-2 border-dark-2 hover:border-light-1 rounded-lg`}
    >
      <div className="flex items-center px-1">
        {props.icon && (
          <img
            className="object-scale-down h-5 my-1 mr-2"
            src={props.icon}
            alt="logo"
          />
        )}
        <div className="font-sans text-sm font-bold my-2">
          {props.streamType}
        </div>
        <BsFillPlayFill className="text-3xl" />
      </div>
    </button>
  );
}

export default StreamingButton;
