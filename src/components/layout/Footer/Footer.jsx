import logo from "../../../assets/images/logo/logo.png";
import googlePlay from "../../../assets/icons/google-play-icon.png";
import appStore from "../../../assets/icons/apple-icon.png.png";
import { Link } from "react-router-dom";
import { IoMap } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const quickLinks = [
  { id: 1, name: "الرئيسية", href: "/" },
  { id: 2, name: "من نحن", href: "/about" },
  { id: 3, name: "خدماتنا", href: "/services" },
  { id: 4, name: "مشاريعنا", href: "/projects" },
  { id: 5, name: "شركاء النجاح", href: "/partners" },
  { id: 6, name: "المدونة", href: "/blog" },
  { id: 7, name: "تواصل معنا", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-myDark-2">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 lg:gap-16 py-8">
          <div className="space-y-4 lg:col-span-3">
            <img src={logo} alt="logo" className="w-32" />

            <p className="text-sm leading-relaxed">
              اكتشف تجربة عقارية متكاملة من خلال تطبيق المؤيد وتابع احدث
              مشاريعنا، خدماتنا، وجميع التفاصيل في مكان واحد، بسرعة وسهولة، مع
              تحديثات دقيقة في أي وقت ومن أي مكان.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2 lg:gap-4">
              <a
                href={"#"}
                dir="ltr"
                className="flex items-center justify-center gap-3 bg-white text-black px-4 py-2 min-w-[180px] rounded-xl"
              >
                <img
                  src={appStore}
                  alt={"Download on App Store"}
                  className="w-6 invert"
                />
                <div className="leading-tight">
                  <span className="block text-[8px] uppercase">
                    Download on the
                  </span>
                  <span className="text-sm font-semibold">App Store</span>
                </div>
              </a>

              <a
                href={"#"}
                dir="ltr"
                className="flex items-center justify-center gap-3 bg-white text-black px-4 py-2 min-w-[180px] rounded-xl"
              >
                <img src={googlePlay} alt="google play" className="w-6" />
                <div className="leading-tight text-start">
                  <span className="block text-[8px] uppercase">Get it on</span>
                  <span className="text-sm font-semibold">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold mb-2">روابط سريعة</h4>

            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.href}
                    className="hover:text-myGold duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold mb-2">تواصل معنا الآن:</h4>

            <ul className="space-y-4">
              <li>
                <p className="text-xs mb-1">الموقع:</p>
                <a className="flex gap-2">
                  <IoMap className="text-lg mt-1" />
                  <p className="flex-1">
                    الرياض - طريق الملك عبدالله - مقابل هوم سنتر
                  </p>
                </a>
              </li>
              <li>
                <p className="text-xs mb-1">راسلنا عبر البريد الإلكترونى:</p>
                <a className="flex gap-2">
                  <MdEmail className="text-lg mt-1" />
                  <p className="flex-1">Info@l-sat.com</p>
                </a>
              </li>
              <li>
                <p className="text-xs mb-1">راسلنا عبر الجوال:</p>
                <a className="flex gap-2">
                  <FaPhone className="text-lg mt-1" />
                  <p className="flex-1">00966506330044</p>
                </a>
              </li>
              <li>
                <p className="text-xs mb-1">تابعنا:</p>
                <div className="flex gap-2">
                  <a className="w-8 h-8 rounded-md flex items-center justify-center text-xl bg-[#706665] cursor-pointer hover:bg-myGold duration-200">
                    <FaFacebookF />
                  </a>
                  <a className="w-8 h-8 rounded-md flex items-center justify-center text-xl bg-[#706665] cursor-pointer hover:bg-myGold duration-200">
                    <FaXTwitter />
                  </a>
                  <a className="w-8 h-8 rounded-md flex items-center justify-center text-xl bg-[#706665] cursor-pointer hover:bg-myGold duration-200">
                    <FaInstagram />
                  </a>
                  <a className="w-8 h-8 rounded-md flex items-center justify-center text-xl bg-[#706665] cursor-pointer hover:bg-myGold duration-200">
                    <FaLinkedinIn />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center border-t py-4 text-sm">
          © 2025 جميع الحقوق محفوظة لمكتب روافد للاستشارات الهندسية.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
