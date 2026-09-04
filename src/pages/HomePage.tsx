import React from 'react';
import { PageId, Product } from '../types';
import { BRAND, BRAND_BENEFITS, getWhatsAppLink } from '../data/brand';
import { PRODUCTS } from '../data/products';
import { Sparkles, ArrowRight, MessageCircle, ShieldCheck, Truck, Star, Headphones, Heart, Clock, Flame, CheckCircle2 } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, categoryFilter?: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectProduct }) => {
  const airFryer = PRODUCTS.find((p) => p.id === 'air-fryer-rosa') || PRODUCTS[0];
  const featuredProducts = PRODUCTS.slice(0, 4);

  const categories = [
    { id: 'cozinha', name: 'Cozinha', desc: 'Utensílios práticos e cerâmicas afetivas', image: BRAND.images.catCozinha },
    { id: 'banho', name: 'Banho', desc: 'Toalhas macias e kits de autocuidado', image: BRAND.images.catBanho },
    { id: 'decoracao', name: 'Decoração', desc: 'Difusores, velas e detalhes acolhedores', image: BRAND.images.catDecoracao },
    { id: 'cama_casa', name: 'Cama & Casa', desc: 'Mantas, almofadas e aconchego diário', image: BRAND.images.catCamaCasa },
  ];

  const getBenefitIcon = (type: string) => {
    switch (type) {
      case 'shield': return <ShieldCheck className="w-6 h-6 text-[#1E3A2F]" />;
      case 'truck': return <Truck className="w-6 h-6 text-[#1E3A2F]" />;
      case 'star': return <Star className="w-6 h-6 text-[#1E3A2F]" />;
      default: return <Headphones className="w-6 h-6 text-[#1E3A2F]" />;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* HERO */}
      <section className="relative overflow-hidden pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl lg:rounded-[36px] overflow-hidden bg-[#F5EFE6] border border-[#E8DED1] shadow-soft">
            <div className="absolute inset-0 z-0">
              <img src={BRAND.images.hero} alt="Ambiente acolhedor Coisa e Tal"
                className="w-full h-full object-cover object-center opacity-40 lg:opacity-75 filter contrast-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5EFE6] via-[#F5EFE6]/90 to-transparent lg:max-w-[65%]" />
            </div>
            <div className="relative z-10 p-6 sm:p-12 lg:p-16 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#E8DED1] shadow-xs mb-4 text-[#1E3A2F]">
                <span className="text-xs font-semibold tracking-wider uppercase">Loja Virtual</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C46D3B]" />
                <span className="text-xs text-[#66766B]">Produtos para o Lar</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-[#1E3A2F] tracking-tight leading-[1.1] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
                COISA <span className="text-[#C46D3B]">E TAL</span>
              </h1>
              <p className="font-cursive text-3xl sm:text-4xl text-[#1E3A2F] mb-4 font-bold flex items-center gap-2">
                <span>{BRAND.tagline}</span>
                <Heart className="w-6 h-6 fill-[#C46D3B] text-[#C46D3B] inline-block" />
              </p>
              <div className="bg-[#1E3A2F] text-white p-4 sm:p-5 rounded-2xl mb-8 shadow-md max-w-lg border border-[#2B5343]">
                <p className="text-sm sm:text-base font-normal leading-relaxed text-[#FBF8F2]">{BRAND.subtagline}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <button onClick={() => onNavigate('produtos')}
                  className="px-6 py-3.5 rounded-full bg-[#1E3A2F] hover:bg-[#142820] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer">
                  <span>Conhecer os Produtos</span><ArrowRight className="w-4 h-4" />
                </button>
                <a href={getWhatsAppLink('Olá! Vim pela página inicial do site da Coisa e Tal e gostaria de conhecer os produtos.')}
                  target="_blank" rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 fill-white" /><span>Comprar pelo WhatsApp</span>
                </a>
              </div>
              <div className="mt-8 pt-6 border-t border-[#E8DED1]/70 flex items-center gap-3 text-xs text-[#1E3A2F]">
                <div className="w-7 h-7 rounded-full bg-white border border-[#E8DED1] flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-[#C46D3B]" />
                </div>
                <span className="font-medium tracking-wide">Produtos que acolhem, detalhes que transformam o seu dia.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C46D3B] mb-2">
            <span>✦</span><span>PRODUTOS PARA</span><span>✦</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E3A2F]"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>Categorias em Destaque</h2>
          <p className="text-sm text-[#66766B] mt-1 max-w-md mx-auto">Cada cantinho do seu lar merece cuidado e peças especiais.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <div key={cat.id} onClick={() => onNavigate('produtos', cat.id)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#E8DED1] shadow-xs hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
              <div className="relative aspect-4/3 overflow-hidden bg-[#F5EFE6]">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 flex flex-col items-center text-center flex-grow justify-between">
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#1E3A2F] text-white text-xs font-bold uppercase tracking-wider mb-2 transition-colors group-hover:bg-[#C46D3B]">{cat.name}</span>
                  <p className="text-xs text-[#66766B] line-clamp-2">{cat.desc}</p>
                </div>
                <span className="text-[11px] text-[#C46D3B] font-semibold mt-3 flex items-center gap-1 group-hover:underline">Ver opções →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AIR FRYER DESTAQUE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF6F0] rounded-3xl border-2 border-[#EFA8B8]/50 shadow-soft overflow-hidden p-6 sm:p-10 lg:p-12 relative">
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
            <span className="px-3.5 py-1.5 bg-[#EFA8B8] text-[#1E3A2F] text-xs font-bold rounded-full shadow-xs uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 fill-[#1E3A2F]" /><span>Oferta Exclusiva</span>
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C46D3B]">
                <Flame className="w-4 h-4 text-[#C46D3B]" /><span>Edição Especial Coisa e Tal</span>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-serif font-black text-[#1E3A2F] leading-tight"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
                  AIR FRYER <span className="font-cursive text-4xl sm:text-5xl text-[#C25B70] font-normal ml-1">Rosa</span>
                </h3>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#C46D3B] mt-1 flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 fill-[#C46D3B]" /><span>Mais sabor, menos óleo, mais tempo para você!</span>
                </p>
              </div>
              <div className="inline-block bg-white border border-[#E8DED1] rounded-2xl p-4 shadow-xs">
                <div className="text-[11px] font-bold text-[#66766B] uppercase tracking-wider">♥ APENAS ♥</div>
                <div className="text-3xl sm:text-4xl font-black text-[#C46D3B] tracking-tight">R$ 199,00</div>
                <span className="inline-block mt-1 px-2.5 py-0.5 rounded-md bg-[#1E3A2F] text-white text-[10px] font-bold tracking-wider uppercase">♥ POR TEMPO LIMITADO!</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5 pt-2">
                {[
                  { icon: <Heart className="w-4 h-4 text-[#C25B70]" />, title: 'Menos Óleo, Mais Saúde', sub: 'Receitas crocantes e leves' },
                  { icon: <Clock className="w-4 h-4 text-[#C46D3B]" />, title: 'Mais Rapidez no Dia a Dia', sub: 'Refeições sem sujeira' },
                  { icon: <Flame className="w-4 h-4 text-[#1E3A2F]" />, title: 'Temperatura Ajustável', sub: 'Controle perfeito' },
                  { icon: <CheckCircle2 className="w-4 h-4 text-[#1E3A2F]" />, title: 'Cesto Antiaderente', sub: 'Fácil de limpar' },
                ].map((item, i) => (
                  <div key={i} className="bg-white/80 p-2.5 rounded-xl border border-[#E8DED1] flex items-start gap-2">
                    <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                    <div>
                      <strong className="block text-[11px] text-[#1E3A2F] font-bold uppercase leading-tight">{item.title}</strong>
                      <span className="text-[10px] text-[#66766B]">{item.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button onClick={() => onSelectProduct(airFryer)}
                  className="px-6 py-3 rounded-full bg-[#1E3A2F] hover:bg-[#142820] text-white text-xs font-bold uppercase tracking-wider shadow-xs hover:shadow-md transition-all cursor-pointer">
                  Quero saber mais
                </button>
                <a href={getWhatsAppLink('Olá! Vi a oferta da Air Fryer Rosa por R$ 199,00 no site da Coisa e Tal e quero comprar.')}
                  target="_blank" rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider shadow-xs hover:shadow-md transition-all flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 fill-white" /><span>Comprar pelo WhatsApp</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              <div className="relative max-w-sm w-full">
                <div className="aspect-3/4 rounded-3xl overflow-hidden bg-white shadow-md border-4 border-white">
                  <img src={airFryer.image} alt="Air Fryer Rosa Coisa e Tal"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="mt-4 bg-white/90 backdrop-blur-xs rounded-2xl p-3 border border-[#E8DED1] text-center shadow-xs">
                  <span className="text-xs font-semibold text-[#1E3A2F] block">Disponível também nas cores:</span>
                  <div className="flex items-center justify-center gap-4 mt-1.5 text-xs text-[#66766B]">
                    <span className="flex items-center gap-1 font-medium"><span className="w-3 h-3 rounded-full bg-[#EFA8B8] border border-black/20" /> Rosa</span>
                    <span className="flex items-center gap-1 font-medium"><span className="w-3 h-3 rounded-full bg-[#8FA89B] border border-black/20" /> Verde</span>
                    <span className="flex items-center gap-1 font-medium"><span className="w-3 h-3 rounded-full bg-[#2B2B2B] border border-black/20" /> Preta</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUTOS EM DESTAQUE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C46D3B] mb-1">
              <Sparkles className="w-3.5 h-3.5" /><span>Para Todos os Ambientes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E3A2F]"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>Produtos em Destaque</h2>
          </div>
          <button onClick={() => onNavigate('produtos')}
            className="text-xs font-bold uppercase tracking-wider text-[#1E3A2F] hover:text-[#C46D3B] flex items-center gap-1 cursor-pointer transition-colors">
            <span>Ver todo o catálogo</span><ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((prod) => (
            <div key={prod.id} className="bg-white rounded-2xl overflow-hidden border border-[#E8DED1] shadow-xs hover:shadow-card-hover transition-all duration-300 flex flex-col group">
              <div className="relative aspect-square overflow-hidden bg-[#F5EFE6]">
                {prod.offerBadge && (
                  <span className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full bg-[#C46D3B] text-white text-[10px] font-bold tracking-wider uppercase">{prod.offerBadge}</span>
                )}
                <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#66766B] block mb-1">{prod.categoryLabel}</span>
                  <h3 className="font-serif font-bold text-base text-[#1E3A2F] line-clamp-1 mb-1.5"
                    style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>{prod.name}</h3>
                  <p className="text-xs text-[#66766B] line-clamp-2 leading-relaxed mb-3">{prod.shortDescription}</p>
                </div>
                <div>
                  {prod.price && (
                    <div className="mb-3 pt-2 border-t border-[#E8DED1]/60 flex items-baseline justify-between">
                      <span className="text-xs text-[#66766B]">Apenas:</span>
                      <span className="text-base font-bold text-[#C46D3B]">{prod.priceFormatted || `R$ ${prod.price.toFixed(2).replace('.', ',')}`}</span>
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-2">
                    <button onClick={() => onSelectProduct(prod)}
                      className="w-full py-2 px-2 text-center rounded-xl bg-[#F5EFE6] hover:bg-[#EADFCE] text-[#1E3A2F] text-xs font-semibold transition-colors cursor-pointer">
                      Quero saber mais
                    </button>
                    <a href={getWhatsAppLink(`Olá! Tenho interesse no produto "${prod.name}" da Coisa e Tal.`)}
                      target="_blank" rel="noopener noreferrer"
                      className="w-full py-2 px-2 text-center rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold flex items-center justify-center gap-1 transition-colors">
                      <MessageCircle className="w-3.5 h-3.5 fill-white" /><span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8F3EC] rounded-3xl p-8 sm:p-12 border border-[#E8DED1]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRAND_BENEFITS.map((benefit, idx) => (
              <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E8DED1] flex items-center justify-center shadow-xs">{getBenefitIcon(benefit.iconType)}</div>
                <h4 className="text-xs font-bold tracking-wider text-[#1E3A2F] uppercase pt-1">{benefit.title}</h4>
                <p className="text-xs text-[#66766B] leading-relaxed">{benefit.subtitle}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-[#E8DED1] text-center">
            <p className="font-cursive text-2xl sm:text-3xl text-[#C46D3B] font-bold">"{BRAND.emotionalQuote}"</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="rounded-3xl bg-[#1E3A2F] text-white p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-lg">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#F5A97F] font-bold">Nosso Propósito</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
              Transforme cada cômodo com amor e bom gosto
            </h2>
            <p className="text-sm sm:text-base text-[#D9E4DE] leading-relaxed">
              Descubra a história da Coisa e Tal e como selecionamos cada produto pensando no bem-estar, praticidade e aconchego da sua família.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-3 sm:gap-4">
              <button onClick={() => onNavigate('loja')}
                className="px-6 py-3 rounded-full bg-white text-[#1E3A2F] hover:bg-[#FBF8F2] text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer">
                Conhecer a Nossa História
              </button>
              <button onClick={() => onNavigate('ofertas')}
                className="px-6 py-3 rounded-full bg-[#C46D3B] text-white hover:bg-[#A55729] text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer">
                Ver Todas as Ofertas
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
