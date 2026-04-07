import { useEffect } from 'react';
import gsap from 'gsap';

const useScrollReveal = (selector, options = {}) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((el, index) => {
      gsap.fromTo(el, 
        { 
          opacity: 0, 
          y: options.y || 50, 
          x: options.x || 0 
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: options.duration || 1,
          delay: (options.stagger ? index * options.stagger : 0) + (options.delay || 0),
          ease: options.ease || "power3.out",
          scrollTrigger: {
            trigger: el,
            start: options.start || "top 85%",
            toggleActions: "play none none none",
            ...options.scrollTrigger
          }
        }
      );
    });
  }, [selector, options]);
};

export default useScrollReveal;
