import { useParams } from 'react-router-dom';
import productsData from '../data/products.json';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const product = productsData.find(p => p.id === parseInt(id || ''));

  if (!product) {
    return <div className="text-center py-20">Product not found!</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12 animate-fadeIn">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-auto rounded-lg object-cover"
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400?text=Image+Not+Found'; }}
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">{product.name}</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">{product.description}</p>
          <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-8">${product.price.toFixed(2)}</p>
          <button 
            onClick={() => addToCart(product)}
            className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform transform hover:scale-105"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;