import React, { useState } from 'react';
import { BRAND, getWhatsAppLink } from '../data/brand';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  MessageCircle,
  Send,
  CheckCircle2,
  Clock,
  Heart
} from 'lucide-react';

export const ContatoPage: React.FC = () => {
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !mensagem.trim()) return;

    const textoFormatado = `Olá, equipe Coisa e Tal!\nMeu nome é: ${nome.trim()}${
      whatsapp.trim() ? ` (${whatsapp.trim()})` : ''
    }\nMensagem: ${mensagem.trim()}`;

    const link = getWhatsAppLink(textoFormatado);
    setEnviado(true);
    window.open(link, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#E8DED1] text-[#C46D3B] text-xs font-bold uppercase tracking-wider">
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Fale Conosco</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#1E3A2F]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Estamos Prontos para Te Ouvir
        </h1>
        <p className="text-sm sm:text-base text-[#66766B]">
          Dúvidas sobre um produto, sugestões ou pedidos especiais? Envie uma mensagem e nossa equipe terá o maior carinho em atender você.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DED1] shadow-soft space-y-6">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1E3A2F]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
              Canais Oficiais
            </h2>
            <ul className="space-y-4 text-sm text-[#1E2822]">
              <li className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#F5EFE6] border border-[#E8DED1]">
                <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 fill-white" />
                </div>

                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#1E3A2F]">WhatsApp Oficial (Canal Principal)</span>
                  <a href={getWhatsAppLink('Olá! Vim pela página de contato da Coisa e Tal e gostaria de atendimento.')}
                    target="_blank" rel="noopener noreferrer"
                    className="text-base font-bold text-[#1E3A2F] hover:text-[#25D366] transition-colors">
                    {BRAND.whatsappDisplay}
                  </a>
                  <span className="block text-[11px] text-[#66766B] mt-0.5">Atendimento humanizado de segunda a sábado</span>
                </div>
              </li>
              <li className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-[#E8DED1]">
                <div className="w-10 h-10 rounded-full bg-[#FAF6F0] text-[#1E3A2F] flex items-center justify-center flex-shrink-0 border border-[#E8DED1]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#66766B]">Telefone</span>
                  <span className="font-semibold text-sm text-[#1E2822]">{BRAND.whatsappDisplay}</span>
                </div>
              </li>
              <li className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-[#E8DED1]">
                <div className="w-10 h-10 rounded-full bg-[#FAF6F0] text-[#1E3A2F] flex items-center justify-center flex-shrink-0 border border-[#E8DED1]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#66766B]">E-mail</span>
                  <span className="text-xs text-[#8EA79A] italic">{BRAND.emailPlaceholder}</span>
                </div>
              </li>

              <li className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-[#E8DED1]">
                <div className="w-10 h-10 rounded-full bg-[#FAF6F0] text-[#1E3A2F] flex items-center justify-center flex-shrink-0 border border-[#E8DED1]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#66766B]">Endereço / Localização</span>
                  <span className="text-xs text-[#8EA79A] italic">{BRAND.addressPlaceholder}</span>
                </div>
              </li>
              <li className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-[#E8DED1]">
                <div className="w-10 h-10 rounded-full bg-[#FAF6F0] text-[#C46D3B] flex items-center justify-center flex-shrink-0 border border-[#E8DED1]">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#66766B]">Redes Sociais</span>
                  <span className="text-xs text-[#8EA79A] italic">{BRAND.socialInstagramPlaceholder}</span>
                </div>
              </li>
            </ul>
            <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#E8DED1] text-center">
              <span className="font-cursive text-xl text-[#C46D3B] font-bold block">"Sua casa, seu refúgio." ♥</span>
              <p className="text-xs text-[#66766B] mt-1">Tudo para o seu lar, com amor e bom gosto.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DED1] shadow-soft">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1E3A2F]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
                Envie sua Mensagem
              </h2>

              <p className="text-xs sm:text-sm text-[#66766B] mt-1">Preencha os campos abaixo. Ao clicar em enviar, sua mensagem será transferida diretamente para o nosso WhatsApp oficial!</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nome" className="block text-xs font-bold uppercase tracking-wider text-[#1E3A2F] mb-1.5">Seu Nome *</label>
                <input id="nome" type="text" required value={nome} onChange={(e) => setNome(e.target.value)}
                  placeholder="Ex: Maria Silva"
                  className="w-full px-4 py-3 bg-[#FBF8F2] border border-[#E8DED1] rounded-xl text-sm text-[#1E2822] placeholder-[#8EA79A] focus:outline-none focus:border-[#1E3A2F] focus:ring-1 focus:ring-[#1E3A2F] transition-all" />
              </div>
              <div>
                <label htmlFor="whatsapp" className="block text-xs font-bold uppercase tracking-wider text-[#1E3A2F] mb-1.5">Seu WhatsApp / Telefone</label>
                <input id="whatsapp" type="tel" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="Ex: (47) 99999-9999"
                  className="w-full px-4 py-3 bg-[#FBF8F2] border border-[#E8DED1] rounded-xl text-sm text-[#1E2822] placeholder-[#8EA79A] focus:outline-none focus:border-[#1E3A2F] focus:ring-1 focus:ring-[#1E3A2F] transition-all" />
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-xs font-bold uppercase tracking-wider text-[#1E3A2F] mb-1.5">Sua Mensagem *</label>
                <textarea id="mensagem" required rows={5} value={mensagem} onChange={(e) => setMensagem(e.target.value)}
                  placeholder="Escreva aqui sua dúvida, produto que tem interesse ou sugestão..."
                  className="w-full px-4 py-3 bg-[#FBF8F2] border border-[#E8DED1] rounded-xl text-sm text-[#1E2822] placeholder-[#8EA79A] focus:outline-none focus:border-[#1E3A2F] focus:ring-1 focus:ring-[#1E3A2F] transition-all resize-none" />
              </div>
              <button id="enviar-mensagem-btn" type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer">
                <MessageCircle className="w-5 h-5 fill-white" /><span>Enviar pelo WhatsApp Oficial</span>
              </button>
              {enviado && (
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Mensagem preparada com sucesso! Abrindo o WhatsApp da Coisa e Tal...</span>
                </div>
              )}
              <p className="text-[11px] text-[#66766B] text-center pt-2">Suas informações são utilizadas exclusivamente para responder ao seu contato com segurança e privacidade.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
