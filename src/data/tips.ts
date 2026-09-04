import { TipArticle } from '../types';

const IMG = {
  cozinha: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
  banho: 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=800',
  decoracao: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
  camaCasa: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
  hero: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
};

export const TIPS_ARTICLES: TipArticle[] = [
  {
    id: 'como-organizar-sua-cozinha',
    title: 'Como organizar sua cozinha para ganhar tempo e paz mental',
    category: 'Cozinha',
    readTime: '4 min de leitura',
    date: 'Dica da Semana',
    excerpt: 'Dicas práticas para manter bancadas limpas, temperos visíveis e utensílios ao alcance das mãos sem complicação.',
    image: IMG.cozinha,
    content: [
      'A cozinha é o coração da casa, onde preparamos momentos especiais e recarregamos nossas energias. No entanto, o excesso de embalagens e itens fora do lugar pode gerar cansaço visual logo pela manhã.',
      '1. Padronize com potes de vidro herméticos: retirar os alimentos dos pacotes plásticos e organizá-los em recipientes transparentes não só conserva a qualidade dos grãos e farinhas, mas traz uma harmonia visual imediata para os armários.',
      '2. Bancadas livres, mente leve: mantenha sobre a bancada apenas os eletroportáteis que você usa diariamente, como a sua Air Fryer e a cafeteira. Itens eventuais merecem gaveteiros e armários fechados.',
      '3. A regra dos três: para cada novo item que entra na cozinha, avalie se ao menos três outros podem ser descartados ou doados. Menos é mais quando falamos de cozinha funcional.',
    ]
  },
  {
    id: 'banheiro-organizado-spa',
    title: '5 passos para transformar seu banheiro num spa em casa',
    category: 'Banho',
    readTime: '3 min de leitura',
    date: 'Inspiração',
    excerpt: 'Pequenas trocas que fazem toda a diferença: toalhas macias, difusor de ambiente e organização prática.',
    image: IMG.banho,
    content: [
      'Você não precisa de um banheiro enorme para ter aquela sensação de spa relaxante. Com atenção aos detalhes e produtos certos, qualquer espaço pode virar um refúgio de bem-estar.',
      '1. Invista em toalhas de qualidade: a textura da toalha é a primeira coisa que você sente ao sair do banho. Opte por fibras de bambu ou algodão egípcio de alta gramatura.',
      '2. Aromatize o ambiente: um difusor de varetas ou vela aromática transforma completamente o clima do banheiro. Prefira fragrâncias suaves como lavanda, eucalipto ou baunilha.',
      '3. Organize a bancada: retire o que não é essencial e invista em um kit lavabo em cerâmica ou bambu para porta-sabonete e escova de dentes.',
    ]
  },
  {
    id: 'decoracao-com-plantas',
    title: 'Decoração com plantas: como escolher e cuidar em apartamento',
    category: 'Decoração',
    readTime: '5 min de leitura',
    date: 'Verde em Casa',
    excerpt: 'Espécies que sobrevivem em pouca luz, dicas de vasos e como criar cantinhos verdes mesmo em espaços pequenos.',
    image: IMG.decoracao,
    content: [
      'Plantas transformam ambientes. Além da beleza, purificam o ar, reduzem o estresse e trazem sensação de vitalidade para qualquer cômodo — mesmo nos apartamentos menores.',
      'Para quem tem pouca luz natural, aposte em: Zamioculca (resistente e elegante), Jibóia (cresce em trepadeiras), Costela-de-Adão (impacto visual) e Lírio-da-Paz (floresce em sombra).',
      'Sobre os vasos: prefira cerâmica artesanal ou barro para plantas que precisam de boa drenagem. Vasos esculturais em terracota ficam lindos em pares de alturas diferentes sobre aparadores.',
    ]
  },
  {
    id: 'quarto-aconchegante',
    title: 'Como criar um quarto aconchegante sem gastar muito',
    category: 'Cama & Casa',
    readTime: '4 min de leitura',
    date: 'Sono de Qualidade',
    excerpt: 'Camadas de textura, iluminação quente e almofadas bem escolhidas fazem toda a diferença no seu descanso.',
    image: IMG.camaCasa,
    content: [
      'O quarto é o seu santuário pessoal. A qualidade do sono depende diretamente do ambiente — temperatura, textura das roupas de cama, iluminação e organização influenciam como você dorme e acorda.',
      'Camadas de conforto: comece com um lençol de percal 200 fios ou mais, adicione uma manta texturizada ao pé da cama e finalize com almofadas em linho para a decoração diurna.',
      'Iluminação quente: substitua lâmpadas frias (acima de 4000K) por bulbos quentes (2700-3000K) nos abajures do quarto. A mudança é instantânea e o custo é baixo.',
    ]
  },
  {
    id: 'air-fryer-receitas',
    title: '7 receitas incríveis para fazer na Air Fryer',
    category: 'Cozinha',
    readTime: '6 min de leitura',
    date: 'Receitas da Semana',
    excerpt: 'Do frango crocante às batatas rústicas: aproveite ao máximo sua fritadeira sem óleo com receitas práticas.',
    image: IMG.cozinha,
    content: [
      'A Air Fryer revolucionou a cozinha brasileira. Com menos óleo, mais agilidade e resultado crocante, ela se tornou indispensável na rotina de quem quer praticidade sem abrir mão do sabor.',
      '1. Frango crocante: tempere com alho, limão e azeite. Cozinhe a 200°C por 20 minutos, virando na metade do tempo.',
      '2. Batatas rústicas: corte em gomos, tempere com alecrim e azeite. 25 minutos a 180°C. Crocante por fora, macia por dentro.',
      '3. Legumes assados: pimentão, abobrinha e cenoura com azeite e ervas. 15 minutos a 190°C para um acompanhamento saudável e colorido.',
    ]
  },
  {
    id: 'limpeza-organizada',
    title: 'Rotina de limpeza semanal: o método que funciona de verdade',
    category: 'Organização',
    readTime: '4 min de leitura',
    date: 'Casa Arrumada',
    excerpt: 'Distribua as tarefas por dia, invista nos produtos certos e mantenha a casa sempre apresentável sem estresse.',
    image: IMG.hero,
    content: [
      'Manter a casa limpa não precisa ser uma tarefa exaustiva de fim de semana. Com uma rotina bem estruturada, você distribui o esforço ao longo da semana e mantém os ambientes sempre agradáveis.',
      'Segunda: banheiros. Terça: cozinha. Quarta: aspirar e varrer. Quinta: roupas e organização de gavetas. Sexta: áreas comuns e plantas.',
      'Invista em produtos multiuso de boa qualidade — um bom pano de microfibra, um esfregão com cabo ergonômico e organizadores adequados fazem toda a diferença na velocidade e qualidade da limpeza.',
    ]
  },
];
