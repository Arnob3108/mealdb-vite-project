import React from "react";
import { useNavigate } from "react-router-dom";

const Food = ({ food }) => {
  const { idMeal, strMealThumb, strMeal, strCategory, strArea, strTags } = food;

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/food/${idMeal}`);
  };
  return (
    <div>
      <div className="w-9/12 mx-auto card lg:card-side bg-base-100 shadow-xl hover:shadow-indigo-400/50">
        <figure>
          <img className="w-80" src={strMealThumb} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl">{strMeal}</h2>
          <p className=" text-xl">Category: {strCategory}</p>
          <div>
            <p>Area: {strArea}</p>
            <p>Tags: {strTags}</p>
          </div>
          <div className="card-actions justify-end">
            <button onClick={handleNavigate} className="btn btn-primary">
              Smale It!!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
