// import React from 'react';

import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Main = () => {
  const location = useLocation();
  const nologinAndnoFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <div className="max-w-screen-2xl mx-auto">

      {nologinAndnoFooter || <NavBar></NavBar>}
      <Outlet></Outlet>
      {nologinAndnoFooter || <Footer></Footer>}

    </div>
  );
};

export default Main;
