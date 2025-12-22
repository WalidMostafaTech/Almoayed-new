import PageBanner from "../../components/cards/PageBanner";
import AboutSection from "../../components/sections/AboutSection";
import AchievementsSection from "../../components/sections/AchievementsSection";
import AboutMissionValuesVision from "./sections/AboutMissionValuesVision";
import { useQuery } from "@tanstack/react-query";
import { getAboutUsPage } from "../../services/pagesServices";
import SkeletonPageLoading from "../../components/Loading/SkeletonLoading/SkeletonPageLoading";

const AboutUS = () => {
  const { data: aboutUsPage = [], isLoading } = useQuery({
    queryKey: ["aboutUsPage"],
    queryFn: getAboutUsPage,
  });

  if (isLoading) return <SkeletonPageLoading type="post" />;

  return (
    <article>
      <PageBanner
        title="من نحن"
        subTitle={aboutUsPage?.main_section?.title}
        description={aboutUsPage?.main_section?.description}
        image={aboutUsPage?.main_section?.home_image}
      />

      <AchievementsSection center data={aboutUsPage?.statistics} />

      <AboutSection data={aboutUsPage?.about_section} />

      {<AboutMissionValuesVision data={aboutUsPage?.mission_values_vision} />}
    </article>
  );
};

export default AboutUS;
