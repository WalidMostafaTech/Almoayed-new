import SectionTitle from "../../../components/common/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import SwiperNavigation from "../../../components/common/SwiperNavigation";
import TestimonialsCard from "../../../components/cards/TestimonialsCard";
import { useSelector } from "react-redux";
import { getTestimonials } from "../../../services/homeServices";
import { useQuery } from "@tanstack/react-query";
import SkeletonCards from "../../../components/Loading/SkeletonLoading/SkeletonCards";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();

  const { lang } = useSelector((state) => state.language);

  const { data: testimonials = [], isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
  });

  if (isLoading) return <SkeletonCards cardNum={4} size="lg" />;

  if (!testimonials?.length) return null;

  return (
    <section className="sectionPadding container">
      <SectionTitle
        description={t("Testimonials.description")}
        title={t("Testimonials.title")}
        wide
      />

      <Swiper
        dir={lang === "ar" ? "rtl" : "ltr"}
        modules={[Navigation]}
        spaceBetween={16}
        navigation={{
          prevEl: ".testimonials-prev",
          nextEl: ".testimonials-next",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          640: {
            slidesPerView: 2.3,
          },
          1024: {
            slidesPerView: 3.5,
          },
          1280: {
            slidesPerView: 4.5,
          },
        }}
      >
        {testimonials?.map((item) => (
          <SwiperSlide key={item.id} className="mt-8">
            <TestimonialsCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Controls */}
      <SwiperNavigation name="testimonials" />
    </section>
  );
};

export default Testimonials;
