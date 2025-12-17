import { Link } from "react-router-dom";

const BlogCard = ({ item }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full h-[300px] overflow-hidden rounded-2xl">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="font-bold text-myGold text-lg">{item.title}</h3>

      <p className="text-sm">{item.description}</p>

      <Link to={`/blog-details/${item.id}`} className="mainBtn mt-2">
        المزيد
      </Link>
    </div>
  );
};

export default BlogCard;
