import SectionTitle from "../../../components/common/SectionTitle";
import icon1 from "../../../assets/icons/Group (1).png";
import icon2 from "../../../assets/icons/Vector.png";
import { useTranslation } from "react-i18next";

const ProjectFacilitiesAndEquipment = ({ data }) => {
  const { t } = useTranslation();

  const list = [
    {
      id: 1,
      icon: icon1,
      title: t("projectFacilities.facilities"),
      items: data?.facilities,
    },
    {
      id: 2,
      icon: icon2,
      title: t("projectFacilities.systems"),
      items: data?.systems,
    },
  ];

  return (
    <section className="sectionPadding bg-myDark-2">
      <div className="container">
        <SectionTitle
          title={t("projectFacilities.title")}
          subtitle={t("projectFacilities.subtitle")}
        />

        <div className="mt-8 space-y-6 lg:space-y-10">
          {list.map((item) => (
            <div key={item.id}>
              <h3 className="flex items-center gap-2 mb-6 text-3xl font-bold">
                <img src={item.icon} alt="icon" className="w-6 lg:w-8" />
                {item.title}
              </h3>

              <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                {item.items?.map((item, index) => (
                  <li key={item.id} className="flex items-center gap-4">
                    <span className="text-myGold text-5xl font-bold">
                      {index + 1 >= 10 ? index + 1 : `0${index + 1}`}
                    </span>

                    <p className="flex-1 text-xl">{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectFacilitiesAndEquipment;
