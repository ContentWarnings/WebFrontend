import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMdSettings as Settings } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import MMLogo from "./assets/MMLogo";
import md5 from "js-md5";


function Header() {
  const [text, setText] = useState("");

  const handleChange = (e: any) => setText(e.target.value);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (text !== "") {
      window.location.href = `/search?q=${text}`;
    }
  };

  let pfp = (
    <Link to="/account/signin">
        <CgProfile className="rounded-full w-8 h-8 hover:opacity-50 ease-in-out" />
    </Link>
  );

  const jwtToken = localStorage.getItem("token");

  if (jwtToken && jwtToken !== "") {
    const email = JSON.parse(atob(jwtToken.split(".")[1])).email;
    const gravatarHash = md5(email.trim().toLowerCase());
    const gravatarUrl = `https://www.gravatar.com/avatar/${gravatarHash}?d=retro`;
    pfp = (
      <Link to="/settings/profile">
          <img className="rounded-full w-8 h-8 hover:opacity-50 ease-in-out" src={gravatarUrl} alt="Account Settings"/>
      </Link>
    );
  }

  return (
    <nav data-testid="header" className="fixed left-0 right-0 z-10 flex items-center justify-between flex-wrap bg-primary-2 p-2 text-white">
      <div className="flex items-center justify-left flex-shrink lg:ml-20">
        <Link to="/" className="text-lg font-bold align-middle">
          <MMLogo />
        </Link>
      </div>
      <div className="flex items-center lg:mr-20">
        <div className="p-2">
          <form className="w-full max-w-sm" onSubmit={handleSubmit}>
            <div className="flex items-center py-2">
              <input
                type="text"
                className="appearance-none border-none w-full text-gray-700 bg-light-2 py-1 px-2 leading-tight focus:outline-none rounded-l-lg"
                placeholder="Search movies..."
                value={text}
                onChange={handleChange}
              />
              <button className="transition ease-in-out delay-100 bg-primary-3 hover:bg-primary-1 border-primary-3 hover:border-primary-1 text-sm border-4 text-white py-1 px-2 rounded-r-lg">
                <FaSearch />
              </button>
            </div>
          </form>
        </div>
        <div className="p-2">
          <Link to="/settings">
            <Settings className="transition ease-in-out delay-100 w-8 h-8 rounded-full hover:rotate-45" />
          </Link>
        </div>
        <div className="p-2">
          {pfp}
        </div>
      </div>
    </nav>
  );
}

export default Header;
