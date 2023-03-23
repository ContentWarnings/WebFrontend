// References
// https://beta.reactjs.org/reference/react-dom/components/input
// https://gomakethings.com/how-to-update-localstorage-with-vanilla-javascript/

import { useEffect, useState } from "react";
import Backend from "../../helpers/Backend";

function CWInput(props: any) {
  const [message, setMessage] = useState("");
  const [visibility, setVisibility] = useState("");

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

  useEffect(() => {
    // Get the existing data
    const existingList = localStorage.getItem("cw");

    // If no existing data, create an array
    // Otherwise, convert the localStorage string to an array
    const cwList = existingList ? JSON.parse(existingList) : {};

    setVisibility(cwList[`${props.name}`]);
  }, [props.name]);

  useEffect(() => {
    // Get the existing data
    const existingList = localStorage.getItem("cw");

    // If no existing data, create an array
    // Otherwise, convert the localStorage string to an array
    let cwList = existingList ? JSON.parse(existingList) : {};

    cwList[`${props.name}`] = visibility;

    // Save back to localStorage
    localStorage.setItem("cw", JSON.stringify(cwList));
  }, [props.name, visibility]);

  return (
    <div className="border-t-4 border-dark-2 py-2">
      <div className="flex justify-between">
        <div className="w-full">
          <div className="flex">
            <h2 className="text-xl text-light-1">{props.name}</h2>
            <button
              type="button"
              onClick={() => handleClick()}
              className={
                "ml-2 h-min rounded-full border-primary-2 bg-primary-2 px-3 py-1 italic text-dark-3 transition delay-100 ease-in-out hover:border-primary-1 hover:bg-primary-1"
              }
            >
              i
            </button>
          </div>
          {message.length !== 0 && <p className="text-light-3">{message}</p>}
        </div>
        <div className="flex w-full justify-between">
          <label>
            <input
              type="radio"
              name={props.name}
              value="show"
              className="h-6 w-6"
              checked={visibility === "show"}
              onChange={(e) => setVisibility(e.target.value)}
            />
          </label>
          <label>
            <input
              type="radio"
              name={props.name}
              value="flag"
              className="h-6 w-6"
              checked={visibility === "flag"}
              onChange={(e) => setVisibility(e.target.value)}
            />
          </label>
          <label>
            <input
              type="radio"
              name={props.name}
              value="hide"
              className="h-6 w-6"
              checked={visibility === "hide"}
              onChange={(e) => setVisibility(e.target.value)}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default CWInput;
