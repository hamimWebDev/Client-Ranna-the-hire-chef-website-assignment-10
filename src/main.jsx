import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomeRoot from "./Layout/HomeRoot/HomeRoot";
import Home from "./Components/Home/Home";
import Chef from "./Components/Chef/Chef";
import CountryLayout from "./Layout/country/CountryLayout";
import AllChef from "./Components/All_Chef/AllChef";
import AllRecipes from "./Components/Recipes/AllRecipes";
import ChefLayout from "./Layout/Chef/ChefLayout";
import Recipe from "./Components/Recipes/Recipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoot></HomeRoot>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://server-ranna-the-hire-chef-website-assignment-10.vercel.app/country"
          ),
        children: [
          {
            path: "/",
            element: <AllChef></AllChef>,
            loader: () =>
              fetch(
                "https://server-ranna-the-hire-chef-website-assignment-10.vercel.app/chef"
              ),
          },
        ],
      },
      {
        path: "/recipes",
        element: <AllRecipes></AllRecipes>,
        loader: () =>
          fetch(
            "https://server-ranna-the-hire-chef-website-assignment-10.vercel.app/recipes"
          ),
      },
      {
        path: "country",
        element: <CountryLayout></CountryLayout>,
        loader: ({ params }) =>
          fetch(
            `https://server-ranna-the-hire-chef-website-assignment-10.vercel.app/country/${params.id}`
          ),
        children: [
          {
            path: ":id",
            element: <Chef></Chef>,
          },
        ],
      },
      {
        path: "chef",
        element: <ChefLayout></ChefLayout>,
        loader: ({ params }) =>
          fetch(
            `https://server-ranna-the-hire-chef-website-assignment-10.vercel.app/chef/${params.id}`
          ),
        children: [
          {
            path: ":id",
            element: <Recipe></Recipe>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
