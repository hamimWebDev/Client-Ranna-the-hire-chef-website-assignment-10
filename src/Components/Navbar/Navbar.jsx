import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-2 fixed z-50 w-[100%]">
      <div className="grid items-center grid-cols-3 w-[95%] mx-auto">
        <div className="flex items-center">
          <img
            className="h-16 mr-3"
            src={
              "https://cdn-icons-png.freepik.com/256/1830/1830839.png?ga=GA1.2.540724036.1706111289&"
            }
            alt=""
          />
          <a href="#" className="text-orange-400 text-2xl lg:text-3xl font-bold italic">
            Ranna
          </a>
        </div>
        <div className="hidden md:block italic">
          <ul className="flex space-x-4">
            <li>
              <Link
                 to="/"
                className="text-white text-3xl font-semibold hover:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                 to="/recipes"
                className="text-white text-3xl font-semibold hover:text-blue-500"
              >
                Recipes
              </Link>
            </li>
            <li>
              <Link
                 
                className="text-white text-3xl font-semibold hover:text-blue-500"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                 
                className="text-white text-3xl font-semibold hover:text-blue-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:block text-end text-white">
          <button className="text-2xl p-2 bg-red-600 font-semibold rounded-md mr-3 hover:bg-blue-500">
            Login
          </button>
          <button className="text-2xl p-2 bg-blue-500 hover:bg-red-500 font-semibold rounded-md">
            Register
          </button>
        </div>
        <div className=" text-end col-span-2 md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden flex justify-between items-end mt-5">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link className="text-white text-xl hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-white text-xl hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link className="text-white text-xl hover:text-blue-500">
                Services
              </Link>
            </li>
            <li>
              <Link className="text-white text-xl hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
          <div className="text-end">
            <button className="text-xl p-2 bg-red-600 font-semibold rounded-md mr-3 hover:bg-blue-500">
              Login
            </button>
            <button className="text-xl p-2 bg-blue-500 hover:bg-red-500 font-semibold rounded-md">
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
