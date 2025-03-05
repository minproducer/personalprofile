"use client";

import { cn } from "@/lib/utils";

interface ShapeDividerProps {
  className?: string;
  variant?: "wave" | "tilt" | "curve";
  position?: "top" | "bottom";
  color?: string;
}

export function ShapeDivider({ 
  className,
  variant = "wave",
  position = "bottom",
  color = "currentColor"
}: ShapeDividerProps) {
  const shapes = {
    wave: (
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path 
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          fill={color}
        />
      </svg>
    ),
    tilt: (
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M1200 120L0 16.48V0h1200v120z"
          fill={color}
        />
      </svg>
    ),
    curve: (
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          fill={color}
        />
      </svg>
    ),
  };

  return (
    <div 
      className={cn(
        "absolute left-0 w-full overflow-hidden leading-[0] z-10",
        position === "top" ? "top-0 rotate-180" : "bottom-0",
        className
      )}
      style={{ height: "70px" }}
    >
      {shapes[variant]}
    </div>
  );
}
