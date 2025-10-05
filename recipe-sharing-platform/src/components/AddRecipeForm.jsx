import React, { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    const ingredientsList = ingredients.split(",").map((i) => i.trim());
    if (ingredientsList.length < 2) {
      setError("Please include at least two ingredients.");
      return;
    }

    const newRecipe = {
      title,
      ingredients: ingredientsList,
      steps,
    };

    console.log("New Recipe Submitted:", newRecipe);
    setSuccess("Recipe added successfully!");
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Recipe Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Ingredients (comma-separated)</label>
          <textarea
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="e.g. Eggs, Milk, Sugar"
            rows="3"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Preparation Steps</label>
          <textarea
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Describe how to make the recipe"
            rows="4"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">{success}</p>}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
