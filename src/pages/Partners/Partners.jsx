import image from "../../assets/images/project-img.jpg";
import PageBanner from "../../components/common/PageBanner";
import PartnersCard from "../../components/common/PartnersCard";

const list = [
  {
    id: 1,
    icon: image,
  },
  {
    id: 2,
    icon: image,
  },
  {
    id: 3,
    icon: image,
  },
  {
    id: 4,
    icon: image,
  },
  {
    id: 5,
    icon: image,
  },
  {
    id: 6,
    icon: image,
  },
];

const Partners = () => {
  return (
    <article>
      <PageBanner
        title="شركاء النجاح"
        subTitle="رحلة واحدة.. هدف واحد."
        description="نفخر بعلاقاتنا مع شركائنا الذين شاركونا الرؤية وصنعوا معنا نجاحات تستمر."
        image={image}
      />

      <section className="sectionPadding container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {list.map((item) => (
          <PartnersCard key={item.id} item={item} />
        ))}
      </section>
    </article>
  );
};

export default Partners;
