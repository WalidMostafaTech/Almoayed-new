import SectionTitle from "../../../components/common/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import SwiperNavigation from "../../../components/common/SwiperNavigation";
import ProductCard from "../../../components/cards/ProductCard";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import SkeletonCards from "../../../components/Loading/SkeletonLoading/SkeletonCards";

const OurProjects = ({ data, loading }) => {
  const { t } = useTranslation();
  const { lang } = useSelector((state) => state.language);

  if (loading) return <SkeletonCards cardNum={4} size="lg" />;

  return (
    <section className="sectionPadding container">
      <SectionTitle
        description={t("OurProjects.description")}
        title={t("OurProjects.title")}
        subtitle={t("OurProjects.subtitle")}
        link="/projects"
        linkName={t("OurProjects.linkName")}
        wide
      />

      <Swiper
        dir={lang === "ar" ? "rtl" : "ltr"}
        modules={[Navigation]}
        spaceBetween={16}
        navigation={{
          prevEl: ".ourProducts-prev",
          nextEl: ".ourProducts-next",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
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
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id} className="my-8">
            <ProductCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Controls */}
      <SwiperNavigation name="ourProducts" />
    </section>
  );
};

export default OurProjects;
