import React, { useState, useEffect } from 'react';
import { X, Check, MessageCircle, Heart, Sparkles, ShieldCheck } from 'lucide-react';
import { Product } from '../types';
import { getWhatsAppLink } from '../data/brand';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [currentImage, setCurrentImage] = useState<string>('');

  useEffect(() => {
    if (product) {
      if (product.colors && product.colors.length > 0) {
        setSelectedColor(product.colors[0].name);
        setCurrentImage(product.colors[0].image);
      } else {
        setSelectedColor('');
        setCurrentImage(product.image);
      }
    }
  }, [product]);

  if (!product) return null;

  const colorInfo = selectedColor ? ` (Cor: ${selectedColor})` : '';
  const orderMessage = `Olá! Tenho interesse no produto "${product.name}"${colorInfo} da Coisa e Tal. Gostaria de saber mais informações e como finalizar meu pedido.`;
  const whatsappUrl = getWhatsAppLink(orderMessage);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn overflow-y-auto"
      onClick={onClose} role="dialog" aria-modal="true">
      <div className="relative w-full max-w-3xl bg-[#FBF8F2] rounded-3xl shadow-2xl border border-[#E8DED1] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#1E3A2F] flex items-center justify-center shadow-md transition-all cursor-pointer">
          <X className="w-5 h-5" />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="relative bg-[#F5EFE6] p-6 sm:p-8 flex flex-col items-center justify-center min-h-[300px]">
            {product.offerBadge && (
              <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#C46D3B] text-white text-xs font-bold tracking-wider rounded-full shadow-xs uppercase">
                {product.offerBadge}
              </span>
            )}
            <img src={currentImage || product.image} alt={product.name}
              className="w-full max-h-[340px] object-cover rounded-2xl shadow-md transition-all duration-300 hover:scale-[1.02]" />
            {product.colors && product.colors.length > 0 && (
              <div className="mt-5 w-full bg-white/80 backdrop-blur-xs rounded-2xl p-3 border border-[#E8DED1]">
                <p className="text-xs font-medium text-[#1E3A2F] text-center mb-2 flex items-center justify-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 fill-[#C46D3B] text-[#C46D3B]" />
                  <span>Escolha sua cor favorita:</span>
                </p>
                <div className="flex items-center justify-center gap-3">
                  {product.colors.map((color) => (
                    <button key={color.name} onClick={() => { setSelectedColor(color.name); setCurrentImage(color.image); }}
                      className={`group flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all border cursor-pointer ${
                        selectedColor === color.name ? 'bg-[#1E3A2F] text-white border-[#1E3A2F] shadow-xs' : 'bg-white text-[#1E3A2F] border-[#E8DED1] hover:border-[#1E3A2F]'}`}>
                      <span className="w-3.5 h-3.5 rounded-full border border-black/20" style={{ backgroundColor: color.hex }} />
                      <span>{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[80vh] overflow-y-auto">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C46D3B] mb-1">
                <Sparkles className="w-3.5 h-3.5" /><span>{product.categoryLabel}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1E3A2F] mb-3 leading-snug"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>{product.name}</h2>
              {product.price && (
                <div className="mb-4 bg-[#F8F3EC] p-3.5 rounded-2xl border border-[#E8DED1] flex items-baseline gap-3">
                  {product.originalPrice && (
                    <span className="text-sm text-[#8EA79A] line-through font-medium">De: R$ {product.originalPrice.toFixed(2).replace('.', ',')}</span>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-semibold text-[#1E3A2F] uppercase">Por:</span>
                    <span className="text-2xl font-bold text-[#C46D3B]">{product.priceFormatted || `R$ ${product.price.toFixed(2).replace('.', ',')}`}</span>
                  </div>
                </div>
              )}
              <p className="text-sm text-[#1E2822] leading-relaxed mb-4">{product.fullDescription || product.shortDescription}</p>
              {product.features && product.features.length > 0 && (
                <div className="mb-5 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E3A2F]">Destaques do produto:</h4>
                  <ul className="space-y-1.5 text-xs text-[#1E2822]">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#C46D3B] flex-shrink-0 mt-0.5" /><span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {product.specs && product.specs.length > 0 && (
                <div className="mb-6 pt-3 border-t border-[#E8DED1]">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="bg-white/60 p-2 rounded-lg border border-[#E8DED1]">
                        <span className="text-[#66766B] block text-[10px] uppercase font-semibold">{spec.label}</span>
                        <span className="font-medium text-[#1E3A2F]">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="pt-4 border-t border-[#E8DED1] space-y-2.5">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3.5 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                <MessageCircle className="w-5 h-5 fill-white" /><span>Comprar pelo WhatsApp</span>
              </a>
              <p className="text-center text-[11px] text-[#66766B] flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1E3A2F]" />
                <span>Atendimento humanizado e compra segura via WhatsApp</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
