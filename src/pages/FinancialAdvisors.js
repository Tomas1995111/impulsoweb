import React from 'react';
import './styles/FinancialAdvisors.css';
import { FaWhatsapp } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
const FinancialAdvisors = () => {
  return (
    <div className="financial-advisors-container">
        <p className="subtitle">≫ Impulsate con nosotros ≪</p>
      <h1>Asesoría Personalizada</h1>
      <p>¿Necesitás ayuda? Contactanos por WhatsApp y te ayudamos al instante.</p>
      <a 
        href="https://wa.me/5491124035535" 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Abrir chat de WhatsApp"
      >
        <FaWhatsapp className="whatsapp-icon" /> 
      </a>
      <div className="contact-form-container">
        <ContactForm />
      </div>
    </div>
  );
};

export default FinancialAdvisors;
