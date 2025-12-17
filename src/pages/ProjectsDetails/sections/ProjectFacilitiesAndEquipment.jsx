import SectionTitle from "../../../components/common/SectionTitle";
import icon1 from "../../../assets/icons/Group (1).png";
import icon2 from "../../../assets/icons/Vector.png";

const list = [
  {
    id: 1,
    icon: icon1,
    title: "المرافق",
    items: [
      {
        id: 1,
        title: "مرافق سكنية",
      },
      {
        id: 2,
        title: "مرافق سكنية",
      },
      {
        id: 3,
        title: "مرافق سكنية",
      },
      {
        id: 4,
        title: "مرافق سكنية",
      },
      {
        id: 5,
        title: "مرافق سكنية",
      },
    ],
  },
  {
    id: 2,
    icon: icon2,
    title: "الانظمة والتجهيزات",
    items: [
      {
        id: 1,
        title: "مرافق سكنية",
      },
      {
        id: 2,
        title: "مرافق سكنية",
      },
      {
        id: 3,
        title: "مرافق سكنية",
      },
      {
        id: 4,
        title: "مرافق سكنية",
      },
      {
        id: 5,
        title: "مرافق سكنية",
      },
    ],
  },
];

const ProjectFacilitiesAndEquipment = () => {
  return (
    <section className="sectionPadding bg-myDark-2">
    <div className="container">
        <SectionTitle
          title="المرافق والتجهيزات"
          subtitle="تفاصيلٌ صُمّمت بعناية لتجسّد أسلوب حياة عصريّ مُتكامل، يجمع بين الراحة والرفاه والابتكار."
        />
  
        <div className="mt-8 space-y-6 lg:space-y-10">
          {list.map((item) => (
            <div key={item.id}>
              <h3 className="flex items-center gap-2 mb-6 text-3xl font-bold">
                <img src={item.icon} alt="icon" className="w-6 lg:w-8" />
                {item.title}
              </h3>
  
              <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                {item.items.map((item, index) => (
                  <li key={item.id} className="flex items-center gap-4">
                    <span className="text-myGold text-5xl font-bold">{`${
                      index + 1 >= 10 ? "index + 1" : `0${index + 1}`
                    } `}</span>
  
                    <p className="flex-1">{item.title}</p>
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
