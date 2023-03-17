import { BsFillPersonFill } from "react-icons/bs";
import { FaLaptopMedical } from "react-icons/fa";
import Primary2Button from "../components/shared/Primary2Button";
import { CgDanger, CgProfile } from "react-icons/cg";
import md5 from "js-md5";
import { useState } from "react";
import TextBox from "../components/shared/TextBox";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineSave, AiFillDelete } from "react-icons/ai";
import Importer from "../helpers/Importer";
import { FaFileExport } from "react-icons/fa";
import WarningButton from "../components/Settings/WarningButton";
import { BiReset } from "react-icons/bi";

let pfp = <CgProfile className="h-32 w-32 rounded-full" />;
let email = "";
let password = "************";
const jwtToken = localStorage.getItem("token");

if (jwtToken && jwtToken !== "") {
  email = JSON.parse(atob(jwtToken.split(".")[1])).email;
  const gravatarHash = md5(email.trim().toLowerCase());
  const gravatarUrl = `https://www.gravatar.com/avatar/${gravatarHash}?d=retro`;
  pfp = (
    <img
      className="h-32 w-32 rounded-full border-4 border-dark-3"
      src={gravatarUrl}
      alt="Avatar"
    />
  );
}

function Settings() {
  const [isEditing, setIsEditing] = useState(false);
  const [buttonText, setButtonText] = useState("Edit");
  const [buttonIcon, setButtonIcon] = useState(<FiEdit2 />);
  const exportString = "https://moviementor.app/in=" + Importer.export();

  const handleClick = () => {
    if (isEditing) {
      setIsEditing(false);
      setButtonText("Edit");
      setButtonIcon(<FiEdit2 />);
      // window.location.pathname;
    } else {
      setIsEditing(true);
      setButtonText("Save");
      setButtonIcon(<AiOutlineSave />);
    }
  };

  return (
    <div className="relative mb-10 mt-32 h-fit lg:mx-20">
      <div className="rounded-lg bg-dark-1 py-4 px-8 text-light-1">
        {email !== "" && (
          <div>
            <div className="flex justify-between">
              <div className="flex items-center text-2xl">
                <BsFillPersonFill className="mr-2" />
                <h1 className="font-bold">My Profile</h1>
              </div>
              <Primary2Button
                name={buttonText}
                icon={buttonIcon}
                handleClick={handleClick}
              />
            </div>
            <div className="flex">
              {pfp}
              <div className="flex h-32 flex-col justify-between text-light-3">
                <h2>Email</h2>
                <h2>Password</h2>
                <h2>Two-Factor</h2>
              </div>
              {!isEditing ? (
                <div className="flex h-32 flex-col justify-between">
                  <p>{email}</p>
                  <p>{password}</p>
                  <p>Two-Factor</p>
                </div>
              ) : (
                <div className="flex h-32 flex-col justify-between">
                  <TextBox defaultValue={email} />
                  <TextBox defaultValue={password} />
                  <p>Two-Factor</p>
                </div>
              )}
            </div>
          </div>
        )}
        <div>
          <div className="flex items-center text-2xl">
            <FaLaptopMedical className="mr-2" />
            <h1 className="font-bold">Add Device</h1>
          </div>
          <div className="flex">
            {pfp}
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
          <div className="grid grid-cols-3">
            <div className="flex flex-col items-center">
              <h2 className="font-bold">Reset Settings</h2>
              <p className="text-light-3">
                Forget all settings, including your list of content warnings.
              </p>
              <WarningButton name="Reset" icon={<BiReset />} />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="font-bold">Download Account Data</h2>
              <p className="text-light-3">
                Download a JSON text file containing your account data.
              </p>
              <Primary2Button name="Export" icon={<FaFileExport />} />
            </div>
            <div className="flex flex-col items-center">
              <h2>Delete Account</h2>
              <p className="text-light-3">Permanently delete your account.</p>
              <WarningButton name="Delete" icon={<AiFillDelete />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
