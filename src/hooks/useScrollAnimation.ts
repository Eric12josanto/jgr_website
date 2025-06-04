import { useEffect, useRef, useState } from 'react';

interface BreezeElement {
  x: number;
  y: number;
  id: number;
}

export const useScrollAnimation = () => {
  const [breezeElements, setBreezeElements] = useState<BreezeElement[]>([]);
  const lastScrollY = useRef(0);
  const breezeCount = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll animations
      const elements = document.querySelectorAll('.scroll-fade-up, .scroll-rotate-in, .stagger-children');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;
        
        if (isVisible) {
          element.classList.add('visible');
        }
      });

      // Create breeze effect based on scroll direction and speed
      const currentScroll = window.scrollY;
      const scrollDiff = currentScroll - lastScrollY.current;
      const scrollSpeed = Math.abs(scrollDiff);

      if (scrollSpeed > 30) { // Only create breeze effect for significant scroll
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        setBreezeElements(prev => [
          ...prev, 
          { x, y, id: breezeCount.current }
        ]);
        
        breezeCount.current += 1;

        // Remove breeze element after animation
        setTimeout(() => {
          setBreezeElements(prev => prev.filter(element => element.id !== breezeCount.current - 1));
        }, 3000);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { breezeElements };
};

export default useScrollAnimation; 