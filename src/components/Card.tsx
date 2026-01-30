import React from 'react';

interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, description, children, className = '' }) => {
  // Detect if children is a number circle (used in How It Works section)
  const isNumberCircle =
    React.isValidElement(children) &&
    children.props &&
    typeof children.props.children === 'string' &&
    ['1', '2', '3'].includes(children.props.children.trim());

  return (
    <div
      className={`bg-[#F3F9FF] border border-border/40 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-sky-blue transition-all duration-300 min-h-[320px] h-full w-full ${className}`}
      style={{ background: "#F3F9FF" }}
    >
      <h3 className="text-xl font-semibold mb-3 text-primary font-sans tracking-tight text-center">{title}</h3>
      {isNumberCircle ? (
        <div className="flex flex-col items-center justify-center">
          <p className="text-base text-muted-foreground font-normal font-sans leading-relaxed mb-4 text-center">{description}</p>
          {children}
        </div>
      ) : (
        <>
          <p className="text-base text-muted-foreground font-normal font-sans leading-relaxed mb-4 text-left">{description}</p>
          {children}
        </>
      )}
    </div>
  );
};
