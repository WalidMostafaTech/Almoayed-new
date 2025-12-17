import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import LanguageSwitcher from "../../common/LanguageSwitcher";

const MobileNav = ({ links, isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 h-full w-64 bg-myDark z-50
          transform transition-all duration-300
          ${isOpen ? "end-0" : "-end-full"}`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-2xl text-myGold cursor-pointer border border-myGold p-1 rounded"
          >
            <IoMdClose />
          </button>
        </div>

        <nav className="flex flex-col gap-4 px-4">
          {links.map((link) => (
            <NavLink
              key={link.id}
              to={link.href}
              onClick={onClose}
              className="mobileNavLink"
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex flex-col gap-3 p-4">
          <LanguageSwitcher />
          <Link to="/contact" onClick={onClose} className="mainBtn">
            تواصل معنا
          </Link>
        </div>
      </aside>
    </>
  );
};

export default MobileNav;
