import { Link } from "react-router-dom";
import CartTotal from "../components/Cart/CartTotal";
import { useGetAllCartProductsQuery } from "../redux/api/baseApi";
import { useEffect, useState } from "react";
import CartProductTable from './../components/Cart/CartProductTable';

const Cart = () => {
    const { data, isLoading } = useGetAllCartProductsQuery({});
    const [cartData, setCartData] = useState(data?.data || []);


    useEffect(() => {
        console.log("API Data:", data); // Log the full data object
        if (data?.data) {
            setCartData(data.data);
        }
    }, [data]);
    

    if (isLoading) {
        return <p className="font-Roboto">Loading...</p>;
    }

    const handleUpdateQuantity = (id, quantity) => {
        setCartData(prevData =>
            prevData.map(item =>
                item._id === id ? { ...item, quantity } : item
            )
        );
    };

    const handleRemoveItem = (id) => {
        setCartData(prevData => prevData.filter(item => item._id !== id));
    };

    return (
        <div className="max-width mt-16">
            <p className="font-Roboto text-neutral-60 text-sm">
                <Link to={"/"} className="hover:underline">Home</Link> | Cart
            </p>
            <div className="flex gap-10 mt-2">
                <CartProductTable 
                    data={cartData} 
                    isLoading={isLoading} 
                    onUpdateQuantity={handleUpdateQuantity} 
                    onRemoveItem={handleRemoveItem} 
                />
                <CartTotal data={cartData} /> {/* Ensure this uses cartData */}
            </div>
        </div>
    );
};

export default Cart;
