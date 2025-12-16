import { IoMdClose } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

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
            className="text-2xl cursor-pointer w-8 h-8 flex items-center justify-center rounded-full bg-myGold text-white"
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
              className="navLink"
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex flex-col gap-4 p-4">
          <button className="mainBtn light">
            English <RiGlobalLine />
          </button>
          <Link to="/contact" className="mainBtn">
            تواصل معنا
          </Link>
        </div>
      </aside>
    </>
  );
};

export default MobileNav;
