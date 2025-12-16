import image from "../../assets/images/project-img.jpg";
import PageBanner from "../../components/common/PageBanner";
import ServicesCard from "../../components/common/ServicesCard";

const list = [
  {
    id: 1,
    title: "مجموعة المؤيد للتطوير العقارى -المؤيد للمصاعد",
    image: image,
    link: "/",
  },
  {
    id: 2,
    title: "مجموعة المؤيد للتطوير العقارى -المؤيد للمصاعد",
    image: image,
    link: "/",
  },
  {
    id: 3,
    title: "مجموعة المؤيد للتطوير العقارى -المؤيد للمصاعد",
    image: image,
    link: "/",
  },
  {
    id: 4,
    title: "مجموعة المؤيد للتطوير العقارى -المؤيد للمصاعد",
    image: image,
    link: "/",
  },
  {
    id: 5,
    title: "مجموعة المؤيد للتطوير العقارى -المؤيد للمصاعد",
    image: image,
    link: "/",
  },
  {
    id: 6,
    title: "مجموعة المؤيد للتطوير العقارى -المؤيد للمصاعد",
    image: image,
    link: "/",
  },
];

const Services = () => {
  return (
    <article>
      <PageBanner
        title="خدماتنا"
        subTitle="حلول هندسية شاملة تصنع الفرق."
        description="نغطي جميع التخصصات الهندسية بخبرة تضمن الإبداع، الدقة، والجودة في كل مشروع."
        image={image}
      />

      <section className="sectionPadding container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {list.map((item) => (
          <ServicesCard key={item.id} item={item} />
        ))}
      </section>
    </article>
  );
};

export default Services;
