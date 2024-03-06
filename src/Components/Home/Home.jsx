import React from "react";
import ImageSlider from "../image_slider/ImageSlider";
import { FaMapLocationDot } from "react-icons/fa6";
import { SiCodechef } from "react-icons/si";
import AllCountry from "../All_Country/AllCountry";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="pt-20">
      <ImageSlider></ImageSlider>
      <div className="flex justify-center">
        <h1 className="text-center lg:text-6xl lg:p-16 p-3 font-semibold flex items-center italic">
          <FaMapLocationDot className="text-red-600 mr-3 text-5xl lg:text-6xl" />
          <p className="text-orange-500">Choose Your Country</p>
        </h1>
      </div>
      <AllCountry></AllCountry>
      <div className="flex justify-center">
        <h1 className="text-center lg:text-6xl lg:p-16 p-3 font-semibold flex items-center italic">
          <SiCodechef className="text-green-500 mr-3 text-5xl lg:text-8xl" />
          <p className="text-lime-500">All Country Chef</p>
        </h1>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
