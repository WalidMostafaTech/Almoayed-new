import PageBanner from "../../components/cards/PageBanner";
import ProductAbout from "./sections/ProductAbout";
import ProjectComponents from "./sections/ProjectComponents";
import ProjectFeatures from "./sections/ProjectFeatures";
import ProjectFacilitiesAndEquipment from "./sections/ProjectFacilitiesAndEquipment";
import ProjectSteps from "./sections/ProjectSteps";
import ContactUsSection from "../../components/sections/ContactUsSection";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProjectDetailsPage } from "../../services/pagesServices";
import SkeletonPageBanner from "../../components/Loading/SkeletonLoading/SkeletonPageBanner";
import SkeletonDetailsSection from "../../components/Loading/SkeletonLoading/SkeletonDetailsSection";
import SkeletonPostSection from "../../components/Loading/SkeletonLoading/SkeletonPostSection";

const ProjectsDetails = () => {
  const { id } = useParams();

  const { data: projectsDetailsPage = [], isLoading } = useQuery({
    queryKey: ["projectsDetailsPage", id],
    queryFn: () => getProjectDetailsPage(id),
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
        title="مشروع المؤيد"
        subTitle={projectsDetailsPage?.project_banner?.title}
        description={projectsDetailsPage?.project_banner?.description}
        image={projectsDetailsPage?.project_banner?.project_image}
      />

      <ProductAbout data={projectsDetailsPage?.project} />
      <ProjectComponents data={projectsDetailsPage?.project} />
      <ProjectFeatures data={projectsDetailsPage?.project} />
      <ProjectFacilitiesAndEquipment data={projectsDetailsPage?.project} />
      <ProjectSteps data={projectsDetailsPage?.project?.execution_phases} />
      <ContactUsSection />
    </article>
  );
};

export default ProjectsDetails;
