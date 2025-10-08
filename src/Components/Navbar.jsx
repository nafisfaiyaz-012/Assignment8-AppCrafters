import React from "react";
import navbarIcon from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import { Github } from "lucide-react";
const Navbar = () => {
  const items = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink>Apps</NavLink>
      </li>
      <li>
        <NavLink>Installation</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {
                items
            }
          </ul>
        </div>
        <Link to="/" className="flex justify-center items-center  gap-1">
          <img className="h-8 w-8" src={navbarIcon} alt="" />
          <p className="text-2xl font-semibold">AppCrafters</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {
                items
            }
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="https://github.com/nafisfaiyaz-012" className="btn bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white">
          <Github />
          Contribute
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
