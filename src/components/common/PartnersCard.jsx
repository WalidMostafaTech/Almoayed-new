const PartnersCard = ({ item }) => {
  return (
    <div className="rounded-xl border border-myGold shadow-lg shadow-myGold/50 p-4 flex flex-col items-center gap-4 h-40">
      <img
        src={item.icon}
        alt={item.id}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default PartnersCard;
