import React from "react";

import { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("https://recipe-app-backend-1-i8hd.onrender.com/api/recipes")
      .then(response => {
        console.log("Fetched Recipes:", response.data);
        setRecipes(response.data);
      })
      .catch(error => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <div>

<Navbar />
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 via-indigo-400 to-purple-600 p-6">
      
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">🍽️ Explore Delicious Recipes</h1>
        

        {recipes.length === 0 ? (
          <p className="text-gray-700 text-lg">No recipes found. Try adding some!</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {recipes.map(recipe => (
              <RecipeCard key={recipe._id} recipe={recipe} />
            ))}
          </div>
          
        )}
        
       
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Home;
