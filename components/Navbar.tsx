import React, { useState, useEffect } from 'react';
import { Icon } from './Icon';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHome = location.pathname === '/';

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false); // Close menu if open
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
    setIsMenuOpen(false);
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const linkClass = "text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer";
  const mobileLinkClass = "text-xl font-bold text-slate-800 dark:text-slate-200 py-4 border-b border-slate-100 dark:border-slate-800 w-full text-center hover:text-primary transition-colors";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 md:py-6 pointer-events-none">
        <div className="max-w-7xl mx-auto glass-card rounded-full px-5 md:px-8 py-3 flex items-center justify-between pointer-events-auto relative z-50">
          
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start items-center">
            <button onClick={scrollToTop} className="flex items-center gap-3 group">
              <div className="bg-gradient-to-tr from-primary to-lavender-accent p-2 rounded-xl text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                <Icon name="event_seat" size="xl" />
              </div>
              <h2 className="text-lg md:text-xl font-black tracking-tight text-slate-800 dark:text-white hidden sm:block">我去抢个座</h2>
            </button>
          </div>

          {/* Center: Desktop Nav Links */}
          <div className="hidden md:flex flex-none items-center gap-6 lg:gap-8 justify-center">
            <button onClick={scrollToTop} className={linkClass}>首页</button>
            <button onClick={() => scrollToSection('features')} className={linkClass}>功能特性</button>
            <button onClick={() => scrollToSection('process')} className={linkClass}>使用流程</button>
            <button onClick={() => scrollToSection('faq')} className={linkClass}>常见问题</button>
            <Link to="/changelog" className={linkClass}>更新日志</Link>
            <button onClick={() => scrollToSection('download-cta')} className={linkClass}>下载体验</button>
          </div>

          {/* Right: Actions */}
          <div className="flex-1 flex justify-end gap-3 items-center">
             {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <Icon name={isMenuOpen ? "close" : "menu"} size="md" />
            </button>

            <Link 
              to="/download"
              className="bg-primary text-white px-4 md:px-6 py-2 rounded-full font-bold text-xs md:text-sm shadow-xl shadow-primary/30 hover:bg-blue-600 transition-all flex items-center gap-1 cursor-pointer whitespace-nowrap"
            >
              <span className="hidden sm:inline">立即</span>下载
              <Icon name="download" size="sm" className="sm:hidden" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div className={`fixed inset-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl transition-all duration-300 flex flex-col pt-32 px-6 ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
        <div className="flex flex-col items-center">
          <button onClick={scrollToTop} className={mobileLinkClass}>首页</button>
          <button onClick={() => scrollToSection('features')} className={mobileLinkClass}>功能特性</button>
          <button onClick={() => scrollToSection('process')} className={mobileLinkClass}>使用流程</button>
          <button onClick={() => scrollToSection('faq')} className={mobileLinkClass}>常见问题</button>
          <Link to="/changelog" className={mobileLinkClass}>更新日志</Link>
          <button onClick={() => scrollToSection('download-cta')} className={mobileLinkClass}>下载客户端</button>
        </div>
        
        <div className="mt-auto pb-10 text-center text-slate-400 text-sm">
           <p>© 2024 我去抢个座</p>
        </div>
      </div>
    </>
  );
};