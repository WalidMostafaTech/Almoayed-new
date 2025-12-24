import PageBanner from "../../components/cards/PageBanner";
import BlogCard from "../../components/cards/BlogCard";
import { getBlogs } from "../../services/pagesServices";
import { useQuery } from "@tanstack/react-query";
import SkeletonPageBanner from "../../components/Loading/SkeletonLoading/SkeletonPageBanner";
import SkeletonCards from "../../components/Loading/SkeletonLoading/SkeletonCards";
import { useTranslation } from "react-i18next";
import SeoManager from "../../utils/SeoManager";
import EmptyData from "../../components/sections/EmptyData";

const Blog = () => {
  const { t } = useTranslation();

  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  if (isLoading)
    return (
      <article>
        <SkeletonPageBanner />
        <SkeletonCards cardNum={4} size="lg" />
      </article>
    );

  return (
    <>
      <SeoManager
        title={blogs?.extra?.seo?.meta_title}
        description={blogs?.extra?.seo?.meta_description}
        keywords={blogs?.extra?.seo?.keywords}
      />

      <article>
        <PageBanner
          title={t("blog")}
          subTitle={blogs?.extra?.blog_banner?.title}
          description={blogs?.extra?.blog_banner?.description}
          image={blogs?.extra?.blog_banner?.blog_image}
        />

        {blogs?.items.length > 0 ? (
          <section className="sectionPadding container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {blogs?.items.map((item) => (
              <BlogCard key={item.id} item={item} />
            ))}
          </section>
        ) : (
          <EmptyData />
        )}
      </article>
    </>
  );
};

export default Blog;
