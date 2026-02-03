import React, { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>
      {children}
    </div>
  );
};

export default Card;
