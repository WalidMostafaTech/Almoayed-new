import PageBanner from "../../components/cards/PageBanner";
import AboutSection from "../../components/sections/AboutSection";
import AchievementsSection from "../../components/sections/AchievementsSection";
import AboutMissionValuesVision from "./sections/AboutMissionValuesVision";
import { useQuery } from "@tanstack/react-query";
import { getAboutUsPage } from "../../services/pagesServices";
import SkeletonPageBanner from "../../components/Loading/SkeletonLoading/SkeletonPageBanner";
import SkeletonPostSection from "../../components/Loading/SkeletonLoading/SkeletonPostSection";
import { useTranslation } from "react-i18next";

const AboutUS = () => {
  const { t } = useTranslation();

  const { data: aboutUsPage = [], isLoading } = useQuery({
    queryKey: ["aboutUsPage"],
    queryFn: getAboutUsPage,
  });

  if (isLoading)
    return (
      <article>
        <SkeletonPageBanner />
        <SkeletonPostSection center />
      </article>
    );

  return (
    <article>
      <PageBanner
        title={t("about")}
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
