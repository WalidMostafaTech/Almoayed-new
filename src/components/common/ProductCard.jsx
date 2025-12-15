import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div className="rounded-xl border border-myGold shadow-lg shadow-myGold/50 p-4 flex flex-col items-center gap-4">
      <img
        src={item.icon}
        alt={item.status}
        className="w-full h-32 object-contain"
      />
      <h2 className="text-lg font-bold">{item.status}</h2>

      <Link to={item.link} className="mainBtn w-full">
        المزيد
      </Link>
    </div>
  );
};

export default ProductCard;
