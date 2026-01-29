import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Download } from './pages/Download';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <BrowserRouter>
      <div className="relative min-h-screen font-sans selection:bg-primary selection:text-white flex flex-col transition-colors duration-300">
        
        {/* Dynamic Background Mesh */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className={`absolute top-0 -left-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob transition-colors duration-500 ${isDark ? 'bg-purple-900 mix-blend-normal opacity-20' : 'bg-purple-300'}`}></div>
          <div className={`absolute top-0 -right-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 transition-colors duration-500 ${isDark ? 'bg-blue-900 mix-blend-normal opacity-20' : 'bg-yellow-300'}`}></div>
          <div className={`absolute -bottom-8 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 transition-colors duration-500 ${isDark ? 'bg-primary mix-blend-normal opacity-10' : 'bg-pink-300'}`}></div>
          <div className={`absolute inset-0 bg-gradient-to-b transition-colors duration-500 ${isDark ? 'from-slate-950/80 to-slate-950' : 'from-white/40 to-transparent'}`}></div>
        </div>

        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/download" element={<Download />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;