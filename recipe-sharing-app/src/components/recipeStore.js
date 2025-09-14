import { create } from 'zustand'

// Define the store
const useRecipeStore = create((set) => ({
  recipes: [],

  // Action: Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // Action: Set the entire recipe list
  setRecipes: (recipes) => set({ recipes }),
}))

export default useRecipeStore
