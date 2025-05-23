import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Card className="w-full max-w-md mx-4 border-2 border-red-200 dark:border-red-900 shadow-lg">
        <CardContent className="pt-6">
          {/* Animated icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <FileQuestion className="h-24 w-24 text-red-500 animate-pulse" />
              <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                404
              </div>
            </div>
          </div>
          
          {/* Centered title */}
          <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-4">
            Page Not Found
          </h1>
          
          <div className="w-16 h-1 bg-red-500 mx-auto mb-4"></div>
          
          <p className="text-center text-gray-600 dark:text-gray-300 mb-2">
            Oops! We couldn't find the page you're looking for.
          </p>
          
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 italic">
            Did you forget to add the page to the router?
          </p>
          
          <div className="mt-8 flex justify-center">
            <Button 
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 transition-all duration-300 px-6 py-2" 
              onClick={() => window.location.href = '/'}
            >
              <Home className="h-4 w-4" />
              <span>Return to Home</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}