import { Link } from "react-router-dom";
import GreyMMLogo from "./assets/GreyMMLogo";

function Footer() {
  return (
    <div className="relative bg-dark-2 mb-4 flex justify-center">
      <div className="flex flex-col text-light-3 text-right pr-10">
        <div className="flex font-bold font-sans text-2xl ml-20">
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
      <div className="flex flex-col underline text-light-3 text-left">
        <Link to="/about">About</Link>
        <Link to="/settings/account">My Account</Link>
        <Link to="/tos">Terms of Use</Link>
        <Link to="/privacypolicy">Privacy Policy</Link>
        <Link to="/attributions">Attribution</Link>
      </div>
    </div>
  );
}

export default Footer;
