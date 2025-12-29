import { Link } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';
import { useRecipes } from '@/hooks/useRecipes'; 
import { Button } from '@/components/ui/button';
import { Sun, Moon, UtensilsCrossed, Heart } from 'lucide-react';
import Container from './container';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { favorites } = useRecipes(); 

  const favoriteCount = favorites.length;

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <UtensilsCrossed className="h-6 w-6" />
          <span>RecipeApp</span>
        </Link>
        
        <div className="flex items-center gap-2 md:gap-4">
         
          <Link to="/?filter=favorites">
            <Button variant="ghost" size="sm" className="relative gap-2 px-3">
              <Heart className={`h-5 w-5 ${favoriteCount > 0 ? "fill-red-500 text-red-500" : ""}`} />
              <span className="hidden md:inline">Favorites</span>
              
             
              {favoriteCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground animate-in zoom-in">
                  {favoriteCount}
                </span>
              )}
            </Button>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;