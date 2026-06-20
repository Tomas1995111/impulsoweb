import React, { useState, useEffect } from 'react';
import './styles/ScrollToTopButton.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const toggleVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.pageYOffset > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <i className="fas fa-chevron-up"></i>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
