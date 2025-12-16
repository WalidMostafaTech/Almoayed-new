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
    <footer className="bg-myDark-2 py-4">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 lg:gap-16 py-4">
          <div className="space-y-4 lg:col-span-3">
            <img src={logo} alt="logo" className="w-32" />

            <p className="text-sm leading-relaxed">
              اكتشف تجربة عقارية متكاملة من خلال تطبيق المؤيد وتابع احدث
              مشاريعنا، خدماتنا، وجميع التفاصيل في مكان واحد، بسرعة وسهولة، مع
              تحديثات دقيقة في أي وقت ومن أي مكان.
            </p>

            <div className="flex flex-wrap gap-4 w-full">
              <a
                href={"#"}
                className="flex items-center gap-3 bg-white text-black px-5 py-3 rounded-xl"
              >
                <img
                  src={appStore}
                  alt={"Download on App Store"}
                  className="w-6 invert"
                />
                <div className="leading-tight text-right">
                  <span className="block text-[10px] uppercase">
                    Download on the
                  </span>
                  <span className="text-sm font-bold">App Store</span>
                </div>
              </a>

              <a
                href={"#"}
                className="flex items-center gap-3 bg-white text-black px-5 py-3 rounded-xl"
              >
                <img src={googlePlay} alt="google play" className="w-6" />
                <div className="leading-tight text-right">
                  <span className="block text-[10px] uppercase">Get it on</span>
                  <span className="text-sm font-bold">Google Play</span>
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
                  الرياض - طريق الملك عبدالله - مقابل هوم سنتر
                </a>
              </li>
              <li>
                <p className="text-xs mb-1">راسلنا عبر البريد الإلكترونى:</p>
                <a className="flex gap-2">
                  <MdEmail className="text-lg mt-1" />
                  Info@l-sat.com
                </a>
              </li>
              <li>
                <p className="text-xs mb-1">راسلنا عبر الجوال:</p>
                <a className="flex gap-2">
                  <FaPhone className="text-lg mt-1" />
                  00966506330044
                </a>
              </li>
              <li>
                <p className="text-xs mb-1">تابعنا:</p>
                <div className="flex gap-2">
                  <a className="w-8 h-8 rounded-md flex items-center justify-center text-xl bg-[#706665] cursor-pointer">
                    <FaFacebookF />
                  </a>
                  <a className="w-8 h-8 rounded-md flex items-center justify-center text-xl bg-[#706665] cursor-pointer">
                    <FaXTwitter />
                  </a>
                  <a className="w-8 h-8 rounded-md flex items-center justify-center text-xl bg-[#706665] cursor-pointer">
                    <FaInstagram />
                  </a>
                  <a className="w-8 h-8 rounded-md flex items-center justify-center text-xl bg-[#706665] cursor-pointer">
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
