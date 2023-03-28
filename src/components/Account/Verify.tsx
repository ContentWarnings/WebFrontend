import Primary2Button from "../shared/Primary2Button";
import MMHappy from "../layout/assets/MMHappy";
import Backend from "../../helpers/Backend";
import URLHelper from "../../helpers/URLHelper";
import { FaSpinner } from "react-icons/fa";
import { useState, useEffect } from "react";

function Verify() {
  const [verEl, setVerEl] = useState(
    <div className={"width-full m-4 text-center"}>
      <FaSpinner className="inline animate-spin text-2xl text-light-3 dark:text-light-1" />
    </div>
  );

  const verifyElGen = (
    title: string,
    text: string,
    link?: string,
    linkTxt?: string
  ) => {
    let btnLink: string = "/";
    if (link && link !== "") btnLink = link;

    let btnLinkTxt: string = "Go Home";
    if (linkTxt && linkTxt !== "") btnLinkTxt = linkTxt;

    return (
      <div className="flex flex-col rounded-lg bg-light-2 p-4 text-center text-dark-3 dark:bg-dark-1 dark:text-light-1">
        <div className="w-full">
          <MMHappy className="m-auto" />
        </div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="m-2">{text}</p>
        <div className="m-auto flex" id="owo">
          <Primary2Button name={btnLinkTxt} href={btnLink} />
        </div>
      </div>
    );
  };

  useEffect(() => {
    // What kind of verification is this?
    const src: string = URLHelper.populateDefaultFromURL("src", "");
    const token: string = URLHelper.populateDefaultFromURL("token", "");
    const email: string = URLHelper.populateDefaultFromURL("email", "");

    // Verification logic.
    if (src !== "" && token !== "") {
      let mode = src.toLowerCase();

      if (mode === "register") {
        let req = {
          email: email,
          code: token,
        };
        Backend.postRequest("user/verify", req)
          .then((resp: any) => {
            const data: number = resp.statusCode;

            if (data < 400) {
              setVerEl(
                verifyElGen(
                  "Account Created!",
                  "Your account is now verified. Welcome to MovieMentor!",
                  "/account/signin?ref=/",
                  "Log In"
                )
              );
            } else {
              setVerEl(
                verifyElGen(
                  "Error",
                  "Something went wrong. Please confirm the URL is the same from the verification email."
                )
              );
            }
          })
          .catch((err: any) => {
            setVerEl(
              verifyElGen(
                "Error",
                "Could not connect to the server. Please try again in a few minutes!"
              )
            );
          });
      } else if (mode === "edit") {
        let req = {
          email: email,
          code: token,
        };
        Backend.postRequest("user/verify", req)
          .then((resp: any) => {
            const data: number = resp.statusCode;

            if (data < 400) {
              setVerEl(
                verifyElGen(
                  "Email Changed!",
                  "Your account's new email is now verified.",
                  "/account/signin?ref=/",
                  "Log In"
                )
              );
            } else {
              setVerEl(
                verifyElGen(
                  "Error",
                  "Something went wrong. Please confirm the URL is the same from the verification email."
                )
              );
            }
          })
          .catch((err: any) => {
            setVerEl(
              verifyElGen(
                "Error",
                "Could not connect to the server. Please try again in a few minutes!"
              )
            );
          });
      } else if (mode === "delete") {
        if (
          !localStorage.getItem("token") ||
          localStorage.getItem("token") === ""
        )
          setVerEl(
            verifyElGen(
              "Not Logged In",
              "Please log in to continue with account deletion.",
              `/account/signin?ref=${
                window.location.pathname +
                encodeURIComponent(window.location.search)
              }`,
              "Log In"
            )
          );

        Backend.getRequest(`user/delete-op?deletion_code=${token}`)
          .then((resp: any) => {
            const data: number = resp.statusCode;

            if (data < 400) {
              localStorage.setItem("token", "");
              setVerEl(
                verifyElGen(
                  "Account Deleted",
                  "It's sad to see you go, but we have deleted your account for you. Thank you for using MovieMentor!"
                )
              );
            } else {
              setVerEl(
                verifyElGen(
                  "Error",
                  "Something went wrong. Please confirm the URL is the same from the verification email."
                )
              );
            }
          })
          .catch((err: any) => {
            setVerEl(
              verifyElGen(
                "Error",
                "Could not connect to the server. Please try again in a few minutes!"
              )
            );
          });
      } else {
        setVerEl(verifyElGen("Not Implemented", "Invalid 'mode' option."));
      }
    } else {
      setVerEl(
        verifyElGen(
          "Time To Verify!",
          "Check your email for a verification link.",
          "mailto:",
          "Open Mail App"
        )
      );
    }
  }, []);

  return (
    <div
      data-testid="verify"
      className="mx-auto mt-48 w-full max-w-sm md:mt-32"
    >
      {verEl}
    </div>
  );
}

export default Verify;
