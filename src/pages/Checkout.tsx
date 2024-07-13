import { Link, useNavigate } from "react-router-dom";
import OrderSummery from "../components/Checkout/OrderSummery";
import { inputStyle, labelStyle } from "../components/ContactUs/constants";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useCreateOrderMutation, useGetAllCartProductsQuery } from "../redux/api/baseApi";
import { toast } from "sonner";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { data, isLoading : isCartLoading } = useGetAllCartProductsQuery({});
  const [ createOrder, {isLoading: isOrderPlacing} ] = useCreateOrderMutation({});
  const [cartData, setCartData] = useState(data?.data || []);
  const [shippingCost, setShippingCost] = useState(5.00);


  useEffect(() => {
      if (data?.data) {
          setCartData(data.data);
      }
  }, [data]);

  // Subtotal price
  const subtotal = cartData.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);
  
  // VAT
  const vat = subtotal * 0.15;

  // Total price
  const total = subtotal + shippingCost + vat;


  const handlePlaceOrder = async (formData) => {
    const orderData = {
      customer_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      shipping_address: formData.shipping_address,
      delivery_amount: shippingCost,
      sub_total: subtotal,
      total: total,
      vat: vat,
      products: cartData.map(item => ({
        product_name: item.product_name,
        price: item.price
      }))
    };
    if(cartData.length > 0) {
      try {
        toast.loading("Placing your order...");
        await createOrder(orderData).unwrap();
        toast.success("Order placed successfully!");
        toast.dismiss();
        navigate('/order-success')
      } catch (error) {
        toast.error("Failed to place the order. Please try again.");
      }
    }else{
     return toast.error("Your cart is empty. Please add some products to proceed.");
    }

    
  };

  return (
    <div className="mt-16">
      <div className="max-width font-Roboto">
        <p className="font-Roboto text-neutral-60 text-sm">
          <Link to={"/"} className="hover:underline">Home</Link> | <Link to={"/cart"}>Cart</Link> | Checkout
        </p>
        <div className="flex flex-col lg:flex-row gap-10 mt-2">
          <div className="bg-gradient-to-r from-slate-50 to-gray-100 p-6 rounded-lg w-full">
            <form className="flex flex-col" onSubmit={handleSubmit(handlePlaceOrder)}>
              <h2 className="text-neutral-60 text-lg font-semibold mb-4">Shipping Options</h2>
              <div className="mb-4">
                <label className="block">
                  <input
                    type="radio"
                    // name="delivery"
                    value="Cash On Delivery"
                    className="mr-2"
                    {...register("delivery", { required: "Delivery option is required" })}
                  />
                  Cash On Delivery
                </label>
                <label className="block">
                  <input
                    type="radio"
                    // name="delivery"
                    value="Stripe"
                    className="mr-2"
                    {...register("delivery", { required: "Delivery option is required" })}
                  />
                  Stripe
                </label>
                {errors.delivery && (
                  <span className="text-rose-600 text-start">
                    {errors.delivery.message as string}
                  </span>
                )}
              </div>
              <h2 className="text-neutral-60 text-lg font-semibold mb-4">Shipping Address</h2>

              <div className="flex flex-col gap-4">
                {/* Name */}
                <div className="relative">
                  <input
                    {...register("name", {
                      required: "Name is required",
                    })}
                    type="text"
                    id="name"
                    className={`${
                      errors.name
                        ? "border-rose-600 focus:border-rose-600"
                        : "border-neutral-40 focus:border-blue-600"
                    } ${inputStyle}`}
                    placeholder=" "
                  />
                  <label htmlFor="product_name" className={labelStyle}>
                    {errors.name ? (
                      <span className="text-rose-600 text-start">
                        {errors.name.message as string}
                      </span>
                    ) : (
                      "Your Name"
                    )}
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    {...register("email", {
                      required: "Email is required",
                    })}
                    type="text"
                    id="email"
                    className={`${
                      errors.email
                        ? "border-rose-600 focus:border-rose-600"
                        : "border-neutral-40 focus:border-blue-600"
                    } ${inputStyle}`}
                    placeholder=" "
                  />
                  <label htmlFor="email" className={labelStyle}>
                    {errors.email ? (
                      <span className="text-rose-600 text-start">
                        {errors.email.message as string}
                      </span>
                    ) : (
                      "Email"
                    )}
                  </label>
                </div>

                {/* Phone Number */}
                <div className="relative">
                  <input
                    {...register("phone", {
                      required: "Phone Number is required",
                    })}
                    type="text"
                    id="phone"
                    className={`${
                      errors.phone
                        ? "border-rose-600 focus:border-rose-600"
                        : "border-neutral-40 focus:border-blue-600"
                    } ${inputStyle}`}
                    placeholder=" "
                  />
                  <label htmlFor="phone" className={labelStyle}>
                    {errors.phone ? (
                      <span className="text-rose-600 text-start">
                        {errors.phone.message as string}
                      </span>
                    ) : (
                      "Phone Number"
                    )}
                  </label>
                </div>

                {/* Shipping Address */}
                <div className="relative">
                  <input
                    {...register("shipping_address", {
                      required: "Shipping Address is required",
                    })}
                    type="text"
                    id="shipping_address"
                    className={`${
                      errors.shipping_address
                        ? "border-rose-600 focus:border-rose-600"
                        : "border-neutral-40 focus:border-blue-600"
                    } ${inputStyle}`}
                    placeholder=" "
                  />
                  <label htmlFor="shipping_address" className={labelStyle}>
                    {errors.shipping_address ? (
                      <span className="text-rose-600 text-start">
                        {errors.shipping_address.message as string}
                      </span>
                    ) : (
                      "Shipping Address"
                    )}
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded"
              >
                Place Order
              </button>
            </form>
          </div>
          <OrderSummery cartData={cartData} shippingCost={shippingCost} subtotal={subtotal} vat={vat} total={total}/>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
