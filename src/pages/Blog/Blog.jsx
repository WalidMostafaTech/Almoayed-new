import image from "../../assets/images/project-img.jpg";
import PageBanner from "../../components/cards/PageBanner";
import BlogCard from "../../components/cards/BlogCard";

const list = [
  {
    id: 1,
    title: "كيف تختار المشروع العقاري المناسب؟",
    description:
      "تعرف على أهم العوامل التي تساعدك في اتخاذ قرار استثماري ناجح وذكي.",
    image: image,
  },
  {
    id: 2,
    title: "كيف تختار المشروع العقاري المناسب؟",
    description:
      "تعرف على أهم العوامل التي تساعدك في اتخاذ قرار استثماري ناجح وذكي.",
    image: image,
  },
  {
    id: 3,
    title: "كيف تختار المشروع العقاري المناسب؟",
    description:
      "تعرف على أهم العوامل التي تساعدك في اتخاذ قرار استثماري ناجح وذكي.",
    image: image,
  },
  {
    id: 4,
    title: "كيف تختار المشروع العقاري المناسب؟",
    description:
      "تعرف على أهم العوامل التي تساعدك في اتخاذ قرار استثماري ناجح وذكي.",
    image: image,
  },
  {
    id: 5,
    title: "كيف تختار المشروع العقاري المناسب؟",
    description:
      "تعرف على أهم العوامل التي تساعدك في اتخاذ قرار استثماري ناجح وذكي.",
    image: image,
  },
];

const Blog = () => {
  return (
    <article>
      <PageBanner
        title="المدونة"
        subTitle="اكتشف أحدث الأخبار والرؤى في عالم التطوير العقاري."
        description="نقدّم لك محتوى متخصص يساعدك على فهم السوق، متابعة الاتجاهات الجديدة، واتخاذ قرارات عقارية أكثر وعيًا وثقة."
        image={image}
      />

      <section className="sectionPadding container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {list.map((item) => (
          <BlogCard key={item.id} item={item} />
        ))}
      </section>
    </article>
  );
};

export default Blog;
