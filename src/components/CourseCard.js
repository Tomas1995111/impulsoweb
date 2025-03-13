// CourseCard.js (ya sin importar ningún CSS)
import React from 'react';

const CourseCard = ({ title, description, image }) => {
  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-image" />
      <div className="course-info">
        <h3 className="course-title">{title}</h3>
        <p className="course-description">{description}</p>
        <button className="view-course-btn">Ver Curso</button>
      </div>
    </div>
  );
};

export default CourseCard;
