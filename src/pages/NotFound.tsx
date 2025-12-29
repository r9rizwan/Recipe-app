import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/container";
import { FileQuestion } from "lucide-react";

const NotFound = () => {
  return (
    <Container className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
      <div className="p-6 rounded-full bg-muted">
        <FileQuestion className="h-12 w-12 text-muted-foreground" />
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">404</h1>
      <h2 className="text-2xl font-semibold tracking-tight">Page not found</h2>
      <p className="text-muted-foreground max-w-[500px]">
        Sorry, we couldn't find the recipe or page you're looking for. It might have been removed or the URL might be incorrect.
      </p>
      
      <div className="pt-4">
        <Link to="/">
          <Button size="lg">
            Return Home
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;