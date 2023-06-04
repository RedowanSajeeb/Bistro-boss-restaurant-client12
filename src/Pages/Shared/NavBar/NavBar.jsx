// import React from 'react';

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handelLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "logout successfully",
          showConfirmButton: false,
          timer: 1000,
        });
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
      {user ? (
        <>
          <button onClick={handelLogOut} className="btn btn-ghost">
            Log Out
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </>
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
