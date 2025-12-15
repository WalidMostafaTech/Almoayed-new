import AchievementsBox from "../../../components/common/AchievementsBox";
import SectionTitle from "../../../components/common/SectionTitle";

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
