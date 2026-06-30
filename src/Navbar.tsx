import { NavLink } from "react-router-dom";

const appName = import.meta.env.VITE_APP_NAME ?? "ShopVite";
const appEnv = import.meta.env.VITE_APP_ENV ?? "development";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="navbar-logo">🛍</div>
        <span>{appName}</span>
      </div>

      <div className="navbar-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
        >
          Products
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
        >
          Contact
        </NavLink>
      </div>

      <span className={`env-badge${appEnv !== "production" ? " dev" : ""}`}>
        {appEnv}
      </span>
    </nav>
  );
};

export default Navbar;
