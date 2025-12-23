import SectionTitle from "../../../components/common/SectionTitle";

const ServiceServices = ({ data }) => {
  return (
    <section className="container sectionPadding space-y-6">
      <SectionTitle
        wide
        description="خدماتنا"
        title="تقنياتنا تعكس شغفنا بالجودة"
      />

      <div className="h-[300px] lg:h-[500px] bg-myDark-2 overflow-hidden rounded-xl rounded-es-[70px] rounded-se-[70px]">
        <img
          src={data?.thumbnail}
          alt="Service"
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-2">{data?.name}</h2>
        <div dangerouslySetInnerHTML={{ __html: data?.content }} />
      </div>
    </section>
  );
};

export default ServiceServices;
