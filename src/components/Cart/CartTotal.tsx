import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartTotal: React.FC<{ data: { price: number; quantity: number }[] }> = ({ data }) => {
  const [shippingCost, setShippingCost] = useState(5.00);

  // Subtotal price
  const subtotal = data.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);
  
  // VAT
  const vat = subtotal * 0.15;

  // Total price
  const total = subtotal + shippingCost + vat;

  return (
    <div className="border border-blue-300 p-6 rounded-md font-roboto w-full md:max-w-xs">
      <h2 className="text-lg font-semibold mb-4">CART TOTALS</h2>
      <div>
        <div className="flex justify-between mb-3">
          <span className="text-gray-700 font-medium">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <hr className='border'/>
        <div className="flex justify-between mb-3">
          <span className="text-gray-700 font-medium">VAT (15%)</span>
          <span>${vat.toFixed(2)}</span>
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
        </div>
        <hr className='border'/>
        <div className="flex justify-between mb-4 mt-3 font-bold">
          <span className="text-gray-700 font-medium">Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
        <Link to={"/checkout"}>
          PROCEED TO CHECKOUT
        </Link>
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
