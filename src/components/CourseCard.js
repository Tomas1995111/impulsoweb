import React from 'react';

const CourseCard = ({ title, description, image, purchaseLink }) => {
  const handlePurchase = () => {
    window.open(purchaseLink, "_blank"); // Abre MercadoPago en una nueva pestaña
    alert(`Gracias por tu compra de "${title}". Recibirás el acceso al curso en tu correo una vez confirmado el pago.`);
  };

  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-image" />
      <div className="course-info">
        <h3 className="course-title">{title}</h3>
        <p className="course-description">{description}</p>
        <button className="view-course-btn" onClick={handlePurchase}>Comprar</button>
      </div>
    </div>
  );
};

export default CourseCard;
