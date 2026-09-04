import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'white';
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', variant = 'full', onClick }) => {
  const isWhite = variant === 'white';
  const textColorForest = isWhite ? 'text-white' : 'text-[#1E3A2F]';
  const textColorTerracotta = isWhite ? 'text-[#F5A97F]' : 'text-[#C46D3B]';
  const strokeColor = isWhite ? '#FFFFFF' : '#1E3A2F';
  const heartColor = isWhite ? '#F5A97F' : '#C46D3B';

  return (
    <div onClick={onClick} className={`inline-flex flex-col items-center select-none cursor-pointer group ${className}`}
      role="button" tabIndex={0} aria-label="Coisa e Tal — Produtos para o Lar">
      <div className="relative mb-0.5 flex items-center justify-center">
        <svg viewBox="0 0 160 70" className={variant === 'compact' ? 'w-16 h-7' : 'w-24 h-10 transition-transform duration-300 group-hover:scale-105'}
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 42 C28 40 38 35 48 30" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
          <path d="M26 38 C28 33 34 32 35 37 C34 40 29 41 26 38 Z" fill={strokeColor} />
          <path d="M34 32 C37 28 43 28 43 33 C41 35 36 36 34 32 Z" fill={strokeColor} />
          <path d="M42 27 C46 22 51 24 50 28 C48 30 44 30 42 27 Z" fill={strokeColor} />
          <path d="M140 42 C132 40 122 35 112 30" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
          <path d="M134 38 C132 33 126 32 125 37 C126 40 131 41 134 38 Z" fill={strokeColor} />
          <path d="M126 32 C123 28 117 28 117 33 C119 35 124 36 126 32 Z" fill={strokeColor} />
          <path d="M118 27 C114 22 109 24 110 28 C112 30 116 30 118 27 Z" fill={strokeColor} />
          <path d="M52 40 L80 16 L108 40" stroke={strokeColor} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M96 23 L96 14 L102 14 L102 28" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M80 37 C77 31 70 31 68 36 C66 42 80 50 80 50 C80 50 94 42 92 36 C90 31 83 31 80 37 Z"
            fill="none" stroke={heartColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="flex items-baseline tracking-wide">
        <span className={`font-serif font-extrabold ${textColorForest} ${variant === 'compact' ? 'text-lg tracking-wider' : 'text-2xl sm:text-3xl tracking-[0.12em]'}`}
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>COISA</span>
        <span className={`font-serif font-extrabold ml-2 ${textColorTerracotta} ${variant === 'compact' ? 'text-lg tracking-wider' : 'text-2xl sm:text-3xl tracking-[0.12em]'}`}
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>E TAL</span>
      </div>
      {variant !== 'compact' && (
        <div className="flex items-center gap-2 mt-0.5">
          <span className={`h-px w-5 sm:w-7 ${isWhite ? 'bg-white/40' : 'bg-[#1E3A2F]/40'}`} />
          <span className={`text-[9px] sm:text-[10px] font-semibold tracking-[0.25em] uppercase ${isWhite ? 'text-white/90' : 'text-[#1E3A2F]/90'}`}>
            Produtos para o Lar
          </span>
          <span className={`h-px w-5 sm:w-7 ${isWhite ? 'bg-white/40' : 'bg-[#1E3A2F]/40'}`} />
        </div>
      )}
    </div>
  );
};
