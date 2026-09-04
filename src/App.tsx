import React, { useState, useEffect } from 'react';
import { PageId, Product } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { ProductModal } from './components/ProductModal';
import { HomePage } from './pages/HomePage';
import { LojaPage } from './pages/LojaPage';
import { ProdutosPage } from './pages/ProdutosPage';
import { OfertasPage } from './pages/OfertasPage';
import { DicasPage } from './pages/DicasPage';
import { ContatoPage } from './pages/ContatoPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('todos');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '').toLowerCase();
      if (['home', 'loja', 'produtos', 'ofertas', 'dicas', 'contato'].includes(hash)) {
        setCurrentPage(hash as PageId);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: 'Coisa e Tal — Produtos para o Lar | Seu lar, do seu jeito!',
      loja: 'Nossa Loja — Coisa e Tal | Proposta & Aconchego',
      produtos: 'Produtos para o Lar — Coisa e Tal | Cozinha, Banho, Decoração & Cama',
      ofertas: 'Ofertas Especiais — Coisa e Tal | Air Fryer Rosa & Achados',
      dicas: 'Dicas para o Lar — Coisa e Tal | Organização & Bem-Estar',
      contato: 'Contato & Atendimento WhatsApp — Coisa e Tal',
    };
    document.title = titles[currentPage] || 'Coisa e Tal — Produtos para o Lar';
  }, [currentPage]);

  const handleNavigate = (page: PageId, categoryFilter?: string) => {
    if (categoryFilter) setActiveCategoryFilter(categoryFilter);
    setCurrentPage(page);
    window.location.hash = `#/${page === 'home' ? '' : page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF8F2] text-[#1E2822] selection:bg-[#EFA8B8] selection:text-[#1E3A2F]">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} onSelectProduct={(p) => setSelectedProduct(p)} />}
        {currentPage === 'loja' && <LojaPage onNavigate={handleNavigate} />}
        {currentPage === 'produtos' && <ProdutosPage initialCategory={activeCategoryFilter} onSelectProduct={(p) => setSelectedProduct(p)} />}
        {currentPage === 'ofertas' && <OfertasPage onSelectProduct={(p) => setSelectedProduct(p)} />}
        {currentPage === 'dicas' && <DicasPage />}
        {currentPage === 'contato' && <ContatoPage />}
      </main>
      <Footer onNavigate={handleNavigate} />
      <WhatsAppFloating currentPage={currentPage} />
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}
