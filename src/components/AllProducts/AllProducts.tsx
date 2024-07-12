import { BsSearch } from "react-icons/bs";
import AllProductsCard from "./AllProductsCard";
import { useGetAllProductsQuery } from "../../redux/api/baseApi";
import { FeaturedProductCardProps } from "../FeaturedProducts/FeaturedProductCard";

const AllProducts = () => {
    const {data, isLoading} = useGetAllProductsQuery({})

    if(isLoading){
        return <p className="font-Roboto">Loading...</p>
    }
    // console.log(data);
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
            {data?.data.map((card : FeaturedProductCardProps, index : number) => (
                <AllProductsCard
                key={index}
                details={card}
                />
          ))}
            </div>
        </div>
    );
};

export default AllProducts;