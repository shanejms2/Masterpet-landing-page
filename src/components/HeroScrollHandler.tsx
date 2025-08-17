"use client";
import { useEffect } from 'react';

interface HeroScrollHandlerProps {
  scrollToHero?: boolean;
}

const HeroScrollHandler = ({ scrollToHero = true }: HeroScrollHandlerProps) => {
  useEffect(() => {
    if (scrollToHero) {
      // Small delay to ensure the page is fully loaded
      const timer = setTimeout(() => {
        const heroSection = document.getElementById('hero');
        if (heroSection) {
          heroSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [scrollToHero]);

  return null; // This component doesn't render anything
};

export default HeroScrollHandler;
