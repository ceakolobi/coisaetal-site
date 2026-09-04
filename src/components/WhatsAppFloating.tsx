import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { PageId } from '../types';
import { BRAND, getWhatsAppLink } from '../data/brand';

interface WhatsAppFloatingProps {
  currentPage: PageId;
}

export const WhatsAppFloating: React.FC<WhatsAppFloatingProps> = ({ currentPage }) => {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  const getContextMessage = (page: PageId): string => {
    switch (page) {
      case 'produtos': return 'Olá! Tenho interesse em um produto da Coisa e Tal.';
      case 'ofertas': return 'Olá! Vi uma oferta no site da Coisa e Tal e gostaria de saber mais.';
      case 'loja': return 'Olá! Gostaria de saber mais sobre a Coisa e Tal e como comprar.';
      case 'dicas': return 'Olá! Adorei as dicas do site da Coisa e Tal e gostaria de tirar uma dúvida.';
      case 'contato': return 'Olá! Gostaria de falar com o atendimento da Coisa e Tal.';
      default: return 'Olá! Vim pelo site da Coisa e Tal e gostaria de conhecer os produtos.';
    }
  };

  const whatsappUrl = getWhatsAppLink(getContextMessage(currentPage));

  return (
    <aside className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {tooltipVisible && (
        <div className="pointer-events-auto mb-3 max-w-xs bg-white text-[#1E2822] rounded-2xl p-3.5 shadow-xl border border-[#E8DED1] text-xs animate-fadeIn relative">
          <button onClick={() => setTooltipVisible(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 p-0.5 rounded-full">
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
            <span className="font-semibold text-[#1E3A2F]">Atendimento Coisa e Tal</span>
          </div>
          <p className="text-gray-600 leading-relaxed pr-2">
            Precisa de ajuda ou quer fazer seu pedido? Estamos online no WhatsApp!
          </p>
          <div className="mt-2 pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-[#25D366] font-medium">
            <span>Clique para conversar</span>
            <span className="text-[#66766B] font-mono">{BRAND.whatsappDisplay}</span>
          </div>
        </div>
      )}
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
        aria-label="Falar no WhatsApp oficial da Coisa e Tal">
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
        </span>
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />
        <span className="absolute right-full mr-3 hidden sm:group-hover:inline-block px-3 py-1.5 bg-[#1E3A2F] text-white text-xs font-medium rounded-lg whitespace-nowrap shadow-md">
          Chamar no WhatsApp
        </span>
      </a>
    </aside>
  );
};
