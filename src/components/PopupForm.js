import React, { useState } from 'react';
import './styles/PopupForm.css';

const PopupForm = ({ isVisible, onClose }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!isVisible) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Acá podrías enviar datos a una API si querés
    setFormSubmitted(true);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button onClick={onClose} className="popup-close-btn">×</button>

        {formSubmitted ? (
          <div className="success-message">
            <h2 className="popup-title">¡Gracias!</h2>
            <p>
              Te llegará el PDF al email y ya podés disfrutar de <strong>7 días gratis</strong> de los beneficios de Impulso Merval 🚀
            </p>
          </div>
        ) : (
          <>
            <h2 className="popup-title">Accedé gratis 7 días</h2>
            <form className="popup-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Tu nombre" required />
              <input type="email" placeholder="tucorreo@ejemplo.com" required />
              <input type="tel" placeholder="54911..." required />
              <button type="submit" className="view-course-btn">Enviar y acceder</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default PopupForm;
