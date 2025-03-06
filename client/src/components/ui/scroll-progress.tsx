
"use client";

import { useEffect, useState, useCallback } from "react";
import { Progress } from "@/components/ui/progress";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  // Use throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    if (!window.requestAnimationFrame) {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setProgress(scrolled);
      return;
    }

    window.requestAnimationFrame(() => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setProgress(scrolled);
    });
  }, []);

  useEffect(() => {
    // Add passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <Progress 
      value={progress} 
      className="fixed top-0 left-0 right-0 z-50 h-1 rounded-none bg-transparent"
    />
  );
}
