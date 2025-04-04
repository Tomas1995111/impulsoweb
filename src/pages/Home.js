import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Home.css';
import Navbar from '../components/Navbar';
import AdminDashboard from '../components/AdminDashboard';
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
import WelcomeBannerImg from '../assets/diplomado-inversiones-financieras-min-1.jpg'; 

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
      <div className="welcome-banner" style={{ backgroundImage: `url(${WelcomeBannerImg})` }}>
        <div className="banner-overlay">
          <h1 className="welcome-title">
            <span className="gradient-text">Bienvenido</span> a Impulso Merval
          </h1>
          <p className="welcome-subtitle">
            Alcanza tu potencial financiero 
          </p>
          <button className="hero-cta" onClick={() => navigate('/MemberShip')}>
            más información
          </button>
          <header className="header">
  <div className="cta-container">
    <a 
      href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380847596cf970175ae9482893205" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <button className="cta-button secondary">Probar 1 mes Gratis</button>
    </a>
    <a 
      href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c938084744b7f5301744f2448a604f5" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <button className="cta-button">Hazte Miembro Ahora</button>
    </a>
  </div>
</header>

        </div>
      </div>
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
    <div className="contact-form-container">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
