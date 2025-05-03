import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTools,
  faWrench,
  faOilCan,
  faCog,
  faCheckCircle,
  faClock,
  faUserCog,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import img from "../assets/bg.webp";
import "../styles/Home.css";

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="home">
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="hero-content">
            <h1>{t("heroTitle")}</h1>
            <p>{t("heroSubtitle")}</p>
            <Link to="/contact" className="btn">
              {t("getInTouch")}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-title">
            <h2>{t("ourServices")}</h2>
            <p>{t("servicesSubtitle")}</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <FontAwesomeIcon icon={faTools} className="service-icon" />
              <h3>{t("rotaryCRO")}</h3>
              <p>{t("rotaryCRODesc")}</p>
            </div>
            <div className="service-card">
              <FontAwesomeIcon icon={faWrench} className="service-icon" />
              <h3>{t("edcPump")}</h3>
              <p>{t("edcPumpDesc")}</p>
            </div>
            <div className="service-card">
              <FontAwesomeIcon icon={faOilCan} className="service-icon" />
              <h3>{t("nozzleService")}</h3>
              <p>{t("nozzleServiceDesc")}</p>
            </div>
            <div className="service-card">
              <FontAwesomeIcon icon={faCog} className="service-icon" />
              <h3>{t("generalRepairs")}</h3>
              <p>{t("generalRepairsDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <div className="section-title">
            <h2>{t("whyChooseUs")}</h2>
            <p>{t("whyChooseUsSubtitle")}</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <FontAwesomeIcon icon={faUserCog} className="feature-icon" />
              <h3>{t("expertTeam")}</h3>
              <p>{t("expertTeamDesc")}</p>
            </div>
            <div className="feature-card">
              <FontAwesomeIcon icon={faCheckCircle} className="feature-icon" />
              <h3>{t("qualityService")}</h3>
              <p>{t("qualityServiceDesc")}</p>
            </div>
            <div className="feature-card">
              <FontAwesomeIcon icon={faClock} className="feature-icon" />
              <h3>{t("quickService")}</h3>
              <p>{t("quickServiceDesc")}</p>
            </div>
            <div className="feature-card">
              <FontAwesomeIcon icon={faHeadset} className="feature-icon" />
              <h3>{t("customerSupport")}</h3>
              <p>{t("customerSupportDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands-section">
        <div className="container">
          <div className="section-title">
            <h2>{t("premiumPartners")}</h2>
            <p>{t("partnersSubtitle")}</p>
          </div>
          <div className="brands-grid">
            <div className="brand-card">
              <h3>Bosch</h3>
              <p>{t("premiumPartner")}</p>
            </div>
            <div className="brand-card">
              <h3>Denso</h3>
              <p>{t("premiumPartner")}</p>
            </div>
            <div className="brand-card">
              <h3>Delphi</h3>
              <p>{t("premiumPartner")}</p>
            </div>
            <div className="brand-card">
              <h3>Siemens</h3>
              <p>{t("premiumPartner")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
