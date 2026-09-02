import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = '', ...props }: ContainerProps) {
  return (
    <div
      className={`max-w-container-max mx-auto px-4 sm:px-6 lg:px-12 w-full ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
