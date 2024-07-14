import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUpdateProductMutation } from "../../redux/api/baseApi";
import { inputStyle, labelStyle, textareaStyles } from "../ContactUs/constants";

type ProductTypes = {
  _id : string;
  img: string;
  category: string;
  product_name: string;
  description: string;
  rating: number;
  price: string;
  brand: string;
  details: string;
  stock: number;
  delivery_type: string;
};

interface EditProductFormProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  details: ProductTypes;
  setOpenDropdownIndex: (index: number | null | boolean) => void;
}

const EditProductForm: React.FC<EditProductFormProps> = ({ openModal, setOpenModal, details, setOpenDropdownIndex }) => {

  const [updateProduct, { isLoading }] = useUpdateProductMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUpdateProduct: SubmitHandler<FieldValues> = async (data) => {
    try {
      const response = await updateProduct({ id: details._id, data }).unwrap();
      if (response.success) {
        toast.success(response.message);
        setOpenModal(false);
        setOpenDropdownIndex(false);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(details);

  return (
    <div className="mx-auto w-fit">
      <div
        onClick={() => {
          setOpenModal(false)
          setOpenDropdownIndex(false)
        }}
        className={`fixed z-[100] bg-black/10 backdrop-blur-[1px] flex items-center justify-center ${
          openModal ? "visible opacity-100" : "invisible opacity-0"
        } inset-0 `}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`max-h-[475px] overflow-y-auto p-5 absolute max-w-4xl rounded-lg bg-white 
        drop-shadow-lg dark:bg-gray-800 dark:text-white ${
          openModal
            ? "scale-1 opacity-1 duration-300"
            : "scale-0 opacity-0 duration-150 flex justify-center items-center "
        }`}
        >
          <h1 className="text-xl font-Roboto text-neutral-60 font-semibold mb-3">
            Update Product Details
          </h1>
          <form
            onSubmit={handleSubmit(handleUpdateProduct)}
            className="flex flex-col gap-5"
          >
            {/* Product Name */}
            <div className="relative">
              <input
              defaultValue={details.product_name}
                {...register("product_name", {
                  required: "Product Name is required",
                })}
                type="text"
                id="product_name"
                className={`${
                  errors.product_name
                    ? "border-rose-600 focus:border-rose-600"
                    : "border-neutral-40 focus:border-blue-600"
                } ${inputStyle}`}
                placeholder=" "
              />

              <label htmlFor="product_name" className={labelStyle}>
                {errors.product_name ? (
                  <span className="text-rose-600 text-start">
                    {errors.product_name.message as string}
                  </span>
                ) : (
                  "Product Name"
                )}
              </label>
            </div>

            {/* Product Image Link */}
            <div className="relative">
              <input
              defaultValue={details.img}
                {...register("img", { required: "Product Image is required" })}
                type="text"
                id="img"
                className={`${
                  errors.img
                    ? "border-rose-600 focus:border-rose-600"
                    : "border-neutral-40 focus:border-blue-600"
                } ${inputStyle}`}
                placeholder=" "
              />
              <label htmlFor="img" className={labelStyle}>
                {errors.img ? (
                  <span className="text-rose-600 text-start">
                    {errors.img.message as string}
                  </span>
                ) : (
                  "Product Image Link"
                )}
              </label>
            </div>

            <div className="flex gap-5">
              {/* Category */}
              <div className="relative w-full">
                <input
                defaultValue={details.category}
                  {...register("category", {
                    required: "Category is required",
                  })}
                  type="text"
                  id="category"
                  className={`${
                    errors.category
                      ? "border-rose-600 focus:border-rose-600"
                      : "border-neutral-40 focus:border-blue-600"
                  } ${inputStyle}`}
                  placeholder=" "
                />
                <label htmlFor="category" className={labelStyle}>
                  {errors.category ? (
                    <span className="text-rose-600 text-start">
                      {errors.category.message as string}
                    </span>
                  ) : (
                    "Category"
                  )}
                </label>
              </div>

              {/* Price */}
              <div className="relative w-full">
                <input
                defaultValue={details.price}
                  {...register("price", { required: "price is required" })}
                  type="text"
                  id="price"
                  className={`${
                    errors.price
                      ? "border-rose-600 focus:border-rose-600"
                      : "border-neutral-40 focus:border-blue-600"
                  } ${inputStyle}`}
                  placeholder=" "
                />
                <label htmlFor="price" className={labelStyle}>
                  {errors.price ? (
                    <span className="text-rose-600 text-start">
                      {errors.price.message as string}
                    </span>
                  ) : (
                    "Price"
                  )}
                </label>
              </div>
            </div>

            <div className="flex gap-5">
              {/* Brand */}
              <div className="relative w-full">
                <input
                defaultValue={details.brand}
                  {...register("brand", { required: "Brand is required" })}
                  type="text"
                  id="brand"
                  className={`${
                    errors.brand
                      ? "border-rose-600 focus:border-rose-600"
                      : "border-neutral-40 focus:border-blue-600"
                  } ${inputStyle}`}
                  placeholder=" "
                />
                <label htmlFor="brand" className={labelStyle}>
                  {errors.brand ? (
                    <span className="text-rose-600 text-start">
                      {errors.brand.message as string}
                    </span>
                  ) : (
                    "Brand"
                  )}
                </label>
              </div>

              {/* Stock */}
              <div className="relative w-full">
                <input
                defaultValue={details.stock}
                  {...register("stock", {
                    required: "Enter product available stock",
                  })}
                  type="number"
                  id="stock"
                  className={`${
                    errors.stock
                      ? "border-rose-600 focus:border-rose-600"
                      : "border-neutral-40 focus:border-blue-600"
                  } ${inputStyle}`}
                  placeholder=" "
                />
                <label htmlFor="stock" className={labelStyle}>
                  {errors.stock ? (
                    <span className="text-rose-600 text-start">
                      {errors.stock.message as string}
                    </span>
                  ) : (
                    "Stock"
                  )}
                </label>
              </div>
            </div>

            {/* Delivery Type */}
            <div className="w-full">
              <select
              defaultValue={details.delivery_type}
                {...register("delivery_type", {
                  required: "Delivery Type is required",
                })}
                id="delivery_type"
                className={`${
                  errors.delivery_type
                    ? "border-rose-600 focus:border-rose-600"
                    : "border-neutral-40 focus:border-blue-600"
                } ${inputStyle} appearance-none cursor-pointer`}
              >
                <option value="" disabled selected>
                  {errors.delivery_type?.message
                    ? (errors.delivery_type?.message as string)
                    : "Select Delivery Type"}
                </option>
                <option value="Free">Free</option>
                <option value="Fast">Fast</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <textarea
              defaultValue={details.description}
                {...register("description", {
                  required: "Description is required",
                })}
                rows={7}
                id="description"
                className={`${
                  errors.product_name
                    ? "border-rose-600 focus:border-rose-600"
                    : "border-neutral-40 focus:border-blue-600"
                } ${textareaStyles}`}
                placeholder={`${
                  errors.description
                    ? errors.description?.message
                    : "Write product description"
                }`}
              ></textarea>
            </div>

            {/* Extra Details */}
            <div>
              <textarea
              defaultValue={details.details}
                {...register("details")}
                rows={7}
                id="extraDetails"
                className={`${textareaStyles} border-neutral-40 focus:border-blue-600`}
                placeholder="Add extra details about the product. (Optional)"
              ></textarea>
            </div>

            <button className="text-white font-Roboto px-4 py-2 bg-primary-60 rounded-md font-medium hover:bg-primary-55 transition duration-300">
              {isLoading ? "Adding product..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProductForm;
