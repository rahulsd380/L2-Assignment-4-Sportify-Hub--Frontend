import React, { useState } from "react";
import { ICONS } from "../../assets";
import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { useCreateCartProductMutation } from "../../redux/api/baseApi";
import { toast } from "sonner";

export type FeaturedProductCardProps = {
  details: {
    _id: string;
    img: string;
    category: string;
    product_name: string;
    rating: number;
    price: string;
    brand: string;
    stock: number;
    delivery_type: string;
  };
};

const FeaturedProductCard: React.FC<FeaturedProductCardProps> = ({ details }) => {
  const { _id, img, category, product_name, rating, price, brand, stock, delivery_type } = details;
  const [quantity, setQuantity] = useState(1);
  const [createCartProduct] = useCreateCartProductMutation();

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

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Math.min(stock, Number(e.target.value)));
    setQuantity(value);
  };

  if (!details) return null;

  return (
    <div>
      <div className="bg-white border hover:shadow-md rounded-xl p-5 flex flex-col mb-9 group">
        <div className="flex justify-center">
          <img
            src={img}
            alt={product_name}
            className="max-w-[180px] h-[150px] transition-transform duration-300 transform group-hover:scale-125"
          />
        </div>
        <p className="text-[11px] font-semibold text-neutral-60 mt-2">{category}</p>
        <h1 className="font-Roboto font-medium text-lg text-neutral-55">{product_name}</h1>

        {/* Ratings */}
        <div className="flex items-center gap-2 mt-2">
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar key={index} className={index < rating ? "text-yellow-500" : "text-gray-300"} />
          ))}
          <p className="text-sm text-neutral-55">({rating} reviews)</p>
        </div>

        <h2 className="text-neutral-60 font-bold mt-2">
          <span className="text-neutral-55 font-normal line-through text-sm">$220</span> {price}
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

        <div className="flex items-center justify-between mt-3">
          {/* Free delivery badge */}
          <div className="bg-white text-neutral-60 font-medium flex items-center gap-1 text-xs border rounded-[100px] px-2 py-1">
            <img src={ICONS.delivery} alt="Delivery" className="size-5" />
            {delivery_type} Delivery
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-4">
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              max={stock}
              className="border rounded w-16 text-center hidden"
            />
            <button
              onClick={handlePostOnCart}
              className="rounded text-primary-60 hover:text-white px-3 py-3 border border-primary-60 hover:bg-primary-70 transition duration-300 flex justify-center items-center group"
            >
              <FaCartPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
