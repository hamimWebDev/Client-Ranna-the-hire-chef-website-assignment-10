import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const AllRecipe = ({ recipe }) => {
  const { id, image_url, title, ingredients, instructions } = recipe;
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const addToFavorite = () => {
    alert("Add Successfully");
    setButtonDisabled(true);
  };

  return (
    <div>
      <div className="card w-full h-[95%] bg-stone-800 shadow-xl">
        <figure>
          <img
            src={`https://img.freepik.com/free-photo/italian-pasta-spaghetti-with-meatballs-parmesan-cheese-black-plate-dark-rustic-wood-background-dinner-slow-food-concept_2829-4639.jpg?t=st=1709798774~exp=1709802374~hmac=9ae006ee0d506ae304c36156916fd8be9c3c3b4ee99902fe5e0987f298bce35b&w=900`}
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
              <p className="bg-red-500 text-sm text-white p-1 rounded-xl font-semibold">
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
            <button
              onClick={addToFavorite}
              disabled={buttonDisabled}
              className="btn btn-primary font-semibold lg:text-lg ml-3"
            >
              ADD TO FAVORITE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRecipe;
