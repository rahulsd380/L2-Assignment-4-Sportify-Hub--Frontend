import { RefObject } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface CarouselButtonProps {
  prevRef: RefObject<HTMLButtonElement>;
  nextRef: RefObject<HTMLButtonElement>;
}

const CarouselButton : React.FC<CarouselButtonProps>= ({ prevRef, nextRef }) => {
  return (
    <div className="px-4 py-3 bg-white border rounded-md flex justify-between items-center gap-4">
      <button ref={prevRef} className="hover:text-primary-60 cursor-pointer transition duration-300">
        <FaArrowLeft />
      </button>
      <div className="h-[20px] w-[1px] bg-primary-60"></div>
      <button ref={nextRef} className="hover:text-primary-60 cursor-pointer transition duration-300">
        <FaArrowRight />
      </button>
    </div>
  );
};

export default CarouselButton;
