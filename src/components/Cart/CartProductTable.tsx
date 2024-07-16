import { RxCross2 } from "react-icons/rx";
import { toast } from "sonner";
import { useDeleteCartProductMutation, useUpdateCartProductMutation } from "../../redux/api/baseApi";


export type TCartItem = {
  _id: string;
  img: string;
  productId: string;
  quantity: number;
  price: string;
  product_name: string;
};

type TCartProductTableProps = {
  data: TCartItem[];
};

const CartProductTable: React.FC<TCartProductTableProps> = ({ data }) => {

  const [deleteCartProduct] = useDeleteCartProductMutation();
  const [updateCartProduct] = useUpdateCartProductMutation();

  const handleDeleteCartItem = async (id: string) => {
    try {
      toast.loading("Deleting...");
      await deleteCartProduct(id);
      toast.success("Product deleted successfully");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(`Error deleting product: ${error.message}`);
      } else {
        toast.error("An unknown error occurred while deleting the product");
      }
    } finally{
      toast.dismiss();
    }
  };

  const handleUpdateCartProduct = async (id: string, quantity: number) => {
    try {
      toast.loading("Updating quantity...");
      const response = await updateCartProduct({ id, quantity }).unwrap(); // Correct format
      if (response.success) {
        toast.success(response.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Error updating product: ${error.message}`);
      } else {
        toast.error("An unknown error occurred while updating the product");
      }
    } finally {
      toast.dismiss();
    }
  };
  
  const onUpdateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    handleUpdateCartProduct(id, quantity);
  };

  return (
    <div className="w-full">
      <div className="overflow-x-auto font-Roboto w-full">
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
            {data.map((cartItem) => (
              <tr key={cartItem.productId}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 flex items-center">
                  <img src={cartItem.img} alt={cartItem.product_name} className="w-12 h-12 object-cover mr-4" />
                  <span>{cartItem.product_name}</span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  ${parseFloat(cartItem.price).toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="flex items-center">
                    <button
                      className="px-2 py-1 border border-gray-300 text-gray-600"
                      onClick={() => {
                        console.log(cartItem);
                        onUpdateQuantity(cartItem._id, cartItem.quantity - 1)
                      }}
                      disabled={cartItem.quantity <= 1}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={cartItem.quantity}
                      readOnly
                      className="w-12 text-center border border-gray-300 mx-2"
                    />
                    <button
                      className="px-2 py-1 border border-gray-300 text-gray-600"
                      onClick={() => onUpdateQuantity(cartItem._id, cartItem.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  ${(parseFloat(cartItem.price) * cartItem.quantity).toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right">
                  <RxCross2
                    onClick={() => handleDeleteCartItem(cartItem?._id)}
                    className="text-red-600 hover:text-red-800 cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartProductTable;
