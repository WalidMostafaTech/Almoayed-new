import icon from "../../assets/icons/google-play-icon.png";
import { renderStars } from "../../utils/renderStars";

const TestimonialsCard = ({ item }) => {
  return (
    <div className="text-xs">
      <div className="bg-white p-4 rounded-xl space-y-4">
        <div className="flex items-center gap-2">
          <img src={icon} alt="" className="w-5" />
          <p className="text-xs text-stone-500">
            تم النشر في: <span className="font-bold text-myGold">جوجل</span>
          </p>
        </div>

        <p className="text-black leading-relaxed">{item.content}</p>

        <div className="flex items-center justify-end gap-1" dir="ltr">
          {renderStars(item.rate)}
        </div>
      </div>

      <div className="flex items-center gap-2 py-2 px-4 relative">
        <div
          className="w-8 h-8 bg-white absolute -top-4 start-0"
          style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
        />

        <img
          src={item.image}
          alt={item.name}
          className="object-cover rounded-full w-8 h-8"
        />

        <div>
          <h2 className="text-sm font-bold">{item.name}</h2>
          <p className="text-xs">{item.date}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
