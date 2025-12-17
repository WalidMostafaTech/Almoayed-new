import { useEffect, useRef, useState } from "react";

const AchievementsBox = () => {
  const items = [
    { id: 1, value: 150, label: "مشروع" },
    { id: 2, value: 100, label: "متر مربع أراضي مطورة" },
    { id: 3, value: 50, label: "عامًا من الخبرة" },
    { id: 4, value: 120, label: "وحدة سكنية" },
  ];

  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);
  const [counts, setCounts] = useState(items.map(() => 0));

  // مراقبة ظهور السكشن
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
    <div
      ref={sectionRef}
      className="rounded-xl border border-myGold shadow-lg shadow-myGold/50 p-4 bg-myDark-2"
    >
      <div className="grid grid-cols-2">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`
              flex flex-col items-center justify-center gap-2 py-8 border-myGold
              ${index % 2 === 0 ? "border-l" : ""}
              ${index < 2 ? "border-b" : ""}
            `}
          >
            <span className="text-4xl font-bold text-myGold">
              +{counts[index]}
            </span>
            <span className="text-sm text-center">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsBox;
