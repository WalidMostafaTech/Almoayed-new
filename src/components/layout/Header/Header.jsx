import { useState } from "react";
import logo from "../../../assets/images/logo/logo.png";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";
import { TbMenuDeep } from "react-icons/tb";
import { Link } from "react-router-dom";
import LanguageSwitcher from "../../common/LanguageSwitcher";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 1, name: "الرئيسية", href: "/" },
    { id: 2, name: "من نحن", href: "/about" },
    { id: 3, name: "خدماتنا", href: "/services" },
    { id: 4, name: "مشاريعنا", href: "/projects" },
    { id: 5, name: "شركاء النجاح", href: "/partners" },
    { id: 6, name: "المدونة", href: "/blog" },
  ];

  return (
    <>
      <header className="bg-myDark py-2 sticky top-0 z-50 mb-4">
        <div className="container flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-28 lg:w-36" />
          </Link>

          {/* Mobile menu */}
          <button
            onClick={() => setIsOpen(true)}
            className="text-2xl lg:hidden text-myGold cursor-pointer border border-myGold p-1 rounded"
          >
            <TbMenuDeep />
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:block">
            <NavBar links={links} />
          </div>

          <div className="items-center gap-2 hidden lg:flex">
            <LanguageSwitcher />
            <Link
              onClick={() => setIsOpen(false)}
              to="/contact"
              className="mainBtn"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <MobileNav
        links={links}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default Header;
