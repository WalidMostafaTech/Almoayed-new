import AboutSection from "../../components/sections/AboutSection";
import Hero from "./sections/Hero";
import OurServices from "./sections/OurServices";
import OurProjects from "./sections/OurProjects";
import OurPartners from "./sections/OurPartners";
import DownloadAppBanner from "./sections/DownloadAppBanner";
import FAQS from "./sections/FAQS";
import Testimonials from "./sections/Testimonials";
import ContactUsSection from "../../components/sections/ContactUsSection";
import AchievementsSection from "../../components/sections/AchievementsSection";
import { useQuery } from "@tanstack/react-query";
import { getAboutUsPage } from "../../services/pagesServices";

const Home = () => {
  const { data: aboutUsPage = [], isLoading: AboutLoading } = useQuery({
    queryKey: ["aboutUsPage"],
    queryFn: getAboutUsPage,
  });

  return (
    <article>
      <Hero />
      <AboutSection data={aboutUsPage?.about_section} loading={AboutLoading} />
      <OurServices />
      <OurProjects />
      <AchievementsSection
        data={aboutUsPage?.statistics}
        loading={AboutLoading}
      />
      <OurPartners />
      <DownloadAppBanner />
      <FAQS />
      <Testimonials />
      <ContactUsSection />
    </article>
  );
};

export default Home;
