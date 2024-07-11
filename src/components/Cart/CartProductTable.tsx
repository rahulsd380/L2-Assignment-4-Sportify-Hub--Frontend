import { RxCross2 } from "react-icons/rx";

interface Product {
    id: number;
    image: string;
    name: string;
    price: number;
    quantity: number;
  }

const CartProductTable = () => {
    const product: Product = {
        id: 1,
        image: 'https://example.com/iphone11.jpg', // Replace with actual image URL
        name: 'Unlocked Apple iPhone11 Pro, 64GB/256GB, 12MP Camera',
        price: 480.99,
        quantity: 1,
      };
    return (
        <div>
             <div className="overflow-x-auto font-Roboto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Product
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Quantity
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Subtotal
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 flex items-center">
              <img src="https://i.ibb.co/dkWKKZx/cricket-ball-3.png" alt={product.name} className="w-12 h-12 object-cover mr-4" />
              <span>{product.name}</span>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              ${product.price.toFixed(2)}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="flex items-center">
                <button className="px-2 py-1 border border-gray-300 text-gray-600">-</button>
                <input
                  type="text"
                  value={product.quantity}
                  readOnly
                  className="w-12 text-center border border-gray-300 mx-2"
                />
                <button className="px-2 py-1 border border-gray-300 text-gray-600">+</button>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              ${(product.price * product.quantity).toFixed(2)}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right">
            <RxCross2 className="text-red-600 hover:text-red-800 cursor-pointer"/>
            </td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 flex items-center">
              <img src="https://i.ibb.co/dkWKKZx/cricket-ball-3.png" alt={product.name} className="w-12 h-12 object-cover mr-4" />
              <span>{product.name}</span>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              ${product.price.toFixed(2)}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="flex items-center">
                <button className="px-2 py-1 border border-gray-300 text-gray-600">-</button>
                <input
                  type="text"
                  value={product.quantity}
                  readOnly
                  className="w-12 text-center border border-gray-300 mx-2"
                />
                <button className="px-2 py-1 border border-gray-300 text-gray-600">+</button>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              ${(product.price * product.quantity).toFixed(2)}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right">
            <RxCross2 className="text-red-600 hover:text-red-800 cursor-pointer"/>
            </td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 flex items-center">
              <img src="https://i.ibb.co/dkWKKZx/cricket-ball-3.png" alt={product.name} className="w-12 h-12 object-cover mr-4" />
              <span>{product.name}</span>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              ${product.price.toFixed(2)}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="flex items-center">
                <button className="px-2 py-1 border border-gray-300 text-gray-600">-</button>
                <input
                  type="text"
                  value={product.quantity}
                  readOnly
                  className="w-12 text-center border border-gray-300 mx-2"
                />
                <button className="px-2 py-1 border border-gray-300 text-gray-600">+</button>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              ${(product.price * product.quantity).toFixed(2)}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right">
            <RxCross2 className="text-red-600 hover:text-red-800 cursor-pointer"/>
            </td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 flex items-center">
              <img src="https://i.ibb.co/dkWKKZx/cricket-ball-3.png" alt={product.name} className="w-12 h-12 object-cover mr-4" />
              <span>{product.name}</span>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              ${product.price.toFixed(2)}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="flex items-center">
                <button className="px-2 py-1 border border-gray-300 text-gray-600">-</button>
                <input
                  type="text"
                  value={product.quantity}
                  readOnly
                  className="w-12 text-center border border-gray-300 mx-2"
                />
                <button className="px-2 py-1 border border-gray-300 text-gray-600">+</button>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              ${(product.price * product.quantity).toFixed(2)}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right">
            <RxCross2 className="text-red-600 hover:text-red-800 cursor-pointer"/>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
        </div>
    );
};

export default CartProductTable;