import image from "../../../assets/images/project-img.jpg";
import ServicesCard from "../../../components/cards/ServicesCard";
import SectionTitle from "../../../components/common/SectionTitle";

const list = [
  {
    id: 1,
    title: "مجموعة المؤيد للتطوير العقارى-المؤيد للمصاعد",
    image: image,
    link: "/",
  },
  {
    id: 2,
    title: "مجموعة المؤيد للتطوير العقارى-المؤيد للمصاعد",
    image: image,
    link: "/",
  },
  {
    id: 3,
    title: "مجموعة المؤيد للتطوير العقارى-المؤيد للمصاعد",
    image: image,
    link: "/",
  },
  {
    id: 4,
    title: "مجموعة المؤيد للتطوير العقارى-المؤيد للمصاعد",
    image: image,
    link: "/",
  },
  {
    id: 5,
    title: "مجموعة المؤيد للتطوير العقارى-المؤيد للمصاعد",
    image: image,
    link: "/",
  },
  {
    id: 6,
    title: "مجموعة المؤيد للتطوير العقارى-المؤيد للمصاعد",
    image: image,
    link: "/",
  },
];

const ServiceAnotherServices = ({ data }) => {
  return (
    <section className="container sectionPadding space-y-4">
      <SectionTitle
        wide
        description="خدمات اخرى"
        title="تخصصاتنا تتحدث عن شغفنا"
      />

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.map((item) => (
          <ServicesCard
            key={item.id}
            item={{ name: item.name, image: item.thumbnail, id: item.id }}
          />
        ))}
      </section>
    </section>
  );
};

export default ServiceAnotherServices;
