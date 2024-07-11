import { Link } from "react-router-dom";
import OrderSummery from "../components/Checkout/OrderSummery";


const Checkout = () => {
    return (
        <div className="mt-16">
            <div className="max-width font-Roboto">
            <p className="font-Roboto text-neutral-60 text-sm"><Link to={"/"} className="hover:underline">Home</Link> | <Link to={"/cart"}>Cart</Link> | Checkout</p>
        <div className="flex flex-col lg:flex-row gap-10 mt-2">
          <div className="bg-gradient-to-r from-slate-50 to-gray-100 p-6 rounded-lg w-full">
            <h2 className="text-neutral-60 text-lg font-semibold mb-4">Shipping Options</h2>
            <div className="mb-4">
              <label className="block">
                <input type="radio" name="delivery" className="mr-2" />
                Get it delivered in only 30 minutes
              </label>
              <label className="block">
                <input type="radio" name="delivery" className="mr-2" />
                Pickup available in 3 stores near you
              </label>
            </div>
            <h2 className="text-neutral-60 text-lg font-semibold mb-4">Shipping Address</h2>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded mb-4"
              placeholder="98 Kite Close, 8-3, Marsfield, Sydney Australia 2122"
            />
            <h2 className="text-neutral-60 text-xl font-semibold mb-4">Payment Information</h2>
            <div className="mb-4">
              <div className="flex mb-4">
                <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="w-12 h-12 mr-2" />
                <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="MasterCard" className="w-12 h-12" />
              </div>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded mb-2"
                placeholder="Name on card"
              />
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded mb-2"
                placeholder="Card number"
              />
              <div className="flex">
                <input
                  type="text"
                  className="w-1/2 border border-gray-300 p-2 rounded mb-2 mr-2"
                  placeholder="MM/YY"
                />
                <input
                  type="text"
                  className="w-1/2 border border-gray-300 p-2 rounded mb-2"
                  placeholder="CVV"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded">Back</button>
              <button className="bg-blue-600 text-white py-2 px-4 rounded">Confirm Payment $570.98</button>
            </div>
          </div>
          <OrderSummery/>
        </div>
    </div>
        </div>
    );
};

export default Checkout;