import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],

  // add a recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // update a recipe by id with partial updates (e.g. { title, description })
  updateRecipe: (id, updates) =>
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === id ? { ...r, ...updates } : r)),
    })),

  // delete a recipe by id
  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),

  // replace entire list (keeps backward compat)
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
