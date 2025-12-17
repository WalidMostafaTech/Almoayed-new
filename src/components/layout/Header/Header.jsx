import { useState } from "react";
import logo from "../../../assets/images/logo/logo.png";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";
import { RiGlobalLine } from "react-icons/ri";
import { TbMenuDeep } from "react-icons/tb";
import { Link } from "react-router-dom";

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
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-22 lg:w-28" />
          </div>

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
            <button className="mainBtn light">
              English <RiGlobalLine />
            </button>
            <Link to="/contact" className="mainBtn">
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
