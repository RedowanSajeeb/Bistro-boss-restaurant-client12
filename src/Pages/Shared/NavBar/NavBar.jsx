// import React from 'react';

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaCartArrowDown } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
const NavBar = () => {
  const [cart] = useCart()

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
      <li>
        <Link to={"/order/salad"}>
          <button className="bg-yellow-600 flex justify-center items-center p-1 rounded-3xl">
            <FaCartArrowDown className="text-xl"></FaCartArrowDown>
            <div className="badge ms-3">+{cart?.length || 0 }</div>
          </button>
        </Link>
      </li>
      <li>
        <Link to={"/security"}>security Food</Link>
      </li>
      {user ? (
        <>
          <li>
            <li onClick={handelLogOut} className="btn  btn-ghost">
              Log Out
            </li>
          </li>
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
