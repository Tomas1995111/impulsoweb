import React, { useState } from 'react';
import './styles/PopupForm.css';

const PopupForm = ({ isVisible, onClose }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    whatsapp: '',
    token: 'impulso2025',
  });

  if (!isVisible) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const data = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycby9VQcK0F-tnI4ljVwfNBcVMfl3MmHie973ZYJNiVHaqNn3FCzb8Vbf35g5BvRM8qlivw/exec',
        { method: 'POST', body: data }
      );

      if (response.ok) {
        setFormSubmitted(true);
        setError('');
      } else {
        setError('❌ Hubo un problema. Intentá de nuevo.');
      }
    } catch (err) {
      setError('❌ Error al enviar. Reintentá en unos segundos.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button onClick={onClose} className="popup-close-btn">×</button>

        {formSubmitted ? (
          <div className="success-message">
            <h2 className="popup-title">¡Gracias!</h2>
            <p>🎉 Ya podés disfrutar de <strong>7 días gratis</strong> de Impulso Merval.</p>

            <a
              href="https://drive.google.com/file/d/1IG2JEz0wzLVQv06eSHv-7TGzkYOPKCOD/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="popup-link-btn"
            >
              📄 Descargar PDF
            </a>

            <a
              href="https://chat.whatsapp.com/LDHlzsldWl2B03bfRnVNA9"
              target="_blank"
              rel="noopener noreferrer"
              className="popup-link-btn whatsapp"
            >
              💬 Unirme al grupo de WhatsApp
            </a>
          </div>
        ) : (
          <>
            <h2 className="popup-title">Accedé gratis 7 días</h2>
            <form className="popup-form" onSubmit={handleSubmit}>
              <input type="hidden" name="token" value={formData.token} />
              <input type="text" name="nombre" placeholder="Nombre completo" value={formData.nombre} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} required />
              <input type="text" name="whatsapp" placeholder="WhatsApp (con código de país)" value={formData.whatsapp} onChange={handleChange} required />
              <button type="submit" className="view-course-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar y acceder'}
              </button>
            </form>
            {error && <p className="error-message">{error}</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default PopupForm;
