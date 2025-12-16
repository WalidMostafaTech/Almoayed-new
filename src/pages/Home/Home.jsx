import AboutSection from "../../components/sections/AboutSection";
import Hero from "./sections/Hero";
import OurServices from "./sections/OurServices";
import OurProjects from "./sections/OurProjects";
import OurAchievements from "./sections/OurAchievements";
import OurPartners from "./sections/OurPartners";
import DownloadAppBanner from "./sections/DownloadAppBanner";
import FAQS from "./sections/FAQS";
import Testimonials from "./sections/Testimonials";
import ContactUsSection from "../../components/sections/ContactUsSection";

const Home = () => {
  return (
    <article>
      <Hero />
      <AboutSection />
      <OurServices />
      <OurProjects />
      <OurAchievements />
      <OurPartners />
      <DownloadAppBanner />
      <FAQS />
      <Testimonials />

      <section className="sectionPadding container">
        <ContactUsSection />
      </section>
    </article>
  );
};

export default Home;
