import ServicesCard from "../../../components/cards/ServicesCard";
import SectionTitle from "../../../components/common/SectionTitle";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { useSelector } from "react-redux";
import SwiperNavigation from "../../../components/common/SwiperNavigation";

const ServiceAnotherServices = ({ data }) => {
  const { t } = useTranslation();
  const { lang } = useSelector((state) => state.language);

  return (
    <section className="container sectionPadding space-y-4">
      <SectionTitle
        wide
        description={t("serviceAnotherServices.description")}
        title={t("serviceAnotherServices.title")}
      />

      <Swiper
        dir={lang === "ar" ? "rtl" : "ltr"}
        modules={[Navigation]}
        spaceBetween={16}
        navigation={{
          prevEl: ".ourServicesInPage-prev",
          nextEl: ".ourServicesInPage-next",
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

      <SwiperNavigation name="ourServicesInPage" />
    </section>
  );
};

export default ServiceAnotherServices;
