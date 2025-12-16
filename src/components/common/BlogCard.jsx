const BlogCard = ({ item }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full h-[300px] overflow-hidden rounded-3xl">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="font-bold text-myGold">{item.title}</h3>

      <p className="text-xs">{item.description}</p>
    </div>
  );
};

export default BlogCard;
