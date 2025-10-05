import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-xl">
        Recipe not found 😢
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          {recipe.title}
        </h1>
        <p className="text-gray-600 mb-6">{recipe.summary}</p>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>2 cups of ingredient 1</li>
            <li>1 tsp of ingredient 2</li>
            <li>Salt, pepper, and spices to taste</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Cooking Instructions</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>Preheat your pan or oven.</li>
            <li>Add the main ingredients and cook for 10–15 minutes.</li>
            <li>Serve hot and enjoy your meal!</li>
          </ol>
        </div>

        <Link
          to="/"
          className="inline-block mt-6 text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetail;
