// References
// https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript

import { BsFillPlayFill } from "react-icons/bs";

function StreamingButton(props: any) {
  const handleClick = () => {
    console.log(`${streamer} Button was clicked`);
  };

  const streamer = props.streamer.split(" - ")[0];
  let streamType = props.streamer.split(" - ")[1];
  if (streamType === "flatrate") streamType = "Stream";
  else streamType = streamType.charAt(0).toUpperCase() + streamType.slice(1);

  return (
    <button
      onClick={handleClick}
      className={`w-15 transition ease-in-out delay-100 bg-dark-3 text-light-1 border-2 border-dark-2 hover:border-light-1 rounded-lg`}
    >
      <div className="flex items-center px-1">
        {props.icon && (
          <img
            className="rounded-lg object-scale-down h-8 my-2 mr-2"
            src={props.icon}
            alt="logo"
          />
        )}
        <div className="font-sans text-sm font-bold mx-4   my-2">
          {streamType}
        </div>
        <BsFillPlayFill className="text-3xl" />
      </div>
    </button>
  );
}

export default StreamingButton;
