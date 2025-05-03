import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import "../styles/Footer.css";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-title">{t("aboutUs")}</h3>
              <p className="footer-description">{t("footerAboutText")}</p>
              <div className="social-links">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">{t("quickLinks")}</h3>
              <ul className="footer-links">
                <li>
                  <FontAwesomeIcon icon={faChevronRight} />
                  <Link to="/">{t("home")}</Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} />
                  <Link to="/about">{t("about")}</Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} />
                  <Link to="/services">{t("services")}</Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} />
                  <Link to="/gallery">{t("gallery")}</Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} />
                  <Link to="/contact">{t("contact")}</Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">{t("services")}</h3>
              <ul className="footer-links">
                <li>
                  <FontAwesomeIcon icon={faChevronRight} />
                  <Link to="/services">{t("dieselEngineRepair")}</Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} />
                  <Link to="/services">{t("fuelInjectionService")}</Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} />
                  <Link to="/services">{t("diagnosticTesting")}</Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} />
                  <Link to="/services">{t("preventiveMaintenance")}</Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} />
                  <Link to="/services">{t("turbochargerService")}</Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">{t("contactInfo")}</h3>
              <ul className="contact-info">
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <p>{t("address")}</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  <a href="tel:+1234567890">{t("phoneNumber")}</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a href="mailto:info@mykodiesel.com">{t("email")}</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faClock} />
                  <p>{t("businessHours")}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            © {currentYear} MYKO Diesel. {t("all rights reserved")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
