import React from "react";
import { Link } from "react-router-dom";

const Country = ({ country }) => {
  const { id, country_image, country_name } = country;
  return (
    <Link to={`/country/${id}`}>
      <div className="p-4">
        <img className="w-52 h-28" src={country_image} alt="" />
        <h2 className="text-center text-2xl text-amber-500 font-semibold">
          {country_name}
        </h2>
      </div>
    </Link>
  );
};

export default Country;
