import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import GlobalContext from "./GlobalContext";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <GlobalContext>
        <Outlet />
      </GlobalContext>
      <Footer />
    </div>
  );
};

export default Layout;
