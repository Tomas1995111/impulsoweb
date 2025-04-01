import React from 'react';
import { Link } from 'react-router-dom';
import './styles/MegaMenu.css';

const MegaMenu = ({ sections }) => {
  return (
    <div className="mega-menu">
      {sections.map((section, idx) => (
        <div className="mega-menu-column" key={idx}>
          <h4>{section.title}</h4>
          {section.items.map((item, index) => (
            <Link to={item.link} className="mega-item" key={index}>
              {item.label}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MegaMenu;
