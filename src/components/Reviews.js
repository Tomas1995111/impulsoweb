import React from 'react';
import './styles/Reviews.css';

const reviews = [
  {
    name: 'Juan Pérez',
    comment: 'Excelente servicio y atención personalizada. ¡Muy recomendado!',
    rating: 5,
  },
  {
    name: 'María Gómez',
    comment: 'Profesionales y confiables. Me ayudaron a alcanzar mis objetivos financieros.',
    rating: 4,
  },
  
];

const Review = ({ name, comment, rating }) => (
  <div className="review">
    <p className="review-comment">"{comment}"</p>
    <p className="review-name">- {name}</p>
    <div className="review-rating">
      {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
    </div>
  </div>
);

const Reviews = () => (
  <div className="reviews-container">
    <h2 className="reviews-title">Lo que dicen nuestros clientes</h2>
    <div className="reviews-list">
      {reviews.map((review, index) => (
        <Review key={index} {...review} />
      ))}
    </div>
  </div>
);

export default Reviews;
