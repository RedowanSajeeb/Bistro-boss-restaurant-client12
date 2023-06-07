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
        path: "mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "allusers",
        element: <AllUsers></AllUsers>
      },
    ],
  },
]);