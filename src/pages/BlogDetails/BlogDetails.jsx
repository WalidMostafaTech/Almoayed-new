import PageBanner from "../../components/cards/PageBanner";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { RxCopy } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBlogDetailsPage } from "../../services/pagesServices";
import SkeletonPageBanner from "../../components/Loading/SkeletonLoading/SkeletonPageBanner";
import SkeletonDetailsSection from "../../components/Loading/SkeletonLoading/SkeletonDetailsSection";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";

const BlogDetails = () => {
  const { id } = useParams();

  const { t } = useTranslation();

  const { data: blogDetails = [], isLoading } = useQuery({
    queryKey: ["blogDetails", id],
    queryFn: () => getBlogDetailsPage(id),
  });
  const blog = blogDetails?.blog;

  if (isLoading)
    return (
      <article>
        <SkeletonPageBanner />
        <SkeletonDetailsSection />
      </article>
    );

  return (
    <article>
      <PageBanner
        title={t("blog")}
        subTitle={blogDetails?.blog_banner?.title}
        description={blogDetails?.blog_banner?.description}
        image={blogDetails?.blog_banner?.blog_image}
      />

      <section className="sectionPadding px-4 w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
        {/* ===== Content ===== */}
        <div className="col-span-1 lg:col-span-5 w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] max-h-[700px] max-w-lg mx-auto flex flex-col gap-4">
          <img
            src={blog?.image}
            alt={blog?.title}
            className="w-full h-full object-cover rounded-xl"
          />

          <div className="flex items-center justify-around gap-2 bg-white rounded-xl p-4 text-myGold">
            <p>مشاركة المقال:</p>

            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full flex items-center justify-center border cursor-pointer">
                <FaLinkedinIn />
              </span>
              <span className="w-8 h-8 rounded-full flex items-center justify-center border cursor-pointer">
                <FaFacebookF />
              </span>
              <span className="w-8 h-8 rounded-full flex items-center justify-center border cursor-pointer">
                <FaInstagram />
              </span>
              <span className="w-8 h-8 rounded-full flex items-center justify-center border cursor-pointer">
                <FaXTwitter />
              </span>
              <span className="w-8 h-8 rounded-full flex items-center justify-center border cursor-pointer">
                <RxCopy />
              </span>
            </div>
          </div>
        </div>

        {/* ===== Image ===== */}
        <div className="col-span-1 lg:col-span-7 space-y-4">
          <h2 className="text-2xl lg:text-3xl font-bold">{blog?.title}</h2>

          <p className="py-2 px-4 rounded-md bg-white text-black flex items-center gap-2 w-fit text-sm">
            <FaRegCalendarAlt className="text-yellow-500 text-lg" />
            <p>تاريخ النشر :</p>
            {dayjs(blog?.created_at).format("DD-MM-YYYY")}
          </p>

          <div dangerouslySetInnerHTML={{ __html: blog?.description }} />
        </div>
      </section>
    </article>
  );
};

export default BlogDetails;
