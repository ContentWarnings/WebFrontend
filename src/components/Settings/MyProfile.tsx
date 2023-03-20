import { BsFillPersonFill } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineSave } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";
import WarningButton from "./WarningButton";
import Primary2Button from "../shared/Primary2Button";
import TextBox from "../shared/TextBox";
import md5 from "js-md5";

function MyProfile(props: any) {
  const [isEditing, setIsEditing] = useState(false);
  const [buttonText, setButtonText] = useState("Edit");
  const [buttonIcon, setButtonIcon] = useState(<FiEdit2 />);
  const [pfp, setPfp] = useState(
    <CgProfile className="h-32 w-32 rounded-full" />
  );
  let password = "************";
  const [email, setEmail] = useState("");

  const handleEdit = () => {
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

  useEffect(() => {
    setEmail(props.email);
    const gravatarHash = md5(email.trim().toLowerCase());
    const gravatarUrl = `https://www.gravatar.com/avatar/${gravatarHash}?d=retro`;
    setPfp(
      <img
        className="h-32 w-32 rounded-full border-4 border-dark-3"
        src={gravatarUrl}
        alt="Avatar"
      />
    );
  }, [props.email, email]);

  const logOut = () => {
    localStorage.removeItem("token");
    window.location.pathname = "/settings/profile";
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between">
        <div className="flex items-center text-2xl">
          <BsFillPersonFill className="mr-2" />
          <h1 className="font-bold">My Profile</h1>
        </div>
        <div>
          <Primary2Button
            name={buttonText}
            icon={buttonIcon}
            handleClick={handleEdit}
          />
          <WarningButton name="Log Out" handleClick={logOut} />
        </div>
      </div>
      <div className="flex">
        {pfp}
        <div className="flex h-32 flex-col justify-between text-light-3">
          <h2>Email</h2>
          <h2>Password</h2>
        </div>
        {!isEditing ? (
          <div className="flex h-32 flex-col justify-between">
            <p>{email}</p>
            <p>{password}</p>
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
  );
}

export default MyProfile;
