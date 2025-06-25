import React, { useEffect, useState } from 'react';
import './styles/PopupForm.css'; // Reutilizamos el CSS del popup principal

const ExitIntentModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
  });

  console.log('ExitIntentModal montado');

  const triggerModal = (triggerType) => {
    const scrollShown = localStorage.getItem('scroll-popup-shown');
    const exitShown = localStorage.getItem('exit-popup-shown');
    const emailEnviado = localStorage.getItem('email-enviado');

    if (emailEnviado) return;

    if (triggerType === 'scroll' && !scrollShown) {
      setShowModal(true);
      localStorage.setItem('scroll-popup-shown', 'true');
    }

    if (triggerType === 'exit' && !exitShown) {
      setShowModal(true);
      localStorage.setItem('exit-popup-shown', 'true');
    }
  };

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) triggerModal('exit');
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollPercent > 0.7) triggerModal('scroll');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.includes('@')) {
      alert('Por favor ingresá un email válido');
      return;
    }

    localStorage.setItem('email-enviado', 'true');
    setSubmitted(true);

    // Cierra el modal después de 2.5 segundos
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  if (!showModal) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button onClick={handleClose} className="popup-close-btn">×</button>

        {submitted ? (
          <div className="success-message">
            <h2 className="popup-title">¡Gracias!</h2>
            <p>
              Te llegará el PDF al email y ya podés disfrutar de <strong>7 días gratis</strong> de los beneficios de Impulso Merval 🚀
            </p>
          </div>
        ) : (
          <>
            <h2 className="popup-title">¡Llevate 7 días gratis + guía PDF!</h2>
            <p>Solo dejá tus datos y empezá a recibir contenido premium 😉</p>
            <br />
            <form className="popup-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="tucorreo@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="telefono"
                placeholder="54911..."
                value={formData.telefono}
                onChange={handleChange}
              />
              <button type="submit" className="view-course-btn">
                Enviar y acceder
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ExitIntentModal;
