import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../recipeStore';

const RecipeList = () => {
  const { filteredRecipes, filterRecipes, recipes, searchTerm } = useRecipeStore();

  // keep filtered list synced when recipes or search term change
  useEffect(() => {
    filterRecipes();
  }, [recipes, searchTerm, filterRecipes]);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </li>
          ))
        ) : (
          <li>No recipes match your search.</li>
        )}
      </ul>
    </div>
  );
};

export default RecipeList;
