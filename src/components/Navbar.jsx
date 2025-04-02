import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          RecipeApp
        </Link>
        <div className="flex space-x-6 items-center">
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
          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-lg px-3 py-1">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="outline-none px-2 py-1 text-gray-700"
            />
            <button
              onClick={handleSearch}
              className="bg-purple-500 text-white px-3 py-1 rounded-lg ml-2 hover:bg-purple-600 transition duration-300"
            >
              🔍
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
