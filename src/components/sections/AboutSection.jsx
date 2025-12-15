import img from "../../assets/images/project-img.jpg";
import SectionTitle from "../common/SectionTitle";

const AboutSection = () => {
  return (
    <section className="sectionPadding container grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8">
      <div className="w-full h-[300px] md:h-[400px] overflow-hidden relative">
        <div className="absolute h-full w-[80%] top-0 start-0 bg-myGold rounded-4xl" />
        <img
          src={img}
          alt="img"
          className="w-[90%] h-[90%] object-cover absolute top-1/2 -translate-y-1/2 end-0 z-10 rounded-4xl border-4 border-white"
        />
      </div>

      <div>
        <SectionTitle
          description="من نحن"
          title="رؤية هندسية تصنع الفارق"
          subtitle={
            "خبرة أكثر من 20 عامًا في تطوير وتسويق العقارات بجدة والمملكة  شركة المؤيد هي شريكك الاستراتيجي في عالم العقارات، حيث نجمع بين الخبرة الطويلة والرؤية المستقبلية لنقدم حلولًا متكاملة لكل مشروع عقاري. منذ تأسيسنا، ونحن نعمل على تحويل الأفكار والرؤى العقارية إلى مشاريع واقعية تواكب أحدث معايير الجودة والتصميم، مع الالتزام بأعلى معايير الاحترافية في التطوير والتسويق. نقدم استراتيجيات تسويقية مبتكرة تصل بمشروعاتك إلى العملاء المستهدفين بكفاءة، مع إدارة متكاملة لكل مراحل المشروع من التخطيط والتصميم إلى التنفيذ والتسويق. في المؤيد، نؤمن بأن كل مشروع هو فرصة لصناعة قيمة حقيقية، لذا نحرص على تقديم خبراتنا الهندسية والتسويقية لضمان نجاح كل استثمار وتحقيق رؤية عملائنا بأفضل صورة ممكنة."
          }
        />
      </div>
    </section>
  );
};

export default AboutSection;
