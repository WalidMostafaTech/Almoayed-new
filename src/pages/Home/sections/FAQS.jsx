import { useState } from "react";
import SectionTitle from "../../../components/common/SectionTitle";
import img from "../../../assets/images/project-img.jpg";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const faqs = [
  {
    q: "ما الذي يميز شركة المؤيد العقارية؟",
    a: "تمتلك شركة المؤيد خبرة تتجاوز 20 عامًا في التطوير والتسويق العقاري، مع تقديم حلول مبتكرة وخدمات متكاملة تهدف لتحقيق أفضل العوائد لعملائنا في كل مشروع.",
  },
  {
    q: "هل تقدم الشركة خدمات تطوير المشاريع أم التسويق فقط؟",
    a: "نقدم خدمات متكاملة تشمل تطوير المشاريع العقارية، التسويق، وإدارة المبيعات لضمان نجاح المشروع من جميع الجوانب.",
  },
  {
    q: "كيف يمكنني بدء التعاون مع شركة المؤيد؟",
    a: "يمكنك التواصل معنا عبر الموقع أو التطبيق، وسيقوم فريقنا المختص بالتواصل معك لدراسة احتياجاتك وتقديم الحلول المناسبة.",
  },
  {
    q: "هل تقدمون تقارير دورية عن تقدم الأعمال؟",
    a: "نعم، نوفر تقارير دورية وشفافة عن مراحل التنفيذ والتسويق لضمان اطلاع المستثمرين على كل المستجدات.",
  },
  {
    q: "هل خدماتكم تناسب المستثمرين والأفراد على حد سواء؟",
    a: "بالتأكيد، نقدم حلولًا مخصصة تناسب المستثمرين الكبار وكذلك الأفراد الباحثين عن فرص عقارية مميزة.",
  },
  {
    q: "هل يمكن زيارة المشاريع القائمة أو النموذجية؟",
    a: "نعم، يمكن ترتيب زيارات ميدانية للمشاريع القائمة أو النموذجية بعد التنسيق المسبق مع فريقنا.",
  },
  {
    q: "ما نوع العقارات التي تعمل عليها الشركة؟",
    a: "نعمل على تطوير وتسويق المشاريع السكنية، التجارية، والإدارية وفق أعلى المعايير.",
  },
];

const FAQS = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="sectionPadding container">
      <SectionTitle
        description="الأسئلة الشائعة"
        title="إجابات على اهم الاسئلة الشائعة"
        wide
      />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-8 gap-8 items-start">
        {/* ===== Image ===== */}
        <div className="relative hidden lg:block lg:col-span-2 xl:col-span-3 h-[400px]">
          <img
            src={img}
            alt="faq"
            className="w-full h-full object-cover rounded-2xl rounded-es-[70px] rounded-se-[70px]"
          />
        </div>

        {/* ===== Accordion ===== */}
        <div className="space-y-3 lg:col-span-3 xl:col-span-5">
          {faqs.map((item, index) => (
            <div key={index} className="bg-myDark-2 rounded-xl overflow-hidden">
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between px-5 py-4 cursor-pointer"
              >
                <span className="font-medium flex-1 text-start">
                  {index + 1}. {item.q}
                </span>

                <MdKeyboardDoubleArrowDown
                  className={`text-2xl transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`px-5 bg-white text-black text-sm leading-relaxed transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-52 py-4"
                    : "max-h-0 overflow-hidden"
                }`}
              >
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQS;
