import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import SwiperNavigation from "../../../components/common/SwiperNavigation";
import { useSelector } from "react-redux";
import { getSliders } from "../../../services/homeServices";
import { useQuery } from "@tanstack/react-query";
import SkeletonHero from "../../../components/Loading/SkeletonLoading/SkeletonHero";

const Hero = () => {
  const { lang } = useSelector((state) => state.language);

  const { data: sliders = [], isLoading } = useQuery({
    queryKey: ["sliders"],
    queryFn: getSliders,
  });

  if (isLoading) return <SkeletonHero />;

  if (!sliders?.length) return null;

  return (
    <section className="container">
      <Swiper
        dir={lang === "ar" ? "rtl" : "ltr"}
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
        spaceBetween={20}
        className="relative"
      >
        {sliders?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative h-[60vh] 2xl:h-[80vh]">
              <div className="w-full lg:w-2/3 h-full rounded-4xl overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40" />
                <img
                  src={item.image}
                  alt={item.main_title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute z-10 inset-0 flex flex-col items-center justify-center text-center space-y-2 lg:items-end lg:text-end w-full lg:max-w-lg lg:ms-auto">
                <p className="text-xl text-white">{item.side_title}</p>

                <h1 className="text-5xl sm:text-6xl lg:text-[100px] font-bold leading-tight text-white">
                  {item.main_title}{" "}
                  <span className="text-myGold">{item.titleSpan}</span>
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Controls */}
      {sliders?.length > 1 && <SwiperNavigation name="hero" />}
    </section>
  );
};

export default Hero;
