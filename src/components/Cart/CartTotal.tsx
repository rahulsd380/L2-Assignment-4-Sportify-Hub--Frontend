import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartTotal: React.FC = () => {
  const [shippingCost, setShippingCost] = useState(5.00); // Default to Local pickup

  const subtotal = 480.99;
  const total = subtotal + shippingCost;

  return (
    <div className="border border-blue-300 p-6 rounded-md font-roboto max-w-xs">
      <h2 className="text-lg font-semibold mb-4">CART TOTALS</h2>
      <div className="">
        <div className="flex justify-between mb-3">
          <span className="text-gray-700 font-medium">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <hr className='border'/>
        <div className="mb-4 mt-3">
          <span className="text-gray-700 font-medium">Shipping</span>
          <div className="mt-2 flex flex-col gap-1">
            <label className="block">
              <input
                type="radio"
                name="shipping"
                value="0"
                checked={shippingCost === 0}
                onChange={() => setShippingCost(0)}
                className="mr-2"
              />
              Free shipping
            </label>
            <label className="block">
              <input
                type="radio"
                name="shipping"
                value="5"
                checked={shippingCost === 5}
                onChange={() => setShippingCost(5)}
                className="mr-2"
              />
              Local pickup: $5.00
            </label>
            <label className="block">
              <input
                type="radio"
                name="shipping"
                value="10"
                checked={shippingCost === 10}
                onChange={() => setShippingCost(10)}
                className="mr-2"
              />
              Flat rate: $10.00
            </label>
          </div>
          <p className="text-gray-500 text-sm mt-2">
            Shipping options will be updated during checkout.
          </p>
          <button className="mt-2 text-blue-600 hover:underline flex items-center">
            <span className="mr-1">🚚</span> Calculate shipping
          </button>
        </div>
        <hr className='border'/>
        <div className="flex justify-between mb-4 mt-3 font-bold">
          <span className="text-gray-700 font-medium">Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <Link to={"/checkout"} className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          PROCEED TO CHECKOUT
        </Link>
      </div>
    </div>
  );
};

export default CartTotal;