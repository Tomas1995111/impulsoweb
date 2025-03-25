import React from 'react';
import './styles/Courses.css'; // Único archivo de estilos
import CourseCard from './CourseCard';

import AnalisisImg from '../assets/imagesCourses/Analisis-tecnico.jpeg';
import CriptomonedasImg from '../assets/imagesCourses/Criptomonedas-y-Blockchain.jpeg';
import MoneyImg from '../assets/imagesCourses/Money-Management.jpeg';

const coursesData = [
  {
    title: "Análisis técnico",
    description: "Aprende a interpretar gráficos, identificar tendencias y gestionar riesgos de manera efectiva. Este curso intensivo te brinda técnicas prácticas de análisis técnico para tomar decisiones de inversión informadas, ideal para principiantes y profesionales.",
    image: AnalisisImg,
    purchaseLink: "https://mpago.la/2cCkKdD"
  },
  {
    title: "Criptomonedas & Blockchain",
    description: "Adéntrate en el futuro financiero: descubre cómo funcionan las criptomonedas y la tecnología blockchain. Aprende a identificar oportunidades, gestionar riesgos y transformar tu estrategia en el mundo digital.",
    image: CriptomonedasImg,
    purchaseLink: "https://mpago.la/1Jkijzh"
  },
  {
    title: "Money Management",
    description: "Optimiza tu estrategia financiera: domina técnicas prácticas para gestionar riesgos, maximizar rendimientos y tomar decisiones de inversión inteligentes. Eleva tus habilidades y controla tu camino hacia el éxito financiero.",
    image: MoneyImg,
    purchaseLink: "https://mpago.la/1MM14tB",
  }
];

const Courses = () => {
  return (
    <div className="courses-container">
      <h2 className="courses-title">
        Los siguientes cursos lograrán elevar sus capacidades para alcanzar objetivos más desafiantes.
      </h2>
      <div className="courses-list">
        {coursesData.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
      <p className="purchase-info">
        Una vez que hayas comprado el curso, recibirás el enlace al material a través de un correo electrónico.
      </p>
       {/* Sección de promociones */}
       <div className="promotions-container">
        <h3 className="promotions-title">¡Ofertas especiales para ti!</h3>
        <div className="payment-info">
    <div className="installments">3</div>
    <p className="no-interest">Cuotas</p>
    <p className="no-interest-subtext">Sin interés</p>
  </div>        <div className="promotion">
          <p>2 cursos con 20% de descuento por solo $80k</p>
          <a href="https://mpago.la/2HDQcf2" className="view-course-btn" >¡Comprar ahora!</a>
        </div>
        <div className="promotion">
          <p>3 cursos con 30% de descuento por solo $105k</p>
          <a href="https://mpago.la/2zGLi3L" className="view-course-btn" >¡Comprar ahora!</a>
        </div>
      </div>
    </div>
  );
};

export default Courses;
