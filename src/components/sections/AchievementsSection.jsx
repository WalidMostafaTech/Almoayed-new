import SectionTitle from "../common/SectionTitle";
import { useEffect, useRef, useState } from "react";

const AchievementsSection = ({ data, center = false }) => {
  const items = [
    { id: 1, value: data?.projects_count, label: "مشروع" },
    { id: 2, value: data?.square_meters, label: "متر مربع أراضي مطورة" },
    { id: 3, value: data?.years_experience, label: "عامًا من الخبرة" },
    { id: 4, value: data?.residential_units, label: "وحدة سكنية" },
  ];

  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);
  const [counts, setCounts] = useState(items.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // عد الأرقام
  useEffect(() => {
    if (!startCount) return;
    items.forEach((item, index) => {
      let current = 0;
      const increment = Math.ceil(item.value / 50);
      const interval = setInterval(() => {
        current += increment;
        if (current >= item.value) {
          current = item.value;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = current;
          return updated;
        });
      }, 30);
    });
  }, [startCount]);

  return (
    <section className="sectionPadding container">
      <SectionTitle
        title="إنجازاتنا في أرقام"
        subtitle="أرقامنا ليست مجرد أرقام, بل هي قصص نجاح ملهمة للذين آمنو بأحلامهم و جعلوها حقيقة"
        wide
        center={center}
      />

      <div
        ref={sectionRef}
        className="rounded-xl border border-myGold shadow-lg shadow-myGold/50 p-4 bg-myDark-2 mt-8"
      >
        <div className="grid grid-cols-2">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`
                flex flex-col items-center justify-center gap-2 text-center py-8 border-myGold
                ${index % 2 === 0 ? "border-e" : ""}
                ${index < 2 ? "border-b" : ""}
              `}
            >
              <span className="text-5xl font-bold text-myGold">
                {counts[index]}
              </span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
