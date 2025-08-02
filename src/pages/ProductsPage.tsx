import productsData from '../data/products.json';
import type { Product } from '../types';
import ProductCard from '../components/ProductCard';

const ProductsPage = () => {
  const allProducts: Product[] = productsData;

  return (
    <div className="container mx-auto px-6 py-8 animate-fadeIn">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {allProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;