import { BsFillPersonFill } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineSave } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";
import WarningButton from "./WarningButton";
import Primary2Button from "../shared/Primary2Button";
import TextBox from "../shared/TextBox";
import md5 from "js-md5";
import Backend from "../../helpers/Backend";

function MyProfile(props: any) {
  const [isEditing, setIsEditing] = useState(false);
  const [buttonText, setButtonText] = useState("Edit");
  const [buttonIcon, setButtonIcon] = useState(<FiEdit2 />);
  const [pfp, setPfp] = useState(
    <CgProfile className="h-32 w-32 rounded-full" />
  );
  const password = "*********";
  const email = props.email;
  const [editedEmail, setEditedEmail] = useState("");
  const [editedPassword, setEditedPassword] = useState(password);
  const [message, setMessage] = useState("");

  const handleEdit = () => {
    if (isEditing) {
      if (editedEmail !== email || editedPassword !== password) {
        let userInfo = {};
        if (editedEmail !== email && editedPassword !== password) {
          userInfo = {
            email: editedEmail,
            password: editedPassword,
          };
        } else if (editedEmail !== email) {
          userInfo = {
            email: editedEmail,
          };
        } else if (editedPassword !== password) {
          userInfo = {
            password: editedPassword,
          };
        }
        Backend.postRequest("user", userInfo)
          .then((resp: any) => {
            const data: number = resp.statusCode;
            if (data < 400) {
              setMessage(resp.jsonResponse.response);
            }
            setIsEditing(false);
          })
          .catch((err: any) => {
            console.log(
              "Could not connect to the server. Please try again in a few minutes!"
            );
          });
      } else {
        setIsEditing(false);
        setButtonText("Edit");
        setButtonIcon(<FiEdit2 />);
        setMessage("No changes to user information.");
      }
    } else {
      setMessage("");
      setEditedEmail(email);
      setEditedPassword(password);
      setIsEditing(true);
      setButtonText("Save");
      setButtonIcon(<AiOutlineSave />);
    }
  };

  useEffect(() => {
    const gravatarHash = md5(email.trim().toLowerCase());
    const gravatarUrl = `https://www.gravatar.com/avatar/${gravatarHash}?d=retro`;
    setPfp(
      <img
        className="h-32 w-32 rounded-full border-4 border-light-3 dark:border-dark-3"
        src={gravatarUrl}
        alt="Avatar"
      />
    );
  }, [email]);

  const logOut = () => {
    localStorage.removeItem("token");
    window.location.pathname = "/";
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between">
        <div className="flex items-center text-2xl">
          <BsFillPersonFill className="mr-2" />
          <h1 className="font-bold">My Profile</h1>
        </div>
        <div className="flex">
          <Primary2Button
            name={buttonText}
            icon={buttonIcon}
            handleClick={handleEdit}
          />
          <WarningButton name="Log Out" handleClick={logOut} />
        </div>
      </div>
      <div className="mt-2 sm:flex">
        {pfp}
        <div className="flex sm:ml-4">
          <div className="flex flex-col px-2 text-dark-1 dark:text-light-3">
            <h2 className="py-4">Email</h2>
            <h2>Password</h2>
          </div>
          {!isEditing ? (
            <div className="flex flex-col">
              <p className="py-4">{email}</p>
              <p>{password}</p>
              {message.length !== 0 && (
                <p className="pt-4 text-warning">{message}</p>
              )}
            </div>
          ) : (
            <form onSubmit={handleEdit} className="flex flex-col">
              <TextBox
                defaultValue={editedEmail}
                handleChange={(e: any) => setEditedEmail(e.target.value)}
              />
              <TextBox
                defaultValue={editedPassword}
                handleChange={(e: any) => setEditedPassword(e.target.value)}
              />
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
