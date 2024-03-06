import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const AChef = ({ chef }) => {
  const { id, Chef_Name, Chef_Picture, Years_experience, Likes } = chef;
  return (
    <div>
      <div className="card w-auto shadow-xl bg-yellow-800">
        <figure>
          <img
            className="h-72 w-full"
            src={Chef_Picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">Name: {Chef_Name}</h2>
          <p>{Years_experience} + Years of experience</p>
          <p className="flex items-center"><img className="h-6 mr-2" src={'https://cdn-icons-png.freepik.com/256/833/833472.png?ga=GA1.1.540724036.1706111289&'} alt="" />{Likes} Likes</p>
          <div className="card-actions justify-end">
            <button className="btn bg-red-600 text-xl items-center">View Recipes <FaArrowRight /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AChef;
