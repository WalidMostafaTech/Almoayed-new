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
import EmptyData from "../../components/sections/EmptyData";

const Home = () => {
  return (
    <article>
      <EmptyData />
      <Hero />
      <AboutSection />
      <OurServices />
      <OurProjects />
      <AchievementsSection />
      <OurPartners />
      <DownloadAppBanner />
      <FAQS />
      <Testimonials />
      <ContactUsSection />
    </article>
  );
};

export default Home;
