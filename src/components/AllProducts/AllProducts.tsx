import { BsSearch } from "react-icons/bs";
import { productCards } from "../../mockData/productdetails";
import AllProductsCard from "./AllProductsCard";

const AllProducts = () => {
    return (
        <div className="w-full font-Roboto">
            <div className="flex items-center">
            <input
            placeholder="Search Accessories"
            type="text" 
            className="px-4 py-2 bg-white rounded-l-md border focus:outline-none focus:border-primary-60 transition duration-300 w-full"
        />
            <button className="px-4 py-3 bg-primary-60 border border-primary-60 rounded-r-md">
            <BsSearch className="text-white "/>
            </button>
            </div>

            <div className="mt-6">
            {productCards.map((card, index) => (
                <AllProductsCard
                key={index}
                details={card}
                  img={card.img}
                  category={card.category}
                  product_name={card.product_name}
                  rating={card.rating}
                  price={card.price}
                  brand={card.brand}
                  stock={card.stock}
                  delivery_type={card.delivery_type}
                />
          ))}
            </div>
        </div>
    );
};

export default AllProducts;