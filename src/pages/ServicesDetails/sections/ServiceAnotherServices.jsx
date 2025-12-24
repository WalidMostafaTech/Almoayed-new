import ServicesCard from "../../../components/cards/ServicesCard";
import SectionTitle from "../../../components/common/SectionTitle";
import { useTranslation } from "react-i18next";

const ServiceAnotherServices = ({ data }) => {
  const { t } = useTranslation();

  return (
    <section className="container sectionPadding space-y-4">
      <SectionTitle
        wide
        description={t("serviceAnotherServices.description")}
        title={t("serviceAnotherServices.title")}
      />

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data?.map((item) => (
          <ServicesCard key={item.id} item={item} />
        ))}
      </section>
    </section>
  );
};

export default ServiceAnotherServices;
