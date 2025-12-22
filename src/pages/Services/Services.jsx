import { useQuery } from "@tanstack/react-query";
import PageBanner from "../../components/cards/PageBanner";
import ServicesCard from "../../components/cards/ServicesCard";
import { getWebServicesPage } from "../../services/pagesServices";
import SkeletonPageLoading from "../../components/Loading/SkeletonLoading/SkeletonPageLoading";

const Services = () => {
  const { data: webServicesPage = [], isLoading } = useQuery({
    queryKey: ["webServicesPage"],
    queryFn: getWebServicesPage,
  });

  if (isLoading) return <SkeletonPageLoading type="cards" />;

  return (
    <article>
      <PageBanner
        title="خدماتنا"
        subTitle={webServicesPage?.extra?.webservice_banner?.title}
        description={webServicesPage?.extra?.webservice_banner?.description}
        image={webServicesPage?.extra?.webservice_banner?.webservice_image}
      />

      <section className="sectionPadding container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {webServicesPage?.items.map((item) => (
          <ServicesCard key={item.id} item={item} />
        ))}
      </section>
    </article>
  );
};

export default Services;
