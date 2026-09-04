import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle, Sparkles } from 'lucide-react';
import { PageId } from '../types';
import { BrandLogo } from './BrandLogo';
import { BRAND, getWhatsAppLink } from '../data/brand';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string; highlight?: boolean }[] = [
    { id: 'home', label: 'Início' },
    { id: 'loja', label: 'Nossa Loja' },
    { id: 'produtos', label: 'Produtos' },
    { id: 'ofertas', label: 'Ofertas', highlight: true },
    { id: 'dicas', label: 'Dicas' },
    { id: 'contato', label: 'Contato' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const headerWhatsappLink = getWhatsAppLink('Olá! Vim pelo site da Coisa e Tal e gostaria de mais informações.');

  return (
    <header className="sticky top-0 z-40 bg-[#FBF8F2]/95 backdrop-blur-md border-b border-[#E8DED1] shadow-xs transition-all">
      <div className="bg-[#1E3A2F] text-[#FBF8F2] text-xs py-1.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="w-full text-center sm:text-left text-[11px] sm:text-xs tracking-wide flex items-center justify-center sm:justify-start gap-1.5 font-medium">
            <span className="hidden sm:inline">✦</span>
            <span>Tudo para o seu lar, com amor e bom gosto.</span>
            <span className="font-cursive text-sm text-[#F5A97F] ml-1">♥</span>
          </p>
          <a href={headerWhatsappLink} target="_blank" rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-xs text-[#E8DED1] hover:text-white transition-colors font-medium">
            <Phone className="w-3 h-3 text-[#25D366]" />
            <span>WhatsApp: {BRAND.whatsappDisplay}</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          <div className="flex-shrink-0">
            <BrandLogo onClick={() => handleNavClick('home')} />
          </div>

          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button key={item.id} onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive ? 'bg-[#1E3A2F] text-white shadow-xs'
                    : item.highlight ? 'text-[#C46D3B] hover:bg-[#F5EFE6] font-semibold flex items-center gap-1'
                    : 'text-[#1E3A2F] hover:bg-[#F5EFE6] hover:text-[#142820]'}`}>
                  {item.highlight && !isActive && <Sparkles className="w-3.5 h-3.5 text-[#C46D3B] animate-pulse" />}
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <a href={headerWhatsappLink} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2.5 rounded-full text-sm font-semibold shadow-xs hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5">
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <a href={headerWhatsappLink} target="_blank" rel="noopener noreferrer"
              className="p-2 text-[#25D366] hover:bg-[#F5EFE6] rounded-full transition-colors">
              <MessageCircle className="w-6 h-6 fill-[#25D366]" />
            </a>
            <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#1E3A2F] hover:bg-[#F5EFE6] focus:outline-none transition-colors cursor-pointer">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8DED1] bg-[#FBF8F2] shadow-lg">
          <div className="px-4 pt-3 pb-6 space-y-1.5">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button key={item.id} onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                    isActive ? 'bg-[#1E3A2F] text-white font-semibold'
                    : item.highlight ? 'text-[#C46D3B] bg-[#FDF2F4] font-semibold'
                    : 'text-[#1E3A2F] hover:bg-[#F5EFE6]'}`}>
                  <span className="flex items-center gap-2">
                    {item.label}
                    {item.highlight && (
                      <span className="px-2 py-0.5 bg-[#EFA8B8] text-[#1E3A2F] text-[10px] font-bold rounded-full">Ofertas Especiais</span>
                    )}
                  </span>
                  <span className="text-xs opacity-60">→</span>
                </button>
              );
            })}
            <div className="pt-4 border-t border-[#E8DED1] mt-3">
              <a href={headerWhatsappLink} target="_blank" rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-xl text-base font-semibold shadow-xs">
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Atendimento WhatsApp {BRAND.whatsappDisplay}</span>
              </a>
              <p className="text-center text-xs text-[#66766B] mt-2 font-cursive text-sm">Seu lar, do seu jeito! ♥</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
