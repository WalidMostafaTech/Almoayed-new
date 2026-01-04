import { Link } from "react-router-dom";
import youtubeIcon from "../../../assets/icons/youtube-icon.png";
import SectionTitle from "../../../components/common/SectionTitle";
import { CgPhone } from "react-icons/cg";
import { useTranslation } from "react-i18next";

const ServiceAbout = ({ data }) => {
  const { t } = useTranslation();

  return (
    <section className="container sectionPadding flex flex-col lg:flex-row gap-4 lg:gap-16">
      <div className="flex-1">
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

      {data?.video_image && (
        <div className="min-h-[300px] max-h-[400px] w-full lg:w-[50%] bg-myDark-2 object-cover overflow-hidden rounded-4xl relative">
          {data?.video_link && (
            <Link
              to={data?.video_link}
              target="_blank"
              className="absolute inset-0 z-20 flex items-center justify-center rounded-4xl bg-black/50"
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
      )}
    </section>
  );
};

export default ServiceAbout;
