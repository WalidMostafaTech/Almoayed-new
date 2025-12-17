import SectionTitle from "../../../components/common/SectionTitle";
import img from "../../../assets/images/project-img.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import SwiperNavigation from "../../../components/common/SwiperNavigation";
import ServicesCard from "../../../components/cards/ServicesCard";

const list = [
  {
    id: 1,
    title: "مجموعة المؤيد للتطوير العقارى-المؤيد للمصاعد",
    image: img,
    link: "/",
  },
  {
    id: 2,
    title: "مجموعة المؤيد للتطوير العقارى-المؤيد للمصاعد",
    image: img,
    link: "/",
  },
  {
    id: 3,
    title: "مجموعة المؤيد للتطوير العقارى-المؤيد للمصاعد",
    image: img,
    link: "/",
  },
  {
    id: 4,
    title: "مجموعة المؤيد للتطوير العقارى-المؤيد للمصاعد",
    image: img,
    link: "/",
  },
  {
    id: 5,
    title: "مجموعة المؤيد للتطوير العقارى-المؤيد للمصاعد",
    image: img,
    link: "/",
  },
  {
    id: 6,
    title: "مجموعة المؤيد للتطوير العقارى-المؤيد للمصاعد",
    image: img,
    link: "/",
  },
];

const OurServices = () => {
  return (
    <section className="sectionPadding container">
      <SectionTitle
        description="خدماتنا"
        title="تخصصاتنا تتحدث عن شغفنا"
        subtitle="نقدم مجموعة متكاملة من الخدمات العقارية لتلبية جميع احتياجات عملائنا،"
        link="/services"
        linkName="إكتشف جميع خدماتنا"
        wide
      />

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        navigation={{
          prevEl: ".ourServices-prev",
          nextEl: ".ourServices-next",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          640: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.5,
          },
          1280: {
            slidesPerView: 4.5,
          },
        }}
        className="mt-8"
      >
        {list.map((item) => (
          <SwiperSlide key={item.id}>
            <ServicesCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Controls */}
      <SwiperNavigation name="ourServices" />
    </section>
  );
};

export default OurServices;
