import React from "react";
import { useLoaderData } from "react-router-dom";
import Chef from "../../Components/Chef/Chef";

const CountryLayout = () => {
  const chefs = useLoaderData();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 w-[80%] mx-auto p-24">
      {chefs.map((chef) => (
        <Chef key={chef.id} chef={chef}></Chef>
      ))}
    </div>
  );
};

export default CountryLayout;
