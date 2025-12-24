import { useSelector } from "react-redux";
import { FaWhatsapp } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { useTranslation } from "react-i18next";

const FixedSection = () => {
  const { setting } = useSelector((state) => state.setting);
  const { t } = useTranslation();

  const list = [
    {
      id: 1,
      title: t("phone"),
      link: `tel:${(setting?.contact?.phone || "").replace(/\s/g, "")}`,
      icon: <MdLocalPhone />,
      color: "#215274",
    },
    {
      id: 2,
      title: t("whatsapp"),
      link: `https://wa.me/${(setting?.social?.whatsapp || "").replace(
        /\s/g,
        ""
      )}`,
      icon: <FaWhatsapp />,
      color: "#25D366",
    },
  ];

  return (
    <section className="fixed end-0 bottom-1/6 z-40">
      <div className="flex flex-col items-end gap-2">
        {list.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            style={{ backgroundColor: `${item.color}` }}
            className="p-1 ps-2 shadow-md shadow-myGold/20 rounded-s-full flex items-center gap-1 group"
          >
            <span className="text-3xl">{item.icon}</span>

            <p className="lg:text-base text-center font-semibold font-sans capitalize w-0 group-hover:w-20 transition-all ease-in-out duration-500 overflow-hidden">
              {item.title}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FixedSection;
