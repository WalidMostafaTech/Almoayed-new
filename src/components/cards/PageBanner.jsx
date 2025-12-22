import logo from "../../assets/images/logo/logo-fav.png";

const PageBanner = ({ title, subTitle, description, image }) => {
  return (
    <section className="p-4 pt-0 lg:pt-4">
      <div className="overflow-hidden rounded-3xl lg:rounded-[50px] shadow-lg shadow-myGold/50 border border-myGold p-4 lg:p-8">
        <div
          className={`w-full min-h-[250px] lg:min-h-[300px] flex flex-col items-center justify-center text-center gap-2 lg:gap-4 rounded-2xl lg:rounded-[40px] p-4`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {title && (
            <p className="text-sm flex items-center gap-2">
              <img src={logo} alt="logo" className="w-4" />
              {title}
            </p>
          )}
          {subTitle && (
            <h2 className="text-2xl lg:text-3xl font-bold">{subTitle}</h2>
          )}
          {description && <h4 className="text-lg max-w-3xl">{description}</h4>}
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
