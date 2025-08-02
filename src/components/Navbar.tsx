import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';


const Navbar = () => {
  const { itemCount } = useCart();
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          E-Shop
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className={({ isActive }) => `transition-colors ${isActive ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-600 dark:text-gray-300 hover:text-blue-500'}`}>Home</NavLink>
          <NavLink to="/products" className={({ isActive }) => `transition-colors ${isActive ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-600 dark:text-gray-300 hover:text-blue-500'}`}>Products</NavLink>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Link to="/cart" className="relative text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            <ShoppingCart size={24} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                {itemCount}
              </span>
            )}
          </Link>
          {isAuthenticated ? (
             <button onClick={logout} className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                <User size={22} />
             </button>
          ) : (
            <Link to="/login" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;