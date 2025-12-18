import image from "../../assets/images/project-img.jpg";
import PageBanner from "../../components/cards/PageBanner";
import ServiceAbout from "./sections/ServiceAbout";
import ServiceServices from "./sections/ServiceServices";
import ServiceAnotherServices from "./sections/ServiceAnotherServices";

const ServicesDetails = () => {
  return (
    <article>
      <PageBanner
        title="المؤيد للمصاعد"
        subTitle="حلول متكاملة للمصاعد ترفع مستوى كل مبنى."
        description="نغطي جميع احتياجات المصاعد بخبرة تضمن الأمان، الراحة، والجودة في كل تركيب وصيانة."
        image={image}
      />

      <ServiceAbout />
      <ServiceServices />
      <ServiceAnotherServices />
    </article>
  );
};

export default ServicesDetails;
