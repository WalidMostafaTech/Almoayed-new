import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  const { t } = useTranslation();
  return (
    <div className="rounded-xl border border-myGold shadow-md shadow-myGold/50 p-4 flex flex-col items-center gap-4 bg-myDark-2">
      <img
        src={item.icon}
        alt={item.status}
        className="w-full h-32 object-contain"
      />

      <h2 className="text-lg font-bold text-myGold">{item.status}</h2>

      <Link to={`/project-details/${item.id}`} className="mainBtn w-full">
        {t("more")}
      </Link>
    </div>
  );
};

export default ProductCard;
