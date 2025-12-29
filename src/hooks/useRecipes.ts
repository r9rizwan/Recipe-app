import { useRecipeContext } from '../context/RecipeContext';

export const useRecipes = () => {
  return useRecipeContext();
};