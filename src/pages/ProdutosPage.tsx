import React, { useState, useMemo } from 'react';
import { Product, ProductCategory } from '../types';
import { PRODUCTS } from '../data/products';
import { getWhatsAppLink } from '../data/brand';
import {
  Sparkles,
  Search,
  MessageCircle,
  Eye,
  Filter,
  Check
} from 'lucide-react';

interface ProdutosPageProps {
  initialCategory?: string;
  onSelectProduct: (product: Product) => void;
}

export const ProdutosPage: React.FC<ProdutosPageProps> = ({
  initialCategory = 'todos',
  onSelectProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(
    (initialCategory as ProductCategory) || 'todos'
  );
  const [searchTerm, setSearchTerm] = useState('');

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'todos', label: 'Todos os Produtos' },
    { id: 'cozinha', label: 'Cozinha' },
    { id: 'banho', label: 'Banho' },
    { id: 'decoracao', label: 'Decoração' },
    { id: 'cama_casa', label: 'Cama & Casa' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchCategory =
        selectedCategory === 'todos' || item.category === selectedCategory;
      const matchSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#E8DED1] text-[#C46D3B] text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Catálogo Oficial</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#1E3A2F]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Nossos Produtos para o Lar
        </h1>
        <p className="text-sm sm:text-base text-[#66766B]">
          Explore nossa seleção especial para transformar sua casa em um refúgio acolhedor, prático e cheio de carinho.
        </p>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-3xl border border-[#E8DED1] shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`cat-filter-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#1E3A2F] text-white shadow-xs'
                      : 'bg-[#F5EFE6] text-[#1E3A2F] hover:bg-[#EADFCE]'
                  }`}
                >
                  {isActive && <Check className="w-3.5 h-3.5" />}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#66766B] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input type="text" placeholder="Buscar no catálogo..." value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#FBF8F2] border border-[#E8DED1] rounded-full text-xs text-[#1E2822] placeholder-[#8EA79A] focus:outline-none focus:border-[#1E3A2F] focus:ring-1 focus:ring-[#1E3A2F] transition-all"
            />
          </div>
        </div>
        <div className="flex items-center justify-between text-xs text-[#66766B] pt-2 border-t border-[#E8DED1]/60">
          <span>Exibindo <strong>{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'produto' : 'produtos'}</span>
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} className="text-[#C46D3B] hover:underline cursor-pointer">
              Limpar busca
            </button>
          )}
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-[#E8DED1] space-y-3">
          <p className="text-base text-[#1E3A2F] font-semibold">Nenhum produto encontrado para este filtro.</p>
          <p className="text-xs text-[#66766B]">Tente buscar com outro termo ou selecione outra categoria.</p>
          <button onClick={() => { setSelectedCategory('todos'); setSearchTerm(''); }}
            className="mt-2 px-5 py-2 rounded-full bg-[#1E3A2F] text-white text-xs font-bold cursor-pointer">
            Ver todos os produtos
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((prod) => {

            const productWhatsappLink = getWhatsAppLink(
              `Olá! Tenho interesse no produto "${prod.name}" da Coisa e Tal. Gostaria de saber mais informações e disponibilidade.`
            );
            return (
              <div key={prod.id} className="bg-white rounded-2xl overflow-hidden border border-[#E8DED1] shadow-xs hover:shadow-card-hover transition-all duration-300 flex flex-col group">
                <div className="relative aspect-square overflow-hidden bg-[#F5EFE6] cursor-pointer" onClick={() => onSelectProduct(prod)}>
                  {prod.offerBadge && (
                    <span className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full bg-[#C46D3B] text-white text-[10px] font-bold tracking-wider uppercase shadow-xs">
                      {prod.offerBadge}
                    </span>
                  )}
                  <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-full bg-white/95 text-[#1E3A2F] text-xs font-semibold shadow-xs flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" /><span>Ver Detalhes</span>
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C46D3B] block mb-1">{prod.categoryLabel}</span>
                    <h3 onClick={() => onSelectProduct(prod)}
                      className="font-serif font-bold text-base text-[#1E3A2F] line-clamp-1 mb-1.5 cursor-pointer hover:text-[#C46D3B] transition-colors"
                      style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
                      {prod.name}
                    </h3>
                    <p className="text-xs text-[#66766B] line-clamp-2 leading-relaxed mb-4">{prod.shortDescription}</p>
                  </div>

                  <div>
                    {prod.price && (
                      <div className="mb-3.5 pt-2 border-t border-[#E8DED1]/70 flex items-baseline justify-between">
                        {prod.originalPrice ? (
                          <span className="text-[11px] text-[#8EA79A] line-through">R$ {prod.originalPrice.toFixed(2).replace('.', ',')}</span>
                        ) : (
                          <span className="text-[11px] text-[#66766B]">Valor:</span>
                        )}
                        <span className="text-base font-bold text-[#C46D3B]">
                          {prod.priceFormatted || `R$ ${prod.price.toFixed(2).replace('.', ',')}`}
                        </span>
                      </div>
                    )}
                    <div className="grid grid-cols-2 gap-2">
                      <button onClick={() => onSelectProduct(prod)}
                        className="w-full py-2.5 px-2 text-center rounded-xl bg-[#F5EFE6] hover:bg-[#EADFCE] text-[#1E3A2F] text-xs font-semibold transition-colors cursor-pointer">
                        Quero saber mais
                      </button>
                      <a href={productWhatsappLink} target="_blank" rel="noopener noreferrer"
                        className="w-full py-2.5 px-2 text-center rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold flex items-center justify-center gap-1 transition-colors">
                        <MessageCircle className="w-3.5 h-3.5 fill-white" /><span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="bg-[#FAF6F0] rounded-2xl p-6 border border-[#E8DED1] text-center space-y-2">
        <p className="text-xs font-bold uppercase tracking-wider text-[#1E3A2F]">Procura por algo sob medida ou quer tirar dúvidas sobre frete?</p>
        <p className="text-xs text-[#66766B]">Nossa equipe no WhatsApp responde com rapidez, fotos detalhadas e todo o carinho que seu lar merece.</p>
        <div className="pt-1">
          <a href={getWhatsAppLink('Olá! Gostaria de consultar sobre um produto ou tirar uma dúvida sobre frete.')}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#25D366] hover:underline">
            <MessageCircle className="w-4 h-4" /><span>Falar agora com o atendimento (47) 98860-0671</span>
          </a>
        </div>
      </div>
    </div>
  );
};
