import React from 'react';
import './styles/FinancialAdvisors.css';

const FinancialAdvisors = () => {
  return (
    <div className="financial-advisors-container">
      <h1>Contactanos vía Whatsapp</h1>
      <p>
        ¿Querés asesoramiento personalizado? <br />
        Hablanos al WhatsApp y estaremos encantados de ayudarte.
      </p>
      <a 
        href="https://wa.me/YOUR_PHONE_NUMBER" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Hablar por WhatsApp
      </a>
    </div>
  );
};

export default FinancialAdvisors;
