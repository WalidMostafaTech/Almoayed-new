import { Link } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { FaLocationDot } from "react-icons/fa6";

const ProductAbout = ({ data }) => {
  const { t } = useTranslation();

  return (
    <section className="container sectionPadding">
      <div className="space-y-4">
        {data?.name && <p className="text-myGold">{data?.name}</p>}

        <h2 className="text-3xl lg:text-4xl font-bold capitalize">
          {t("productAbout.title")}
        </h2>

        {data?.description && (
          <div dangerouslySetInnerHTML={{ __html: data?.description }} />
        )}

        <div className="flex flex-wrap gap-4 mt-4">
          {data?.general_profile_file && (
            <Link
              to={data?.general_profile_file}
              target="_blank"
              className="mainBtn"
            >
              {t("productAbout.generalProfile")}
              <AiOutlineDownload />
            </Link>
          )}

          {data?.residential_profile_file && (
            <Link
              to={data?.residential_profile_file}
              target="_blank"
              className="mainBtn"
            >
              {t("productAbout.residentialProfile")}
              <AiOutlineDownload />
            </Link>
          )}

          {data?.location_link && (
            <Link to={data?.location_link} target="_blank" className="mainBtn">
              {t("productAbout.location_link")}
              <FaLocationDot />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductAbout;
