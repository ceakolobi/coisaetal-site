export const BRAND = {
  name: 'COISA E TAL',
  subtitle: 'Produtos para o Lar',
  tagline: 'Seu lar, do seu jeito!',
  subtagline: 'Tudo o que você precisa para transformar sua casa em um lugar ainda melhor.',
  emotionalQuote: 'Pequenos detalhes fazem grandes momentos.',
  footerQuote: 'Sua casa, seu refúgio.',
  footerSubquote: 'Tudo para o seu lar, com amor e bom gosto.',
  whatsappNumber: '5547988600671',
  whatsappDisplay: '(47) 98860-0671',
  domain: 'www.coisaetal.com.br',
  emailPlaceholder: '[INSERIR E-MAIL]',
  addressPlaceholder: '[INSERIR ENDEREÇO]',
  socialInstagramPlaceholder: '@coisaetal.lar',
  images: {
    hero: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=1200&q=80',
    cozinha: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    banho: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    decoracao: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    camaCasa: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80',
  },
};

export const BRAND_BENEFITS = [
  { icon: '✨', title: 'Curadoria Afetiva', desc: 'Cada produto é escolhido com amor, praticidade e bom gosto para o seu lar.' },
  { icon: '💬', title: 'Atendimento Humanizado', desc: 'Suporte real pelo WhatsApp — sem robôs, só pessoas que se importam com você.' },
  { icon: '🏡', title: 'Para Cada Cantinho', desc: 'Cozinha, banho, decoração e quarto: um lar completo num só lugar.' },
  { icon: '🛡️', title: 'Compra Segura & Garantia', desc: 'Produtos com nota fiscal, garantia e embalagem caprichada especial.' },
];

export const PILLARS_BAR = [
  { icon: '🏠', title: 'SUA CASA, SEU REFÚGIO', desc: 'Mais aconchego para o que realmente importa todos os dias.' },
  { icon: '✨', title: 'PRODUTOS QUE FAZEM BEM', desc: 'Mais praticidade, mais tempo e mais momentos felizes com quem você ama.' },
  { icon: '💝', title: 'ESCOLHAS QUE CUIDAM DE VOCÊ', desc: 'Menos trabalho na rotina e muito mais carinho e beleza em cada cantinho.' },
];

export function getWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encoded}`;
}
