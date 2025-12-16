import image from "../../assets/images/project-img.jpg";
import PageBanner from "../../components/common/PageBanner";
import ProductAbout from "./sections/ProductAbout";
import ProjectComponents from "./sections/ProjectComponents";
import ProjectFeatures from "./sections/ProjectFeatures";
import ProjectFacilitiesAndEquipment from "./sections/ProjectFacilitiesAndEquipment";
import ProjectSteps from "./sections/ProjectSteps";
import ContactUsSection from "../../components/sections/ContactUsSection";

const ProjectsDetails = () => {
  return (
    <article>
      <PageBanner
        title="مشروع المؤيد"
        subTitle="مستقبل الاستثمار العقارى يبدأ من هنا"
        description="مشروع متكامل يجمع بين التصميم العصري، الجودة العالية، والحلول الهندسية الذكية، ليقدم تجربة سكنية واستثمارية بمعايير عالمية."
        image={image}
      />

      <ProductAbout />
      <ProjectComponents />
      <ProjectFeatures />
      <ProjectFacilitiesAndEquipment />
      <ProjectSteps />
      <section className="sectionPadding container">
        <ContactUsSection />
      </section>
    </article>
  );
};

export default ProjectsDetails;
