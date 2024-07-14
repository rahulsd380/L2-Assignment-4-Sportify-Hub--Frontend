import { BsSearch } from "react-icons/bs";
import AllProductsCard from "./AllProductsCard";
import { useState } from "react";

export type TProduct = {
    _id : string;
    img: string;
    category: string;
    product_name: string;
    description : string;
    details : string;
    rating: number;
    price: string;
    brand: string;
    stock: number;
    delivery_type: string;
    }

type TAllProductsProps = {
    products?: TProduct[];
    handleSearch: (searchTerm: string) => void; // Define the type for handleSearch
}

const AllProducts: React.FC<TAllProductsProps> = ({ products = [], handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setSearchTerm(term);
        handleSearch(term); // Call the search handler passed from Products
    };

    return (
        <div className="w-full font-Roboto">
            <div className="flex items-center">
                <input
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search Accessories"
                    type="text"
                    className="px-4 py-2 bg-white rounded-l-md border focus:outline-none focus:border-primary-60 transition duration-300 w-full"
                />
                <button
                    onClick={() => handleSearch(searchTerm)}
                    className="px-4 py-3 bg-primary-60 border border-primary-60 rounded-r-md"
                >
                    <BsSearch className="text-white" />
                </button>
            </div>

            <div className="mt-6">
                {products.length < 1 ? (
                    <p className="font-Roboto">Products not available.</p>
                ) : (
                    products.map((card, index: number) => (
                        <AllProductsCard key={index} details={card} />
                    ))
                )}
            </div>
        </div>
    );
};

export default AllProducts;
