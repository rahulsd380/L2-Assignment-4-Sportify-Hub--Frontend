import { Link } from "react-router-dom";
import CartProductTable from "../components/Cart/CartProductTable";
import CartTotal from "../components/Cart/CartTotal";

const Cart = () => {
    return (
        <div className="max-width mt-16">
            <p className="font-Roboto text-neutral-60 text-sm"><Link to={"/"} className="hover:underline">Home</Link> | Cart</p>
            <div className="flex gap-10 mt-2">
            <CartProductTable/>
            <CartTotal/>
            </div>
        </div>
    );
};

export default Cart;