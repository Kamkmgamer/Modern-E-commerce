// src/components/ProductCard.tsx
import React from 'react';
import type{ Product } from '../types'; 
import { useCart } from '../context/CartContext';
import { Link } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
      <Link to={`/products/${product.id}`} className="block">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400?text=Image+Not+Found'; }}
        />
      </Link>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 truncate">{product.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 h-12 overflow-hidden">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">${product.price.toFixed(2)}</span>
          <button 
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform transform hover:scale-105"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;