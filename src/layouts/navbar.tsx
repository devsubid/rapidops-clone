import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container-custom-md flex justify-between items-center py-8">
      <h3 className="font-medium text-2xl">
        <b>SUBID DAS</b> - Build Simple Think Unique
      </h3>
      <ul className="flex gap-12 items-center text-sm">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid rgb(0 0 0 / 25%)" : "none",
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid rgb(0 0 0 / 25%)" : "none",
            })}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <a href="#footer" className="py-5 px-8 bg-black text-white font-bold">
            Get in touch
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
