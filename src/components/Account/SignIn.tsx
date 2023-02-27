import Primary2Button from "../shared/Primary2Button";
import TextBox from "../shared/TextBox";
import MMHappy from "../layout/assets/MMHappy";
import Backend from "../../helpers/Backend";
import URLHelper from "../../helpers/URLHelper";
import {useState} from 'react';

function SignIn() {
  const [error, setError] = useState("");

  const signIn = (e: any) => {
    e.preventDefault();
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
    }).catch((err: any) => {
        setError("Could not connect to the server. Please try again in a few minutes!");
    });;

  }

  return (
    <div className="mx-auto max-w-sm w-full mt-32">
      <div className="flex dark-1 bg-dark-1 rounded-lg p-4 text-white text-center flex-col">
        <div className="w-full">
          <MMHappy className="m-auto"/>
        </div>
        <h1 className="text-2xl font-bold">Log In</h1>
        <form onSubmit={signIn} id="auth">
          <TextBox id="username" placeholder="Email" type="email"/>
          <TextBox id="password" placeholder="Password" type="password"/>
          <Primary2Button name="Sign In" role="button"/>
          {error !== "" && <p className="text-error">{error}</p>}
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
