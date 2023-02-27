import Primary2Button from "../shared/Primary2Button";
import TextBox from "../shared/TextBox";
import MMHappy from "../layout/assets/MMHappy";
import Backend from "../../helpers/Backend";
import URLHelper from "../../helpers/URLHelper";
import {useState, useEffect} from 'react';

function PasswordResetCommit() {
  const [email] = useState(URLHelper.populateDefaultFromURL("email", ""));
  const [verEl, setVerEl] = useState(<div></div>);

  const token = URLHelper.populateDefaultFromURL("token", "");

  const verifyElGen = (title: string, text: string, link?: string, link_txt?: string) => {
    let btn_link: string = "/";
    if (link && link !== "")
      btn_link = link;

    let btn_link_txt: string = "Go Home";
    if (link_txt && link_txt !== "")
      btn_link_txt = link_txt;

    return (
      <div className="flex dark-1 bg-dark-1 rounded-lg p-4 text-white text-center flex-col">
        <div className="w-full">
          <MMHappy className="m-auto"/>
        </div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="m-2">{text}</p>
        <div className="flex m-auto" id="owo">
          <Primary2Button name={btn_link_txt} href={btn_link}/>
        </div>
      </div>
    );
  }

  // Reset password logic.
  const resetPassword = (e: any) => {
    e.preventDefault();
    const form_data: any = document.forms[1];
    const password: string = form_data.password.value;

    let data = {
      "email": email,
      "new_password": password,
      "code": token
    }

    Backend.postRequest("user/password-reset-op", data).then((resp: any) => {
      const data: number = resp.statusCode;

      if (data < 400) {
          setVerEl(verifyElGen("Password Reset!", "Your password was successfully changed.", "/account/signin/", "Log In"));
      } else {
          setVerEl(verifyElGen("Error", "Something went wrong. Please confirm the URL is the same from the verification email.", window.location.href, "Go Back"));
      }
    }).catch((err: any) => {
        setVerEl(verifyElGen("Error", "Could not connect to the server. Please try again in a few minutes!", window.location.href, "Go Back"));
    });
  }

  useEffect(() => {
    // Check if we can reset the password
    if (email !== "" && token !== "")
      setVerEl(
        <div className="flex dark-1 bg-dark-1 rounded-lg p-4 text-white text-center flex-col">
          <div className="w-full">
            <MMHappy className="m-auto"/>
          </div>
          <h1 className="text-2xl font-bold">Reset Password</h1>
          <h2 className="text-lg">{email}</h2>
          <form onSubmit={resetPassword} id="auth">
            <TextBox id="password" placeholder="Password" type="password"/>
            <Primary2Button name="Change Password " role="button"/>
          </form>
        </div>
      );
    else
      setVerEl(verifyElGen("Error", "Something went wrong. Please confirm the URL is the same from the verification email."));
  }, ['email', 'resetPassword', 'token'])


  return (
    <div className="mx-auto max-w-sm w-full mt-32">
      {verEl}
    </div>
  );
}

export default PasswordResetCommit;