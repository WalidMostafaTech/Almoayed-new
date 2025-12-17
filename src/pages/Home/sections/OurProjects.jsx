import SectionTitle from "../../../components/common/SectionTitle";
import img from "../../../assets/images/logo/logo.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import SwiperNavigation from "../../../components/common/SwiperNavigation";
import ProductCard from "../../../components/cards/ProductCard";
import { useSelector } from "react-redux";

const list = [
  {
    id: 1,
    status: "تم الانتهاء",
    icon: img,
    link: "/",
  },
  {
    id: 2,
    status: "تم الانتهاء",
    icon: img,
    link: "/",
  },
  {
    id: 3,
    status: "تم الانتهاء",
    icon: img,
    link: "/",
  },
  {
    id: 4,
    status: "تم الانتهاء",
    icon: img,
    link: "/",
  },
  {
    id: 5,
    status: "تم الانتهاء",
    icon: img,
    link: "/",
  },
  {
    id: 6,
    status: "تم الانتهاء",
    icon: img,
    link: "/",
  },
];
const OurProjects = () => {
  const { lang } = useSelector((state) => state.language);


  return (
    <section className="sectionPadding container">
      <SectionTitle
        description="مشاريعنا"
        title="كل مشروع حكاية نجاح"
        subtitle="مشاريعنا ليست مجرد عقارات، بل فرص استثمارية صُممت لتلهم الثقة، وتخلق قيمة مستدامة لكل مساحة نطورها."
        link="/projects"
        linkName="إكتشف جميع مشاريعنا"
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
        {list.map((item) => (
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
