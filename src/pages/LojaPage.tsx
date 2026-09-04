import React from 'react';
import { PageId } from '../types';
import { BRAND, getWhatsAppLink } from '../data/brand';
import { Heart, Sparkles, CheckCircle, Smile, MessageCircle, Home, Sun, Award } from 'lucide-react';

interface LojaPageProps {
  onNavigate: (page: PageId) => void;
}

export const LojaPage: React.FC<LojaPageProps> = ({ onNavigate }) => {
  const whatsappUrl = getWhatsAppLink('Olá! Li sobre a proposta da Coisa e Tal no site e gostaria de saber mais sobre a loja e os produtos.');

  const pillars = [
    { title: 'Aconchego Real', desc: 'Acreditamos que a casa é onde a alma descansa. Escolhemos peças que acolhem o olhar, trazem calma e tornam cada cômodo um refúgio acolhedor.', icon: <Home className="w-6 h-6 text-[#1E3A2F]" />, color: 'bg-[#F5EFE6]' },
    { title: 'Qualidade que Dura', desc: 'Cada item do nosso catálogo passa por um criterioso crivo de durabilidade, materiais resistentes e segurança no uso diário da família.', icon: <Award className="w-6 h-6 text-[#1E3A2F]" />, color: 'bg-[#F8F3EC]' },
    { title: 'Praticidade Inteligente', desc: 'A vida moderna pede soluções que facilitem o dia a dia. Menos tempo na cozinha e na arrumação significa mais tempo para curtir a vida.', icon: <Sparkles className="w-6 h-6 text-[#1E3A2F]" />, color: 'bg-[#FAF6F0]' },
    { title: 'Bom Gosto & Estética Afetiva', desc: 'Harmonia de tons terrosos, cerâmica natural, texturas suaves e linhas atemporais que nunca saem de moda e valorizam seus espaços.', icon: <Sun className="w-6 h-6 text-[#1E3A2F]" />, color: 'bg-[#F5EFE6]' },
    { title: 'Cuidado & Respeito com o Cliente', desc: 'Atendimento humanizado de verdade no WhatsApp, cuidado minucioso na embalagem de cada produto e pós-venda sempre disponível para você.', icon: <Smile className="w-6 h-6 text-[#1E3A2F]" />, color: 'bg-[#FDF2F4]' },
  ];

  const differentials = [
    'Curadoria afetiva de produtos funcionais para Cozinha, Banho, Decoração e Cama',
    'Atendimento rápido e personalizado via WhatsApp sem robôs frios',
    'Embalagens seguras preparadas com carinho especial para presente',
    'Transparência total em especificações, fotos reais e prazos de entrega',
    'Preços justos que combinam acessibilidade com excelência estética'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#E8DED1] text-[#C46D3B] text-xs font-bold uppercase tracking-wider">
          <Heart className="w-3.5 h-3.5 fill-[#C46D3B]" /><span>Nossa Proposta de Valor</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#1E3A2F] tracking-tight"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>Coisa e Tal — produtos para o lar</h1>
        <p className="font-cursive text-2xl sm:text-3xl text-[#C46D3B] font-bold">"Seu lar, do seu jeito!"</p>
        <p className="text-base sm:text-lg text-[#1E2822] leading-relaxed pt-2">
          Nascemos da convicção de que uma casa bonita não precisa ser inacessível ou impessoal. Nosso propósito é inspirar você a transformar seu lar em um lugar prático, acolhedor e repleto de amor em cada detalhe.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-[#E8DED1] p-8 sm:p-12 shadow-soft grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-5">
          <span className="text-xs uppercase tracking-[0.25em] text-[#66766B] font-bold block">Quem Somos & O Que Nos Move</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E3A2F]"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>Pequenos detalhes constroem grandes momentos</h2>
          <p className="text-sm text-[#1E2822] leading-relaxed">
            Na <strong>Coisa e Tal</strong>, não vendemos apenas utensílios e objetos: nós oferecemos motivos para você querer voltar para casa. Acreditamos que o cheirinho de um bolo recém-assado na Air Fryer, uma toalha macia esperando após um dia exaustivo ou uma mesa posta com carinho têm o poder de renovar qualquer rotina.
          </p>
          <p className="text-sm text-[#1E2822] leading-relaxed">
            Nossa curadoria é guiada pela simplicidade elegante: peças versáteis que combinam entre si, facilitam as tarefas domésticas e adicionam aconchego sem pesar no bolso.
          </p>
          <div className="pt-2">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs transition-all">
              <MessageCircle className="w-4 h-4 fill-white" /><span>Converse com a Gente no WhatsApp</span>
            </a>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl overflow-hidden shadow-md border-4 border-[#F5EFE6]">
            <img src={BRAND.images.hero} alt="Ambiente acolhedor da Coisa e Tal" className="w-full h-80 sm:h-96 object-cover" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 rounded-2xl border border-[#E8DED1] text-center shadow-xs">
              <p className="text-xs font-serif italic text-[#1E3A2F]">"Tudo o que você precisa para transformar sua casa em um lugar ainda melhor."</p>
            </div>
          </div>
        </div>
      </div>

      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C46D3B] font-bold">Nossos Pilares</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E3A2F] mt-1"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>O que você sempre encontra na Coisa e Tal</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {pillars.map((pillar, idx) => (
            <div key={idx} className={`${pillar.color} rounded-2xl p-6 border border-[#E8DED1] flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow`}>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E8DED1] flex items-center justify-center shadow-xs">{pillar.icon}</div>
                <h3 className="font-serif font-bold text-lg text-[#1E3A2F]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>{pillar.title}</h3>
                <p className="text-xs text-[#66766B] leading-relaxed">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#FAF6F0] rounded-3xl p-8 sm:p-12 border border-[#E8DED1]">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E3A2F]"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>Diferenciais que Cuidam de Você</h2>
            <p className="text-xs sm:text-sm text-[#66766B] mt-1">Transparência, respeito e atenção do primeiro clique até a chegada do seu pacote.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {differentials.map((diff, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-[#E8DED1] flex items-start gap-3 shadow-xs">
                <CheckCircle className="w-5 h-5 text-[#C46D3B] flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#1E2822] font-medium leading-snug">{diff}</span>
              </div>
            ))}
          </div>
          <div className="pt-6 text-center">
            <button onClick={() => onNavigate('produtos')}
              className="px-8 py-3.5 rounded-full bg-[#1E3A2F] hover:bg-[#142820] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer">
              Explorar Nosso Catálogo de Produtos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
