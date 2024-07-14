import { ICONS } from "../../assets";
import { FaCartPlus, FaStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { useState } from "react";
import ProductDetails from "./ProductDetails";
import { useCreateCartProductMutation } from "../../redux/api/baseApi";
import { toast } from "sonner";

export type AllProductCardProps = {
  details: {
    _id: string;
    img: string;
    category: string;
    description : string;
    details : string;
    product_name: string;
    rating: number;
    price: string;
    brand: string;
    stock: number;
    delivery_type: string;
  };
};

const AllProductsCard: React.FC<AllProductCardProps> = ({ details }) => {
  const { _id, img, category, product_name, description, rating, price, brand, stock, delivery_type } = details;
  const [quantity, setQuantity] = useState(1);
  const [createCartProduct] = useCreateCartProductMutation();
  const [openModal, setOpenModal] = useState(false);

  const handlePostOnCart = async () => {
    const response = await createCartProduct({
      img,
      productId: _id,
      quantity,
      price,
      product_name,
    });
    if (response?.data?.success) {
      toast.success("Added To Cart Successfully.");
    }
  };

  const increaseQuantity = () => {
    if (quantity < stock) setQuantity(quantity + 1); // Increase quantity if stock allows
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1); // Decrease quantity but not below 1
  };

  return (
    <div>
      <div className="bg-white border border-primary-60 rounded-xl p-5 flex flex-col lg:flex-row gap-5 mb-9 font-Roboto">
        <div className="flex justify-center items-center bg-gradient-to-r from-slate-50 to-gray-100 p-5 rounded max-w-[400px] max-h-[400px]">
          <img src={img} alt={product_name} className="max-w-[300px] max-h-[400px] drop-shadow-xl" />
        </div>

        <div>
          <p className="text-[11px] text-neutral-60 mt-2">{category}</p>
          <h1 className="font-medium text-xl text-neutral-55">{product_name}</h1>

          <p className="text-sm text-neutral-55 text-justify mt-3">
            {description}
          </p>

          <div className="flex items-center gap-10 mt-2">
            <h2 className="font-bold mt-2 text-2xl text-primary-60">
              <span className="text-neutral-55 font-normal line-through text-lg">$220</span> ${price}
            </h2>

            <div className="flex items-center gap-2 mt-2">
              {Array.from({ length: 5 }, (_, index) => (
                <FaStar key={index} className={index < rating ? "text-yellow-500" : "text-gray-300"} />
              ))}
              <p className="text-sm text-neutral-55">({rating} reviews)</p>
            </div>
          </div>

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

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-4">
              <button onClick={decreaseQuantity} className="px-2 py-1 border border-gray-300">
                -
              </button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity} className="px-2 py-1 border border-gray-300">
                +
              </button>

              <button
                onClick={() => setOpenModal(!openModal)}
                className="rounded text-sm text-white px-4 py-3 bg-primary-60 hover:bg-primary-70 transition duration-300 flex justify-center items-center"
              >
                View Details
              </button>

              <button className="rounded text-primary-60 px-3 py-3 border border-primary-60 hover:bg-primary-70 transition duration-300 flex justify-center items-center group">
                <IoMdHeartEmpty className="group-hover:text-white" />
              </button>

              <button
                onClick={handlePostOnCart}
                className="rounded text-primary-60 px-3 py-3 border border-primary-60 hover:bg-primary-70 transition duration-300 flex justify-center items-center group"
              >
                <FaCartPlus className="group-hover:text-white" />
              </button>
            </div>

            <div className="bg-white text-neutral-60 font-medium flex items-center gap-1 text-xs border rounded-[100px] px-2 py-1">
              <img src={ICONS.delivery} alt="Delivery" className="size-5" />
              {delivery_type} Delivery
            </div>
          </div>
        </div>
      </div>

      <ProductDetails details={details} openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default AllProductsCard;