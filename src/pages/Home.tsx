import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Container from "@/components/layout/container";
import RecipeGrid from "@/components/recipes/RecipeGrid";
import { useRecipes } from "@/hooks/useRecipes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle } from "lucide-react";
import { Recipe } from "@/types/recipe";

const Home = () => {
  const { recipes, loading, favorites, addRecipe } = useRecipes();
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  
  const showFavorites = searchParams.get("filter") === "favorites";

  // Filter logic
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.name.toLowerCase().includes(search.toLowerCase());
    const matchesFav = showFavorites ? favorites.includes(recipe.id) : true;
    return matchesSearch && matchesFav;
  });

  
  const handleAddRandom = () => {
    const newRecipe: Recipe = {
      id: Date.now(), 
      name: `New Custom Recipe ${recipes.length + 1}`,
      cuisine: "International",
      difficulty: "Medium",
      image: "https://dummyjson.com/image/400x200/282828?text=New+Recipe",
      caloriesPerServing: 300,
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
      rating: 0,
      reviewCount: 0,
      mealType: ["Dinner"],
      tags: ["New"],
      userId: 1,
      servings: 2,
      ingredients: ["Ingredient 1", "Ingredient 2"],
      instructions: ["Mix everything.", "Cook it."]
    };
    addRecipe(newRecipe);
  };

  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {showFavorites ? "My Favorites" : "All Recipes"}
          </h1>
          <p className="text-muted-foreground">
            {showFavorites ? "Your curated list of loved meals." : "Discover delicious recipes from around the world."}
          </p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
            <Input 
                placeholder="Search recipes..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="max-w-xs"
            />
            <Button onClick={handleAddRandom}>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Recipe
            </Button>
        </div>
      </div>

      <RecipeGrid recipes={filteredRecipes} loading={loading} />
    </Container>
  );
};

export default Home;