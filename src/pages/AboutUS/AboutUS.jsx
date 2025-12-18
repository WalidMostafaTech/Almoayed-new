import PageBanner from "../../components/cards/PageBanner";
import image from "../../assets/images/project-img.jpg";
import AboutSection from "../../components/sections/AboutSection";
import AchievementsSection from "../../components/sections/AchievementsSection";
import AboutOurMsgs from "./sections/AboutOurMsgs";

const AboutUS = () => {
  return (
    <article>
      <PageBanner
        title="من نحن"
        subTitle="نطوّر مشاريع ترتقي بجودة الحياة في جدة"
        description="نعمل بشغف واحترافية لبناء مشروعات عقارية مستدامة، ونقدّم حلولًا متكاملة تثق بها الشركات والأفراد على حد سواء."
        image={image}
      />

      <AchievementsSection center />

      <AboutSection />

      <AboutOurMsgs />
    </article>
  );
};

export default AboutUS;
