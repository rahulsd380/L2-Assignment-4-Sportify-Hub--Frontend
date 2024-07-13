import { useState } from 'react';
import { useGetAllProductsQuery } from '../../../redux/api/baseApi';
import ProductsCard from './ProductsCard';

export type TProductDetails = {
    img: string;
    category: string;
    product_name: string;
    rating: number;
    price: string;
    brand: string;
    stock: number;
    delivery_type: string;
  };

const Products = () => {
    const {data, isLoading} = useGetAllProductsQuery({})

    const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
    const [openModal, setOpenModal] = useState(false);

  const toggleDropdown = (index: number) => {
    if (openDropdownIndex === index) {
      setOpenDropdownIndex(null); // Close dropdown if clicking on the same one
    } else {
      setOpenDropdownIndex(index); // Open dropdown for the clicked index
    }
  };

    if(isLoading){
        return <p className="font-Roboto">Loading...</p>
    }
    return (
        <div>
            <div className="mt-6 grid grid-cols-3 gap-5">
            {data?.data.map((card : TProductDetails, index : number) => (
                <ProductsCard
                key={index}
                details={card}
                isOpen={openDropdownIndex === index}
                toggleDropdown={() => toggleDropdown(index)}
                setOpenModal={setOpenModal}
                openModal={openModal}
                setOpenDropdownIndex={setOpenDropdownIndex}
                />
          ))}
            </div>
        </div>
    );
};

export default Products;