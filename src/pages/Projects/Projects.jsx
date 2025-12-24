import { useTranslation } from "react-i18next";
import PageBanner from "../../components/cards/PageBanner";
import ProductCard from "../../components/cards/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getProjectPage } from "../../services/pagesServices";
import SkeletonPageBanner from "../../components/Loading/SkeletonLoading/SkeletonPageBanner";
import SkeletonCards from "../../components/Loading/SkeletonLoading/SkeletonCards";
import SeoManager from "../../utils/SeoManager";

const Projects = () => {
  const { t } = useTranslation();

  const { data: projectsPage = [], isLoading } = useQuery({
    queryKey: ["projectsPage"],
    queryFn: getProjectPage,
  });

  if (isLoading)
    return (
      <article>
        <SkeletonPageBanner />
        <SkeletonCards cardNum={4} />
      </article>
    );
  return (
    <>
      <SeoManager
        title={projectsPage?.extra?.seo?.meta_title}
        description={projectsPage?.extra?.seo?.meta_description}
        keywords={projectsPage?.extra?.seo?.keywords}
      />

      <article>
        <PageBanner
          title={t("projects")}
          subTitle={projectsPage?.extra?.project_banner?.title}
          description={projectsPage?.extra?.project_banner?.description}
          image={projectsPage?.extra?.project_banner?.project_image}
        />

        <section className="sectionPadding container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-8">
          {projectsPage?.items?.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </section>
      </article>
    </>
  );
};

export default Projects;
