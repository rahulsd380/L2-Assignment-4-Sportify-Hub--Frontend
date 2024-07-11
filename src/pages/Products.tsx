import AllProducts from "../components/AllProducts/AllProducts";
import FilterForm from "../components/FilterForm";


const Products = () => {
    return (
        <div className="max-width mt-10 flex justify-between gap-10">
            <FilterForm/>
            <AllProducts/>
        </div>
    );
};

export default Products;