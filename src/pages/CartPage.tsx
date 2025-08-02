import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Trash2 } from 'lucide-react';

const COUPONS = {
  'SAVE10': 0.10,
  'SAVE20': 0.20,
};

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState('');

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal * (1 - discount);
  
  const handleApplyCoupon = () => {
    const appliedDiscount = COUPONS[couponCode.toUpperCase() as keyof typeof COUPONS];
    if (appliedDiscount) {
        setDiscount(appliedDiscount);
        setCouponMessage(`Success! ${appliedDiscount * 100}% discount applied.`);
    } else {
        setDiscount(0);
        setCouponMessage('Invalid coupon code.');
    }
  };

  return (
    <div className="container mx-auto px-6 py-8 animate-fadeIn">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center p-4 border-b dark:border-gray-700 last:border-b-0">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md mr-4"/>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-800 dark:text-white">{item.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input 
                      type="number" 
                      value={item.quantity} 
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="w-16 p-1 border rounded-md text-center bg-gray-50 dark:bg-gray-700 dark:text-white"
                      min="1"
                    />
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={clearCart} className="mt-4 text-sm text-red-500 hover:underline">Clear Cart</button>
          </div>
          <div className="lg:w-1/3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between mb-2 text-green-600">
                  <span>Discount</span>
                  <span>-${(subtotal * discount).toFixed(2)}</span>
                </div>
              )}
              <div className="border-t dark:border-gray-700 my-4"></div>
              <div className="flex justify-between font-bold text-xl mb-6">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="mb-4">
                <input 
                    type="text" 
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter coupon code"
                    className="w-full p-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white"
                />
                <button onClick={handleApplyCoupon} className="w-full mt-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500">Apply Coupon</button>
                {couponMessage && <p className={`mt-2 text-sm ${discount > 0 ? 'text-green-600' : 'text-red-500'}`}>{couponMessage}</p>}
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;