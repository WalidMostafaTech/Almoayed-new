import { useQuery } from "@tanstack/react-query";
import PageBanner from "../../components/cards/PageBanner";
import ServicesCard from "../../components/cards/ServicesCard";
import { getWebServicesPage } from "../../services/pagesServices";
import SkeletonPageBanner from "../../components/Loading/SkeletonLoading/SkeletonPageBanner";
import SkeletonCards from "../../components/Loading/SkeletonLoading/SkeletonCards";
import { useTranslation } from "react-i18next";
import SeoManager from "../../utils/SeoManager";
import EmptyData from "../../components/sections/EmptyData";

const Services = () => {
  const { t } = useTranslation();

  const { data: webServicesPage = [], isLoading } = useQuery({
    queryKey: ["webServicesPage"],
    queryFn: getWebServicesPage,
  });

  if (isLoading)
    return (
      <article>
        <SkeletonPageBanner />
        <SkeletonCards cardNum={4} size="lg" />
      </article>
    );

  return (
    <>
      <SeoManager
        title={webServicesPage?.extra?.seo?.meta_title}
        description={webServicesPage?.extra?.seo?.meta_description}
        keywords={webServicesPage?.extra?.seo?.keywords}
      />

      <article>
        <PageBanner
          title={t("services")}
          subTitle={webServicesPage?.extra?.webservice_banner?.title}
          description={webServicesPage?.extra?.webservice_banner?.description}
          image={webServicesPage?.extra?.webservice_banner?.webservice_image}
        />

        {webServicesPage?.items ? (
          <section className="sectionPadding container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {webServicesPage?.items.map((item) => (
              <ServicesCard key={item.id} item={item} />
            ))}
          </section>
        ) : (
          <EmptyData />
        )}
      </article>
    </>
  );
};

export default Services;
