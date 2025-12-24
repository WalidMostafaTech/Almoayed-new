import PageBanner from "../../components/cards/PageBanner";
import ContactUsSection from "../../components/sections/ContactUsSection";
import { useQuery } from "@tanstack/react-query";
import { getContactPage } from "../../services/pagesServices";
import SkeletonPageBanner from "../../components/Loading/SkeletonLoading/SkeletonPageBanner";
import SkeletonContactUs from "../../components/Loading/SkeletonLoading/SkeletonContactUs";
import { useTranslation } from "react-i18next";

const ContactUS = () => {
  const { t } = useTranslation();

  const { data: contactUsPage = [], isLoading } = useQuery({
    queryKey: ["contactUsPage"],
    queryFn: getContactPage,
  });

  if (isLoading)
    return (
      <article>
        <SkeletonPageBanner />
        <SkeletonContactUs />
      </article>
    );

  return (
    <>
      <SeoManager
        title={contactUsPage?.seo?.meta_title}
        description={contactUsPage?.seo?.meta_description}
        keywords={contactUsPage?.seo?.keywords}
      />

      <article>
        <PageBanner
          title={t("contact")}
          subTitle={contactUsPage?.title}
          description={contactUsPage?.description}
          image={contactUsPage?.contact_image}
        />

        <ContactUsSection />
      </article>
    </>
  );
};

export default ContactUS;
