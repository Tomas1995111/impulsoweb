import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/MegaMenu.css';

const MegaMenu = ({ sections }) => {
  const location = useLocation();

  return (
    <div className="mega-menu">
      {sections.map((section, idx) => (
        <div className="mega-menu-column" key={idx}>
          {/* Si querés mostrar el título, dejalo así */}
          {/* <h4>{section.title}</h4> */}
          {section.items.map((item, index) => (
            <Link 
              to={item.link} 
              key={index}
              className={`mega-item ${location.pathname === item.link ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MegaMenu;
