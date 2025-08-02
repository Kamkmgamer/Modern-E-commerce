// src/pages/HomePage.tsx
import React from 'react';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import type { Product } from '../types';

const HomePage = () => {
  const featuredProducts: Product[] = productsData.filter(p => p.featured).slice(0, 3);

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <header className="bg-blue-600 dark:bg-blue-800 text-white text-center py-20 transition-colors duration-300">
        <h1 className="text-5xl font-extrabold mb-4 animate-slideInUp">Welcome to E-Shop</h1>
        <p className="text-xl max-w-2xl mx-auto animate-slideInUp animation-delay-300">Discover the future of technology. High-quality gadgets at unbeatable prices.</p>
      </header>
      
      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;