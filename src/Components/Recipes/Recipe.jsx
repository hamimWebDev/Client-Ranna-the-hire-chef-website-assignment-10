import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Recipe = ({ chef, recipe }) => {
  const { id, image_url, title, ingredients, instructions } = recipe;
  return (
    <div className="mt-5">
      <div className="card w-full h-[95%] bg-stone-800 shadow-xl">
        <figure>
          <img
            src={`https://img.freepik.com/free-photo/spaghetti-with-vegetablesbroccolitomatoespeppers-black-background_123827-21308.jpg?t=st=1709526736~exp=1709530336~hmac=c40c9da24604db020425dd61628c89777b60db21c12d8512878e29d8859f2839&w=996`}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl text-white">{title}</h2>
          <h1 className="text-white text-2xl w-[42%] lg:w-[30%] border-b-4 border-red-600">
            Ingredients:
          </h1>
          <div className="grid grid-cols-2 gap-2 items-center">
            {ingredients.map((ingredient) => (
              <p className="bg-red-500 text-sm text-white p-1 rounded-xl font-semibold ">
                {ingredient}
              </p>
            ))}
          </div>
          <h1 className="text-white text-2xl w-[43%]  lg:w-[30%] border-b-4 border-red-600">
            instructions:
          </h1>
          <div>
            {instructions.map((instruction) => (
              <li className="text-sm text-white mb-4">{instruction}</li>
            ))}
          </div>
          <div className="flex items-center justify-between mt-10">
            <div className="flex items-center">
              <Rating
                className="mr-2"
                style={{ maxWidth: 130 }}
                value={4.5}
                readOnly
              />
              <h4>4.5</h4>
            </div>
            <button className="btn btn-primary font-semibold lg:text-lg ml-3">
              ADD TO FAVORITE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
