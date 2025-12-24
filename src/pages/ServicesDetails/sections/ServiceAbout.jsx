import { Link } from "react-router-dom";
import youtubeIcon from "../../../assets/icons/youtube-icon.png";
import SectionTitle from "../../../components/common/SectionTitle";
import { CgPhone } from "react-icons/cg";
import { useTranslation } from "react-i18next";

const ServiceAbout = ({ data }) => {
  const { t } = useTranslation();

  return (
    <section className="container sectionPadding grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
      <div>
        <SectionTitle
          wide
          description={data?.name}
          title={t("serviceAbout.title")}
          subtitle={data?.description}
          html
        />

        <Link to="/contact" className="mainBtn w-fit mt-4">
          {t("serviceAbout.contact")}
          <CgPhone />
        </Link>
      </div>

      <div className="min-h-[300px] max-h-[400px] bg-myDark-2 object-cover overflow-hidden rounded-4xl relative">
        {data?.video_link && (
          <Link
            to={data?.video_link}
            target="_blank"
            className="absolute inset-0 z-20 flex items-center justify-center rounded-4xl"
          >
            <img src={youtubeIcon} alt="youtube" className="w-12" />
          </Link>
        )}

        <img
          src={data?.video_image}
          alt="about-service"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default ServiceAbout;
