import Header from "./components/Header/Header";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Main from "./Main/Main";
import Foods from "./components/Foods/Foods";
import About from "./components/About/About";
import FoodDetails from "./components/FoodDetails/FoodDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "home",
          element: <Home></Home>,
        },
        {
          path: "foods",
          loader: () =>
            fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b"),
          element: <Foods></Foods>,
        },
        {
          path: "/food/:foodId",
          loader: async ({ params }) => {
            return fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.foodId}`
            );
          },
          element: <FoodDetails></FoodDetails>,
        },
        {
          path: "about",
          element: <About></About>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
