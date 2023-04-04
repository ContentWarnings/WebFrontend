import { AiOutlineUserAdd, AiOutlineLogin } from "react-icons/ai";
import Primary2Button from "../shared/Primary2Button";

function NoProfile() {
  return (
    <div className="lg:flex">
      <div className="lg:flex-1">
        <h1 className="text-2xl font-bold">
          Want to make movie-watching safer with us?
        </h1>
        <div className="flex justify-between">
          <h2 className="text-2xl">Join MovieMentor as a contributor.</h2>
        </div>
        <p className="text-dark-1 dark:text-light-3">
          (This does not affect, or enchance, searching features.)
        </p>
      </div>
      <div className="lg:flex-initial p-4 m-auto">
        <div className="flex">
          <Primary2Button
            name="Register"
            icon={<AiOutlineUserAdd />}
            href="/account/register"
          />
          <p className="mx-2">or</p>
          <Primary2Button
            name="Log In"
            icon={<AiOutlineLogin />}
            href="/account/signin"
          />
        </div>
      </div>
    </div>
  );
}

export default NoProfile;
