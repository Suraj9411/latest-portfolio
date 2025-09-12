import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down past hero section
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > window.innerHeight * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-[#45a29e] to-[#1f2833] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:from-[#1f2833] hover:to-[#45a29e] group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className="group-hover:animate-bounce" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
