import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Home.css';
import AdminDashboard from '../components/AdminDashboard';
import LeadSection from '../components/LeadSection';
import GuideLead from '../components/GuideLead';
import UserProfile from '../components/UserProfile';
import Reviews from '../components/Reviews';
import ContactForm from '../components/ContactForm';
import MembershipPlans from '../components/MembershipPlans';
import Footer from '../components/Footer';
import ExitIntentModal from '../components/ExitIntentModal';
import FaqAccordion from '../components/FaqAccordion';

import AnalisisImg from '../assets/imagesCourses/Analisis-tecnico.jpeg';
import CriptomonedasImg from '../assets/imagesCourses/Criptomonedas-y-Blockchain.jpeg';
import MoneyImg from '../assets/imagesCourses/Money-Management.jpeg';

const Home = ({ onOpenPopup }) => {

  const user = JSON.parse(localStorage.getItem('user'));
  const role = localStorage.getItem('role');
  const navigate = useNavigate();

  const courseImages = [AnalisisImg, CriptomonedasImg, MoneyImg];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBanner(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % courseImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [courseImages.length]);

  const handleIndicatorClick = (index) => {
    setActiveImageIndex(index);
  };

  const handleImageClick = () => {
    navigate('/cursos');
  };

  return (
    <div className="home-container">
     {/*} <Navbar />*/}
      {showBanner && (
        <div className="scroll-banner">
          <span>¿Querés 7 días premium + PDF gratis?</span>
          <button className="view-course-btn"  onClick={onOpenPopup}>
            Probar ahora
          </button>
        </div>
      )}

      <div className="welcome-banner">
        <video className="banner-video" autoPlay loop muted playsInline>
          <source src={require('../assets/video/7579564-uhd_4096_2160_25fps.mp4')} type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
        <div className="banner-overlay">
          <h1 className="welcome-title">Invertí en la Bolsa Argentina</h1>
          <h2 className="welcome-subtitle">
            en solo <strong>5 minutos al día</strong>
          </h2>
          <button className="view-course-btn" onClick={onOpenPopup}>
  Probá 7 días GRATIS
</button>

          <div className="hero-mini-block">
            <p>Incluye guía en PDF para empezar hoy mismo.</p>
            <p>+150 inversores ya se sumaron. El 97% renueva mes a mes 🚀</p>
          </div>
        </div>
      </div>

      {/*<LeadSection />*/}
      <section className="benefits-section">
        <div className="benefits-grid">
          {[
            ['⏱️', 'Solo 1 min/día', 'Filtramos el ruido: recibís lo esencial y seguís con tu vida.'],
            ['🚨', 'Alertas al instante', 'Señales claras con zona de compra, stop y objetivos.'],
            ['🎓', 'Aprendé de cero', 'Mini-clases y glosario sin jerga bursátil.'],
            ['🤝', 'Comunidad real', '+150 inversores activos; 97 % renueva cada mes.'],
            ['📊', 'Carteras listas', 'Estrategias probadas y calendario de balances.'],
            ['🔓', 'Probá sin riesgo', '7 días gratis; cancelás cuando quieras.'],
          ].map(([emoji, title, text], i) => (
            <div className="benefit-card" key={i}>
              <span className="emoji">{emoji}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
      <MembershipPlans />
      <div className="content-container">
        {role === 'admin' && (
          <div className="dashboard-section">
            <AdminDashboard />
          </div>
        )}

        <div className="courses-carousel-container">
          <div className="course-info">
            <h2 className="course-section-title">Nuestros Cursos</h2>
          </div>

          <div className="course-carousel">
            <img
              src={courseImages[activeImageIndex]}
              alt="Curso"
              className="course-carousel-image"
              onClick={handleImageClick}
            />
            <div className="carousel-indicators">
              {courseImages.map((_, index) => (
                <div
                  key={index}
                  className={`carousel-indicator ${activeImageIndex === index ? 'active' : ''}`}
                  onClick={() => handleIndicatorClick(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {user && (
          <div className="user-profile-section">
            <UserProfile user={user} />
          </div>
        )}
      </div>

      <div className="reviews-section">
        <Reviews />
      </div>
      <FaqAccordion/>

      {/*<GuideLead />*/}

      {/*<div className="contact-form-container">
        <ContactForm />
      </div>*/}

      <Footer onOpenPopup={onOpenPopup} />

      <ExitIntentModal />

    </div>
  );
};

export default Home;
