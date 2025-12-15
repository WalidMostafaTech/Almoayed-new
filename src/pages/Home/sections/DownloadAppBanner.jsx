import logo from "../../../assets/images/logo/logo.png";
import mockupImg from "../../../assets/images/mocukup.png";
import appleIcon from "../../../assets/icons/apple-icon.png.png";
import googleIcon from "../../../assets/icons/google-play-icon.png";

const DownloadAppBanner = () => {
  return (
    <section className="sectionPadding container">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-l from-[#2f3338] to-[#5f646b] 
      px-6 py-10 lg:px-12 lg:py-14 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* ===== Left Content ===== */}
        <div className="flex-1 text-white space-y-6 text-center lg:text-right">
          {/* Logo */}
          <img src={logo} alt="logo" className="h-10 mx-auto lg:mx-0" />

          {/* Title */}
          <h2 className="text-2xl lg:text-3xl font-bold leading-snug">
            حمل تطبيق المؤيد وتابع مشاريعـك بكل سهولة
          </h2>

          {/* Description */}
          <p className="text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
            اكتشف تجربة عقارية متكاملة من خلال تطبيق المؤيد وتابع أحدث مشاريعنا،
            خدماتنا، وجميع التفاصيل في مكان واحد، بسرعة وسهولة، مع تحديثات دقيقة
            في أي وقت ومن أي مكان.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href={"#"}
              className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-full hover:scale-105 transition"
            >
              <img
                src={appleIcon}
                alt={"Download on App Store"}
                className="h-6"
              />
              <div className="leading-tight text-right">
                <span className="block text-[10px] uppercase opacity-80">
                  Download on the
                </span>
                <span className="text-sm font-semibold">App Store</span>
              </div>
            </a>

            <a
              href={"#"}
              className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-full hover:scale-105 transition"
            >
              <img src={googleIcon} alt="google play" className="h-6" />
              <div className="leading-tight text-right">
                <span className="block text-[10px] uppercase opacity-80">
                  Get it on
                </span>
                <span className="text-sm font-semibold">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        {/* ===== Right Image ===== */}
        <div className="relative flex-1 justify-center hidden lg:flex">
          {/* Circle */}
          <div className="absolute w-[260px] h-[260px] lg:w-[360px] lg:h-[360px] rounded-full bg-white/20"></div>

          <img
            src={mockupImg}
            alt="App Mockup"
            className="relative z-10 h-[300px] lg:h-[420px]"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadAppBanner;
