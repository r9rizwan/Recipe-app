import React, { createContext, useContext, useEffect, useState } from 'react';
import { Recipe } from '../types/recipe';
import { fetchRecipesAPI } from '../services/recipes.api';

interface RecipeContextType {
  recipes: Recipe[];
  favorites: number[]; // Store IDs of favorites
  loading: boolean;
  error: string | null;
  addRecipe: (recipe: Recipe) => void;
  removeRecipe: (id: number) => void;
  toggleFavorite: (id: number) => void;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const data = await fetchRecipesAPI();
        setRecipes(data.recipes);
      } catch (err) {
        setError('Failed to fetch recipes');
      } finally {
        setLoading(false);
      }
    };
    loadRecipes();
  }, []);

  const addRecipe = (recipe: Recipe) => {
    setRecipes([recipe, ...recipes]);
  };

  const removeRecipe = (id: number) => {
    setRecipes(recipes.filter((r) => r.id !== id));
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <RecipeContext.Provider value={{ recipes, favorites, loading, error, addRecipe, removeRecipe, toggleFavorite }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => {
  const context = useContext(RecipeContext);
  if (!context) throw new Error('useRecipeContext must be used within RecipeProvider');
  return context;
};