import Primary2Button from "../shared/Primary2Button";
import TextBox from "../shared/TextBox";
import MMHappy from "../layout/assets/MMHappy";
import Backend from "../../helpers/Backend";
import URLHelper from "../../helpers/URLHelper";
import { FaSpinner } from "react-icons/fa";
import { useState, useEffect } from "react";

function PasswordResetCommit() {
  const [email] = useState(URLHelper.populateDefaultFromURL("email", ""));
  const [verEl, setVerEl] = useState(<div></div>);

  const token = URLHelper.populateDefaultFromURL("token", "");

  const verifyElGen = (
    title: string,
    text: string,
    link?: string,
    linkTxt?: string,
    linkClick?: Function
  ) => {
    let btnLink: string = "/";
    if (link && link !== "") btnLink = link;

    let btnLinkTxt: string = "Go Home";
    if (linkTxt && linkTxt !== "") btnLinkTxt = linkTxt;

    let btnLinkElement = <Primary2Button name={btnLinkTxt} href={btnLink} />;
    if (linkClick) {
      btnLinkElement = (
        <Primary2Button name={btnLinkTxt} handleClick={linkClick} />
      );
    }

    return (
      <div className="flex flex-col rounded-lg bg-light-2 p-4 text-center text-dark-3 dark:bg-dark-1 dark:text-light-1">
        <div className="w-full">
          <MMHappy className="m-auto" />
        </div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="m-2">{text}</p>
        <div className="m-auto flex" id="owo">
          {btnLinkElement}
        </div>
      </div>
    );
  };

  useEffect(() => {
    const spinnyEl = (
      <div className="flex flex-col rounded-lg bg-light-2 p-4 text-center text-dark-3 dark:bg-dark-1 dark:text-light-1">
        <div className="w-full">
          <MMHappy className="m-auto" />
        </div>
        <h1 className="text-2xl font-bold">Reset Password</h1>
        <div className={"width-full m-4 text-center"}>
          <FaSpinner className="inline animate-spin text-2xl text-light-3 dark:text-light-1" />
        </div>
        0
      </div>
    );

    // Init logic
    const initBox = () => {
      // Check if we can reset the password
      if (email !== "" && token !== "")
        setVerEl(
          <div className="flex flex-col rounded-lg bg-light-2 p-4 text-center text-dark-3 dark:bg-dark-1 dark:text-light-1">
            <div className="w-full">
              <MMHappy className="m-auto" />
            </div>
            <h1 className="text-2xl font-bold">Reset Password</h1>
            <h2 className="text-lg">{email}</h2>
            <form onSubmit={resetPassword} id="auth">
              <TextBox
                id="password"
                placeholder="Password"
                type="password"
                autoComplete="new-password"
              />
              <Primary2Button name="Change Password " role="button" />
            </form>
          </div>
        );
      else
        setVerEl(
          verifyElGen(
            "Error",
            "Something went wrong. Please confirm the URL is the same from the verification email."
          )
        );
    };

    // Reset password logic.
    const resetPassword = (e: any) => {
      e.preventDefault();

      setVerEl(spinnyEl);

      const formData: any = document.forms[1];
      const password: string = formData.password.value;

      let data = {
        email: email,
        new_password: password,
        code: token,
      };

      Backend.postRequest("user/password-reset-op", data)
        .then((resp: any) => {
          const data: number = resp.statusCode;

          if (data < 400) {
            setVerEl(
              verifyElGen(
                "Password Reset!",
                "Your password was successfully changed.",
                "/account/signin/",
                "Log In"
              )
            );
          } else {
            setVerEl(
              verifyElGen(
                "Error",
                "Something went wrong. Please confirm the URL is the same from the verification email.",
                window.location.href,
                "Go Back",
                initBox
              )
            );
          }
        })
        .catch((err: any) => {
          setVerEl(
            verifyElGen(
              "Error",
              "Could not connect to the server. Please try again in a few minutes!",
              window.location.href,
              "Go Back",
              initBox
            )
          );
        });
    };

    initBox();
  }, [email, token]);

  return (
    <div
      data-testid="password-reset-commit"
      className="mx-auto mt-48 w-full max-w-sm md:mt-32"
    >
      {verEl}
    </div>
  );
}

export default PasswordResetCommit;
