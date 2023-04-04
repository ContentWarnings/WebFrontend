// References
// https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
// https://stackoverflow.com/questions/64709508/display-text-when-hovering-over-an-icon-using-react-icon-library

import Tooltip from "@mui/material/Tooltip";

function StreamingButton(props: any) {
  const streamer = props.streamer.split(" - ")[0];
  let streamType = props.streamer.split(" - ")[1];
  if (streamType === "flatrate") streamType = "Stream";
  else streamType = streamType.charAt(0).toUpperCase() + streamType.slice(1);

  return (
    <Tooltip title={streamer} placement="top" arrow={true}>
      <div
        className={`w-28 rounded-lg border border-transparent bg-light-2 text-dark-3 transition delay-100 ease-in-out dark:bg-dark-3 dark:text-light-1`}
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
    </Tooltip>
  );
}

export default StreamingButton;
