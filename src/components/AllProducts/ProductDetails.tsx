import { FaCartPlus, FaFacebookF, FaInstagram, FaLinkedinIn, FaStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { ICONS } from "../../assets";
import { socialMediaIcons } from "../Footer/footerConstants";
import { IoAddOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { useState } from "react";


const ProductDetails = ({details, openModal, setOpenModal}) => {
    const {img, category, product_name, rating, price, brand, stock, delivery_type} = details;
    const [tab, setTab] = useState<"description" | "reviews">("description")
    const socialMediaIcon = [
        {
            icon: <FaFacebookF />,
            href: 'https://www.facebook.com/sportifyhub/',
        },
        {
            icon: <FaLinkedinIn />,
            href: 'https://www.facebook.com/sportifyhub/',
        },
        {
            icon: <FaInstagram />,
            href: 'https://www.facebook.com/sportifyhub/',
        },
    ]
    return (
        <div className="">
        <div
          onClick={() => setOpenModal(false)} 
          className={`fixed z-[100] flex items-center justify-center ${openModal ? 'visible opacity-100' : 'invisible opacity-0'} inset-0 bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent`}
        >
          <div onClick={(e_) => e_.stopPropagation()} className={`max-h-[475px] overflow-y-auto p-5 absolute max-w-4xl rounded-lg bg-white 
        drop-shadow-lg dark:bg-gray-800 dark:text-white ${openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150 flex justify-center items-center '}`}>
            
          <div className="flex justify-center gap-5 font-Roboto w-full">
            {/* Image */}
        <div className="border rounded p-2 border-primary-60/30">
        <div className="flex justify-center items-center bg-gradient-to-r from-slate-50 to-gray-100 p-5 rounded max-w-[400px] max-h-[400p]">
          <img
            src={img}
            alt={product_name}
            className="max-w-[300px] max-h-[400px] drop-shadow-xl"
          />
        </div>
        </div>

        <div>
          <p className="text-[11px] text-neutral-60 mt-2">{category}</p>
          <h1 className="font-medium text-xl text-neutral-55">
            {product_name}
          </h1>

          <div className="flex items-center justify-between">
{/* ratings */}
<div className="flex items-center gap-2 mt-2">
              {Array.from({ length: 5 }, (_, index) => (
                <FaStar
                  key={index}
                  className={
                    index < rating ? "text-yellow-500 text-[11px]" : "text-gray-300 text-[11px]"
                  }
                />
              ))}
              <p className="text-xs text-neutral-55">({rating} reviews)</p>
            </div>

             {/* Share this */}
          <div className="flex items-center gap-10">
          <p className="text-neutral-60 font-semibold gap-1 text-xs">
              Share this :
            </p>

            <div className="flex items-center gap-5">
            {socialMediaIcon.map((icon, index) => (
              <a
                href={icon.href}
                target="blank"
                key={index}
                className="text-gray-500"
              >
                {icon.icon}
              </a>
            ))}
            </div>
          </div>
          </div>

          <p className="text-sm text-neutral-55 text-justify mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui beatae
            praesentium repellendus inventore. Explicabo dolore est modi minus
            suscipit, tempora eligendi ipsum sunt quae quo deserunt fugiat
            molestiae dolorem aliquam dolorum rem, vero quaerat eaque autem
            dignissimos consectetur hic enim optio sit. Culpa officiis iure hic
            officia mollitia, exercitationem nisi.
          </p>


            <h2 className="font-bold mt-2 text-4xl text-primary-60 border-b border-gray-100 pb-3">
              <span className="text-neutral-55 font-normal line-through text-lg">
                $220
              </span>{" "}
              {price}
            </h2>

          <div className="flex items-center gap-7 mt-3">
            <p className="text-neutral-60 flex items-center font-semibold gap-1 text-xs">
              <img src={ICONS.brand} alt="Brand" className="size-5" />
              {brand}
            </p>
            <p className="text-green-600 flex items-center font-semibold gap-1 text-xs">
              <img src={ICONS.tickMark} alt="In Stock" className="size-5" />
              {stock} in stock
            </p>

            {/* Free delivery badge */}
            <div className="text-neutral-60 font-medium flex items-center gap-1 text-xs">
              <img src={ICONS.delivery} alt="Delivery" className="size-5" />
              {delivery_type} Delivery
            </div>
          </div>

             


            

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-4 w-full">
                 {/* Quantity */}
          <div className="flex items-center gap-1">
          <p className="text-xs">QTY : </p>
          <div className="rounded flex justify-between items-center gap-8 border max-w-[150px] pl-2 ">
            <p>4</p>

            <div className="flex">
            <button className="border-l py-3 px-1 border-y-0 hover:bg-gray-100 flex justify-center items-center">
            <FiMinus />
            </button>

            <button className="border-l py-3 px-1 border-y-0 hover:bg-gray-100 flex justify-center items-center">
            <IoAddOutline />
            </button>
            </div>
          </div>
          </div>
          
              {/* View details button */}
              <button
                onClick={() => setOpenModal(!openModal)}
                className="rounded text-xs text-white px-4 py-3 bg-primary-60 hover:bg-primary-70 transition duration-300 flex justify-center items-center"
              >
                Add To Cart
              </button>

              <button className="rounded text-primary-60 px-3 py-3 border border-primary-60 hover:bg-primary-70 transition duration-300 flex justify-center items-center group">
                <IoMdHeartEmpty className="group-hover:text-white" />
              </button>

              <button className="rounded text-primary-60 px-3 py-3 border border-primary-60 hover:bg-primary-70 transition duration-300 flex justify-center items-center group">
                <FaCartPlus className="group-hover:text-white" />
              </button>

            </div>

            
          </div>
        </div>
      </div>

      <div>

        <div className="flex items-center gap-5 mt-10">
        <button
                onClick={() => setTab("description")}
                className={`rounded text-xs px-4 py-3 ${tab === "description" ? "bg-primary-60 text-white" : "bg-neutral-5 text-neutral-60 hover:text-white"} hover:bg-primary-70 transition duration-300 flex justify-center items-center`}
              >
                Description
              </button>

        <button
                onClick={() => setTab("reviews")}
                className={`rounded text-xs  px-4 py-3 ${tab === "reviews" ? "bg-primary-60 text-white" : "bg-neutral-5 text-neutral-60 hover:text-white"} hover:bg-primary-70 transition duration-300 flex justify-center items-center`}
              >
                Reviews
              </button>

        </div>
      <div className="border rounded-md p-4 mt-5">
        {
            tab === "description" ?
<div>
        <p className="text-sm text-neutral-55 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui beatae
            praesentium repellendus inventore. Explicabo dolore est modi minus
            suscipit, tempora eligendi ipsum sunt quae quo deserunt fugiat
            molestiae dolorem aliquam dolorum rem, vero quaerat eaque autem
            dignissimos consectetur hic enim optio sit. Culpa officiis iure hic
            officia mollitia, exercitationem nisi.
          </p>
      <p className="text-sm text-neutral-55 text-justify mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui beatae
            praesentium repellendus inventore. Explicabo dolore est modi minus
            suscipit, tempora eligendi ipsum sunt quae quo deserunt fugiat
            molestiae dolorem aliquam dolorum rem, vero quaerat eaque autem
            dignissimos consectetur hic enim optio sit. Culpa officiis iure hic
            officia mollitia, exercitationem nisi.
          </p>
      <p className="text-sm text-neutral-55 text-justify mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui beatae
            praesentium repellendus inventore. Explicabo dolore est modi minus
            suscipit, tempora eligendi ipsum sunt quae quo deserunt fugiat
            molestiae dolorem aliquam dolorum rem, vero quaerat eaque autem
            dignissimos consectetur hic enim optio sit. Culpa officiis iure hic
            officia mollitia, exercitationem nisi.
          </p>
        </div>

        :
        <div>
            <div className="px-6 py-2 border-b border-gray-300 mb-6">
    <div className="flex items-center mb-4">
        {/* <img src={customerPhoto} alt={customerName} className="w-12 h-12 rounded-full mr-4" /> */}
        <div>
            <h2 className="font-semibold">Rahul Sutradhar</h2>
            <p className="text-sm text-gray-500">10 July, 2024</p>
        </div>
    </div>
    <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
            <FaStar key={index} className={index < rating ? 'text-yellow-500' : 'text-gray-300'} />
        ))}
    </div>
    <h3 className="font-semibold mb-2">Very good product</h3>
    <p className="text-gray-700 mb-4">Exceptional product Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ea culpa fugiat aut non asperiores, repellat sapiente vero dicta debitis.</p>
    <div className="flex justify-between items-center">
        <button className="text-primary-500 hover:underline">Helpful</button>
    </div>
</div>

            <div className="px-6 py-2 border-b border-gray-300 mb-6">
    <div className="flex items-center mb-4">
        {/* <img src={customerPhoto} alt={customerName} className="w-12 h-12 rounded-full mr-4" /> */}
        <div>
            <h2 className="font-semibold">Rahul Sutradhar</h2>
            <p className="text-sm text-gray-500">10 July, 2024</p>
        </div>
    </div>
    <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
            <FaStar key={index} className={index < rating ? 'text-yellow-500' : 'text-gray-300'} />
        ))}
    </div>
    <h3 className="font-semibold mb-2">Very good product</h3>
    <p className="text-gray-700 mb-4">Exceptional product Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ea culpa fugiat aut non asperiores, repellat sapiente vero dicta debitis.</p>
    <div className="flex justify-between items-center">
        <button className="text-primary-500 hover:underline">Helpful</button>
    </div>
</div>

            <div className="px-6 py-2 border-b border-gray-300 mb-6">
    <div className="flex items-center mb-4">
        {/* <img src={customerPhoto} alt={customerName} className="w-12 h-12 rounded-full mr-4" /> */}
        <div>
            <h2 className="font-semibold">Rahul Sutradhar</h2>
            <p className="text-sm text-gray-500">10 July, 2024</p>
        </div>
    </div>
    <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
            <FaStar key={index} className={index < rating ? 'text-yellow-500' : 'text-gray-300'} />
        ))}
    </div>
    <h3 className="font-semibold mb-2">Very good product</h3>
    <p className="text-gray-700 mb-4">Exceptional product Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ea culpa fugiat aut non asperiores, repellat sapiente vero dicta debitis.</p>
    <div className="flex justify-between items-center">
        <button className="text-primary-500 hover:underline">Helpful</button>
    </div>
</div>

        </div>
        }
        
      
      </div>
      </div>


          </div>
        </div>
      </div>
    );
};

export default ProductDetails;