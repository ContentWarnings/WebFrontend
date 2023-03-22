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
      "email": username,
      "password": password
    }

    Backend.postRequest("auth/login", req).then((resp: any) => {
      const data = resp.jsonResponse;

      if (data['token'] && typeof(data['token']) === "string") {
          const token = data['token']; 
          localStorage.setItem("token", token);
          let urlStr: string = window.location.origin + URLHelper.populateDefaultFromURL("ref", "/settings/profile");
          
          window.location.href = urlStr;

      } else {
          setError(data['detail']);
      }

      setIsLoading(false);
    }).catch((err: any) => {
        setError("Could not connect to the server. Please try again in a few minutes!");
        setIsLoading(false);
    });;

  }

  return (
    <div data-testid="sign-in" className="mx-auto max-w-sm w-full mt-48 md:mt-32">
      <div className="flex dark-1 bg-dark-1 rounded-lg p-4 text-white text-center flex-col">
        <div className="w-full">
          <MMHappy className="m-auto"/>
        </div>
        <h1 className="text-2xl font-bold">Log In</h1>
        <form onSubmit={signIn} id="auth">
          <TextBox id="username" placeholder="Email" type="email" autoComplete="username"/>
          <TextBox id="password" placeholder="Password" type="password" autoComplete="current-password"/>
          <Primary2Button name="Sign In" role="button"/>
          {error !== "" && <p className="text-error">{error}</p>}
          <div className={"width-full text-center m-4 " + (isLoading ? "block" : "hidden")}>
            <FaSpinner className="inline text-white text-2xl animate-spin " />
          </div>
        </form>
        <div className="mt-2">
          Forgot your password? <a href="/account/passwd-reset" className="text-secondary-2">Reset Password.</a>
        </div>
        <div className="mt-2">
          Don't have an account? <a href="/account/register" className="text-secondary-2">Create Account.</a>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
