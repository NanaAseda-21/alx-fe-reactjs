import { create } from 'zustand'

// Zustand store
const useRecipeStore = create((set) => ({
  recipes: [],

  // Action: add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // Action: replace the recipe list
  setRecipes: (recipes) => set({ recipes }),
}))

export default useRecipeStore
