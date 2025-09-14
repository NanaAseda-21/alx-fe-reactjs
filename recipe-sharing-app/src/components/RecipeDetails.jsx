import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useRecipeStore from '../recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === recipeId));

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div style={{ marginTop: '1rem' }}>
        <Link to={`/recipes/${recipeId}/edit`}>
          <button>Edit Recipe</button>
        </Link>
        {' '}
        <DeleteRecipeButton recipeId={recipeId} />
      </div>

      <div style={{ marginTop: '1rem' }}>
        <Link to="/">← Back to list</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
