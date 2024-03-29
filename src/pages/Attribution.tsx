import Primary2Button from "../components/shared/Primary2Button";
import { AiFillHome } from "react-icons/ai";

function AttributionPage() {
  return (
    <div className="relative mb-10 mt-32 h-fit lg:mx-20">
      <div className="mt-5 text-dark-3 dark:text-light-1">
        <h1 className="text-3xl font-bold">Attribution</h1>
        <br />
        <span>Source code can be found </span>
        <a
          href="https://github.com/orgs/ContentWarnings/repositories"
          className="text-secondary-2 hover:underline"
        >
          here
        </a>
        .
        <br />
        <br />
        <span>This application uses the </span>
        <a
          href="https://www.themoviedb.org/documentation/api"
          className="text-secondary-2 hover:underline"
        >
          TMDB API
        </a>
        <span> and </span>
        <a
          href="https://apis.justwatch.com/docs/api/"
          className="text-secondary-2 hover:underline"
        >
          {" "}
          JustWatch API
        </a>
        .
        <br />
        <br />
        <img
          className="mb-4 w-1/6 md:w-1/12"
          src={`/tmdb_logo.svg`}
          alt="TMDB Logo"
        />
      </div>
      <div className="my-2 flex items-center">
        <Primary2Button href="/" name="Return Home" icon={<AiFillHome />} />
      </div>
    </div>
  );
}

export default AttributionPage;
