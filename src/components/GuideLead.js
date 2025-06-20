import React, { useState } from 'react';
import guiaImg from '../assets/guia.jpg'; // imagen ilustrativa

const GuideLead = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleOpenForm = () => setShowForm(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // opcional: enviar email, guardar en backend, etc.
  };

  return (
    <section className="guide-lead">
      <div className="guide-lead-container">
        <img src={guiaImg} alt="Guía Express" className="guide-lead-image" />

        <div className="guide-lead-content">
          <h3>Recibí gratis la Guía Express</h3>
          <p>“Cómo arrancar en la Bolsa sin cometer errores caros".</p>

          {!showForm && !submitted && (
            <button className="view-course-btn" onClick={handleOpenForm}>
              Recibir guía gratis
            </button>
          )}

          {showForm && !submitted && (
            <form className="guide-lead-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Tu nombre" required />
              <input type="email" placeholder="Tu email" required />
              <button type="submit" className="view-course-btn">Acceder ahora</button>
            </form>
          )}

          {submitted && (
            <p className="lead-thanks">
              ✅ ¡Gracias! Te enviamos la guía a tu email.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default GuideLead;
