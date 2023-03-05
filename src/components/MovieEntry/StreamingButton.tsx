// References
// https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript

import { BsFillPlayFill } from "react-icons/bs";

function StreamingButton(props: any) {
  const streamer = props.streamer.split(" - ")[0];
  let streamType = props.streamer.split(" - ")[1];
  if (streamType === "flatrate") streamType = "Stream";
  else streamType = streamType.charAt(0).toUpperCase() + streamType.slice(1);

  return (
    <div
      className={`w-15 rounded-lg border border-transparent bg-dark-3 text-light-1 transition delay-100 ease-in-out`}
    >
      <div className="flex items-center px-1">
        {props.icon && (
          <img
            className="my-2 mr-2 h-8 rounded-lg object-scale-down"
            src={props.icon}
            alt="logo"
          />
        )}
        <div className="mx-4 my-2 font-sans text-sm font-bold">
          {streamType}
        </div>
        <BsFillPlayFill className="text-3xl" />
      </div>
    </div>
  );
}

export default StreamingButton;
