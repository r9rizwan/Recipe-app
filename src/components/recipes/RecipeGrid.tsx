import { Recipe } from "@/types/recipe";
import RecipeCard from "./RecipeCard";
import RecipeSkeleton from "./RecipeSkeleton";

interface RecipeGridProps {
  recipes: Recipe[];
  loading: boolean;
}

const RecipeGrid = ({ recipes, loading }: RecipeGridProps) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <RecipeSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (recipes.length === 0) {
    return <div className="text-center py-10 text-muted-foreground">No recipes found.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeGrid;