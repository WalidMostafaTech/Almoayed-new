import { useState } from "react";
import logo from "../../../assets/images/logo/logo.png";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";
import { RiGlobalLine } from "react-icons/ri";
import { TbMenuDeep } from "react-icons/tb";

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
      <header className="container bg-myDark py-2 flex items-center justify-between sticky top-0 z-50 mb-4">
        <div className="flex items-center gap-3">
          {/* Mobile menu */}
          <button
            onClick={() => setIsOpen(true)}
            className="text-2xl lg:hidden text-myGold cursor-pointer"
          >
            <TbMenuDeep />
          </button>

          <img src={logo} alt="Logo" className="w-22 lg:w-28" />
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:block">
          <NavBar links={links} />
        </div>

        <div className="flex items-center gap-2">
          <button className="mainBtn light">
            English <RiGlobalLine />
          </button>
          <button className="mainBtn">تواصل معنا</button>
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
