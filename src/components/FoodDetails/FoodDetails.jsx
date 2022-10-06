import React from "react";
import { useLoaderData } from "react-router-dom";

const FoodDetails = () => {
  const food = useLoaderData().meals[0];
  console.log(food);
  const {
    strInstructions,
    strMealThumb,
    strMeal,
    strCategory,
    strArea,
    strTags,
  } = food;
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("${strMealThumb}")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-amber-500">
              {strMeal}
            </h1>
            <p className="mb-5">{strInstructions}</p>
            <button className="btn btn-primary">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
