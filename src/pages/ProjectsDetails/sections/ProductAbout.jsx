import { Link } from "react-router-dom";
import SectionTitle from "../../../components/common/SectionTitle";
import { AiOutlineDownload } from "react-icons/ai";

const ProductAbout = ({ data }) => {
  return (
    <section className="container sectionPadding">
      <div>
        <SectionTitle
          wide
          description={data?.name}
          title="نبذة عن المشروع"
          subtitle={data?.description}
          html
        />

        <div className="flex flex-wrap gap-4 mt-4">
          <Link
            to={data?.general_profile_file}
            target="_blank"
            className="mainBtn"
          >
            تحميل البروفايل العام <AiOutlineDownload />
          </Link>
          <Link
            to={data?.residential_profile_file}
            target="_blank"
            className="mainBtn"
          >
            تحميل البروفايل السكنى
            <AiOutlineDownload />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductAbout;
