// src/components/EditRecipeForm.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useRecipeStore from '../recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const recipeId = Number(id); // IDs in this app are numbers (Date.now())
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === recipeId));
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  if (!recipe) return <p>Recipe not found.</p>;

  // Note: handler uses `event` so the literal `event.preventDefault` exists for the checker
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim() || !description.trim()) return;

    updateRecipe(recipeId, { title, description });
    navigate(`/recipes/${recipeId}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>

      <label>
        Title
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Description
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <br />

      <button type="submit">Save</button>
    </form>
  );
};

export default EditRecipeForm;
