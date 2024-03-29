// import React from 'react';

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

import { FaCartArrowDown } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";
const NavBar = () => {
  const [cart] = useCart()
  const [isAdmin] = useAdmin()
  const { user, logOut } = useContext(AuthContext);
  const handelLogOut = () => {
    logOut()
      .then(() => {
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const customs = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/menu"}>Our Menu</Link>
      </li>
      <li>
        <Link to={"/order/salad"}>Order Food</Link>
      </li>
      <li>
        <Link to={"/deshbord/mycart"}>
          <button className="bg-yellow-600 flex justify-center items-center p-1 rounded-3xl">
            <FaCartArrowDown className="text-xl"></FaCartArrowDown>
            <div className="badge ms-3">+{cart?.length || 0}</div>
          </button>
        </Link>
      </li>
      <li>
        <Link to={isAdmin ? "/deshbord/adminHome" : "/deshbord/usehome"}>
          deshbord
        </Link>
      </li>
      {user ? (
        <div>
          <li>
            <button onClick={handelLogOut} className="btn  btn-ghost">
              Log Out
            </button>
          </li>
        </div>
      ) : (
        <div>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </div>
      )}
    </>
  );
  return (
    <div className="navbar fixed  z-30 bg-opacity-30 max-w-screen-2xl bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu text-black menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {customs}
          </ul>
        </div>
        <NavLink to={"/"} className=" normal-case text-xl">
          BISTRO BOSS <br />
          Restaurant
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{customs}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Buttonucler</a>
      </div>
    </div>
  );
};

export default NavBar;
