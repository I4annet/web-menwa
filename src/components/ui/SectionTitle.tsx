import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  centered = false,
  className = '',
}: SectionTitleProps) {
  return (
    <div
      className={`mb-8 md:mb-12 ${
        centered ? 'text-center flex flex-col items-center' : ''
      } ${className}`}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-brand-black">
        {title}
      </h2>
      <div
        className={`h-1 w-20 bg-brand-red mt-3 rounded-full ${
          centered ? 'mx-auto' : ''
        }`}
      />
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-brand-gray-600 max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
