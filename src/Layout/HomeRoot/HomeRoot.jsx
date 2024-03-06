import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Home from "../../Components/Home/Home";

const HomeRoot = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div className="pt-20">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomeRoot;
