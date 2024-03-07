import React from "react";
import { useLoaderData } from "react-router-dom";
import AChef from "./AChef";

const AllChef = () => {
  const chefs = useLoaderData();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 w-[80%] mx-auto">
      {chefs.map((chef) => (
        <AChef key={chef.id} chef={chef}></AChef>
      ))}
    </div>
  );
};

export default AllChef;
