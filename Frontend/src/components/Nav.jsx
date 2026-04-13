import { useState, useEffect } from "react";
import {Link, NavLink, useLocation } from "react-router-dom";
import "./nav.scss";
import logocrop1 from "../assets/logo/logocrop1.png";

const Navbar = ({ openForm }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="container nav-container">

        {/* Logo */}
        <Link to='https://technoegal.com/' className="logo">
          <img src={logocrop1} alt="TECHNOEGAL" />
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-links">
          {["/", "/services", "/about", "/contact","/blog"].map((path, i) => {
            const names = ["Home", "Services", "About", "Contact", "Blog"];
            return (
              <li key={i}>
                <NavLink
                  to={path}
                  className={({ isActive }) => isActive ? "active" : ""}
                >
                  {names[i]}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Right Side */}
        <div className="nav-right">
          <button 
          className="btn btn--primary" onClick={openForm}>
            Enquiry Now
          </button>

          <i
            className="ri-menu-3-line menu-icon"
            onClick={() => setMenuOpen(true)}
          ></i>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <div className="close-btn">
          <i
            className="ri-close-line"
            onClick={() => setMenuOpen(false)}
          ></i>
        </div>

        <ul>
          {["/", "/services", "/about", "/contact", "/blog"].map((path, i) => {
            const names = ["Home", "Services", "About", "Contact", "Blog"];
            return (
              <li key={i}>
                <NavLink
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => isActive ? "active" : ""}
                >
                  {names[i]}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <button
         className="btn btn--primary mobile-btn"
         onClick={openForm}
        >
          Enquiry Now
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)}></div>
      )}
    </nav>
  );
};

export default Navbar;