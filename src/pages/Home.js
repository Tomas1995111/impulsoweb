import React from 'react';
import './styles/Home.css';
import Navbar from '../components/Navbar';
import AdminDashboard from '../components/AdminDashboard';
import CourseCard from '../components/CourseCard';
import DollarWidget from '../components/DollarWidget';
import NewsCard from '../components/NewsCard';
import UserProfile from '../components/UserProfile';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user')); // Obtener el usuario desde localStorage
  const role = localStorage.getItem('role'); // Obtener el rol del usuario

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
          <div className="course-widget">
            <CourseCard />
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
    </div>
  );
};

export default Home;
