import SectionTitle from "../../../components/common/SectionTitle";
import image from "../../../assets/images/project-img.jpg";

const list = [
  {
    id: 1,
    title:
      "موقعٌ استراتيجيّ شمال شرق الرّياض على طريق الثمامة يجمع بين القرب من قلب الرياض والابتعاد عن ازدحامها.",
  },
  {
    id: 2,
    title:
      "موقعٌ استراتيجيّ شمال شرق الرّياض على طريق الثمامة يجمع بين القرب من قلب الرياض والابتعاد عن ازدحامها.",
  },
  {
    id: 3,
    title:
      "موقعٌ استراتيجيّ شمال شرق الرّياض على طريق الثمامة يجمع بين القرب من قلب الرياض والابتعاد عن ازدحامها.",
  },
  {
    id: 4,
    title:
      "موقعٌ استراتيجيّ شمال شرق الرّياض على طريق الثمامة يجمع بين القرب من قلب الرياض والابتعاد عن ازدحامها.",
  },
];

const ProjectFeatures = () => {
  return (
    <section className="container sectionPadding">
      <SectionTitle
        title="مميزات الموقع"
        subtitle="نقدم لكم مشروعاً يجمع بين الجودة والابتكار والاستدامة"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16 mt-4 lg:mt-8">
        <div className="col-span-1 lg:col-span-5 h-[300px] md:h-[400px] rounded-3xl overflow-hidden border-4 border-white">
          <img
            src={image}
            alt="project-img"
            className="w-full h-full object-cover"
          />
        </div>

        <ul className="col-span-1 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
          {list.map((item, index) => (
            <li key={item.id} className="flex items-center gap-4">
              <span className="text-myGold text-5xl font-bold">{`${
                index + 1 >= 10 ? "index + 1" : `0${index + 1}`
              } `}</span>

              <p className="text-sm flex-1">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectFeatures;
