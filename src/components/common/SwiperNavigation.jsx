import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const SwiperNavigation = ({ name }) => {
  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      <button className={`swiper-btn ${name}-next`}>
        <GoArrowRight />
      </button>

      <button className={`swiper-btn ${name}-prev`}>
        <GoArrowLeft />
      </button>
    </div>
  );
};

export default SwiperNavigation;
