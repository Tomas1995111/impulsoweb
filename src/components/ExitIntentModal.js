import React, { useEffect, useState } from 'react';
import './styles/ExitIntentModal.css';

const ExitIntentModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');

  const triggerModal = (triggerType) => {
    const scrollShown = localStorage.getItem('scroll-popup-shown');
    const exitShown = localStorage.getItem('exit-popup-shown');
    const emailEnviado = localStorage.getItem('email-enviado');

    if (emailEnviado) return; // si ya lo envió, no mostrar más

    if (triggerType === 'scroll' && !scrollShown) {
      setShowModal(true);
      localStorage.setItem('scroll-popup-shown', 'true');
    }

    if (triggerType === 'exit' && !exitShown) {
      setShowModal(true);
      localStorage.setItem('exit-popup-shown', 'true');
    }
  };

  // Exit intent
  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        triggerModal('exit');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  // Scroll > 70%
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollPercent > 0.7) {
        triggerModal('scroll');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    if (!email || !email.includes('@')) {
      alert('Por favor ingresá un email válido');
      return;
    }

    localStorage.setItem('email-enviado', 'true');
    setShowModal(false);
    
  };

  if (!showModal) return null;

  return (
    <div className="exit-overlay">
      <div className="exit-modal">
        <button className="close-btn" onClick={handleClose}>×</button>
        <h2>¡Llevate 7 días gratis + guía PDF!</h2>
        <p>Solo dejá tu mail y empezá a recibir contenido premium 😉</p>
        <input
          type="email"
          placeholder="tu@correo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="view-course-btn" onClick={handleSubmit}>
          Quiero mi acceso
        </button>
      </div>
    </div>
  );
};

export default ExitIntentModal;
