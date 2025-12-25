import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const BlogCard = ({ item }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <div className="w-full h-[300px] overflow-hidden rounded-2xl">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="font-bold text-myGold text-lg line-clamp-2">
          {item.title}
        </h3>

        <div
          className="line-clamp-3"
          dangerouslySetInnerHTML={{ __html: item.description }}
        />
      </div>

      <Link to={`/blog-details/${item.id}`} className="mainBtn mt-4">
        {t("more")}
      </Link>
    </div>
  );
};

export default BlogCard;
