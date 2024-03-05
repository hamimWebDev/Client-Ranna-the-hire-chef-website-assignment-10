import React from "react";
import ImageSlider from "../image_slider/ImageSlider";
import { FaMapLocationDot } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
      <ImageSlider></ImageSlider>
      <div className="flex justify-center">
        <h1 className="text-center text-6xl p-16 font-semibold flex items-center italic">
          <FaMapLocationDot className="text-red-600 mr-3" />
          <p className="text-orange-500">Choose Your Country</p>
        </h1>
      </div>
    </div>
  );
};

export default Home;
