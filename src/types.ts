export type PageId = 'home' | 'loja' | 'produtos' | 'ofertas' | 'dicas' | 'contato';

export type ProductCategory = 'todos' | 'cozinha' | 'banho' | 'decoracao' | 'cama_casa';

export interface Product {
  id: string;
  name: string;
  category: 'cozinha' | 'banho' | 'decoracao' | 'cama_casa';
  categoryLabel: string;
  shortDescription: string;
  fullDescription?: string;
  price?: number;
  originalPrice?: number;
  priceFormatted?: string;
  isOffer?: boolean;
  offerBadge?: string;
  image: string;
  additionalImages?: string[];
  colors?: { name: string; hex: string; image: string }[];
  features?: string[];
  specs?: { label: string; value: string }[];
}

export interface TipArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
  date: string;
}

export interface BrandBenefit {
  iconName: 'shield-check' | 'home-heart' | 'truck' | 'star' | 'heart' | 'sparkles' | 'smile' | 'headphones';
  title: string;
  subtitle: string;
}
