import { Link } from "react-router-dom";
import GreyMMLogo from "./assets/GreyMMLogo";

function Footer() {
  return (
    <footer
      data-testid="footer"
      className="mb-4 flex flex-wrap justify-center bg-dark-2"
    >
      <div className="flex flex-col pr-10 text-right text-light-3">
        <div className="ml-20 flex font-sans text-2xl font-bold">
          <div className="mr-2">
            <GreyMMLogo />
          </div>
          MovieMentor
        </div>
        <h6 className="py-2">&copy; 2023 MovieMentor Team.</h6>
        <h6>
          This product uses the TMDB API but is
          <br />
          not endorsed or certified by TMDB.
        </h6>
      </div>
      <div className="flex flex-col text-left text-light-3 underline">
        <Link to="/about">About</Link>
        <Link to="/settings/profile">My Account</Link>
        <Link to="/tos">Terms of Use</Link>
        <Link to="/privacypolicy">Privacy Policy</Link>
        <Link to="/attributions">Attribution</Link>
      </div>
    </footer>
  );
}

export default Footer;
