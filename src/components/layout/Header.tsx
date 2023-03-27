// References
// https://v1.tailwindcss.com/components/navigation#
// https://v1.tailwindcss.com/components/forms

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
      <CgProfile className="h-8 w-8 rounded-full ease-in-out hover:opacity-50" />
    </Link>
  );

  const jwtToken = localStorage.getItem("token");

  if (jwtToken && jwtToken !== "") {
    const email = JSON.parse(atob(jwtToken.split(".")[1])).email;
    const gravatarHash = md5(email.trim().toLowerCase());
    const gravatarUrl = `https://www.gravatar.com/avatar/${gravatarHash}?d=retro`;
    pfp = (
      <Link to="/settings/profile/">
        <img
          className="h-8 w-8 rounded-full ease-in-out hover:opacity-50"
          src={gravatarUrl}
          alt="Account Settings"
        />
      </Link>
    );
  }

  return (
    <nav
      data-testid="header"
      className="fixed left-0 right-0 z-10 flex flex-wrap items-center justify-between bg-primary-2 p-2 text-white"
    >
      <div className="justify-left flex flex-shrink items-center lg:ml-20">
        <Link to="/" className="align-middle text-lg font-bold">
          <MMLogo />
        </Link>
      </div>
      <div className="flex items-center lg:mr-20">
        <div className="p-2">
          <form className="w-full max-w-sm" onSubmit={handleSubmit}>
            <div className="flex items-center py-2">
              <input
                type="text"
                className="w-full appearance-none rounded-l-lg border-none bg-light-2 py-1 px-2 leading-tight text-gray-700 focus:outline-none"
                placeholder="Search movies..."
                value={text}
                onChange={handleChange}
              />
              <button className="rounded-r-lg border-4 border-primary-3 bg-primary-3 py-1 px-2 text-sm text-white transition delay-100 ease-in-out hover:border-primary-1 hover:bg-primary-1">
                <FaSearch />
              </button>
            </div>
          </form>
        </div>
        <div className="p-2">
          <Link to="/settings/">
            <Settings className="h-8 w-8 rounded-full transition delay-100 ease-in-out hover:rotate-45 hover:opacity-50" />
          </Link>
        </div>
        <div className="p-2">{pfp}</div>
      </div>
    </nav>
  );
}

export default Header;
