import { Link } from "react-router-dom";
import CartTotal from "../components/Cart/CartTotal";
import { useGetAllCartProductsQuery } from "../redux/api/baseApi";
import { useEffect, useState } from "react";
import CartProductTable, { TCartItem } from './../components/Cart/CartProductTable';

const Cart = () => {
    const { data, isLoading } = useGetAllCartProductsQuery({});
    const [cartData, setCartData] = useState(data?.data || []);


    useEffect(() => {
        if (data?.data) {
            setCartData(data.data);
        }
    }, [data]);
    

    if (isLoading) {
        return <p className="font-Roboto">Loading...</p>;
    }

    // const handleUpdateQuantity = (id: string, quantity: number) => {
    //     setCartData((prevData :TCartItem[]) =>
    //         prevData.map(item =>
    //             item._id === id ? { ...item, quantity } : item
    //         )
    //     );
    // };

    const handleRemoveItem = (id : string) => {
        setCartData((prevData : TCartItem[]) => prevData.filter(item => item._id !== id));
    };

    return (
        <div className="max-width mx-auto mt-16 px-5 xl:px-0">
            <p className="font-Roboto text-neutral-60 text-sm">
                <Link to={"/"} className="hover:underline">Home</Link> | Cart
            </p>
            <div className="flex flex-col md:flex-row gap-10 mt-2">
                <CartProductTable 
                    data={cartData} 
                    // onUpdateQuantity={handleUpdateQuantity} 
                    onRemoveItem={handleRemoveItem} 
                />
                <CartTotal data={cartData} />
            </div>
        </div>
    );
};

export default Cart;
