import { useState } from "react";
import { Link } from "react-router-dom";
import tickitzIcon from "/tickitz-icon.svg";
import hamburgerMenu from "../assets/hamburger-menu.svg";
import closeMenu from "../assets/close-menu.svg";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  const handleCloseClick = () => {
    setSidebarOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white h-[104px] border-b-1 border-grey flex z-50">
      <div className="flex w-[1106px] justify-between items-center mx-6 xl:mx-auto">
        <Link to="/">
          <img src={tickitzIcon} alt="tickitz icon" />
        </Link>
        <nav className="w-[265px] hidden md:flex justify-between text-sm">
          <Link to="/" className="relative group">
            Home
            <div className="absolute top-[110%] w-full h-[3px] bg-blue rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </Link>
          <Link to="./movies.html" className="relative group">
            Movie
            <div className="absolute top-[110%] w-full h-[3px] bg-blue rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </Link>
          <Link to="#" className="relative group">
            Buy Ticket
            <div className="absolute top-[110%] w-full h-[3px] bg-blue rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </Link>
        </nav>
        <nav className="w-[197px] hidden md:flex justify-between text-sm">
          <Link
            className="border-1 border-blue rounded-[5px] text-blue px-[23px] py-[14px]"
            to="./sign-in.html"
          >
            Sign In
          </Link>
          <Link
            className="bg-blue rounded-[5px] text-white px-[23px] py-[14px]"
            to="./sign-up.html"
          >
            Sign Up
          </Link>
        </nav>
        <img
          className="hamburger-menu flex md:hidden"
          src={hamburgerMenu}
          alt="hamburger menu"
          onClick={handleMenuClick}
        />
        <aside
          className={`sidebar fixed top-0 bottom-0 right-0 w-[200px] ${
            isSidebarOpen ? "translate-x-0" : "translate-x-64"
          } flex-col bg-white shadow-md transition-transform duration-300`}
        >
          <img
            className="close-menu absolute top-10 right-6"
            src={closeMenu}
            alt="close menu"
            onClick={handleCloseClick}
          />
          <ul className="h-44 flex flex-col justify-between items-center mt-32">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#">Movie</Link>
            </li>
            <li>
              <Link to="#">Buy Ticket</Link>
            </li>
            <li>
              <Link to="./sign-in.html">Sign In</Link>
            </li>
            <li>
              <Link to="./sign-up.html">Sign Up</Link>
            </li>
          </ul>
        </aside>
      </div>
    </header>
  );
};

export default Header;
