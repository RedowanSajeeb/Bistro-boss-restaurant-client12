import { createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Secreate from "../Pages/Shared/secreate/Secreate";
import PrivateRoute from "./PrivateRoute";
import Deshbord from "../Layout/Deshbord";
import MyCart from "../Pages/deshbord/MyCart/MyCart";
import AllUsers from "../Pages/Deshbord/AllUsers/AllUsers";
import AddItms from "../Pages/Deshbord/AddItms/AddItms";
import AdminRout from "./AdminRout";
import ManageItems from "../Pages/Deshbord/ManageItems/ManageItems";
import Payment from "../Pages/Deshbord/Payment/Payment";
import AdminHome from "../Pages/Deshbord/AdminHome/AdminHome";
import UserHome from "../Pages/Deshbord/UserHome/UserHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/security",
        element: (
          <PrivateRoute>
            <Secreate></Secreate>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/deshbord",
    element: (
      <PrivateRoute>
        <Deshbord></Deshbord>
      </PrivateRoute>
    ),
    children: [
      {
        path: "usehome",
        element: <UserHome></UserHome>
      }
      ,
      {
        path: "adminHome",
        element: (
          <AdminRout>
            <AdminHome></AdminHome>
          </AdminRout>
        ),
      },
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "allusers",
        element: (
          <AdminRout>
            <AllUsers></AllUsers>
          </AdminRout>
        ),
      },
      {
        path: "addItem",
        element: (
          <AdminRout>
            <AddItms></AddItms>
          </AdminRout>
        ),
      },
      {
        path: "manageitems",
        element: (
          <AdminRout>
            <ManageItems></ManageItems>
          </AdminRout>
        ),
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
    ],
  },
]);