import * as React from "react";

import { cn } from "@/lib/utils";

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "spinner" | "dots" | "pulse";
}

const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
  ({ className, size = "md", variant = "spinner", ...props }, ref) => {
    const sizeClasses = {
      sm: "w-4 h-4",
      md: "w-6 h-6",
      lg: "w-8 h-8",
      xl: "w-12 h-12",
    };

    if (variant === "spinner") {
      return (
        <div
          ref={ref}
          className={cn(
            "animate-spin rounded-full border-2 border-gray-300 border-t-primary",
            sizeClasses[size],
            className
          )}
          {...props}
        />
      );
    }

    if (variant === "dots") {
      return (
        <div ref={ref} className={cn("flex space-x-1", className)} {...props}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={cn(
                "animate-bounce rounded-full bg-primary",
                size === "sm" && "w-1 h-1",
                size === "md" && "w-2 h-2",
                size === "lg" && "w-3 h-3",
                size === "xl" && "w-4 h-4"
              )}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      );
    }

    if (variant === "pulse") {
      return (
        <div
          ref={ref}
          className={cn(
            "animate-pulse rounded-full bg-primary opacity-75",
            sizeClasses[size],
            className
          )}
          {...props}
        />
      );
    }

    return null;
  }
);
Loader.displayName = "Loader";

export { Loader };
