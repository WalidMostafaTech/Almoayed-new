import logo from "../../../assets/images/logo/logo-fav.png";

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

const AboutOurMsgs = () => {
  return (
    <section className="sectionPadding container flex flex-wrap gap-4">
      {list.map((item) => (
        <div
          key={item.id}
          className="p-4 rounded-xl bg-myDark-2 border border-myGold space-y-2 flex-1 min-w-[200px]"
        >
          <h3 className="flex items-center gap-2 font-bold text-xl">
            <img src={logo} alt="logo" className="w-4" />
            {item.title}
          </h3>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default AboutOurMsgs;
