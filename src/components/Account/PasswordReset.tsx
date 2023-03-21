import Primary2Button from "../shared/Primary2Button";
import TextBox from "../shared/TextBox";
import MMHappy from "../layout/assets/MMHappy";
import Backend from "../../helpers/Backend";
import { FaSpinner } from "react-icons/fa";
import { useState } from "react";

function PasswordReset() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    const formData: any = document.forms[1];
    const username: string = formData.username.value;

    Backend.getRequest(`user/password-reset-request?email=${username}`).then((resp: any) => {
      const data: number = resp.statusCode;

      if (data < 400) {
          window.location.pathname = "/account/verify";
      } else {
          setError(resp.jsonResponse['detail']);
      }

      setIsLoading(false);
    }).catch((err: any) => {
        setIsLoading(false);
        setError("Could not connect to the server. Please try again in a few minutes!");
    });

  }

  return (
    <div data-testid="password-reset" className="mx-auto max-w-sm w-full mt-48 md:mt-32">
      <div className="flex dark-1 bg-dark-1 rounded-lg p-4 text-white text-center flex-col">
        <div className="w-full">
          <MMHappy className="m-auto"/>
        </div>
        <h1 className="text-2xl font-bold">Reset Password</h1>
        <form onSubmit={resetPassword} id="auth">
          <TextBox id="username" placeholder="Email" type="email" autoComplete="email"/>
          <Primary2Button name="Send Password Reset " role="button"/>
          {error !== "" && <p className="text-error">Error: {error}</p>}
        </form>
        <div className={"width-full text-center m-4 " + (isLoading ? "block" : "hidden")}>
          <FaSpinner className="inline text-white text-2xl animate-spin " />
        </div>
        <div className="mt-2">
          Remember your password? <a href="/account/signin" className="text-secondary-2">Sign In.</a>
        </div>
      </div>
    </div>
  );
}

export default PasswordReset;
