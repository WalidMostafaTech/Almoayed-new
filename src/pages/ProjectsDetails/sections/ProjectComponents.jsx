import SectionTitle from "../../../components/common/SectionTitle";
import { PiBuildingApartment } from "react-icons/pi";

const list = [
  {
    id: 1,
    list: [
      {
        id: 1,
        value: 12,
        title: " مبنى سكني",
      },
      {
        id: 2,
        value: 1.233,
        title: "وحدة سكنية",
      },
    ],
  },
  {
    id: 2,
    list: [
      {
        id: 1,
        value: 8,
        title:
          " مبانٍ سكنيّة – تجاريّة تضم متاجر متنوعة في الطوابق الأرضيّة ووحدات سكنيّة في الطوابق العلويّة",
      },
    ],
  },
  {
    id: 3,
    list: [
      {
        id: 1,
        value: 3,
        title:
          " مبانٍ سكنيّة – تجاريّة تضم متاجر متنوعة في الطوابق الأرضيّة ووحدات سكنيّة في الطوابق العلويّة",
      },
    ],
  },
  {
    id: 4,
    list: [
      {
        id: 1,
        value: 3,
        title:
          " مبانٍ سكنيّة – تجاريّة تضم متاجر متنوعة في الطوابق الأرضيّة ووحدات سكنيّة في الطوابق العلويّة",
      },
    ],
  },
  {
    id: 5,
    list: [
      {
        id: 1,
        value: 3,
        title:
          " مبانٍ سكنيّة – تجاريّة تضم متاجر متنوعة في الطوابق الأرضيّة ووحدات سكنيّة في الطوابق العلويّة",
      },
    ],
  },
  {
    id: 6,
    list: [
      {
        id: 1,
        value: 3,
        title:
          " مبانٍ سكنيّة – تجاريّة تضم متاجر متنوعة في الطوابق الأرضيّة ووحدات سكنيّة في الطوابق العلويّة",
      },
    ],
  },
];

const ProjectComponents = () => {
  return (
    <section className="px-4 my-8 lg:my-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 bg-[#030213] p-4 lg:p-16 rounded-4xl">
        <div className="content-center">
          <SectionTitle
            title="المكونات"
            subtitle="منظومة عمرانية متكاملة تجمع بين السكن والعمل والتجارة والضيافة، في تجربة حضرية متوازنة تُلبي تطلعات الحياة العصرية بكافّة أشكالها."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {list.map((item) => (
            <div key={item.id} className="flex gap-2">
              <PiBuildingApartment className="text-myGold text-2xl" />

              <div className="flex flex-col gap-1 flex-1">
                {item.list.map((item) => (
                  <p key={item.id} className="">
                    <span className="text-myGold">{item.value}</span>{" "}
                    {item.title}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectComponents;
