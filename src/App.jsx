import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import RecipeDetails from "./pages/RecipeDetails";


function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/add-recipe" element={<AddRecipe />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
     
    </Routes>
    
  );
}

export default App;

