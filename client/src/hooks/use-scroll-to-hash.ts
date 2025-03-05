import { useEffect } from "react";
import { useLocation } from "wouter";

export function useScrollToHash() {
  const [location] = useLocation();

  useEffect(() => {
    // Remove the leading '#' if present
    const hash = location.replace(/^#/, "");
    if (!hash) return;

    // Find the element with the matching ID
    const element = document.getElementById(hash);
    if (element) {
      // Add a small delay to ensure smooth scrolling after the page has rendered
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return location;
}
