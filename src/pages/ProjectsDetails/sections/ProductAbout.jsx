import { Link } from "react-router-dom";
import SectionTitle from "../../../components/common/SectionTitle";
import { AiOutlineDownload } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const ProductAbout = ({ data }) => {
  const { t } = useTranslation();

  return (
    <section className="container sectionPadding">
      <div>
        <SectionTitle
          wide
          description={data?.name}
          title={t("productAbout.title")}
          subtitle={data?.description}
          html
        />

        <div className="flex flex-wrap gap-4 mt-4">
          <Link
            to={data?.general_profile_file}
            target="_blank"
            className="mainBtn"
          >
            {t("productAbout.generalProfile")}
            <AiOutlineDownload />
          </Link>

          <Link
            to={data?.residential_profile_file}
            target="_blank"
            className="mainBtn"
          >
            {t("productAbout.residentialProfile")}
            <AiOutlineDownload />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductAbout;
