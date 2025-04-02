import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen flex flex-col items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('https://source.unsplash.com/1600x900/?food')",
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Food Recipe App</h1>
        <p className="text-lg mb-6">Discover and share amazing recipes!</p>
        <button
          onClick={() => navigate("/home")}
          className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 transition"
        >
          See Recipes
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
