import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          RecipeApp
        </Link>
        <div className="space-x-6">
          <Link 
            to="/" 
            className="text-white text-lg hover:text-gray-200 transition duration-300"
          >
            Home
          </Link>
          <Link 
            to="/add-recipe" 
            className="text-white text-lg hover:text-gray-200 transition duration-300"
          >
            Add Recipe
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;