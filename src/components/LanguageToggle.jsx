import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "../styles/LanguageToggle.css";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      className="language-toggle"
      onClick={toggleLanguage}
      style={{ zIndex: 99999 }}
    >
      {language === "en" ? "हिंदी" : "English"}
    </button>
  );
};

export default LanguageToggle;
