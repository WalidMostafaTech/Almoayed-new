import { NavLink } from "react-router-dom";

const NavBar = ({ links }) => {
  return (
    <nav className="items-center gap-6 hidden lg:flex">
      {links.map((link) => (
        <NavLink to={link.href} key={link.id} className={"navLink"}>
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
