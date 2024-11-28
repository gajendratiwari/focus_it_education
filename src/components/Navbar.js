import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__top">
        {/* Logo */}
        <div className="navbar__top__logo">
          <Link href="/" title="Go to Home">
            <img src="/images/logo.png" alt="MyLogo" className="logo-image" />
          </Link>
        </div>

        {/* Toggle Button */}
        <button
          className="navbar__toggle"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          ☰
        </button>

        {/* Actions (Login, Phone) */}
        <div className="navbar__actions">
          <NavLink to="/login" className="navbar__login">
            Login
          </NavLink>
          <a
            href="tel: +977 9856061728"
            className="navbar__phone"
            title="Call Us"
          >
            Call Us
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`navbar__container ${
          isOpen ? "navbar__container--open" : ""
        }`}
      >
        <ul className="navbar__links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={toggleMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={toggleMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={toggleMenu}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Search */}
        <div className="navbar__search">
          <input
            type="text"
            placeholder="Search..."
            className="navbar__search-input"
          />
          <button>Go</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
