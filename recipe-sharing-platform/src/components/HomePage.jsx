import React, { useState, useEffect } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🍳 Recipe Sharing Platform
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-4"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              {recipe.title}
            </h2>
            <p className="text-gray-600 text-sm">{recipe.summary}</p>

            <Link
              to={`/recipe/${recipe.id}`}
              className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
