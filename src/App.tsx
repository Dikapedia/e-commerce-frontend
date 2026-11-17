import { useState } from 'react';
import { useGoogleFonts } from './hooks/useGoogleFonts';
import { useCart } from './hooks/useCart';
import { PRODUCTS } from './data/products';
import type { Product, ProductCategoryFilter } from './types/product';

import { Header } from './components/header/Header';
import { MenuDrawer } from './components/menu-drawer/MenuDrawer';
import { AuthModal } from './components/overlays/auth/AuthModal';
import { SearchOverlay } from './components/overlays/search/SearchOverlay';
import { CartDrawer } from './components/overlays/cart/CartDrawer';
import { ProductModal } from './components/overlays/product/ProductModal';

import { HeroSection } from './components/hero/HeroSection';
import { FeaturesSection } from './components/features/FeaturesSection';
import { CollectionSection } from './components/collection/CollectionSection';
import { PhilosophySection } from './components/philosophy/PhilosophySection';
import { NewsletterSection } from './components/newsletter/NewsletterSection';
import { Footer } from './components/footer/Footer';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategoryFilter>('All');
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);

  useGoogleFonts();

  const {
    cartItems,
    cartOpen,
    setCartOpen,
    addToCart,
    updateQuantity,
    totalCartCount,
    totalCartPrice
  } = useCart();

  const filteredProducts = PRODUCTS.filter(product =>
    `${product.name} ${product.tagline} ${product.category} ${product.dialColor} ${product.strap}`
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase())
  );

  return (
    <div className="bg-[#0b0d12] text-slate-100 min-h-screen font-['Plus_Jakarta_Sans',sans-serif] selection:bg-slate-700 selection:text-white relative overflow-x-hidden">

      <Header
        totalCartCount={totalCartCount}
        onOpenMenu={() => setMenuOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenAuth={() => setAuthOpen(true)}
        onOpenCart={() => setCartOpen(true)}
      />

      <HeroSection />

      <FeaturesSection />

      <CollectionSection
        products={filteredProducts}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onQuickView={setActiveProductModal}
        onAddToCart={addToCart}
      />

      <PhilosophySection />

      <NewsletterSection />

      <Footer />

      <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />

      <SearchOverlay
        open={searchOpen}
        query={searchQuery}
        results={filteredProducts}
        onQueryChange={setSearchQuery}
        onSelectProduct={setActiveProductModal}
        onClose={() => setSearchOpen(false)}
      />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        totalCartCount={totalCartCount}
        totalCartPrice={totalCartPrice}
        onUpdateQuantity={updateQuantity}
      />

      <ProductModal
        product={activeProductModal}
        onClose={() => setActiveProductModal(null)}
        onAddToCart={addToCart}
      />

    </div>
  );
}
