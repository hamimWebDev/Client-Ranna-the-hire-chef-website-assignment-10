import React from "react";
import { useLoaderData } from "react-router-dom";
import AllRecipe from "./AllRecipe";

const AllRecipes = () => {
  const recipes = useLoaderData();
  console.log(recipes);
  return (
    <div className="pt-24 grid grid-cols-1 lg:grid-cols-3 gap-4 w-[95%] mx-auto">
      {recipes.map((recipe) => (
        <AllRecipe recipe={recipe} key={recipe.food_id}></AllRecipe>
      ))}
    </div>
  );
};

export default AllRecipes;
