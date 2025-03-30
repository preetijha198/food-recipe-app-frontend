import React from "react";

import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-red-500 shadow-lg rounded-2xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{recipe.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{recipe.summary}</p>
      <Link 
        to={`/recipe/${recipe._id}`} 
        className="inline-block px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
      >
        View Recipe
      </Link>
    </div>
  );
};

export default RecipeCard;
