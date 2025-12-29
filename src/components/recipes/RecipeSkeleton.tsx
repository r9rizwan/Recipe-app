import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const RecipeSkeleton = () => {
  return (
    <Card className="flex flex-col h-full overflow-hidden">
      
      <div className="aspect-video w-full">
        <Skeleton className="h-full w-full" />
      </div>

      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
           
            <Skeleton className="h-6 w-3/4" />
            
            <Skeleton className="h-4 w-12" />
        </div>
      </CardHeader>

      <CardContent className="flex-1 pb-2">
      
        <div className="flex gap-2 mb-3">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>
        
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-20" />
        </div>
      </CardContent>

      <CardFooter className="flex justify-between pt-2">
        
        <Skeleton className="h-9 w-16 rounded-md" />
        <div className="flex gap-2">
          
            <Skeleton className="h-9 w-9 rounded-md" />
            <Skeleton className="h-9 w-9 rounded-md" />
        </div>
      </CardFooter>
    </Card>
  );
};

export default RecipeSkeleton;