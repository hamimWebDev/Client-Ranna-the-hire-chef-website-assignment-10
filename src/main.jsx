import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomeRoot from "./Layout/HomeRoot/HomeRoot";
import Home from "./Components/Home/Home";
import Chef from "./Components/Chef/Chef";
import CountryLayout from "./Layout/country/CountryLayout";
import AllChef from "./Components/All_Chef/AllChef";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
