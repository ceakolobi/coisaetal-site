import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { getWhatsAppLink } from '../data/brand';
import {
  Flame,
  Clock,
  Heart,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Tag
} from 'lucide-react';

interface OfertasPageProps {
  onSelectProduct: (product: Product) => void;
}

export const OfertasPage: React.FC<OfertasPageProps> = ({ onSelectProduct }) => {
  const airFryer = PRODUCTS.find((p) => p.id === 'air-fryer-rosa') || PRODUCTS[0];
  const otherOffers = PRODUCTS.filter((p) => p.isOffer && p.id !== 'air-fryer-rosa');

  const [activeColor, setActiveColor] = useState('Rosa Delicado');
  const [activeImage, setActiveImage] = useState(airFryer.image);

  const [timeLeft, setTimeLeft] = useState({ hours: 18, minutes: 42, seconds: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        else if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        else if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const airFryerWhatsappLink = getWhatsAppLink(
    `Olá! Vi a oferta da Air Fryer (${activeColor}) de R$ 249,00 por R$ 199,00 no site da Coisa e Tal e quero garantir a minha!`
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 sm:space-y-16">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF2F4] border border-[#EFA8B8] text-[#C7586F] text-xs font-bold uppercase tracking-wider">
          <Flame className="w-3.5 h-3.5" />
          <span>Ofertas Especiais & Exclusivas</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#1E3A2F]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Achados com Preços Especiais
        </h1>
        <p className="text-sm sm:text-base text-[#66766B]">
          Aproveite descontos exclusivos em itens selecionados para deixar sua casa ainda mais aconchegante.
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E3A2F] text-white text-xs font-semibold shadow-xs">
          <Clock className="w-4 h-4 text-[#F5A97F]" />
          <span>Ofertas do Dia encerram em:</span>
          <span className="font-mono text-[#F5A97F] font-bold">
            {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s
          </span>
        </div>
      </div>

      <section className="bg-[#FAF6F0] rounded-3xl lg:rounded-[36px] border-2 border-[#EFA8B8] shadow-lg overflow-hidden p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-[#C7586F] text-white text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /><span>Super Destaque</span>
              </span>
              <span className="px-3 py-1 bg-white border border-[#E8DED1] text-[#1E3A2F] text-xs font-semibold rounded-full uppercase tracking-wider">
                Cozinha & Praticidade
              </span>
            </div>
            <div>
              <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#1E3A2F] leading-tight" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
                AIR FRYER{' '}
                <span className="font-cursive text-4xl sm:text-6xl text-[#C7586F] font-normal ml-1">Rosa</span>
              </h2>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#C46D3B] mt-2 flex items-center gap-1.5">
                <Heart className="w-4 h-4 fill-[#C46D3B]" />
                <span>Mais sabor, menos óleo, mais tempo para você!</span>
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#E8DED1] shadow-xs max-w-md">
              <div className="text-xs font-bold text-[#8EA79A] uppercase tracking-wider flex items-center gap-1 mb-1">
                <span>♥</span><span>APENAS</span><span>♥</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-sm sm:text-base text-[#8EA79A] line-through font-medium">De: R$ 249,00</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs text-[#1E3A2F] font-bold uppercase">Por:</span>
                  <span className="text-4xl sm:text-5xl font-black text-[#C46D3B] tracking-tight">R$ 199,00</span>
                </div>
              </div>
              <div className="mt-2.5 inline-block px-3 py-1 bg-[#1E3A2F] text-white text-[11px] font-bold tracking-wider rounded-md uppercase">
                ♥ POR TEMPO LIMITADO!
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                { icon: <Heart className="w-4 h-4 text-[#C7586F]" />, title: 'Menos Óleo, Mais Saúde', desc: 'Prepare receitas crocantes usando pouco ou nenhum óleo.' },
                { icon: <Clock className="w-4 h-4 text-[#C46D3B]" />, title: 'Mais Rapidez no Dia a Dia', desc: 'Alimentos prontos em menos tempo e sem bagunça na pia.' },
                { icon: <Flame className="w-4 h-4 text-[#1E3A2F]" />, title: 'Temperatura Ajustável', desc: 'Controle perfeito para cada receita, do jeito que você precisa.' },
                { icon: <CheckCircle2 className="w-4 h-4 text-[#1E3A2F]" />, title: 'Cesto Antiaderente', desc: 'Fácil de limpar, resistente e com alta durabilidade.' },
              ].map((feat, i) => (
                <div key={i} className="bg-white/90 p-3 rounded-xl border border-[#E8DED1]">
                  <div className="flex items-center gap-1.5 mb-1">{feat.icon}<strong className="text-xs text-[#1E3A2F] uppercase font-bold">{feat.title}</strong></div>
                  <p className="text-[11px] text-[#66766B]">{feat.desc}</p>
                </div>
              ))}
            </div>

            {airFryer.colors && (
              <div className="pt-2">
                <span className="text-xs font-bold text-[#1E3A2F] uppercase tracking-wider block mb-2">♥ DISPONÍVEL TAMBÉM NAS CORES: ♥</span>
                <div className="flex flex-wrap gap-2">
                  {airFryer.colors.map((c) => {
                    const isSelected = activeColor === c.name;
                    return (
                      <button key={c.name} onClick={() => { setActiveColor(c.name); setActiveImage(c.image); }}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 border cursor-pointer transition-all ${isSelected ? 'bg-[#1E3A2F] text-white border-[#1E3A2F] shadow-xs scale-105' : 'bg-white text-[#1E3A2F] border-[#E8DED1] hover:border-[#1E3A2F]'}`}>
                        <span className="w-3 h-3 rounded-full border border-black/20" style={{ backgroundColor: c.hex }} />
                        <span>{c.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a id="oferta-airfryer-whatsapp-btn" href={airFryerWhatsappLink} target="_blank" rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 fill-white" /><span>Comprar pelo WhatsApp</span>
              </a>
              <button onClick={() => onSelectProduct(airFryer)}
                className="px-6 py-3.5 rounded-full bg-white hover:bg-[#F5EFE6] text-[#1E3A2F] border border-[#E8DED1] text-xs font-bold uppercase tracking-wider shadow-xs transition-all cursor-pointer">
                Ver Ficha Completa
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-3/4 rounded-3xl overflow-hidden bg-white shadow-xl border-4 border-white">
                <img src={activeImage} alt={`Air Fryer ${activeColor} Coisa e Tal`} className="w-full h-full object-cover transition-all duration-500" />
              </div>
              <div className="mt-4 bg-white rounded-2xl p-3 border border-[#E8DED1] text-center text-xs text-[#1E3A2F] font-medium shadow-xs">
                <span>Visualizando cor selecionada: </span><strong className="text-[#C46D3B]">{activeColor}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#E8DED1] pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C46D3B]">Mais Descontos</span>
            <h3 className="text-2xl font-serif font-bold text-[#1E3A2F]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
              Outras Oportunidades para o Lar
            </h3>
          </div>
          <Tag className="w-5 h-5 text-[#C46D3B]" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherOffers.map((prod) => {
            const waLink = getWhatsAppLink(`Olá! Vi a oferta do produto "${prod.name}" no site da Coisa e Tal e gostaria de comprar.`);
            return (
              <div key={prod.id} className="bg-white rounded-2xl overflow-hidden border border-[#E8DED1] shadow-xs hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-4/3 overflow-hidden bg-[#F5EFE6]">
                    <span className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full bg-[#C7586F] text-white text-[10px] font-bold tracking-wider uppercase shadow-xs">
                      {prod.offerBadge || 'PROMOÇÃO'}
                    </span>
                    <img src={prod.image} alt={prod.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#66766B] block mb-1">{prod.categoryLabel}</span>
                    <h4 className="font-serif font-bold text-base text-[#1E3A2F] mb-1" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>{prod.name}</h4>
                    <p className="text-xs text-[#66766B] line-clamp-2 leading-relaxed mb-4">{prod.shortDescription}</p>
                    <div className="bg-[#FAF6F0] p-3 rounded-xl border border-[#E8DED1] flex items-baseline justify-between mb-4">
                      {prod.originalPrice && <div className="text-[11px] text-[#8EA79A]">De: <span className="line-through">R$ {prod.originalPrice.toFixed(2).replace('.', ',')}</span></div>}
                      <div className="text-right">
                        <span className="text-[10px] text-[#1E3A2F] font-bold uppercase block">Por apenas:</span>
                        <span className="text-lg font-bold text-[#C46D3B]">{prod.priceFormatted || `R$ ${prod.price?.toFixed(2).replace('.', ',')}`}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-0 space-y-2">
                  <a href={waLink} target="_blank" rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-xs transition-all">
                    <MessageCircle className="w-4 h-4 fill-white" /><span>Comprar pelo WhatsApp</span>
                  </a>
                  <button onClick={() => onSelectProduct(prod)} className="w-full py-2 text-center text-xs font-semibold text-[#1E3A2F] hover:text-[#C46D3B] transition-colors cursor-pointer">
                    Ver detalhes do produto →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="bg-[#F8F3EC] rounded-2xl p-6 border border-[#E8DED1] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-[#1E3A2F] flex-shrink-0" />
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E3A2F]">Garantia & Compra Segura</h4>
            <p className="text-xs text-[#66766B]">Todos os produtos possuem garantia, notas e suporte humanizado via WhatsApp.</p>
          </div>
        </div>
        <span className="text-xs text-[#C46D3B] font-cursive text-xl font-bold">"Seu lar, do seu jeito!" ♥</span>
      </div>
    </div>
  );
};
