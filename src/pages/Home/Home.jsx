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
import { getHome } from "../../services/homeServices";
import SeoManager from "../../utils/SeoManager";

const Home = () => {
  const { data: homePage = [], isLoading: homeLoading } = useQuery({
    queryKey: ["homePage"],
    queryFn: getHome,
  });

  const { data: aboutUsPage = [], isLoading: aboutLoading } = useQuery({
    queryKey: ["aboutUsPage"],
    queryFn: getAboutUsPage,
  });

  return (
    <>
      <SeoManager
        title={homePage?.seo?.meta_title}
        description={homePage?.seo?.meta_description}
        keywords={homePage?.seo?.keywords}
      />

      <article>
        <Hero />
        <AboutSection
          data={aboutUsPage?.about_section}
          loading={aboutLoading}
        />
        <OurServices data={homePage?.webservices} loading={homeLoading} />
        <OurProjects data={homePage?.projects} loading={homeLoading} />
        <AchievementsSection
          data={aboutUsPage?.statistics}
          loading={aboutLoading}
        />
        <OurPartners data={homePage?.partners} loading={homeLoading} />
        <DownloadAppBanner />
        <FAQS />
        <Testimonials />
        <ContactUsSection />
      </article>
    </>
  );
};

export default Home;
