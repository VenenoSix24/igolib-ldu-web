import React from 'react';
import { Icon } from './Icon';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  // Helper to handle hash scrolling on home page
  const scrollToSection = (id: string) => {
    if (isHome) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  const scrollToTop = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 md:py-6 pointer-events-none">
      <div className="max-w-7xl mx-auto glass-card rounded-full px-4 md:px-8 py-3 flex items-center justify-between pointer-events-auto">
        <button onClick={scrollToTop} className="flex items-center gap-3 group">
          <div className="bg-gradient-to-tr from-primary to-lavender-accent p-2 rounded-xl text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
            <Icon name="event_seat" size="2xl" />
          </div>
          <h2 className="text-lg md:text-xl font-black tracking-tight text-slate-800 hidden sm:block">我去抢个座</h2>
        </button>

        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <button onClick={scrollToTop} className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">首页</button>
          
          <button onClick={() => scrollToSection('features')} className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">功能特性</button>
          <button onClick={() => scrollToSection('process')} className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">使用流程</button>
          
          <Link 
            to="/download" 
            className={`text-sm font-bold transition-colors ${location.pathname === '/download' ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}
          >
            下载体验
          </Link>
        </div>

        <div className="flex gap-2 md:gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="bg-slate-900 text-white px-4 md:px-6 py-2 rounded-full font-bold text-xs md:text-sm hover:scale-105 transition-transform flex items-center gap-1 cursor-pointer">
            GitHub
          </a>
          <Link to="/download" className="bg-primary text-white px-4 md:px-6 py-2 rounded-full font-bold text-xs md:text-sm shadow-xl shadow-primary/30 hover:bg-blue-600 transition-all flex items-center gap-1 cursor-pointer">
            立即下载
          </Link>
        </div>
      </div>
    </nav>
  );
};