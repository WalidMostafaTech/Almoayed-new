import SectionTitle from "../../../components/common/SectionTitle";
import { useTranslation } from "react-i18next";

const ProjectFeatures = ({ data }) => {
  const { t } = useTranslation();

  return (
    <section className="container sectionPadding">
      <SectionTitle
        title={t("projectFeatures.title")}
        subtitle={t("projectFeatures.subtitle")}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mt-4 lg:mt-8">
        <div className="col-span-1 lg:col-span-5 h-[300px] md:h-[400px] rounded-3xl overflow-hidden border-4 border-white">
          <img
            src={data?.features_image}
            alt={data?.name}
            className="w-full h-full object-cover"
          />
        </div>

        <ul className="col-span-1 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
          {data?.features?.map((item, index) => (
            <li key={item.id} className="flex items-center gap-4">
              <span className="text-myGold text-5xl font-bold">
                {index + 1 >= 10 ? index + 1 : `0${index + 1}`}
              </span>

              <p className="font-bold flex-1">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectFeatures;
