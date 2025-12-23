import { Link } from "react-router-dom";

const PartnersCard = ({ item }) => {
  return (
    <Link
      to={item.link}
      target="_blank"
      className="border border-white shadow-lg p-4 flex flex-col items-center gap-4 h-40 w-full"
    >
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={item.logo}
          alt={item.id}
          className="w-full h-full object-contain"
        />
      </div>
    </Link>
  );
};

export default PartnersCard;
