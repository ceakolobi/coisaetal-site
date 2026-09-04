import React from 'react';
import logoCoisaETal from '../assets/images/logo.png';

interface BrandLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'white';
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', variant = 'full', onClick }) => {
  const isWhite = variant === 'white';
  const isCompact = variant === 'compact';

  const sizeClass = isCompact
    ? 'h-9 sm:h-10'
    : 'h-14 sm:h-16 transition-transform duration-300 group-hover:scale-105';

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center select-none cursor-pointer group ${className}`}
      role="button"
      tabIndex={0}
      aria-label="Coisa e Tal — Produtos para o Lar"
    >
      <img
        src={logoCoisaETal}
        alt="Coisa e Tal — Produtos para o Lar"
        className={`${sizeClass} w-auto object-contain`}
        style={isWhite ? { filter: 'brightness(0) invert(1)' } : undefined}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};
