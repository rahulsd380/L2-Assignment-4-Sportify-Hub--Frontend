import { useState } from "react";
import { FaStar } from "react-icons/fa";

type TFilterFormProps = {
  categoryItems: string[];
  categoryFilter: (category: string) => void;
  handleSortChange: (sortOrder: string) => void;
  handleRatingFilter: (rating: number) => void;
  handleClearForm: () => void;
  brandItems: string[];
  brandFilter: (brand: string) => void;
};

const FilterForm: React.FC<TFilterFormProps> = ({
  categoryItems,
  categoryFilter,
  handleSortChange,
  handleRatingFilter,
  handleClearForm,
  brandItems,
  brandFilter,
}) => {
  // const categories = [
  //     "Cricket Gear",
  //     "Football Gear",
  //     "Basketball Gear",
  //     "Tennis Gear",
  //     "Running Gear",
  //     "Gym & Fitness",
  //     "Swimming Gear",
  //     "Outdoor Sports",
  //     "Winter Sports",
  //     "Racket Sports",
  //     "Team Sports"
  // ];

  const sort = ["Ascending", "Descending "];

  // const brands = [
  //     "Nike",
  //     "Adidas",
  //     "Puma",
  //     "Under Armour",
  //     "Reebok",
  //     "New Balance",
  //     "Asics",
  //     "Fila",
  //     "Skechers",
  //     "Mizuno"
  // ];

  const ratings = [1, 2, 3, 4, 5];

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  // Category filter
  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
  };

  // Brand filter
  const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedBrand(event.target.value);
  };

  // Rating filter
  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRating(parseInt(event.target.value));
  };

  // Clear all filters
  const clearFilters = () => {
    handleClearForm();
    setSelectedCategory("");
    setSelectedBrand("");
    setSelectedRating(null);
  };
  return (
    <div className="font-Roboto">
      <div className="bg-gradient-to-r from-slate-50 to-gray-100 p-6 rounded-lg w-[350px]">
        <div className="flex items-center justify-between border-b pb-3">
          <h1 className="text-primary-60 font-semibold text-xl">
            Apply Filter
          </h1>
          <button
            onClick={clearFilters}
            className="text-rose-600 font-semibold text-xl"
          >
            Clear
          </button>
        </div>

        <div>
          <h1 className="text-neutral-60 font-semibold mt-3">Sort</h1>
          <ul className="grid grid-cols-2 gap-3 mt-3">
            {sort.map((category, index) => (
              <li
                onClick={() => handleSortChange(category)}
                key={index}
                className="text-sm"
              >
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={selectedCategory === category}
                    onChange={handleCategoryChange}
                    className="mr-2"
                  />
                  {category}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="text-neutral-60 font-semibold mt-3">Categories</h1>
          <ul className="grid grid-cols-2 gap-3 mt-3">
            {categoryItems.map((category, index) => (
              <li
                key={index}
                onClick={() => categoryFilter(category)}
                className="text-sm"
              >
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={selectedCategory === category}
                    onChange={handleCategoryChange}
                    className="mr-2"
                  />
                  {category}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="text-neutral-60 font-semibold mt-3">Brands</h1>
          <ul className="grid grid-cols-2 gap-3 mt-3">
            {brandItems.slice(0, 8).map((brand, index) => (
              <li
                onClick={() => brandFilter(brand)}
                key={index}
                className="text-sm"
              >
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="brand"
                    value={brand}
                    checked={selectedBrand === brand}
                    onChange={handleBrandChange}
                    className="mr-2"
                  />
                  {brand}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="text-neutral-60 font-semibold mt-3">Ratings</h1>
          <ul className="flex flex-col gap-2 mt-3">
            {ratings.map((rating, index) => (
              <li
                // onClick={() => {
                //   handleRatingFilter(rating);
                //   console.log(rating);
                // }}
                key={index}
                className="text-sm"
              >
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="rating"
                    value={rating}
                    checked={selectedRating === rating}
                    onChange={handleRatingChange}
                    className="mr-2"
                  />
                  <div className="flex items-center">
                    {[...Array(5)].map((_, starIndex) => (
                      <FaStar
                      onClick={() => {
                        handleRatingFilter(rating);
                        console.log(rating);
                      }}
                        key={starIndex}
                        className={
                          starIndex < rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }
                      />
                    ))}
                    <span className="ml-2">{rating}</span>
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterForm;
