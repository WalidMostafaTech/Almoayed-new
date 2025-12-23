import logo from "../../../assets/images/logo/logo.png";
import mockupImg from "../../../assets/images/mocukup.png";
import appleIcon from "../../../assets/icons/apple-icon.png.png";
import googleIcon from "../../../assets/icons/google-play-icon.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DownloadAppBanner = () => {
  const { t } = useTranslation();

  return (
    <section className="sectionPadding container">
      <div
        className="relative overflow-hidden rounded-3xl flex items-end gap-10
        bg-[radial-gradient(circle_at_center,_#6b7077_0%,_#2f3338_80%)]"
      >
        <div className="flex-1 justify-center hidden lg:flex pt-4">
          <img
            src={mockupImg}
            alt={t("DownloadAppBanner.alt.mockup")}
            className="relative z-10 w-[300px]"
          />
        </div>

        <div className="flex-1 text-white space-y-4 text-center px-6 py-10 lg:px-12 lg:py-14 max-w-2xl mx-auto lg:mx-0">
          {/* Logo */}
          <img
            src={logo}
            alt="logo"
            className="w-36 mx-auto lg:ms-auto lg:me-0"
          />

          {/* Title */}
          <h2 className="text-2xl font-bold leading-snug">
            {t("DownloadAppBanner.title")}
          </h2>

          {/* Description */}
          <p className="text-white/80 leading-relaxed text-lg">
            {t("DownloadAppBanner.description")}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
            <Link
              to={"#"}
              target="_blank"
              className="flex items-center justify-center gap-3 bg-black text-white px-4 py-2 min-w-[200px] rounded-full"
            >
              <img
                src={appleIcon}
                alt={t("DownloadAppBanner.buttons.appStore.alt")}
                className="w-6"
              />
              <div className="leading-tight text-start">
                <span className="block text-[8px] uppercase opacity-80">
                  {t("DownloadAppBanner.buttons.appStore.topText")}
                </span>
                <span className="text-sm font-semibold">
                  {t("DownloadAppBanner.buttons.appStore.bottomText")}
                </span>
              </div>
            </Link>

            <Link
              to={"#"}
              target="_blank"
              className="flex items-center justify-center gap-3 bg-black text-white px-4 py-2 min-w-[200px] rounded-full"
            >
              <img
                src={googleIcon}
                alt={t("DownloadAppBanner.buttons.googlePlay.alt")}
                className="w-6"
              />
              <div className="leading-tight text-start">
                <span className="block text-[8px] uppercase opacity-80">
                  {t("DownloadAppBanner.buttons.googlePlay.topText")}
                </span>
                <span className="text-sm font-semibold">
                  {t("DownloadAppBanner.buttons.googlePlay.bottomText")}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppBanner;
