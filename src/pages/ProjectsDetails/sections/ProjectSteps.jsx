import SectionTitle from "../../../components/common/SectionTitle";

const list = [
  {
    id: 1,
    title: "مراحل تنفيذ المشروع",
  },
  {
    id: 2,
    title: "مراحل تنفيذ المشروع",
  },
  {
    id: 3,
    title: "مراحل تنفيذ المشروع",
  },
  {
    id: 4,
    title: "مراحل تنفيذ المشروع",
  },
];

const ProjectSteps = () => {
  return (
    <section className="container sectionPadding">
      <div className="bg-myDark-2 p-4 lg:p-8 space-y-10 lg:space-y-16">
        <SectionTitle
          title="مراحل تنفيذ المشروع"
          subtitle="عملية تنفيذ منظمة ومدروسة لضمان تسليم المشروع بأعلى جودة وفي الوقت المحدد"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
          {list.map((item) => (
            <p
              key={item.id}
              className="text-sm py-8 lg:py-12 px-4 relative border border-white rounded-xl text-center"
            >
              <span className="text-black text-2xl bg-white font-bold w-14 h-14 rounded-full flex items-center justify-center absolute -top-7 -start-1 sm:start-1/2 sm:translate-x-1/2">{`${
                item.id >= 10 ? item.id : `0${item.id}`
              }`}</span>

              {item.title}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSteps;
