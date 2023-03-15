// References
// https://beta.reactjs.org/reference/react-dom/components/input

import { useState } from "react";
import Backend from "../../helpers/Backend";

function CWInput(props: any) {
  const [message, setMessage] = useState("");
  const handleClick = () => {
    if (message === "") {
      async function fetchData() {
        let path = `descriptions?name=${props.name}`;
        const resp = await Backend.getRequest(path);
        const desc = resp.jsonResponse.response;
        setMessage(desc);
      }
      fetchData();
    } else setMessage("");
  };

  return (
    <div className="border-t-4 border-dark-2 py-2 ">
      <div className="flex justify-between">
        <div className="flex">
          <h2 className="text-xl text-light-1">{props.name}</h2>
          <button
            type="button"
            onClick={() => handleClick()}
            className={
              "ml-2 rounded-full border-primary-2 bg-primary-2 px-3 italic text-dark-3 transition delay-100 ease-in-out hover:border-primary-1 hover:bg-primary-1"
            }
          >
            i
          </button>
        </div>
        <div className="flex gap-80">
          <label>
            <input
              type="radio"
              name={props.name}
              value="show"
              className="h-4 w-4"
            />
          </label>
          <label>
            <input
              type="radio"
              name={props.name}
              value="warn"
              className="h-4 w-4"
            />
          </label>
          <label>
            <input
              type="radio"
              name={props.name}
              value="hide"
              className="h-4 w-4"
            />
          </label>
        </div>
      </div>
      {message.length !== 0 && <p className="text-light-3">{message}</p>}
    </div>
  );
}

export default CWInput;
