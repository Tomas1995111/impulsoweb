import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate para la redirección
import './styles/Home.css';
import Navbar from '../components/Navbar';
import AdminDashboard from '../components/AdminDashboard';
import DollarWidget from '../components/DollarWidget';
import NewsCard from '../components/NewsCard';
import UserProfile from '../components/UserProfile';
import Footer from '../components/Footer'; // Importa el Footer


import AnalisisImg from '../assets/imagesCourses/Analisis-tecnico.jpeg';
import CriptomonedasImg from '../assets/imagesCourses/Criptomonedas-y-Blockchain.jpeg';
import MoneyImg from '../assets/imagesCourses/Money-Management.jpeg';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user')); // Obtener el usuario desde localStorage
  const role = localStorage.getItem('role'); // Obtener el rol del usuario
  const navigate = useNavigate(); // Para la redirección

  // Array de cursos (solo imágenes)
  const courseImages = [AnalisisImg, CriptomonedasImg, MoneyImg];

  // Estado para el índice de la imagen activa
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Cambiar la imagen activa automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex(prevIndex => (prevIndex + 1) % courseImages.length); // Ciclar entre las imágenes
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  // Función para cambiar la imagen manualmente
  const handleIndicatorClick = (index) => {
    setActiveImageIndex(index);
  };

  // Redirigir a /cursos cuando se hace clic en la imagen
  const handleImageClick = () => {
    navigate('/cursos');
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="content-container">
        <h1 className="welcome-title">Bienvenido a tu Plataforma de Asesoría Financiera</h1>

        {/* Solo mostrar AdminDashboard si el usuario es admin */}
        {role === 'admin' && (
          <div className="dashboard-section">
            <AdminDashboard />
          </div>
        )}

        <div className="main-content">
          {/* Sección de carrusel de imágenes de cursos */}
          <div className="course-section">
            <h2 className="course-section-title">Los siguientes cursos que lograrán elevar sus capacidades para alcanzar objetivos más desafiantes.</h2>
            <div className="course-carousel">
              <img
                src={courseImages[activeImageIndex]}
                alt="Curso"
                className="course-carousel-image"
                onClick={handleImageClick} // Redirige a /cursos al hacer clic
              />
              {/* Círculos de navegación */}
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

          <div className="dollar-widget">
            <DollarWidget />
          </div>
        </div>

        <div className="news-section">
          <NewsCard />
        </div>

        {user && (
          <div className="user-profile-section">
            <UserProfile user={user} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
