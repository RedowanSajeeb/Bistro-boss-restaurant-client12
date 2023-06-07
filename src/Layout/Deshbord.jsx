import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineShoppingCart, AiFillCalendar ,AiFillHome, AiOutlineMenuFold } from "react-icons/ai";
import { GiWallet } from "react-icons/gi";
import {  FaBook, FaFirstOrder,  FaUsers, FaUtensils } from "react-icons/fa";
import useCart from "../Hooks/useCart";

const Deshbord = () => {
    const [cart] = useCart()

     //TODO: load data from the server to have daynamic is on data
    const isAdmin = true;

    return (
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side uppercase bg-[#D1A054] ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full   text-base-content">
            {/* Sidebar content here */}

            {isAdmin ? (
              <>
                <li>
                  <NavLink to={"/deshbord/d"}>
                    <AiFillHome></AiFillHome> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/deshbord/reservations"}>
                    <FaUtensils></FaUtensils> add items
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/deshbord/payment"}>
                    <GiWallet></GiWallet> manage items
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/deshbord/payment"}>
                    <FaBook></FaBook> Manage bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/deshbord/allusers"}>
                    <FaUsers></FaUsers> all users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to={"/deshbord/d"}>
                    <AiFillHome></AiFillHome> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/deshbord/reservations"}>
                    <AiFillCalendar></AiFillCalendar> Reservations
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/deshbord/payment"}>
                    <GiWallet></GiWallet> Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/deshbord/mycart"}>
                    <AiOutlineShoppingCart></AiOutlineShoppingCart>My Cart
                    <div className="badge ms-3">+{cart?.length || 0}</div>
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li>
              <NavLink to={"/"}>
                <AiFillHome></AiFillHome>Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/menu"}>
                {" "}
                <AiOutlineMenuFold></AiOutlineMenuFold> Our Menu
              </NavLink>
            </li>
            <li>
              <NavLink to={"/order/salad"}>
                {" "}
                <FaFirstOrder></FaFirstOrder> Order Food
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Deshbord;