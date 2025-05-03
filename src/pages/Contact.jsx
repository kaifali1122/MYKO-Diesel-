import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import "../styles/Contact.css";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="section-title">
          <h1>{t("contactTitle")}</h1>
          <p>{t("contactSubtitle")}</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
              <h3>{t("visitUs")}</h3>
              <p>{t("address")}</p>
            </div>

            <div className="info-item">
              <FontAwesomeIcon icon={faPhone} className="info-icon" />
              <h3>{t("callUs")}</h3>
              <p>
                <a href={`tel:${t("phoneNumber")}`}>{t("phoneNumber")}</a>
              </p>
            </div>

            <div className="info-item">
              <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
              <h3>{t("emailUs")}</h3>
              <p>
                <a href={`mailto:${t("email")}`}>{t("email")}</a>
              </p>
            </div>

            <div className="info-item">
              <FontAwesomeIcon icon={faClock} className="info-icon" />
              <h3>{t("businessHours")}</h3>
              <p>{t("businessHoursText")}</p>
            </div>
          </div>

          <div className="contact-form">
            <h2>{t("sendMessage")}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder={t("formName")}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder={t("formEmail")}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder={t("formPhone")}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder={t("formSubject")}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder={t("formMessage")}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">
                {t("formSubmit")}
              </button>
            </form>
          </div>
        </div>

        <div className="map-section" style={{ padding: "1rem" }}>
          <h2>{t("locationMap")}</h2>
          <div className="map-container">
            {/* Add your Google Maps or other map component here */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.327600975127!2d83.35188247528838!3d26.733919976754212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399145235f4d4bf5%3A0xa40e6316242721b5!2sMYKO%20Diesel%20Sevice!5e0!3m2!1sen!2sin!4v1742816400271!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
