import SectionTitle from "../../../components/common/SectionTitle";
import AchievementsBox from "../../../components/sections/AchievementsBox";

const OurAchievements = () => {
  return (
    <section className="sectionPadding container">
      <SectionTitle
        title="إنجازاتنا في أرقام"
        subtitle="أرقامنا ليست مجرد أرقام, بل هي قصص نجاح ملهمة للذين آمنو بأحلامهم و جعلوها حقيقة"
        wide
      />

      <div className="mt-8">
        <AchievementsBox />
      </div>
    </section>
  );
};

export default OurAchievements;
