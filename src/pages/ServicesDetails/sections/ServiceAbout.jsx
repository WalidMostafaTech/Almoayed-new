import { Link } from "react-router-dom";
import image from "../../../assets/images/project-img.jpg";
import youtubeIcon from "../../../assets/icons/youtube-icon.png";
import SectionTitle from "../../../components/common/SectionTitle";
import { CgPhone } from "react-icons/cg";

const ServiceAbout = () => {
  return (
    <section className="container sectionPadding grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
      <div>
        <SectionTitle
          wide
          description="المؤيد للمصانع"
          title="عن خدمات مجموعة المؤيد"
          subtitle="تقدم شركة المؤيد مجموعة متكاملة من الخدمات الهندسية والعقارية التي تلبي احتياجات المشاريع من البداية وحتى التسليم النهائي، وفق أعلى معايير الجودة والاحترافية. نعمل على توفير حلول متكاملة تجمع بين الدقة، الابتكار، والاستدامة لضمان تنفيذ المشاريع بأفضل صورة ممكنة.
          تشمل خدماتنا مجالات متعددة مثل المصاعد، التسويق العقاري، الصيانة العامة، التمليك والتطوير العقاري، مواد البناء، وحلول الحاويات، لنكون الشريك الموثوق في جميع مراحل المشروع.
          في المؤيد، نؤمن أن نجاح أي مشروع يبدأ بخدمة احترافية، وتنفيذ دقيق، ورؤية واضحة تضع العميل في صميم اهتمامنا."
        />

        <Link to="/contact" className="mainBtn w-fit mt-4">
          اتصل بنا
          <CgPhone />
        </Link>
      </div>

      <div className="min-h-[300px] object-cover overflow-hidden rounded-4xl relative">
        <img src={image} alt="about" className="w-full h-full object-cover" />
        <img
          src={youtubeIcon}
          alt="about"
          className="w-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </section>
  );
};

export default ServiceAbout;
