import { useParams, Link } from "react-router-dom";
import { useRecipes } from "@/hooks/useRecipes";
import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, Flame } from "lucide-react";

const RecipeDetails = () => {
  const { id } = useParams();
  const { recipes } = useRecipes();
  
  
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) {
    return (
        <Container className="py-20 text-center">
            <h2 className="text-2xl font-bold">Recipe not found</h2>
            <Link to="/"><Button className="mt-4">Go Home</Button></Link>
        </Container>
    )
  }

  return (
    <Container className="max-w-4xl">
      <Link to="/">
        <Button variant="ghost" className="mb-6 pl-0 hover:bg-transparent hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Recipes
        </Button>
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
            <div className="rounded-xl overflow-hidden border">
                <img src={recipe.image} alt={recipe.name} className="w-full h-auto object-cover" />
            </div>
        </div>

        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-extrabold mb-2">{recipe.name}</h1>
                <div className="flex gap-2 flex-wrap">
                    <Badge>{recipe.cuisine}</Badge>
                    <Badge variant="outline">{recipe.difficulty}</Badge>
                    {recipe.mealType.map(m => <Badge key={m} variant="secondary">{m}</Badge>)}
                </div>
            </div>

            <div className="flex justify-between p-4 rounded-lg bg-muted/50">
                <div className="text-center">
                    <Clock className="mx-auto h-5 w-5 mb-1 text-muted-foreground" />
                    <span className="text-sm font-medium">{recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</span>
                </div>
                <div className="text-center">
                    <Users className="mx-auto h-5 w-5 mb-1 text-muted-foreground" />
                    <span className="text-sm font-medium">{recipe.servings} Servings</span>
                </div>
                <div className="text-center">
                    <Flame className="mx-auto h-5 w-5 mb-1 text-muted-foreground" />
                    <span className="text-sm font-medium">{recipe.caloriesPerServing} Cal</span>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-3">Ingredients</h3>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    {recipe.ingredients.map((ing, i) => (
                        <li key={i}>{ing}</li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
      
      <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">Instructions</h3>
            <div className="space-y-4">
                {recipe.instructions.map((step, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-lg border bg-card">
                        <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">
                            {i + 1}
                        </span>
                        <p className="text-muted-foreground pt-1">{step}</p>
                    </div>
                ))}
            </div>
      </div>
    </Container>
  );
};

export default RecipeDetails;