import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) return <p className="text-center text-gray-500 mt-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full rounded-lg shadow-md mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <p className="text-gray-700 mb-4">{recipe.summary}</p>

      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <p className="text-gray-700">{recipe.instructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetail;

