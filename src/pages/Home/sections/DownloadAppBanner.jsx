import logo from "../../../assets/images/logo/logo.png";
import mockupImg from "../../../assets/images/mocukup.png";
import appleIcon from "../../../assets/icons/apple-icon.png.png";
import googleIcon from "../../../assets/icons/google-play-icon.png";

const DownloadAppBanner = () => {
  return (
    <section className="sectionPadding container">
      <div
        className="relative overflow-hidden rounded-3xl flex items-end gap-10
        bg-[radial-gradient(circle_at_center,_#6b7077_0%,_#2f3338_80%)]"
      >
        <div className="flex-1 justify-center hidden lg:flex pt-4">
          <img
            src={mockupImg}
            alt="App Mockup"
            className="relative z-10 w-[300px]"
          />
        </div>

        <div className="flex-1 text-white space-y-4 text-center px-6 py-10 lg:px-12 lg:py-14 max-w-2xl mx-auto lg:mx-0">
          {/* Logo */}
          <img src={logo} alt="logo" className="w-36 mx-auto lg:ms-auto lg:me-0" />

          {/* Title */}
          <h2 className="text-2xl font-bold leading-snug">
            حمل تطبيق المؤيد وتابع مشاريعـك بكل سهولة
          </h2>

          {/* Description */}
          <p className="text-white/80 leading-relaxed text-lg">
            اكتشف تجربة عقارية متكاملة من خلال تطبيق المؤيد وتابع أحدث مشاريعنا،
            خدماتنا، وجميع التفاصيل في مكان واحد، بسرعة وسهولة، مع تحديثات دقيقة
            في أي وقت ومن أي مكان.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
            <a
              href={"#"}
              dir="ltr"
              className="flex items-center justify-center gap-3 bg-black text-white px-4 py-2 min-w-[200px] rounded-full"
            >
              <img
                src={appleIcon}
                alt={"Download on App Store"}
                className="w-6"
              />
              <div className="leading-tight">
                <span className="block text-[8px] uppercase opacity-80">
                  Download on the
                </span>
                <span className="text-sm font-semibold">App Store</span>
              </div>
            </a>

            <a
              href={"#"}
              dir="ltr"
              className="flex items-center justify-center gap-3 bg-black text-white px-4 py-2 min-w-[200px] rounded-full"
            >
              <img src={googleIcon} alt="google play" className="w-6" />
              <div className="leading-tight text-start">
                <span className="block text-[8px] uppercase opacity-80">
                  Get it on
                </span>
                <span className="text-sm font-semibold">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppBanner;
