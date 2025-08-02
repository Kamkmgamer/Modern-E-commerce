const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 mt-16 transition-colors duration-300">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">E-Shop</h3>
            <p>Your one-stop shop for the latest and greatest in tech and gadgets.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500">Contact</a></li>
              <li><a href="#" className="hover:text-blue-500">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-500">Shipping & Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500">Facebook</a>
              <a href="#" className="hover:text-blue-500">Twitter</a>
              <a href="#" className="hover:text-blue-500">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} E-Shop. All Rights Reserved. A Fake Company.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;