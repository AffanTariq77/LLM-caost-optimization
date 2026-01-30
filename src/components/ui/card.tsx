import * as React from "react";
import { cn } from "../../lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg bg-card text-card-foreground shadow-sky-blue border border-border p-6",
          variant === "outline" && "border-2 border-primary",
          className 
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";
