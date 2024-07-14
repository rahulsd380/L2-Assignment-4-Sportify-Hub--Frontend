/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import AllProducts from "../components/AllProducts/AllProducts";
import FilterForm from "../components/FilterForm";
import { useGetAllProductsQuery } from "../redux/api/baseApi";

interface Product {
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

const Products = () => {
    const { data } = useGetAllProductsQuery({});
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [allProducts, setAllProducts] = useState<Product[]>([]);

    useEffect(() => {
        if (data) {
            const products: Product[] = data.data;
            setAllProducts(products);
            setFilteredProducts(products);
        }
    }, [data]);

    const categoryItems: string[] = [...new Set(allProducts.map(item => item.category))];
    const brandItems: string[] = [...new Set(allProducts.map(item => item.brand))]; // Get unique brands

    const categoryFilter = (category: string) => {
        const newItems = allProducts.filter(item => item.category === category);
        setFilteredProducts(newItems);
    };

    const brandFilter = (brand: string) => {
        const newItems = allProducts.filter(item => item.brand === brand);
        setFilteredProducts(newItems);
    };

    const handleRatingFilter = (rating: number) => {
        const newItems = allProducts.filter(item => item.rating === rating);
        setFilteredProducts(newItems);
    };

    const sortProducts = (order: string) => {
        const sortedProducts = [...filteredProducts].sort((a, b) => {
            const priceA = parseFloat(a.price.replace("$", ""));
            const priceB = parseFloat(b.price.replace("$", ""));
            return order === "Ascending" ? priceA - priceB : priceB - priceA;
        });
        setFilteredProducts(sortedProducts);
    };

    const handleSortChange = (order: string) => {
        sortProducts(order);
    };

    const handleClearForm = () => {
        setFilteredProducts(allProducts);
    };

    const handleSearch = (searchTerm: string) => {
        const normalizedSearchTerm = searchTerm.toLowerCase().trim();
        if (!normalizedSearchTerm) {
            setFilteredProducts(allProducts);
            return;
        }

        const searchResults = allProducts.filter(item =>
            item.product_name.toLowerCase().includes(normalizedSearchTerm)
        );

        setFilteredProducts(searchResults);
    };

    return (
        <div className="max-width mt-10 flex flex-col md:flex-row justify-between gap-10">
            <FilterForm 
                categoryItems={categoryItems} 
                brandItems={brandItems} // Pass unique brands to the filter form
                categoryFilter={categoryFilter} 
                brandFilter={brandFilter} // Add brand filter function
                handleRatingFilter={handleRatingFilter} 
                handleSortChange={handleSortChange}
                handleClearForm={handleClearForm} 
                // handleSearch={handleSearch}
            />
            <AllProducts products={filteredProducts} handleSearch={handleSearch} />
        </div>
    );
};

export default Products;
