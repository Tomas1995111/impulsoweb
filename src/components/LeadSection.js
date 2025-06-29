// src/components/LeadSection.js
import React, { useState } from 'react';

const LeadSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Acá podrías enviar los datos a tu backend o servicio externo
    setSubmitted(true);
  };

  return (
    <section className="lead-section">
      <h2 className="lead-title">
        Invertí mejor en la Bolsa Argentina con <strong>5 minutos al día</strong>
      </h2>
      <p className="lead-subtitle">
        Análisis, carteras y educación clara — directo a tu WhatsApp cada mañana.
      </p>

      {submitted ? (
        <p className="lead-thanks">✅ ¡Gracias! Pronto recibirás novedades en tu email.</p>
      ) : (
        <form className="lead-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            className="lead-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            className="lead-input"
            required
          />
          <button type="submit" className="view-course-btn">
            Quiero acceso gratis
          </button>
        </form>
      )}

      <p className="lead-footnote">
        +150 inversionistas suscriptos • 97 % renueva cada mes
      </p>
    </section>
  );
};

export default LeadSection;
