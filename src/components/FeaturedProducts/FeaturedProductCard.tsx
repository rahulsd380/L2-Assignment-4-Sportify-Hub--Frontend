import React from "react";
import { Link } from "react-router-dom";
import { ICONS } from "../../assets";
import { FaStar } from "react-icons/fa";

export type FeaturedProductCardProps = {
  img: string;
  category: string;
  product_name: string;
  rating: number;
  price: string;
  brand: string;
  stock: number;
  delivery_type: string;
};

const FeaturedProductCard: React.FC<FeaturedProductCardProps> = ({
  img,
  category,
  product_name,
  rating,
  price,
  brand,
  stock,
  delivery_type,
}) => {
  return (
    <div>
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

          {/* View details button */}
          <Link
            to={"/"}
            className="bg-primary-10 size-12 rounded-full border border-neutral-40 hover:border-primary-60 transition duration-300 flex justify-center items-center"
          >
            <img src={ICONS.cart} alt="Cart" className="size-7" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
