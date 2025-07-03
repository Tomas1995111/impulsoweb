import React from 'react';
import './styles/Courses.css';
import CourseCard from './CourseCard';

import AnalisisImg      from '../assets/imagesCourses/Analisis-tecnico.jpeg';
import CriptomonedasImg from '../assets/imagesCourses/Criptomonedas-y-Blockchain.jpeg';
import MoneyImg         from '../assets/imagesCourses/Money-Management.jpeg';

const coursesData = [
  {
    title: 'Análisis técnico',
    description:
      'Interpretá gráficos, detectá tendencias y gestioná riesgos con técnicas prácticas de trading.',
    image: AnalisisImg,
    purchaseLink: 'https://mpago.la/2cCkKdD',
  },
  {
    title: 'Criptomonedas & Blockchain',
    description:
      'Entendé cómo funciona el ecosistema cripto y descubrí oportunidades reales de inversión.',
    image: CriptomonedasImg,
    purchaseLink: 'https://mpago.la/2cCkKdD',
  },
  {
    title: 'Money Management',
    description:
      'Domina la gestión del riesgo y la asignación eficiente de tu capital para invertir con cabeza fría.',
    image: MoneyImg,
    purchaseLink: 'https://mpago.la/2cCkKdD',
  },
];

const Courses = () => (
  <div className="courses-container">
    <h2 className="courses-title">
      Los siguientes cursos potenciarán tus habilidades para alcanzar objetivos cada vez más
      desafiantes.
    </h2>

    {/* ---------- LISTA DE CURSOS ---------- */}
    <div className="courses-list">
      {coursesData.map((course, i) => (
        <CourseCard key={i} {...course} />
      ))}
    </div>

    <p className="purchase-info">
      Una vez realizado el pago recibirás por e-mail el acceso a todo el material.
    </p>

    {/* ---------- PROMOCIONES ---------- */}
    <section className="promotions-container">
      <h3 className="promotions-title">Packs que potencian tu carrera</h3>
      <p className="promotions-subtitle">Elegí tu combo y ahorrá hasta 45 %</p>

      <div className="payment-info">
        <span className="installments">3</span>
        <p className="no-interest">Cuotas</p>
        <p className="no-interest-subtext">sin interés</p>
      </div>

      {/* === PACK DÚO === */}
      <div className="promotion">
        <span className="promo-badge badge-green">20 % OFF HOY</span>

        <h4 className="promo-name">
          Pack Dúo – “Impulso Inicial” <br />
          <span className="promo-micro">Domina lo básico en 2 semanas</span>
        </h4>

        <ul className="promo-details">
          <li>
            2 cursos a elección <span className="promo-micro">(valor real $100 000)</span>
          </li>
          <li>Ahorrás $20 000</li>
        </ul>

        <div className="price-block">
          <span className="old-price">$100 000</span>
          <span className="promo-price">
            <small className="currency">$</small>80 000
          </span>
          <p className="installment-caption">o 3× $26 667 sin interés</p>
        </div>

        <a
          href="https://mpago.la/2jaYnZY"
          className="promo-ctaa"
          target="_blank"
          rel="noopener noreferrer"
        >
          ¡Quiero este pack hoy!
        </a>
      </div>

      {/* === PACK TRILOGÍA === */}
      <div className="promotion">
        <span className="promo-badge badge-red">30 % OFF HOY</span>

        <h4 className="promo-name">
          Pack Trilogía – “Máxima Potencia”
          <br />
          <span className="promo-micro">Programa completo en 6 semanas</span>
        </h4>

        <ul className="promo-details">
          <li>
            3 cursos avanzados <span className="promo-micro">(valor real $150 000)</span>
          </li>
          <li>Ahorrás $45 000</li>
        </ul>

        <div className="price-block">
          <span className="old-price">$150 000</span>
          <span className="promo-price">
            <small className="currency">$</small>105 000
          </span>
          <p className="installment-caption">o 3× $35 000 sin interés</p>
        </div>

        <a
          href="https://mpago.la/2zGLi3L"
          className="promo-ctaa"
          target="_blank"
          rel="noopener noreferrer"
        >
          ¡Quiero este pack hoy!
        </a>
      </div>
    </section>
  </div>
);

export default Courses;
