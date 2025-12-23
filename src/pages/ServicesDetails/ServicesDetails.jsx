import PageBanner from "../../components/cards/PageBanner";
import ServiceAbout from "./sections/ServiceAbout";
import ServiceServices from "./sections/ServiceServices";
import ServiceAnotherServices from "./sections/ServiceAnotherServices";
import { useQuery } from "@tanstack/react-query";
import { getWebServicesDetailsPage } from "../../services/pagesServices";
import { useParams } from "react-router-dom";
import SkeletonPageBanner from "../../components/Loading/SkeletonLoading/SkeletonPageBanner";
import SkeletonDetailsSection from "../../components/Loading/SkeletonLoading/SkeletonDetailsSection";
import SkeletonPostSection from "../../components/Loading/SkeletonLoading/SkeletonPostSection";

const ServicesDetails = () => {
  const { id } = useParams();

  const { data: webServicesDetailsPage = [], isLoading } = useQuery({
    queryKey: ["webServicesDetailsPage", id],
    queryFn: () => getWebServicesDetailsPage(id),
  });

  if (isLoading)
    return (
      <article>
        <SkeletonPageBanner />
        <SkeletonDetailsSection reverse />
        <SkeletonPostSection />
      </article>
    );

  return (
    <article>
      <PageBanner
        title="المؤيد للمصاعد"
        subTitle={webServicesDetailsPage?.webservice_banner?.title}
        description={webServicesDetailsPage?.webservice_banner?.description}
        image={webServicesDetailsPage?.webservice_banner?.webservice_image}
      />

      <ServiceAbout data={webServicesDetailsPage?.service} />
      <ServiceServices data={webServicesDetailsPage?.service} />
      <ServiceAnotherServices data={webServicesDetailsPage?.related_services} />
    </article>
  );
};

export default ServicesDetails;
