
import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // On mount, read the preferred theme from localStorage or browser settings
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const applyTheme = (newTheme: "light" | "dark") => {
    const root = document.documentElement;
    
    // Toggle dark class
    root.classList.toggle("dark", newTheme === "dark");
    
    // Update data attribute
    root.setAttribute("data-theme", newTheme);
    
    // Store in localStorage
    localStorage.setItem("theme", newTheme);

    // Force a repaint to fix potential theme issues
    // This forces a style recalculation
    const _ = document.body.offsetHeight;
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return { theme, toggleTheme };
}
