import SectionTitle from "../../../components/common/SectionTitle";
import { PiBuildingApartment } from "react-icons/pi";

const ProjectComponents = ({ data }) => {
  return (
    <section className="px-4 my-8 lg:my-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 bg-[#030213] p-4 md:p-16 rounded-3xl md:rounded-[70px]">
        <div className="content-center">
          <SectionTitle
            title="المكونات"
            subtitle={data?.components_description}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data?.components?.map((item) => (
            <div key={item.id} className="flex gap-2">
              <PiBuildingApartment className="text-myGold text-2xl" />

              <div dangerouslySetInnerHTML={{ __html: item.title }} className="flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectComponents;
