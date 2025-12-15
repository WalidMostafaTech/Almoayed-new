import img from "../../../assets/images/project-img.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import SwiperNavigation from "../../../components/common/SwiperNavigation";

const list = [
  {
    id: 1,
    title: "رقى يصنع",
    titleSpan: "الفارق",
    subTitle: "اكتشف عالم التسويق العقاري معنا",
    image: img,
  },
  {
    id: 2,
    title: "رقى يصنع",
    titleSpan: "الفارق",
    subTitle: "اكتشف عالم التسويق العقاري معنا",
    image: img,
  },
];

const Hero = () => {
  return (
    <section className="container">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={false}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        className="relative"
      >
        {list.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative h-[40vh] xl:h-[60vh]">
              <div className="w-full lg:w-2/3 h-full rounded-4xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-2 lg:items-end lg:text-end w-full lg:max-w-lg lg:ms-auto">
                <p className="text-lg text-white">{item.subTitle}</p>

                <h1 className="text-4xl sm:text-5xl lg:text-[90px] font-bold leading-tight text-white">
                  {item.title}{" "}
                  <span className="text-myGold">{item.titleSpan}</span>
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Controls */}
      <SwiperNavigation name="hero" />
    </section>
  );
};

export default Hero;
