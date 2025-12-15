const AchievementsBox = () => {
  const items = [
    { id: 1, value: "+150", label: "مشروع" },
    { id: 2, value: "+100", label: "متر مربع أراضي مطورة" },
    { id: 3, value: "+50", label: "عامًا من الخبرة" },
    { id: 4, value: "+120", label: "وحدة سكنية" },
  ];

  return (
    <div className="rounded-xl border border-myGold shadow-lg shadow-myGold/50 p-4 bg-myDark-2">
      <div className="grid grid-cols-2">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`
              flex flex-col items-center justify-center gap-2 py-8
              ${index % 2 === 0 ? "border-l" : ""}
              ${index < 2 ? "border-b" : ""}
              border-myGold
            `}
          >
            <span className="text-3xl font-bold text-myGold">{item.value}</span>
            <span className="text-sm text-center">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsBox;
