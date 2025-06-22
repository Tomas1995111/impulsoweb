import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Home.css';
import Navbar from '../components/Navbar';
import AdminDashboard from '../components/AdminDashboard';
import LeadSection from '../components/LeadSection';
import GuideLead from '../components/GuideLead';
//import DollarWidget from '../components/DollarWidget';
//import NewsCard from '../components/NewsCard'; 
import UserProfile from '../components/UserProfile';
import Membership from './MemberShip';
import Reviews from '../components/Reviews';
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer';

import AnalisisImg from '../assets/imagesCourses/Analisis-tecnico.jpeg';
import CriptomonedasImg from '../assets/imagesCourses/Criptomonedas-y-Blockchain.jpeg';
import MoneyImg from '../assets/imagesCourses/Money-Management.jpeg';
//import WelcomeBannerImg from '../assets/diplomado-inversiones-financieras-min-1.jpg'; 

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const role = localStorage.getItem('role');
  const navigate = useNavigate();

  const courseImages = [AnalisisImg, CriptomonedasImg, MoneyImg];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex(prevIndex => (prevIndex + 1) % courseImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);  

  const handleIndicatorClick = (index) => {
    setActiveImageIndex(index);
  };

  const handleImageClick = () => {
    navigate('/cursos');
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="welcome-banner">
  <video className="banner-video" autoPlay loop muted playsInline>
    <source src={require('../assets/video/7579564-uhd_4096_2160_25fps.mp4')} type="video/mp4" />
    Tu navegador no soporta el video.
  </video>
        <div className="banner-overlay">
<h1 className="welcome-title">
  Invertí en la Bolsa Argentina
</h1>
<h2 className="welcome-subtitle">
  en solo <strong>5 minutos al día</strong>
</h2>

<button className="view-course-btn" onClick={() => navigate('/MemberShip')}>
  Probá 7 días GRATIS
</button>
<div className="hero-mini-block">
  <p>Incluye guía en PDF para empezar hoy mismo.</p>
  <p>+150 inversores ya se sumaron. El 97% renueva mes a mes 🚀</p>
</div>




        </div>
      </div>
      <LeadSection />
      <div className="content-container">
      

        {role === 'admin' && (
          <div className="dashboard-section">
            <AdminDashboard />
          </div>
        )}

        <div className="courses-carousel-container">
          <div className="course-info">
            <h2 className="course-section-title">Aprendé a invertir </h2>
          </div>

          <div className="course-carousel">
            <img
              src={courseImages[activeImageIndex]}
              alt="Curso"o
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
     
        {/*<div className="dollar-widget">
          <DollarWidget />
        </div>*/}

        {/*<div className="news-section">
          <h2 className="news-section-title">Noticias</h2>
          <NewsCard limit={2} />
          <button 
            className="view-more-button" 
            onClick={() => navigate('/noticias')}
          >
            Ver más
          </button>
        </div>*/}

        {user && (
          <div className="user-profile-section">
            <UserProfile user={user} />
          </div>
        )}
      </div>
      <div className="reviews-section">
      <Reviews />
    </div>
    <GuideLead/>
    <div className="contact-form-container">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
