import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const ServicesCard = ({ item }) => {
  return (
    <div className="relative w-full h-[400px] mb-8">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover rounded-3xl"
      />

      <div className="absolute w-[90%] left-1/2 -translate-x-1/2 -bottom-4 bg-white text-black rounded-xl p-4">
        <h2 className="font-bold">{item.title}</h2>

        <Link
          to={`/service-details/${item.id}`}
          className="py-2 px-4 rounded-full border text-gray-400 hover:text-myGold shadow-md hover:shadow-lg hover:shadow-myGold/50 duration-300 group block mt-2 ms-auto w-fit"
        >
          <GoArrowLeft className="group-hover:rotate-45 duration-300 text-2xl ltr:rotate-180 ltr:group-hover:rotate-135" />
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
