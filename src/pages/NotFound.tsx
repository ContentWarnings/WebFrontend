import Primary2Button from "../components/shared/Primary2Button";
import { AiFillHome } from "react-icons/ai";

function NotFound() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="text-6xl font-bold text-dark-3 dark:text-light-1">
          404 - Page Not Found!
      </div>
      <Primary2Button href="/" name="Return Home" icon={<AiFillHome />} />
    </div>
  );
}

export default NotFound;
