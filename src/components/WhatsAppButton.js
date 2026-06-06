import React from "react";
import "./styles/WhatsAppButton.css";
import { waLink } from "../config/cta";

const WhatsAppButton = () => {
  return (
    <a
      href={waLink("floating")}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp (botón flotante)"
    >
      <i className="fab fa-whatsapp" aria-hidden="true"></i>
    </a>
  );
};

export default WhatsAppButton;
