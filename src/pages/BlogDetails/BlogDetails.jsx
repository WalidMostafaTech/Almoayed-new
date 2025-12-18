import PageBanner from "../../components/cards/PageBanner";
import image from "../../assets/images/project-img.jpg";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { RxCopy } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

const BlogDetails = () => {
  return (
    <article>
      <PageBanner
        title="المدونة"
        subTitle="إتجاهات التطوير العقارى فى جدة"
        description="نقدّم لك محتوى متخصص يساعدك على فهم السوق، متابعة الاتجاهات الجديدة، واتخاذ قرارات عقارية أكثر وعيًا وثقة."
        image={image}
      />

      <section className="sectionPadding px-4 w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
        {/* ===== Content ===== */}
        <div className="col-span-1 lg:col-span-5 w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] max-w-lg mx-auto flex flex-col gap-4">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />

          <div className="flex items-center justify-around gap-2 bg-white rounded-xl p-4 text-myGold">
            <p>مشاركة المقال:</p>

            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full flex items-center justify-center border cursor-pointer">
                <FaLinkedinIn />
              </span>
              <span className="w-8 h-8 rounded-full flex items-center justify-center border cursor-pointer">
                <FaFacebookF />
              </span>
              <span className="w-8 h-8 rounded-full flex items-center justify-center border cursor-pointer">
                <FaInstagram />
              </span>
              <span className="w-8 h-8 rounded-full flex items-center justify-center border cursor-pointer">
                <FaXTwitter />
              </span>
              <span className="w-8 h-8 rounded-full flex items-center justify-center border cursor-pointer">
                <RxCopy />
              </span>
            </div>
          </div>
        </div>

        {/* ===== Image ===== */}
        <div className="col-span-1 lg:col-span-7 space-y-4">
          <h2 className="text-2xl lg:text-3xl font-bold">
            إتجاهات التطوير العقارى فى جدة
          </h2>

          <p className="py-2 px-4 rounded-md bg-white text-black flex items-center gap-2 w-fit text-sm">
            <FaRegCalendarAlt className="text-yellow-500 text-lg" />
            تاريخ النشر : 12 يوليو 2023
          </p>

          <p>
            جدة لم تعد مجرد بوابة الحرمين، بل تحولت إلى واحدة من أكثر المدن
            العربية جذباً للاستثمار العقاري عالمياً. بدعم رؤية 2030 ومشاريع
            عملاقة مثل «جدة الوسط»، «جدة داون تاون»، والواجهة البحرية الجديدة،
            تشهد المدينة طفرة غير مسبوقة في التطوير. إليك أهم 8 اتجاهات ستحكم
            سوق العقارات في جدة خلال السنوات الخمس القادمة. 1. المشاريع متعددة
            الاستخدامات أصبحت المعيار لم يعد المستثمر أو المشتري يقبل مشروعاً
            سكنياً فقط أو تجارياً فقط. الطلب الآن على المجمعات التي تجمع السكن
            الفاخر والمكاتب والمحلات والترفيه تحت سقف واحد. أبرز الأمثلة: جدة
            داون تاون The Headquarters Business Park إعادة تطوير حي الحمراء 2.
            الأحياء الذكية والمستدامة تتصدر المشهد شهادات LEED وMOSTADAM أصبحت
            شرطاً أساسياً في كل مشروع جديد. الأنظمة الذكية لإدارة المباني BMS،
            إعادة تدوير المياه، الطاقة الشمسية، والمساحات الخضراء لم تعد رفاهية،
            بل ضرورة تسويقية وعملية. أحياء مثل «النسيم» و«اللؤلؤة» و«أبراج
            المارينا» تقود هذا الاتجاه. 3. شمال جدة: عاصمة الفخامة الجديدة أحياء
            أبحر الشمالية، اللؤلؤة، المرجان، والنور تشهد طفرة في الفيلات والشقق
            المطلة على البحر. متوسط سعر المتر المربع في المشاريع الفاخرة وصل إلى
            18,000 – 28,000 ريال بنهاية 2025، مع توقعات بارتفاع 30-40% بحلول
            2030.
          </p>
        </div>
      </section>
    </article>
  );
};

export default BlogDetails;
