// Courses.js
import React from 'react';
import './styles/Courses.css'; // Único archivo de estilos
import CourseCard from './CourseCard';

import AnalisisImg from '../assets/imagesCourses/Analisis-tecnico.jpeg';
import CriptomonedasImg from '../assets/imagesCourses/Criptomonedas-y-Blockchain.jpeg';
import MoneyImg from '../assets/imagesCourses/Money-Management.jpeg';

const Courses = () => {
  return (
    <div className="courses-container">
      <h2 className="courses-title">
        Los siguientes cursos lograrán elevar sus capacidades para alcanzar objetivos más desafiantes.
      </h2>
      <div className="courses-list">
        <CourseCard
          title="Análisis técnico"
          description="Aprende a interpretar gráficos, identificar tendencias y gestionar riesgos de manera efectiva. Este curso intensivo te brinda técnicas prácticas de análisis técnico para tomar decisiones de inversión informadas, ideal para principiantes y profesionales."
          image={AnalisisImg}
        />
        <CourseCard
          title="Criptomonedas & Blockchain"
          description="Adéntrate en el futuro financiero: descubre cómo funcionan las criptomonedas y la tecnología blockchain. Aprende a identificar oportunidades, gestionar riesgos y transformar tu estrategia en el mundo digital. "
          image={CriptomonedasImg}
        />
        <CourseCard
          title="Money managament"
          description="Optimiza tu estrategia financiera: domina técnicas prácticas para gestionar riesgos, maximizar rendimientos y tomar decisiones de inversión inteligentes. Eleva tus habilidades y controla tu camino hacia el éxito financiero. "
          image={MoneyImg}
        />
      </div>
    </div>
  );
};

export default Courses;
