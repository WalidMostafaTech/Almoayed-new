import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  const { t } = useTranslation();
  return (
    <div className="rounded-xl border border-myGold shadow-md shadow-myGold/50 p-4 flex flex-col items-center bg-myDark-2">
      <div className="flex flex-col items-center gap-4">
        <div className="w-full h-32 overflow-hidden">
          <img
            src={item.logo}
            alt={item.status}
            className="w-full h-full object-contain"
          />
        </div>

        <h2 className="text-lg font-bold text-myGold min-h-8">{item.status}</h2>
      </div>

      <Link to={`/project-details/${item.id}`} className="mainBtn w-full mt-4">
        {t("more")}
      </Link>
    </div>
  );
};

export default ProductCard;
