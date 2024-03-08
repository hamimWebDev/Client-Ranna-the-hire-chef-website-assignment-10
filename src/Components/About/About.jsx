import React from "react";
import useTitle from "../../Hooks/useTitle";

const About = () => {
  useTitle("About")
  return (
    <div className="pt-20">
      <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              About Us
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Meet our talented chef who brings passion and creativity to every
              dish.
            </p>
          </div>
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 md:order-2">
              <img
                className="mx-auto rounded-full h-64 w-64 md:h-96 md:w-96"
                src="/chef-image.jpg"
                alt="Chef Image"
              />
            </div>
            <div className="md:w-1/2 md:order-1 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                Chef John Doe
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                Chef John Doe is an award-winning chef with over 15 years of
                experience in the culinary world. His journey began in a small
                kitchen where he discovered his love for cooking.
              </p>
              <p className="mt-4 text-lg text-gray-800 leading-relaxed">
                He has worked in some of the finest restaurants around the
                world, honing his skills and learning from the best chefs in the
                industry.
              </p>
              <p className="mt-4 text-lg text-gray-800 leading-relaxed">
                Chef John Doe believes in using only the freshest ingredients to
                create dishes that are not only delicious but also nutritious.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
