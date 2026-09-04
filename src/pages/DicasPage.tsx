import React, { useState } from 'react';
import { TipArticle } from '../types';
import { TIPS_ARTICLES } from '../data/tips';
import { getWhatsAppLink } from '../data/brand';
import {
  BookOpen,
  Clock,
  ArrowRight,
  X,
  Share2,
  MessageCircle,
  Heart,
  Sparkles
} from 'lucide-react';

export const DicasPage: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<TipArticle | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#E8DED1] text-[#C46D3B] text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Inspiração & Cuidado</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#1E3A2F]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Dicas para o Lar
        </h1>
        <p className="text-sm sm:text-base text-[#66766B]">
          Artigos simples, práticos e acolhedores para tornar seu dia a dia mais leve e sua casa cada vez mais gostosa de viver.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TIPS_ARTICLES.map((art) => (
          <article key={art.id} className="bg-white rounded-3xl overflow-hidden border border-[#E8DED1] shadow-xs hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="relative aspect-16/10 overflow-hidden bg-[#F5EFE6]">
                <span className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-[#1E3A2F]/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
                  {art.category}
                </span>
                <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-[11px] text-[#66766B] mb-2 font-medium">
                  <span>{art.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{art.readTime}</span>
                </div>
                <h2 className="font-serif font-bold text-lg sm:text-xl text-[#1E3A2F] mb-3 leading-snug group-hover:text-[#C46D3B] transition-colors" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
                  {art.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#66766B] leading-relaxed line-clamp-3">{art.excerpt}</p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => setSelectedArticle(art)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#F5EFE6] hover:bg-[#EADFCE] text-[#1E3A2F] text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>Ler artigo completo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn overflow-y-auto"
          onClick={() => setSelectedArticle(null)} role="dialog" aria-modal="true">
          <div className="relative w-full max-w-2xl bg-[#FBF8F2] rounded-3xl shadow-2xl border border-[#E8DED1] overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#1E3A2F] flex items-center justify-center shadow-md transition-all cursor-pointer"
              aria-label="Fechar artigo">
              <X className="w-5 h-5" />
            </button>
            <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-[#F5EFE6]">
              <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FBF8F2] via-transparent to-black/30" />
              <span className="absolute bottom-4 left-6 px-3 py-1 rounded-full bg-[#1E3A2F] text-white text-xs font-bold uppercase tracking-wider">
                {selectedArticle.category}
              </span>
            </div>

            <div className="p-6 sm:p-8 space-y-5 max-h-[60vh] overflow-y-auto">
              <div className="flex items-center gap-2 text-xs text-[#66766B]">
                <span>{selectedArticle.date}</span><span>•</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{selectedArticle.readTime}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E3A2F] leading-tight" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
                {selectedArticle.title}
              </h2>
              <div className="space-y-4 text-sm text-[#1E2822] leading-relaxed pt-2">
                {selectedArticle.content.map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed">{paragraph}</p>
                ))}
              </div>
              <div className="bg-white p-4 rounded-2xl border border-[#E8DED1] text-center mt-6">
                <span className="font-cursive text-xl text-[#C46D3B] font-bold block">"Pequenos detalhes fazem grandes momentos." ♥</span>
                <p className="text-[11px] text-[#66766B] mt-1">Equipe Coisa e Tal — Produtos para o Lar</p>
              </div>
              <div className="pt-4 border-t border-[#E8DED1] flex flex-wrap items-center justify-between gap-3">
                <a href={getWhatsAppLink(`Olá! Adorei o artigo "${selectedArticle.title}" no site da Coisa e Tal e gostaria de tirar uma dúvida sobre os produtos recomendados.`)}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs">
                  <MessageCircle className="w-4 h-4 fill-white" /><span>Tirar Dúvida no WhatsApp</span>
                </a>
                <button onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2.5 rounded-full bg-[#1E3A2F] text-white text-xs font-bold uppercase tracking-wider cursor-pointer">
                  Voltar para as Dicas
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
