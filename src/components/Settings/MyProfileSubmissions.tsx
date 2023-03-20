import { useEffect, useState } from "react";
import { IoIosWarning } from "react-icons/io";
import Backend from "../../helpers/Backend";
import ContentSubmission from "./ContentSubmission";

async function getSubmissions(
  setWarnings: any,
  setContentWarnings: any,
  setHideMessage: any
) {
  const resp = await Backend.getRequest("user");
  // const data: number = resp.statusCode;
  const data = resp.jsonResponse;

  // Get CW preferences
  const prefs_raw = localStorage.getItem("cw");
  let prefs: any = {};
  if (prefs_raw) prefs = JSON.parse(prefs_raw);
  // CW filtering
  let all_triggers = data.contributions;
  let normal_triggers = [];
  let flagged_triggers = [];

  // Logic that takes CWs and sorts them 'normal' and 'flagged'.
  // If 'hide', block render of movie.
  for (let i = 0; i < all_triggers.length; i++) {
    if (prefs[all_triggers[i].name] === "flag") {
      flagged_triggers.push(all_triggers[i]);
    } else if (prefs[all_triggers[i].name] === "show") {
      normal_triggers.push(all_triggers[i]);
    } else {
      setHideMessage(
        "Your submissions include content warnings which you have marked as hidden. To review these submissions, please change your warning settings."
      );
    }
  }
  setContentWarnings(flagged_triggers);
  setWarnings(normal_triggers);
}

function MyProfileSubmissions() {
  const [warnings, setWarnings] = useState([]);
  const [contentWarnings, setContentWarnings] = useState([]);
  const [hideMessage, setHideMessage] = useState("");

  useEffect(() => {
    getSubmissions(setWarnings, setContentWarnings, setHideMessage);
  }, []);

  return (
    <div>
      <div className="flex items-center text-2xl">
        <IoIosWarning className="mr-2" />
        <h1 className="font-bold">My Submissions</h1>
      </div>
      <div className="mt-2 flex grid grid-cols-1 gap-4">
        {contentWarnings.map((contentWarning: any, index: any) => (
          <ContentSubmission flag={true} cw={contentWarning} key={index} />
        ))}
        {warnings.map((warning: any, index: any) => (
          <ContentSubmission flag={false} cw={warning} key={index} />
        ))}
      </div>
      {hideMessage.length !== 0 && (
        <p className="mt-2 text-light-3">{hideMessage}</p>
      )}
    </div>
  );
}

export default MyProfileSubmissions;
