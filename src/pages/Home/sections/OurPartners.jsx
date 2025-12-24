import SectionTitle from "../../../components/common/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import SwiperNavigation from "../../../components/common/SwiperNavigation";
import PartnersCard from "../../../components/cards/PartnersCard";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import SkeletonCards from "../../../components/Loading/SkeletonLoading/SkeletonCards";

const OurPartners = ({ data, loading }) => {
  const { lang } = useSelector((state) => state.language);
  const { t } = useTranslation();

  if (loading) return <SkeletonCards cardNum={6} />;

  return (
    <section className="sectionPadding container">
      <SectionTitle
        description={t("OurPartners.description")}
        title={t("OurPartners.title")}
        link="/partners"
        linkName={t("OurPartners.linkName")}
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
            slidesPerView: 2.2,
          },
          480: {
            slidesPerView: 2.8,
          },
          640: {
            slidesPerView: 3.5,
          },
          1024: {
            slidesPerView: 4.5,
          },
          1280: {
            slidesPerView: 6.3,
          },
        }}
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id} className="my-8">
            <PartnersCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Controls */}
      <SwiperNavigation name="ourProducts" />
    </section>
  );
};

export default OurPartners;
