import youtubeIcon from "../../assets/icons/youtube-icon.png";
import SectionTitle from "../common/SectionTitle";
import { Link } from "react-router-dom";

const AboutSection = ({ data }) => {
  return (
    <section className="sectionPadding container grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-16">
      <div className="w-full h-[300px] md:h-[400px] overflow-hidden relative">
        <div className="absolute h-full w-[80%] top-0 start-0 bg-myGold rounded-4xl" />

        <Link
          to={data?.video_link}
          target="_blanc"
          className="w-[90%] h-[90%] bg-myDark-2 overflow-hidden absolute top-1/2 -translate-y-1/2 end-0 z-10 rounded-4xl border-4 border-white"
        >
          <img
            src={youtubeIcon}
            alt="about"
            className="w-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <img
            src={data?.video_image}
            alt="img"
            className="w-full h-full object-cover"
          />
        </Link>
      </div>

      <div>
        <SectionTitle
          wide
          description="من نحن"
          title={data?.title}
          subtitle={data?.description}
        />
      </div>
    </section>
  );
};

export default AboutSection;
