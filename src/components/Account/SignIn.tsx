import Primary2Button from "../shared/Primary2Button";
import TextBox from "../shared/TextBox";
import MMHappy from "../layout/assets/MMHappy";
import Backend from "../../helpers/Backend";
import URLHelper from "../../helpers/URLHelper";
import { FaSpinner } from "react-icons/fa";
import { useState } from "react";

function SignIn() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signIn = (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    const formData: any = document.forms[1];
    const username: string = formData.username.value;
    const password: string = formData.password.value;

    const req: object = {
      email: username,
      password: password,
    };

    Backend.postRequest("auth/login", req)
      .then((resp: any) => {
        const data = resp.jsonResponse;

        if (data["token"] && typeof data["token"] === "string") {
          const token = data["token"];
          localStorage.setItem("token", token);
          let urlStr: string =
            window.location.origin +
            URLHelper.populateDefaultFromURL("ref", "/settings/profile");

          window.location.href = urlStr;
        } else {
          setError(data["detail"]);
        }

        setIsLoading(false);
      })
      .catch((err: any) => {
        setError(
          "Could not connect to the server. Please try again in a few minutes!"
        );
        setIsLoading(false);
      });
  };

  return (
    <div
      data-testid="sign-in"
      className="mx-auto mt-48 w-full max-w-sm md:mt-32"
    >
      <div className="flex flex-col rounded-lg bg-light-2 p-4 text-center text-dark-3 dark:bg-dark-1 dark:text-light-1">
        <div className="w-full">
          <MMHappy className="m-auto" />
        </div>
        <h1 className="text-2xl font-bold">Log In</h1>
        <form onSubmit={signIn} id="auth">
          <TextBox
            id="username"
            placeholder="Email"
            type="email"
            autoComplete="username"
          />
          <TextBox
            id="password"
            placeholder="Password"
            type="password"
            autoComplete="current-password"
          />
          <Primary2Button name="Sign In" role="button" />
          {error !== "" && <p className="text-error">{error}</p>}
          <div
            className={
              "width-full m-4 text-center " + (isLoading ? "block" : "hidden")
            }
          >
            <FaSpinner className="inline animate-spin text-2xl text-light-3 dark:text-light-1 " />
          </div>
        </form>
        <div className="mt-2">
          Forgot your password?{" "}
          <a
            href="/account/passwd-reset"
            className="text-secondary-2 hover:underline"
          >
            Reset Password.
          </a>
        </div>
        <div className="mt-2">
          Don't have an account?{" "}
          <a
            href="/account/register"
            className="text-secondary-2 hover:underline"
          >
            Create Account.
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
