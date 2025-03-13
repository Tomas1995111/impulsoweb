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
          title="Curso de Finanzas Personales"
          description="Aprende a gestionar tu dinero y alcanzar la libertad financiera."
          image={AnalisisImg}
        />
        <CourseCard
          title="Curso de Desarrollo Web"
          description="Conviértete en un experto en desarrollo web desde cero."
          image={CriptomonedasImg}
        />
        <CourseCard
          title="Curso de Psicología Aplicada"
          description="Entiende los principios psicológicos y cómo aplicarlos en la vida real."
          image={MoneyImg}
        />
      </div>
    </div>
  );
};

export default Courses;
