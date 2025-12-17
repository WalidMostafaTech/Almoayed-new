import SectionTitle from "../../../components/common/SectionTitle";
import img from "../../../assets/images/project-img.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import SwiperNavigation from "../../../components/common/SwiperNavigation";
import TestimonialsCard from "../../../components/cards/TestimonialsCard";
import { useSelector } from "react-redux";

const list = [
  {
    id: 1,
    image: img,
    name: "Mohammed Ayman",
    date: "من 5 أشهر",
    rate: 5,
    content:
      "تعاملت مع شركة المؤيد لتسويق مشروعي العقاري، وكانت تجربة ممتازة من البداية للنهاية. الفريق محترف، متعاون، ويفهم احتياجات العميل بدقة. بفضل استراتيجياتهم التسويقية قدرنا نوصل للعملاء المثاليين في وقت قصير، وحققنا نتائج أفضل مما توقعنا. أنصح أي مستثمر أو مالك مشروع بالتعامل معهم بكل ثقة.",
  },
  {
    id: 2,
    image: img,
    name: "Mohammed Ayman",
    date: "من 5 أشهر",
    rate: 3.5,
    content:
      "تعاملت مع شركة المؤيد لتسويق مشروعي العقاري، وكانت تجربة ممتازة من البداية للنهاية. الفريق محترف، متعاون، ويفهم احتياجات العميل بدقة. بفضل استراتيجياتهم التسويقية قدرنا نوصل للعملاء المثاليين في وقت قصير، وحققنا نتائج أفضل مما توقعنا. أنصح أي مستثمر أو مالك مشروع بالتعامل معهم بكل ثقة.",
  },
  {
    id: 3,
    image: img,
    name: "Mohammed Ayman",
    date: "من 5 أشهر",
    rate: 5,
    content:
      "تعاملت مع شركة المؤيد لتسويق مشروعي العقاري، وكانت تجربة ممتازة من البداية للنهاية. الفريق محترف، متعاون، ويفهم احتياجات العميل بدقة. بفضل استراتيجياتهم التسويقية قدرنا نوصل للعملاء المثاليين في وقت قصير، وحققنا نتائج أفضل مما توقعنا. أنصح أي مستثمر أو مالك مشروع بالتعامل معهم بكل ثقة.",
  },
  {
    id: 4,
    image: img,
    name: "Mohammed Ayman",
    date: "من 5 أشهر",
    rate: 4,
    content:
      "تعاملت مع شركة المؤيد لتسويق مشروعي العقاري، وكانت تجربة ممتازة من البداية للنهاية. الفريق محترف، متعاون، ويفهم احتياجات العميل بدقة. بفضل استراتيجياتهم التسويقية قدرنا نوصل للعملاء المثاليين في وقت قصير، وحققنا نتائج أفضل مما توقعنا. أنصح أي مستثمر أو مالك مشروع بالتعامل معهم بكل ثقة.",
  },
  {
    id: 5,
    image: img,
    name: "Mohammed Ayman",
    date: "من 5 أشهر",
    rate: 5,
    content:
      "تعاملت مع شركة المؤيد لتسويق مشروعي العقاري، وكانت تجربة ممتازة من البداية للنهاية. الفريق محترف، متعاون، ويفهم احتياجات العميل بدقة. بفضل استراتيجياتهم التسويقية قدرنا نوصل للعملاء المثاليين في وقت قصير، وحققنا نتائج أفضل مما توقعنا. أنصح أي مستثمر أو مالك مشروع بالتعامل معهم بكل ثقة.",
  },
  {
    id: 6,
    image: img,
    name: "Mohammed Ayman",
    date: "من 5 أشهر",
    rate: 5,
    content:
      "تعاملت مع شركة المؤيد لتسويق مشروعي العقاري، وكانت تجربة ممتازة من البداية للنهاية. الفريق محترف، متعاون، ويفهم احتياجات العميل بدقة. بفضل استراتيجياتهم التسويقية قدرنا نوصل للعملاء المثاليين في وقت قصير، وحققنا نتائج أفضل مما توقعنا. أنصح أي مستثمر أو مالك مشروع بالتعامل معهم بكل ثقة.",
  },
  {
    id: 7,
    image: img,
    name: "Mohammed Ayman",
    date: "من 5 أشهر",
    rate: 5,
    content:
      "تعاملت مع شركة المؤيد لتسويق مشروعي العقاري، وكانت تجربة ممتازة من البداية للنهاية. الفريق محترف، متعاون، ويفهم احتياجات العميل بدقة. بفضل استراتيجياتهم التسويقية قدرنا نوصل للعملاء المثاليين في وقت قصير، وحققنا نتائج أفضل مما توقعنا. أنصح أي مستثمر أو مالك مشروع بالتعامل معهم بكل ثقة.",
  },
];

const Testimonials = () => {
  const { lang } = useSelector((state) => state.language);

  return (
    <section className="sectionPadding container">
      <SectionTitle
        description="تقييمات العملاء"
        title="ماذا يقول عملائنا"
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
        {list.map((item) => (
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
