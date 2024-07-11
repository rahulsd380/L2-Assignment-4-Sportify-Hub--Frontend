
const OrderSummery = () => {
    return (
        <div className="font-Roboto w-full max-w-[400px] bg-gradient-to-r from-slate-50 to-gray-100 p-6 rounded-lg">
            <h2 className="text-neutral-60 text-xl font-semibold mb-4">Order Summary</h2>
            <ul className="mb-4">
              <li className="flex justify-between text-sm text-neutral-60 mb-2">
                <span>Franklin Merino Wool V-Neck Knit</span>
                <span>$199.00</span>
              </li>
              <li className="flex justify-between text-sm text-neutral-60 mb-2">
                <span>Judd Slim Dress Chino Pant</span>
                <span>$159.00</span>
              </li>
              <li className="flex justify-between text-sm text-neutral-60">
                <span>Augusta Shawl Cardigan</span>
                <span>$199.99</span>
              </li>
              <li className="flex justify-between text-neutral-60 font-semibold mb-2 mt-4">
                <span>Delivery</span>
                <span>$16.99</span>
              </li>
              <li className="flex justify-between text-neutral-60 font-semibold  mb-2">
                <span>Discount</span>
                <span>$0.00</span>
              </li>
              <li className="flex justify-between text-neutral-60 font-semibold  mb-2">
                <span>Total (ex tax)</span>
                <span>$557.99</span>
              </li>
              <li className="flex justify-between text-neutral-60 font-semibold  mb-2">
                <span>Tax</span>
                <span>$13.99</span>
              </li>
              <li className="flex justify-between text-primary-60 font-semibold ">
                <span>Order Total</span>
                <span>$570.98</span>
              </li>
            </ul>
            <div className="bg-green-100 text-green-700 p-2 rounded mb-4">
              Your total saving on this order $34.99
            </div>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded mb-2"
              placeholder="Coupon code"
            />
            <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded w-full">Apply</button>
          </div>
    );
};

export default OrderSummery;