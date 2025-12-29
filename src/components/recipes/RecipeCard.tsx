import { Recipe } from "@/types/recipe";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Trash2, Clock, Flame } from "lucide-react";
import { useRecipes } from "@/hooks/useRecipes";
import { Link } from "react-router-dom";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const { favorites, toggleFavorite, removeRecipe } = useRecipes();
  const isFavorite = favorites.includes(recipe.id);

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-lg dark:hover:border-primary/50">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.name} 
          className="object-cover w-full h-full transition-transform hover:scale-105" 
        />
        <Badge className="absolute top-2 right-2" variant="secondary">
          {recipe.difficulty}
        </Badge>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
            <CardTitle className="text-lg line-clamp-1">{recipe.name}</CardTitle>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Flame className="w-4 h-4 text-orange-500" /> {recipe.caloriesPerServing}
            </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 pb-2">
        <div className="flex gap-2 flex-wrap mb-3">
          {recipe.tags.slice(0, 3).map(tag => (
            <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>{recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</span>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between pt-2">
        <Link to={`/recipe/${recipe.id}`}>
             <Button variant="outline" size="sm">View</Button>
        </Link>
        <div className="flex gap-2">
            <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => toggleFavorite(recipe.id)}
                className={isFavorite ? "text-red-500 hover:text-red-600" : "text-muted-foreground"}
            >
            <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
            </Button>
            <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => removeRecipe(recipe.id)}
                className="text-muted-foreground hover:text-destructive"
            >
            <Trash2 className="w-5 h-5" />
            </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;