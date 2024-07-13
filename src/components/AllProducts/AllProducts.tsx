import { BsSearch } from "react-icons/bs";
import AllProductsCard from "./AllProductsCard";
import { useGetAllProductsQuery } from "../../redux/api/baseApi";
import { FeaturedProductCardProps } from "../FeaturedProducts/FeaturedProductCard";
import { useState, useEffect } from "react";

const AllProducts = () => {
  const { data, isLoading } = useGetAllProductsQuery({});
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  // Update searchResult when data changes
  useEffect(() => {
    if (data) {
      setSearchResult(data.data);
    }
  }, [data]);

  const handleSearch = () => {
    const normalizedSearchTerm = searchTerm.toLowerCase().trim();
    if (!normalizedSearchTerm) {
      setSearchResult(data?.data || []); // Reset to all products when search term is empty
      return;
    }

    const searchWords = normalizedSearchTerm.split(" ");

    setSearchResult(
      data?.data.filter((item) => {
        const productNameWords = item.product_name
          .toLowerCase()
          .trim()
          .split(/[\s-]+/);
        return searchWords.every((word) =>
          productNameWords.some((itemWord) => itemWord.includes(word))
        );
      }) || []
    );
  };

  if (isLoading) {
    return <p className="font-Roboto">Loading...</p>;
  }

  return (
    <div className="w-full font-Roboto">
      <div className="flex items-center">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Accessories"
          type="text"
          className="px-4 py-2 bg-white rounded-l-md border focus:outline-none focus:border-primary-60 transition duration-300 w-full"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-3 bg-primary-60 border border-primary-60 rounded-r-md"
        >
          <BsSearch className="text-white" />
        </button>
      </div>

      <div className="mt-6">
        {searchResult.map((card: FeaturedProductCardProps, index: number) => (
          <AllProductsCard key={index} details={card} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
