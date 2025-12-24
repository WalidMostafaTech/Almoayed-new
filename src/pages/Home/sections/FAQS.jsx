import { useState } from "react";
import SectionTitle from "../../../components/common/SectionTitle";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { getFaqs } from "../../../services/homeServices";
import SkeletonDetailsSection from "../../../components/Loading/SkeletonLoading/SkeletonDetailsSection";
import { useTranslation } from "react-i18next";

const FAQS = () => {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const { data: { faqs = [], faq_image = "" } = {}, isLoading } = useQuery({
    queryKey: ["faqs"],
    queryFn: getFaqs,
  });

  if (isLoading)
    return (
      <article>
        <SkeletonDetailsSection />
      </article>
    );

  if (!faqs?.length) return null;

  return (
    <section className="sectionPadding container">
      <SectionTitle
        description={t("FAQS.description")}
        title={t("FAQS.title")}
        wide
      />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-8 gap-8 items-start">
        {/* ===== Image ===== */}
        <div className="relative hidden lg:block lg:col-span-2 xl:col-span-3 h-[400px]">
          <img
            src={faq_image}
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
                  {index + 1}. {item.question}
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
                    ? "max-h-52 py-4 overflow-y-auto"
                    : "max-h-0 overflow-hidden"
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQS;
