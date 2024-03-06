import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-5">
      <div className="flex justify-center items-center mb-10 ">
        <div className="flex items-center bg-green-700 p-3 rounded-full">
          <img
            className="h-16 mr-3"
            src={
              "https://cdn-icons-png.freepik.com/256/1830/1830839.png?ga=GA1.2.540724036.1706111289&"
            }
            alt=""
          />
          <a
            href="#"
            className="text-orange-400 text-2xl lg:text-3xl font-bold italic"
          >
            Ranna
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="mb-4 md:mb-0 text-lg">
            <h3 className="text-2xl font-semibold mb-2">About Us</h3>
            <p className="hover:text-red-500">
              We are the best Indian Food and Chef provider all over the world .
              You can hire all kinds of chefs and also can order any of our
              food. Inception Milestones Factories
            </p>
            <p className="mt-3 hover:text-red-500">Inception</p>
            <br />
            <p className="hover:text-red-500"> Milestones</p>
            <br />
            <p className="hover:text-red-500">Factories</p>
            <br />
          </div>
          <div className="mb-4 md:mb-0 text-lg">
            <h3 className="text-2xl font-semibold mb-2">BUSINESSES</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">
                  CATEGORY & PRODUCT
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Brands
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Export
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Import
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Hotel
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0 text-lg">
            <h3 className="text-2xl font-semibold mb-2">Contact Us</h3>
            <p className="hover:text-red-500">123 Main Street, City</p>
            <p className="hover:text-red-500">contact@example.com</p>
            <p className="hover:text-red-500">+123-456-7890</p>
          </div>
          <div className="text-lg">
            <h3 className="text-2xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4 mb-5">
              <a
                href="https://www.facebook.com/Hamim.webDevloper"
                className="text-white hover:text-gray-400"
              >
                <img
                  className="h-10"
                  src="https://cdn-icons-png.freepik.com/256/5968/5968764.png?ga=GA1.2.540724036.1706111289&"
                  alt=""
                />
              </a>
              <a
                href="https://github.com/hamimWebDev"
                className="text-white hover:text-gray-400"
              >
                <img
                  className="h-10 bg-white rounded-full"
                  src="https://cdn-icons-png.freepik.com/256/733/733609.png?ga=GA1.2.540724036.1706111289&"
                  alt=""
                />
              </a>
              <a
                href="https://twitter.com/HamimWebDeV2004"
                className="text-white hover:text-gray-400"
              >
                <img
                  className="h-10"
                  src="https://cdn-icons-png.freepik.com/256/5969/5969020.png?ga=GA1.2.540724036.1706111289&"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-center text-xl">
        <h1>© Ranna 2024</h1>
      </div>
    </footer>
  );
}

export default Footer;
