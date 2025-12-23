import youtubeIcon from "../../assets/icons/youtube-icon.png";
import SectionTitle from "../common/SectionTitle";
import { Link } from "react-router-dom";
import SkeletonDetailsSection from "../Loading/SkeletonLoading/SkeletonDetailsSection";
import { useTranslation } from "react-i18next";

const AboutSection = ({ data, loading }) => {
  const { t } = useTranslation();

  if (loading) return <SkeletonDetailsSection />;

  return (
    <section className="sectionPadding container grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-16">
      <div className="w-full h-[300px] md:h-[400px] overflow-hidden relative">
        <div className="absolute h-full w-[80%] top-0 start-0 bg-myGold rounded-4xl" />

        <div className="w-[90%] h-[90%] bg-myDark-2 overflow-hidden absolute top-1/2 -translate-y-1/2 end-0 z-10 rounded-4xl border-4 border-white">
          {data?.video_link && (
            <Link
              to={data?.video_link}
              target="_blanc"
              className="absolute inset-0 z-20 flex items-center justify-center"
            >
              <img src={youtubeIcon} alt="youtube" className="w-12" />
            </Link>
          )}

          <img
            src={data?.video_image}
            alt="about-img"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div>
        <SectionTitle
          wide
          description={t("about")}
          title={data?.title}
          subtitle={data?.description}
        />
      </div>
    </section>
  );
};

export default AboutSection;
