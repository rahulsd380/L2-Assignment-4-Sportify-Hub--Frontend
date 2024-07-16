import { ICONS } from "../../../assets";
import { FaStar } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import EditProductForm from "../EditProductForm";
import { useState } from "react";
import { useDeleteProductMutation } from "../../../redux/api/baseApi";
import { toast } from "sonner";

type TProduct = {
  _id: string;
  img: string;
  category: string;
  product_name: string;
  description: string;
  details: string;
  rating: number;
  price: string;
  brand: string;
  stock: number;
  delivery_type: string;
}

interface ProductsCardProps {
  details : TProduct;
  isOpen : boolean;
  toggleDropdown: () => void;
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  setOpenDropdownIndex: (index: number | null | boolean) => void;
}

const ProductsCard: React.FC<ProductsCardProps> = ({ details, isOpen, toggleDropdown, openModal, setOpenModal, setOpenDropdownIndex }) => {
  const [selectedProduct, setSelectedProduct] = useState<TProduct | null>(null);
  const [deleteProduct, {isLoading}] = useDeleteProductMutation();
  if (!details) return null;

  const {
    img,
    category,
    product_name,
    rating,
    price,
    brand,
    stock,
    // delivery_type
  } = details;

  

  const handleEditClick = (product : TProduct) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };


  const handleDelete = async () => {
    try {
      toast.loading("Deleting...");
      await deleteProduct(details?._id);
      toast.success("Product deleted successfully");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(`Error deleting product: ${error.message}`);
      } else {
        toast.error("An unknown error occurred while deleting the product");
      }
    } finally {
      toast.dismiss();
    }
  };
  

  return (
    <div className="relative">
      {/* Dropdown btn */}
      <div className="absolute top-0 right-0 mt-2 mr-2">
        <button
           onClick={toggleDropdown}
          className="text-gray-500 hover:text-gray-700 focus:outline-none text-xl"
        >
          <BsThreeDotsVertical />
        </button>

        {/* Dropdown items */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 divide-y divide-gray-100">
            <button
              onClick={() => handleEditClick(details)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
             {isLoading ? "Deleting..." : "Delete"}
            </button>
          </div>
        )}
      </div>

      {/* Product Card */}
      <div className="bg-white border rounded-xl p-5 flex flex-col mb-9">
        <div className="flex justify-center">
          <img src={img} alt={product_name} className="max-w-[180px] h-[150px]" />
        </div>
        <p className="text-[11px] font-semibold text-neutral-60 mt-2">{category}</p>
        <h1 className="font-Roboto font-medium text-lg text-neutral-55">
          {product_name}
        </h1>

        {/* ratings */}
        <div className="flex items-center gap-2 mt-2">
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar
              key={index}
              className={index < rating ? "text-yellow-500" : "text-gray-300"}
            />
          ))}
          <p className="text-sm text-neutral-55">({rating} reviews)</p>
        </div>

        <h2 className="text-neutral-60 font-bold mt-2">
          <span className="text-neutral-55 font-normal line-through text-sm">$220</span>{" "}
          {price}
        </h2>

        <div className="flex items-center gap-3 mt-2">
          <p className="text-neutral-60 flex items-center font-semibold gap-1">
            <img src={ICONS.brand} alt="Brand" className="size-5" />
            {brand}
          </p>
          <p className="text-green-600 flex items-center font-semibold gap-1">
            <img src={ICONS.tickMark} alt="In Stock" className="size-5" />
            {stock} in stock
          </p>
        </div>

        <button className="text-white font-Roboto px-4 py-2 bg-primary-60 rounded-md font-medium hover:bg-primary-55 transition duration-300 mt-3">
          View Details
        </button>
      </div>

      {openModal && selectedProduct && (
        <EditProductForm setOpenModal={setOpenModal} openModal={openModal} details={selectedProduct} setOpenDropdownIndex={setOpenDropdownIndex} />
      )}
    </div>
  );
};

export default ProductsCard;
