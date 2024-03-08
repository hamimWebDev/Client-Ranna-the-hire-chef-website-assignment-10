import React from "react";
import { useLoaderData } from "react-router-dom";
import Recipe from "../../Components/Recipes/Recipe";
import useTitle from "../../Hooks/useTitle";

const ChefLayout = () => {
  const chefARecipe = useLoaderData();
  const chef = chefARecipe[0];
  const recipes = chefARecipe[1];
  const { Chef_Name, Chef_Picture, Likes, Years_experience } = chef;
  useTitle(Chef_Name);
  return (
    <div className="pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-[95%] mx-auto">
        <img className="h-96 w-[730px] rounded-xl" src={Chef_Picture} alt="" />
        <div className="ml-5">
          <h1 className="text-4xl font-semibold text-yellow-500">
            Name: {Chef_Name}
          </h1>
          <p className="mt-5 text-xl font-medium text-blue-500">
            {Years_experience} years of experience in the culinary arts. He
            specializes cuisine, particularly dishes. His restaurant is known
            for its mouthwatering kebabs and biryanis.
          </p>
          <h4 className="mt-5 text-xl font-medium text-red-500">
            Years of experience: {Years_experience}
          </h4>
          <h6 className="mt-2 text-xl font-medium text-blue-500">
            Total Recipes: {recipes.length}
          </h6>
          <h5 className="mt-2 text-xl font-medium text-white flex items-center">
            {" "}
            <img
              className="h-10 mr-3"
              src="https://cdn-icons-png.freepik.com/256/833/833472.png?ga=GA1.1.540724036.1706111289&"
              alt=""
            />
            Likes: {Likes}
          </h5>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-[95%] mx-auto">
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} chef={chef} recipe={recipe}></Recipe>
        ))}
      </div>
    </div>
  );
};

export default ChefLayout;
