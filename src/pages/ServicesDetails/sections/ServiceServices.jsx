import image from "../../../assets/images/project-img.jpg";
import SectionTitle from "../../../components/common/SectionTitle";

const ServiceServices = () => {
  return (
    <section className="container sectionPadding space-y-6">
      <SectionTitle
        wide
        description="خدماتنا"
        title="تقنياتنا تعكس شغفنا بالجودة"
      />

      <div className="h-[300px] lg:h-[500px] overflow-hidden rounded-xl rounded-es-[70px] rounded-se-[70px]">
        <img src={image} alt="Service" className="w-full h-full object-cover" />
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-2">المؤيد للمصاعد</h2>
        <ul className="space-y-2 text-lg">
          <li>
            ✅ توريد وتركيب جميع أنواع المصاعد نوفر مصاعد حديثة تناسب المباني
            السكنية، التجارية، الإدارية، والمولات، مع الالتزام بأعلى معايير
            الأمان العالمية وجودة التشغيل.
          </li>
          <li>
            ✅ توريد وتركيب جميع أنواع المصاعد نوفر مصاعد حديثة تناسب المباني
            السكنية، التجارية، الإدارية، والمولات، مع الالتزام بأعلى معايير
            الأمان العالمية وجودة التشغيل.
          </li>
          <li>
            ✅ توريد وتركيب جميع أنواع المصاعد نوفر مصاعد حديثة تناسب المباني
            السكنية، التجارية، الإدارية، والمولات، مع الالتزام بأعلى معايير
            الأمان العالمية وجودة التشغيل.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServiceServices;
