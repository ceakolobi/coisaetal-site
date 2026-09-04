import React from 'react';
import { PageId } from '../types';
import { BrandLogo } from './BrandLogo';
import { BRAND, getWhatsAppLink } from '../data/brand';
import { Phone, Mail, MapPin, Instagram, Heart, Home, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Início' },
    { id: 'loja', label: 'Nossa Loja' },
    { id: 'produtos', label: 'Produtos' },
    { id: 'ofertas', label: 'Ofertas' },
    { id: 'dicas', label: 'Dicas para o Lar' },
    { id: 'contato', label: 'Contato' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappFooterLink = getWhatsAppLink(
    'Olá! Vim pelo rodapé do site da Coisa e Tal e gostaria de tirar uma dúvida.'
  );

  return (
    <footer className="bg-[#1E3A2F] text-[#FBF8F2] pt-16 pb-8 border-t border-[#142820]">
      {/* 3 Pillars Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 mb-12 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex items-start justify-center md:justify-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-[#F5A97F]">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wider text-white">SUA CASA, SEU REFÚGIO</h4>
              <p className="text-xs text-[#8EA79A] mt-1 leading-relaxed">
                Mais aconchego para o que realmente importa todos os dias.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-center md:justify-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-[#F5A97F]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wider text-white">PRODUTOS QUE FAZEM BEM</h4>
              <p className="text-xs text-[#8EA79A] mt-1 leading-relaxed">
                Mais praticidade, mais tempo e mais momentos felizes com quem você ama.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-center md:justify-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-[#F5A97F]">
              <Heart className="w-5 h-5 fill-[#F5A97F]/30" />
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wider text-white">ESCOLHAS QUE CUIDAM DE VOCÊ</h4>
              <p className="text-xs text-[#8EA79A] mt-1 leading-relaxed">
                Menos trabalho na rotina e muito mais carinho e beleza em cada cantinho.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <BrandLogo variant="white" onClick={() => handleNavClick('home')} />
            <p className="text-sm text-[#D9E4DE] leading-relaxed pt-2">
              Transforme sua casa em um lugar mais prático, acolhedor e cheio de amor.
            </p>
            <div className="pt-2">
              <span className="font-cursive text-2xl text-[#F5A97F] block">
                {BRAND.footerQuote}
              </span>
              <p className="text-xs text-[#8EA79A] font-cursive text-lg">
                {BRAND.footerSubquote} ♥
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#F5A97F] uppercase mb-4">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="text-[#D9E4DE] hover:text-white hover:translate-x-1 transition-all duration-150 inline-block cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#F5A97F] uppercase mb-4">
              Atendimento & Suporte
            </h3>
            <ul className="space-y-3 text-sm text-[#D9E4DE]">
              <li className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-[11px] text-[#8EA79A]">WhatsApp Oficial</span>
                  <a href={whatsappFooterLink} target="_blank" rel="noopener noreferrer"
                    className="font-medium text-white hover:text-[#25D366] transition-colors">
                    {BRAND.whatsappDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#8EA79A]">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-[11px] text-[#8EA79A]">E-mail</span>
                  <span className="text-xs text-white/70 italic">{BRAND.emailPlaceholder}</span>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#8EA79A]">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-[11px] text-[#8EA79A]">Endereço</span>
                  <span className="text-xs text-white/70 italic">{BRAND.addressPlaceholder}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Social & WhatsApp Call */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#F5A97F] uppercase mb-4">
              Fale com a Gente
            </h3>
            <p className="text-xs text-[#D9E4DE] leading-relaxed">
              Tire dúvidas sobre produtos, consulte frete ou faça seu pedido diretamente pelo nosso WhatsApp.
            </p>
            <a href={whatsappFooterLink} target="_blank" rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2.5 rounded-full text-sm font-semibold transition-all shadow-xs">
              <Phone className="w-4 h-4 fill-white" />
              <span>Chamar no WhatsApp</span>
            </a>
            <div className="pt-2">
              <span className="block text-xs text-[#8EA79A] mb-2">Redes Sociais:</span>
              <div className="flex items-center gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C46D3B] flex items-center justify-center text-white transition-colors"
                  aria-label="Instagram Coisa e Tal">
                  <Instagram className="w-4 h-4" />
                </a>
                <span className="text-xs text-[#8EA79A] italic">{BRAND.socialInstagramPlaceholder}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8EA79A] gap-4">
          <p>© {currentYear} COISA E TAL — Produtos para o Lar. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <div className="flex items-center gap-2 text-[#D9E4DE]">
              <span>Feito com carinho para o seu lar</span>
              <Heart className="w-3.5 h-3.5 text-[#EFA8B8] fill-[#EFA8B8]" />
            </div>
            <span className="text-white/20">|</span>
            <span className="text-[#8EA79A]">
              Desenvolvido por{' '}
              <a href="https://antum.com.br" target="_blank" rel="noopener noreferrer"
                className="text-[#F5A97F] hover:text-white transition-colors font-semibold">
                Antum Automação
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
