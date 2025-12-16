import PageBanner from "../../components/common/PageBanner";
import image from "../../assets/images/project-img.jpg";
import logo from "../../assets/images/logo/logo-fav.png";
import AboutSection from "../../components/sections/AboutSection";
import AchievementsBox from "../../components/sections/AchievementsBox";

const list = [
  {
    id: 1,
    title: "قيمنا",
    description:
      "تحويل الأفكار والرؤى العقارية إلى مشاريع واقعية ناجحة، عبر استراتيجيات تسويقية فعّالة، إدارة متكاملة، وخبرة تمتد لأكثر من 20 عامًا، بما يحقق نموًا مستدامًا ونجاحًا ملموسًا لكل استثمار.",
  },
  {
    id: 2,
    title: "رؤيتنا",
    description:
      "أن نكون الخيار الأول في السوق العقاري في جدة والمملكة، من خلال مشروعات مبتكرة ومستدامة تترك أثرًا إيجابيًا وتلهم الثقة في كل شريك وعملاءنا.",
  },
  {
    id: 3,
    title: "رسالتنا",
    description:
      "تقديم خدمات تطوير وتسويق عقاري متكاملة تضمن تحقيق أعلى قيمة لمشروعات عملائنا، مع الالتزام بالاحترافية والجودة في كل مرحلة من مراحل التخطيط والتنفيذ.",
  },
];

const AboutUS = () => {
  return (
    <article>
      <PageBanner
        title="من نحن"
        subTitle="نطوّر مشاريع ترتقي بجودة الحياة في جدة"
        description="نعمل بشغف واحترافية لبناء مشروعات عقارية مستدامة، ونقدّم حلولًا متكاملة تثق بها الشركات والأفراد على حد سواء."
        image={image}
      />

      <section className="sectionPadding container">
        <hgroup className="space-y-4 mb-4 lg:mb-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold capitalize">
            انجازاتنا في ارقام
          </h2>
          <p className="text-sm">
            ارقامنا ليست مجرد ارقام, بل هي قصص نجاح ملهمة للذين امنو باحلامهم و
            جعلوها حقيقة
          </p>
        </hgroup>

        <AchievementsBox />
      </section>

      <AboutSection />

      <section className="sectionPadding container flex flex-wrap gap-4">
        {list.map((item) => (
          <div key={item.id} className="p-4 rounded-xl bg-myDark-2 border border-myGold space-y-2 flex-1 min-w-xs">
            <h3 className="flex items-center gap-2 font-bold text-lg">
              <img src={logo} alt="logo" className="w-3" />
              {item.title}
            </h3>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </section>
    </article>
  );
};

export default AboutUS;
