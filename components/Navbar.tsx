import React from 'react';
import { Icon } from './Icon';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
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

  const linkClass = "text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors";
  const activeLinkClass = "text-sm font-bold text-primary transition-colors";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 md:py-6 pointer-events-none">
      <div className="max-w-7xl mx-auto glass-card rounded-full px-4 md:px-8 py-3 flex items-center justify-between pointer-events-auto">
        <button onClick={scrollToTop} className="flex items-center gap-3 group">
          <div className="bg-gradient-to-tr from-primary to-lavender-accent p-2 rounded-xl text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
            <Icon name="event_seat" size="2xl" />
          </div>
          <h2 className="text-lg md:text-xl font-black tracking-tight text-slate-800 dark:text-white hidden sm:block">我去抢个座</h2>
        </button>

        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <button onClick={scrollToTop} className={linkClass}>首页</button>
          
          <button onClick={() => scrollToSection('features')} className={linkClass}>功能特性</button>
          <button onClick={() => scrollToSection('process')} className={linkClass}>使用流程</button>
          <button onClick={() => scrollToSection('faq')} className={linkClass}>常见问题</button>
          
          <Link 
            to="/download" 
            className={location.pathname === '/download' ? activeLinkClass : linkClass}
          >
            下载体验
          </Link>
        </div>

        <div className="flex gap-2 md:gap-4 items-center">
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            title={isDark ? "切换亮色模式" : "切换深色模式"}
          >
            <Icon name={isDark ? "light_mode" : "dark_mode"} size="sm" />
          </button>

          <a href="https://github.com" target="_blank" rel="noreferrer" className="hidden sm:flex bg-slate-900 dark:bg-slate-800 text-white px-4 md:px-6 py-2 rounded-full font-bold text-xs md:text-sm hover:scale-105 transition-transform items-center gap-1 cursor-pointer">
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