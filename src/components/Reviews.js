import React from 'react';
import './styles/Reviews.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    name: 'Lucas P.',
    age: 31,
    job: 'Diseñador',
    location: 'CABA',
    comment: 'Antes perdía la mañana leyendo foros. Con el resumen arranco el laburo sabiendo dónde poner la plata.',
    img: 'https://randomuser.me/api/portraits/men/31.jpg',
  },
  {
    name: 'Estela G.',
    age: 42,
    job: 'Empleada',
    location: 'Rosario',
    comment: 'Invertí por primera vez gracias a la guía paso a paso. Claro, sin jerga y todo desde el celu. 10 pts.',
    img: 'https://randomuser.me/api/portraits/women/42.jpg',
  },
  {
    name: 'Florencia S.',
    age: 23,
    job: 'Administrativa',
    location: 'Mendoza',
    comment: 'Probé los 7 días gratis y me quedé. El 97% renueva por algo: la info llega filtrada y sin humo.',
    img: 'https://randomuser.me/api/portraits/women/23.jpg',
  },
  {
    name: 'Matías R.',
    age: 24,
    job: 'Estudiante',
    location: 'Córdoba',
    comment: 'Las alertas me llegan al toque. Compré CEDEARs con la zona de stop bien marcada y duermo más tranquilo.',
    img: 'https://randomuser.me/api/portraits/men/35.jpg',
  },
  {
    name: 'Sofía T.',
    age: 29,
    job: 'Contadora',
    location: 'La Plata',
    comment: 'Las guías paso a paso me sacaron el miedo a invertir. Me siento mucho más segura.',
    img: 'https://randomuser.me/api/portraits/women/29.jpg',
  },
  {
    name: 'Nahuel V.',
    age: 35,
    job: 'Freelancer',
    location: 'Tucumán',
    comment: 'El resumen diario es oro. Lo leo con el mate y arranco el día con ideas de inversión.',
    img: 'https://randomuser.me/api/portraits/men/24.jpg',
  },
];

const ReviewCard = ({ name, age, job, location, comment, img }) => (
  <div className="review-card">
    <div className="review-header">
      <img src={img} alt={name} className="review-avatar" />
      <div>
        <strong>{name}</strong> · {age}
        <p className="review-sub">{job} · {location}</p>
      </div>
    </div>
    <p className="review-text">“{comment}”</p>
  </div>
);

const Reviews = () => (
  <section className="reviews-section">
    <h2 className="reviews-title">Lo que dicen quienes ya invierten con Impulso</h2>

    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ el: '.custom-pagination', clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      speed={600}
      spaceBetween={30}
      loop={true}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="reviews-swiper"
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <ReviewCard {...review} />
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Paginación afuera del carrusel */}
    <div className="custom-pagination"></div>
  </section>
);

export default Reviews;
