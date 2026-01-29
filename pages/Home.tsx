import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Process } from '../components/Process';
import { Architecture } from '../components/Architecture';
import { FAQ } from '../components/FAQ';
import { DownloadCTA } from '../components/DownloadCTA';

export const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // Ensure we start at the top when navigating to Home without a hash
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="animate-fade-in">
      <Hero />
      <Features />
      <Process />
      <Architecture />
      <FAQ />
      <DownloadCTA />
    </div>
  );
};