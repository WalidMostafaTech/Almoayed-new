import SectionTitle from "../../../components/common/SectionTitle";
import img from "../../../assets/images/project-img.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import SwiperNavigation from "../../../components/common/SwiperNavigation";
import ServicesCard from "../../../components/cards/ServicesCard";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const list = [
  {
    id: 1,
    image: img,
    link: "/",
    title: "مجموعة المؤيد للتطوير العقارى-المؤيد للمصاعد",
  },
  {
    id: 2,
    image: img,
    link: "/",
    title: "مجموعة المؤيد للتطوير العقارى-المؤيد للمصاعد",
  },
  {
    id: 3,
    image: img,
    link: "/",
    title: "مجموعة المؤيد للتطوير العقارى-المؤيد للمصاعد",
  },
  {
    id: 4,
    image: img,
    link: "/",
    title: "مجموعة المؤيد للتطوير العقارى-المؤيد للمصاعد",
  },
  {
    id: 5,
    image: img,
    link: "/",
    title: "مجموعة المؤيد للتطوير العقارى-المؤيد للمصاعد",
  },
  {
    id: 6,
    image: img,
    link: "/",
    title: "مجموعة المؤيد للتطوير العقارى-المؤيد للمصاعد",
  },
];

const OurServices = () => {
  const { t } = useTranslation();

  const { lang } = useSelector((state) => state.language);

  return (
    <section className="sectionPadding container">
      <SectionTitle
        description={t("OurServices.description")}
        title={t("OurServices.title")}
        subtitle={t("OurServices.subtitle")}
        link="/services"
        linkName={t("OurServices.linkName")}
        wide
      />

      <Swiper
        dir={lang === "ar" ? "rtl" : "ltr"}
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
