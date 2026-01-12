import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export function Button({ children, variant = "primary", className }: 
ButtonProps) {
  return (
    <button
      className={clsx(
        "px-6 py-3 rounded-xl font-semibold transition-colors 
duration-300",
        variant === "primary" &&
          "bg-white text-black hover:bg-neutral-200",
        variant === "outline" &&
          "border border-neutral-600 text-neutral-100 
hover:bg-neutral-800",
        className
      )}
    >
      {children}
    </button>
  );
}

