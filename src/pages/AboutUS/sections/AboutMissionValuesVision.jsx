import logo from "../../../assets/images/logo/logo-fav.png";
import { useTranslation } from "react-i18next";

const AboutMissionValuesVision = ({ data }) => {
  const { t } = useTranslation();

  const list = [
    {
      id: 1,
      title: t("AboutMissionValuesVision.values"),
      description: data?.values,
    },
    {
      id: 2,
      title: t("AboutMissionValuesVision.vision"),
      description: data?.vision,
    },
    {
      id: 3,
      title: t("AboutMissionValuesVision.mission"),
      description: data?.mission,
    },
  ];

  return (
    <section className="sectionPadding container flex flex-wrap gap-4">
      {list.map((item) => (
        <div
          key={item.id}
          className="p-4 rounded-xl bg-myDark-2 border border-myGold space-y-2 flex-1 min-w-[200px]"
        >
          <h3 className="flex items-center gap-2 font-bold text-xl">
            <img src={logo} alt="logo" className="w-4" />
            {item.title}
          </h3>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default AboutMissionValuesVision;
