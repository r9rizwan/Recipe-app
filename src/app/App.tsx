import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import { RecipeProvider } from "@/context/RecipeContext";
import { router } from "./routes";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="recipe-theme">
      <RecipeProvider>
        <RouterProvider router={router} />
      </RecipeProvider>
    </ThemeProvider>
  );
};

export default App;