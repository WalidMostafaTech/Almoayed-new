import SectionTitle from "../../../components/common/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import SwiperNavigation from "../../../components/common/SwiperNavigation";
import ServicesCard from "../../../components/cards/ServicesCard";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import SkeletonCards from "../../../components/Loading/SkeletonLoading/SkeletonCards";

const OurServices = ({ data, loading }) => {
  const { t } = useTranslation();

  const { lang } = useSelector((state) => state.language);

  if (loading) return <SkeletonCards cardNum={4} size="lg" />;

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
        {data?.map((item) => (
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
