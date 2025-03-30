import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState(""); // Summary field
  const [image, setImage] = useState(""); // Image URL field
  const [ingredients, setIngredients] = useState([""]); // Ingredients array field
  const [instructions, setInstructions] = useState(""); // Instructions field
  const [nutrition, setNutrition] = useState(""); // Nutrition field
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const recipeData = {
        title,
        image,
        summary,
        ingredients,
        instructions,
        nutrition,
      };
      await axios.post("http://localhost:5000/api/recipes", recipeData);
      navigate("/");
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };

  // Handle ingredients change dynamically (to allow multiple ingredients)
  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const removeIngredient = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Add a New Recipe</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <input
            type="text"
            placeholder="Recipe Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Summary */}
        <div>
          <input
            type="text"
            placeholder="Recipe Summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Image URL */}
        <div>
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Ingredients */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Ingredients</h3>
          {ingredients.map((ingredient, index) => (
            <div key={index} className="flex items-center space-x-4">
              <input
                type="text"
                placeholder={`Ingredient ${index + 1}`}
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => removeIngredient(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addIngredient}
            className="mt-2 text-blue-500 hover:text-blue-700"
          >
            + Add Ingredient
          </button>
        </div>

        {/* Instructions */}
        <div>
          <textarea
            placeholder="Instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          />
        </div>

        {/* Nutrition */}
        <div>
          <input
            type="text"
            placeholder="Nutrition Information"
            value={nutrition}
            onChange={(e) => setNutrition(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
