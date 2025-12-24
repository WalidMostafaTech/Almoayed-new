import logo from "../../../assets/images/logo/logo.png";
import googlePlay from "../../../assets/icons/google-play-icon.png";
import appStore from "../../../assets/icons/apple-icon.png.png";
import { Link } from "react-router-dom";
import { IoMap } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { setting } = useSelector((state) => state.setting);
  const appSection = setting?.app_section;

  const { t } = useTranslation();

  const quickLinks = [
    { id: 1, name: t("home"), href: "/" },
    { id: 2, name: t("about"), href: "/about" },
    { id: 3, name: t("services"), href: "/services" },
    { id: 4, name: t("projects"), href: "/projects" },
    { id: 5, name: t("partners"), href: "/partners" },
    { id: 6, name: t("blog"), href: "/blog" },
    { id: 7, name: t("contact"), href: "/contact" },
  ];

  const socialList = [
    { id: 1, icon: <FaFacebookF />, link: setting?.social?.facebook },
    { id: 2, icon: <FaXTwitter />, link: setting?.social?.X },
    { id: 3, icon: <FaInstagram />, link: setting?.social?.instagram },
    { id: 4, icon: <FaLinkedinIn />, link: setting?.social?.linkedin },
  ];

  return (
    <footer className="bg-myDark-2">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 lg:gap-16 py-8">
          {/* Logo & Description */}
          <div className="space-y-4 lg:col-span-3">
            <img src={logo} alt="logo" className="w-40" />

            {setting?.footer?.footer_description && (
              <p className="leading-relaxed">
                {setting?.footer?.footer_description}
              </p>
            )}

            {/* Store Buttons */}
            <div className="flex flex-wrap gap-2 lg:gap-4">
              {appSection?.ios_app_link && (
                <Link
                  to={appSection?.ios_app_link}
                  target="_blank"
                  className="flex items-center justify-center gap-3 bg-white text-black px-4 py-2 min-w-[180px] rounded-xl hover:scale-105 duration-300"
                >
                  <img
                    src={appStore}
                    alt="Download on App Store"
                    className="w-6 invert"
                  />
                  <div className="leading-tight text-start">
                    <span className="block text-[8px] uppercase">
                      {t("footer.downloadOn")}
                    </span>
                    <span className="text-sm font-bold">
                      {t("footer.appStore")}
                    </span>
                  </div>
                </Link>
              )}

              {appSection?.android_app_link && (
                <Link
                  to={appSection?.android_app_link}
                  target="_blank"
                  className="flex items-center justify-center gap-3 bg-white text-black px-4 py-2 min-w-[180px] rounded-xl hover:scale-105 duration-300"
                >
                  <img src={googlePlay} alt="Google Play" className="w-6" />
                  <div className="leading-tight text-start">
                    <span className="block text-[8px] uppercase">
                      {t("footer.getItOn")}
                    </span>
                    <span className="text-sm font-bold">
                      {t("footer.googlePlay")}
                    </span>
                  </div>
                </Link>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold mb-2 text-lg">{t("footer.quickLinks")}</h4>

            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.href}
                    className="hover:text-myGold duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="font-bold mb-2 text-lg">
              {t("footer.contactTitle")}
            </h4>

            <ul className="space-y-4">
              {setting?.contact?.address && (
                <li>
                  <p className="text-xs mb-1">{t("footer.address")}:</p>
                  <div className="flex gap-2">
                    <IoMap className="text-lg mt-1" />
                    <p className="flex-1">{setting?.contact?.address}</p>
                  </div>
                </li>
              )}

              {setting?.contact?.email && (
                <li>
                  <p className="text-xs mb-1">{t("footer.email")}:</p>
                  <div className="flex gap-2">
                    <MdEmail className="text-lg mt-1" />
                    <p className="flex-1">{setting?.contact?.email}</p>
                  </div>
                </li>
              )}

              {setting?.contact?.phone && (
                <li>
                  <p className="text-xs mb-1">{t("footer.phone")}:</p>
                  <div className="flex gap-2">
                    <FaPhone className="text-lg mt-1" />
                    <p className="flex-1">{setting?.contact?.phone}</p>
                  </div>
                </li>
              )}

              <li>
                <p className="text-xs mb-1">{t("footer.followUs")}:</p>
                <div className="flex gap-2">
                  {socialList
                    .filter((social) => social.link)
                    .map((social) => (
                      <Link
                        key={social.id}
                        to={social.link}
                        target="_blank"
                        className="w-8 h-8 rounded-md flex items-center justify-center text-xl bg-[#706665] cursor-pointer hover:bg-myGold duration-200"
                      >
                        {social.icon}
                      </Link>
                    ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t py-4 text-sm">
          {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
