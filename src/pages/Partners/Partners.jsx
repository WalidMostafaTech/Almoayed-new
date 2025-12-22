import { useQuery } from "@tanstack/react-query";
import PageBanner from "../../components/cards/PageBanner";
import PartnersCard from "../../components/cards/PartnersCard";
import { getPartnersPage } from "../../services/pagesServices";
import SkeletonPageLoading from "../../components/Loading/SkeletonLoading/SkeletonPageLoading";

const Partners = () => {
  const { data: partnersPage = [], isLoading } = useQuery({
    queryKey: ["partnersPage"],
    queryFn: getPartnersPage,
  });

  if (isLoading) return <SkeletonPageLoading />;

  return (
    <article>
      <PageBanner
        title="شركاء النجاح"
        subTitle={partnersPage?.partner_banner?.partner_title}
        description={partnersPage?.partner_banner?.partner_description}
        image={partnersPage?.partner_banner?.partner_image}
      />

      <section className="sectionPadding container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 place-items-center">
        {partnersPage?.partners?.map((item) => (
          <PartnersCard key={item.id} item={item} />
        ))}
      </section>
    </article>
  );
};

export default Partners;
