import Primary2Button from "../shared/Primary2Button";
import TextBox from "../shared/TextBox";
import MMHappy from "../layout/assets/MMHappy";
import Backend from "../../helpers/Backend";
import {useState} from 'react';

function Register() {
  const [error, setError] = useState("");

  const register = (e: any) => {
    e.preventDefault();
    const formData: any = document.forms[1];
    const username: string = formData.username.value;
    const password: string = formData.password.value;

    const req: object = {
      "email": username,
      "password": password
    }

    Backend.postRequest("user/register", req).then((resp: any) => {
      const data: number = resp.statusCode;

      if (data < 400) {
          window.location.pathname = "/account/verify";
      } else {
          setError("Could not connect to the server. Please try again in a few minutes!");
      }
    }).catch((err: any) => {
        setError("Could not connect to the server. Please try again in a few minutes!");
    });

  }

  return (
    <div className="mx-auto max-w-sm w-full mt-32">
      <div className="flex dark-1 bg-dark-1 rounded-lg p-4 text-white text-center flex-col">
        <div className="w-full">
          <MMHappy className="m-auto"/>
        </div>
        <h1 className="text-2xl font-bold">Create Account</h1>
        <form onSubmit={register} id="auth">
          <TextBox id="username" placeholder="Email" type="email"/>
          <TextBox id="password" placeholder="Password" type="password"/>
          <Primary2Button name="Create Account" role="button"/>
          {error !== "" && <p className="text-error">Error: {error}</p>}
        </form>
        <div className="mt-2">
          Already have an account? <a href="/account/signin" className="text-secondary-2">Sign In.</a>
        </div>
      </div>
    </div>
  );
}

export default Register;
