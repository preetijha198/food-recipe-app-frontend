import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/recipes/${id}`)
      .then((response) => {
        setRecipe(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-600">Loading...</p>
      </div>
    );
  if (!recipe)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-600">Recipe not found.</p>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Recipe Image */}
      <div className="mb-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-80 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Recipe Title and Summary */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">{recipe.title}</h1>
        <p className="mt-2 text-lg text-gray-600">{recipe.summary}</p>
      </div>

      {/* Ingredients Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Ingredients</h2>
        <ul className="list-inside list-disc pl-6 mt-2 text-gray-700">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="py-1">{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Instructions Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Instructions</h2>
        <p className="mt-2 text-gray-700">{recipe.instructions}</p>
      </div>

      {/* Nutrition Info (Optional) */}
      {recipe.nutrition && (
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Nutrition</h2>
          <p className="mt-2 text-gray-700">{recipe.nutrition}</p>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
