import SectionTitle from "../../../components/common/SectionTitle";
import { useTranslation } from "react-i18next";

const ProjectSteps = ({ data }) => {
  const { t } = useTranslation();

  return (
    <section className="container sectionPadding">
      <div className="bg-myDark-2 p-4 lg:p-8 space-y-10 lg:space-y-16">
        <SectionTitle
          title={t("projectSteps.title")}
          subtitle={t("projectSteps.subtitle")}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
          {data?.map((item, index) => (
            <p
              key={item.id}
              className="text-lg py-8 lg:py-12 px-4 relative border border-white rounded-xl text-center"
            >
              <span className="text-black text-2xl bg-white font-bold w-14 h-14 rounded-full flex items-center justify-center absolute -top-7 -start-1 sm:start-1/2 sm:translate-x-1/2 ltr:sm:-translate-x-1/2">
                {index + 1 >= 10 ? index + 1 : `0${index + 1}`}
              </span>

              {item.title}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSteps;
