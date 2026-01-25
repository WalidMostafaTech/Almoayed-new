import SectionTitle from "../common/SectionTitle";
import { useEffect, useRef, useState, useMemo } from "react";
import SkeletonPostSection from "../Loading/SkeletonLoading/SkeletonPostSection";
import { useTranslation } from "react-i18next";

const AchievementsSection = ({ data, center = false, loading }) => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  // دالة لتحويل القيمة لرقم
  const parseValue = (value) => {
    if (typeof value === "number") return value;
    if (typeof value === "string") {
      const parsed = parseInt(value.replace(/[^\d]/g, ""), 10);
      return isNaN(parsed) ? 0 : parsed;
    }
    return 0;
  };

  // إنشاء items باستخدام useMemo
  const items = useMemo(() => {
    if (!data) return [];

    return [
      {
        id: 1,
        value: parseValue(data?.projects_count),
        label: t("AchievementsSection.projects"),
      },
      {
        id: 2,
        value: parseValue(data?.square_meters),
        label: t("AchievementsSection.squareMeters"),
      },
      {
        id: 3,
        value: parseValue(data?.years_experience),
        label: t("AchievementsSection.yearsExperience"),
      },
      {
        id: 4,
        value: parseValue(data?.residential_units),
        label: t("AchievementsSection.residentialUnits"),
      },
    ];
  }, [data, t]);

  // Intersection Observer Effect - بيشتغل في كل مرة
  useEffect(() => {
    // إعادة تعيين الحالة
    setStartCount(false);
    setCounts([0, 0, 0, 0]);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        } else {
          // إعادة تعيين لما يخرج من الشاشة
          setStartCount(false);
          setCounts([0, 0, 0, 0]);
        }
      },
      { threshold: 0.4 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [data]); // إضافة data كـ dependency

  // عد الأرقام
  useEffect(() => {
    if (!startCount || items.length === 0) return;

    const intervals = items.map((item, index) => {
      let current = 0;
      const increment = Math.ceil(item.value / 50);

      return setInterval(() => {
        current += increment;

        if (current >= item.value) {
          current = item.value;
          clearInterval(intervals[index]);
        }

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = current;
          return updated;
        });
      }, 30);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [startCount, items]);

  const getNumberSize = (value) => {
    const length = value.toString().length;

    if (length <= 4) return "text-5xl";
    if (length === 5) return "text-4xl sm:text-5xl";
    if (length >= 6) return "text-3xl sm:text-5xl";
    if (length >= 7) return "text-2xl sm:text-4xl";
    if (length >= 8) return "text-xl sm:text-3xl";

    return "text-2xl sm:text-4xl";
  };

  // Early returns بعد كل الـ Hooks
  if (loading) return <SkeletonPostSection center={center} />;
  if (!data) return null;

  return (
    <section className="sectionPadding container">
      <SectionTitle
        title={t("AchievementsSection.title")}
        subtitle={t("AchievementsSection.subtitle")}
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
                flex flex-col items-center justify-between gap-2 text-center py-8 border-myGold
                ${index % 2 === 0 ? "border-e" : ""}
                ${index < 2 ? "border-b" : ""}
              `}
            >
              <span
                className={`font-bold text-myGold transition-all duration-300 ${getNumberSize(
                  counts[index],
                )}`}
              >
                +{counts[index]}
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
