import React from "react";
import { useLoaderData } from "react-router-dom";
import Food from "../Food/Food";

const Foods = () => {
  const foods = useLoaderData().meals;
  // console.log(foods);
  return (
    <div>
      <div className="text-center flex flex-col items-center">
        <h1>Search Your Food Here</h1>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 ">
        {foods.map((food) => (
          <Food key={food.idMeal} food={food}></Food>
        ))}
      </div>
    </div>
  );
};

export default Foods;
