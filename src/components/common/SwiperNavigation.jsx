import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const SwiperNavigation = ({ name }) => {
  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      <button className={`swiper-btn ${name}-next`}>
        <GoArrowRight className="ltr:rotate-180"/>
      </button>

      <button className={`swiper-btn ${name}-prev`}>
        <GoArrowLeft className="ltr:rotate-180"/>
      </button>
    </div>
  );
};

export default SwiperNavigation;
