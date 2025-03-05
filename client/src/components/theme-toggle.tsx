
"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative"
    >
      <Sun className="h-5 w-5 transition-all duration-300 dark:opacity-0 dark:scale-0" />
      <Moon className="absolute h-5 w-5 transition-all duration-300 opacity-0 scale-0 dark:opacity-100 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
