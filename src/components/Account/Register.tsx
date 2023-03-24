import Primary2Button from "../shared/Primary2Button";
import TextBox from "../shared/TextBox";
import MMHappy from "../layout/assets/MMHappy";
import Backend from "../../helpers/Backend";
import { FaSpinner } from "react-icons/fa";
import { useState } from "react";

function Register() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const register = (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    const formData: any = document.forms[1];
    const username: string = formData.username.value;
    const password: string = formData.password.value;

    const req: object = {
      email: username,
      password: password,
    };

    Backend.postRequest("user/register", req)
      .then((resp: any) => {
        const data: number = resp.statusCode;

        if (data < 400) {
          window.location.pathname = "/account/verify";
        } else {
          setError(
            "Could not connect to the server. Please try again in a few minutes!"
          );
        }

        setIsLoading(false);
      })
      .catch((err: any) => {
        setIsLoading(false);
        setError(
          "Could not connect to the server. Please try again in a few minutes!"
        );
      });
  };

  return (
    <div
      data-testid="register"
      className="mx-auto mt-48 w-full max-w-sm md:mt-32"
    >
      <div className="flex flex-col rounded-lg bg-light-2 p-4 text-center text-dark-3 dark:bg-dark-1 dark:text-light-1">
        <div className="w-full">
          <MMHappy className="m-auto" />
        </div>
        <h1 className="text-2xl font-bold">Create Account</h1>
        <form onSubmit={register} id="auth">
          <TextBox
            id="username"
            placeholder="Email"
            type="email"
            autoComplete="email"
          />
          <TextBox
            id="password"
            placeholder="Password"
            type="password"
            autoComplete="new-password"
          />
          <Primary2Button name="Create Account" role="button" />
          {error !== "" && <p className="text-error">Error: {error}</p>}
          <div
            className={
              "width-full m-4 text-center " + (isLoading ? "block" : "hidden")
            }
          >
            <FaSpinner className="inline animate-spin text-2xl text-light-3 dark:text-light-1" />
          </div>
        </form>
        <div className="mt-2">
          Already have an account?{" "}
          <a
            href="/account/signin"
            className="text-secondary-2 hover:underline"
          >
            Sign In.
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;
