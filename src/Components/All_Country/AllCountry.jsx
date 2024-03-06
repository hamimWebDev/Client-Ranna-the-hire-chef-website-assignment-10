import React from "react";
import { useLoaderData } from "react-router-dom";
import Country from "./Country/Country";
import Marquee from "react-fast-marquee";

const AllCountry = () => {
  const allCountry = useLoaderData();
  console.log(allCountry);
  return (
    <div className="flex">
      <Marquee>
        {allCountry.map((country) => (
          <Country key={country.id} country={country}></Country>
        ))}
      </Marquee>
    </div>
  );
};

export default AllCountry;
