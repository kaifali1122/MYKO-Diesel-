import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import "../styles/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="top-bar">
        <div className="container-small">
          <div className="contact-info">
            <a href={`tel:${t("phoneNumber")}`}>
              <FontAwesomeIcon icon={faPhone} />
              <span>{t("phoneNumber")}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="main-header">
        <div className="container">
          <Link to="/" className="logo" onClick={closeMenu}>
            <span className="logo-text">{t("logoText")}</span>
          </Link>

          <button
            className={`mobile-menu-btn ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>

          <nav className={`nav-links ${isOpen ? "active" : ""}`}>
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
              onClick={closeMenu}
            >
              {t("home")}
            </Link>
            <Link
              to="/gallery"
              className={location.pathname === "/gallery" ? "active" : ""}
              onClick={closeMenu}
            >
              {t("gallery")}
            </Link>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
              onClick={closeMenu}
            >
              {t("about")}
            </Link>
            <Link
              to="/services"
              className={location.pathname === "/services" ? "active" : ""}
              onClick={closeMenu}
            >
              {t("services")}
            </Link>
            <Link
              to="/contact"
              className={`contact-btn ${
                location.pathname === "/contact" ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              {t("contact")}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
