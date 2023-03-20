import { FaLaptopMedical } from "react-icons/fa";
import Primary2Button from "../components/shared/Primary2Button";
import { CgDanger } from "react-icons/cg";
import { useEffect, useState } from "react";
import { AiOutlineUserAdd, AiOutlineLogin } from "react-icons/ai";
import Importer from "../helpers/Importer";
import { FaFileExport } from "react-icons/fa";
import DeleteAccountButton from "../components/Settings/DeleteAccountButton";
import ContentSubmission from "../components/Settings/ContentSubmission";
import { IoIosWarning } from "react-icons/io";
import Backend from "../helpers/Backend";
import ResetAccountButton from "../components/Settings/ResetAccountButton";
import MyProfile from "../components/Settings/MyProfile";

let email = "";

const jwtToken = localStorage.getItem("token");

if (jwtToken && jwtToken !== "") {
  email = JSON.parse(atob(jwtToken.split(".")[1])).email;
}

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

function AccountSettings() {
  const [warnings, setWarnings] = useState([]);
  const [contentWarnings, setContentWarnings] = useState([]);
  const [hideMessage, setHideMessage] = useState("");
  const exportString = "https://moviementor.app/?in=" + Importer.export();

  useEffect(() => {
    getSubmissions(setWarnings, setContentWarnings, setHideMessage);
  }, []);

  return (
    <div className="relative mb-10 mt-32 h-fit lg:mx-20">
      <div className="rounded-lg bg-dark-1 py-4 px-8 text-light-1">
        {email !== "" && <MyProfile email={email} />}
        <div>
          <div className="flex items-center text-2xl">
            <FaLaptopMedical className="mr-2" />
            <h1 className="font-bold">Add Device</h1>
          </div>
          <div className="flex">
            <img
              className="h-32 w-32 rounded-full border-4 border-dark-3"
              src=""
              alt="Avatar"
            />
            <div className="flex flex-col">
              <h2>
                Scan the QR code or type in the URL below to transfer content
                warning settings between devices.{" "}
                <span className="underline">This does not log you in.</span>
              </h2>
              <p>{exportString}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center text-2xl">
            <CgDanger className="mr-2" />
            <h1 className="font-bold">Danger Zone</h1>
          </div>
          {email !== "" ? (
            <div className="grid grid-cols-3">
              <div className="flex flex-col items-center">
                <h2 className="font-bold">Reset Settings</h2>
                <p className="text-light-3">
                  Forget all settings, including your list of content warnings.
                </p>
                <ResetAccountButton />
              </div>
              <div className="flex flex-col items-center">
                <h2 className="font-bold">Download Account Data</h2>
                <p className="text-light-3">
                  Download a JSON text file containing your account data.
                </p>
                <Primary2Button name="Export" icon={<FaFileExport />} />
              </div>
              <div className="flex flex-col items-center">
                <h2 className="font-bold">Delete Account</h2>
                <p className="text-light-3">Permanently delete your account.</p>
                <DeleteAccountButton />
              </div>
            </div>
          ) : (
            <div className="w-full items-center">
              <div className="flex flex-col items-center">
                <h2 className="font-bold">Reset Settings</h2>
                <p className="text-light-3">
                  Forget all settings, including your list of content warnings.
                </p>
                <ResetAccountButton />
              </div>
            </div>
          )}
        </div>
        {email !== "" ? (
          <div>
            <div className="flex items-center text-2xl">
              <IoIosWarning className="mr-2" />
              <h1 className="font-bold">My Submissions</h1>
            </div>
            <div className="mt-2 flex grid grid-cols-1 gap-4">
              {contentWarnings.map((contentWarning: any, index: any) => (
                <ContentSubmission
                  flag={true}
                  cw={contentWarning}
                  key={index}
                />
              ))}
              {warnings.map((warning: any, index: any) => (
                <ContentSubmission flag={false} cw={warning} key={index} />
              ))}
            </div>
            {hideMessage.length !== 0 && (
              <p className="mt-2 text-light-3">{hideMessage}</p>
            )}
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold">
              Want to make movie-watching safer with us?
            </h1>
            <div className="flex justify-between">
              <h2 className="text-2xl">Join MovieMentor as a contributor.</h2>
              <div className="flex">
                <Primary2Button
                  name="Register"
                  icon={<AiOutlineUserAdd />}
                  href="/account/register"
                />
                <p className="mx-2">or</p>
                <Primary2Button
                  name="Log In"
                  icon={<AiOutlineLogin />}
                  href="/account/signin"
                />
              </div>
            </div>
            <p className="text-light-3">
              (This does not effect, or enchance, searching features.)
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountSettings;
