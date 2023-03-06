// References
// https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript

function StreamingButton(props: any) {
  const streamer = props.streamer.split(" - ")[0];
  let streamType = props.streamer.split(" - ")[1];
  if (streamType === "flatrate") streamType = "Stream";
  else streamType = streamType.charAt(0).toUpperCase() + streamType.slice(1);

  return (
    <div
      className={`w-28 rounded-lg border border-transparent bg-dark-3 text-light-1 transition delay-100 ease-in-out`}
    >
      <div className="flex items-center px-1">
        {props.icon && (
          <img
            className="my-2 h-8 rounded-lg object-scale-down"
            src={props.icon}
            alt={streamer}
          />
        )}
        <div className="my-2 ml-4 font-sans text-sm font-bold">
          {streamType}
        </div>
      </div>
    </div>
  );
}

export default StreamingButton;
