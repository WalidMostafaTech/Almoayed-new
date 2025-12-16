import PageBanner from "../../components/common/PageBanner";
import image from "../../assets/images/project-img.jpg";
import ContactUsSection from "../../components/sections/ContactUsSection";

const ContactUS = () => {
  return (
    <article>
      <PageBanner
        title="تواصل معنا"
        subTitle="تواصل معنا وابدأ رحلتك العقارية بثقة"
        description="نسعد بالإجابة عن استفساراتك ودعمك في كل خطوة نحو مشروعك القادم."
        image={image}
      />

      <section className="sectionPadding container">
        <ContactUsSection />
      </section>
    </article>
  );
};

export default ContactUS;
