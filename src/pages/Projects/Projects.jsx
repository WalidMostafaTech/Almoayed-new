import { useTranslation } from "react-i18next";
import image from "../../assets/images/project-img.jpg";
import PageBanner from "../../components/cards/PageBanner";
import ProductCard from "../../components/cards/ProductCard";

const list = [
  {
    id: 1,
    status: "تم الانتهاء",
    icon: image,
    link: "/",
  },
  {
    id: 2,
    status: "تم الانتهاء",
    icon: image,
    link: "/",
  },
  {
    id: 3,
    status: "تم الانتهاء",
    icon: image,
    link: "/",
  },
  {
    id: 4,
    status: "تم الانتهاء",
    icon: image,
    link: "/",
  },
  {
    id: 5,
    status: "تم الانتهاء",
    icon: image,
    link: "/",
  },
  {
    id: 6,
    status: "تم الانتهاء",
    icon: image,
    link: "/",
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <article>
      <PageBanner
        title={t("projects")}
        subTitle="كل مشروع حكاية نجاح."
        description="نفخر بكل إنجاز هندسي صممناه بإتقان ليبقى شاهدًا على خبرتنا وجودة عملنا."
        image={image}
      />

      <section className="sectionPadding container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-8">
        {list.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </section>
    </article>
  );
};

export default Projects;
