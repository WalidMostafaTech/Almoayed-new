import { useQuery } from "@tanstack/react-query";
import PageBanner from "../../components/cards/PageBanner";
import PartnersCard from "../../components/cards/PartnersCard";
import { getPartnersPage } from "../../services/pagesServices";
import SkeletonPageBanner from "../../components/Loading/SkeletonLoading/SkeletonPageBanner";
import SkeletonCards from "../../components/Loading/SkeletonLoading/SkeletonCards";
import { useTranslation } from "react-i18next";
import SeoManager from "../../utils/SeoManager";

const Partners = () => {
  const { t } = useTranslation();

  const { data: partnersPage = [], isLoading } = useQuery({
    queryKey: ["partnersPage"],
    queryFn: getPartnersPage,
  });

  if (isLoading)
    return (
      <article>
        <SkeletonPageBanner />
        <SkeletonCards />
      </article>
    );

  return (
    <>
      <SeoManager
        title={partnersPage?.seo?.meta_title}
        description={partnersPage?.seo?.meta_description}
        keywords={partnersPage?.seo?.keywords}
      />

      <article>
        <PageBanner
          title={t("partners")}
          subTitle={partnersPage?.partner_banner?.partner_title}
          description={partnersPage?.partner_banner?.partner_description}
          image={partnersPage?.partner_banner?.partner_image}
        />

        <section className="sectionPadding container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 place-items-center">
          {partnersPage?.partners?.map((item) => (
            <PartnersCard key={item.id} item={item} />
          ))}
        </section>
      </article>
    </>
  );
};

export default Partners;
