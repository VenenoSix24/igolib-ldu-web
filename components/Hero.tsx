import React from 'react';
import { Icon } from './Icon';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background Gradient - Removed animate-pulse to fix button flickering */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-lavender-accent/10 to-cyan-accent/10 rounded-full blur-[100px] -z-10 dark:opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">

        {/* Left Content */}
        <div className="relative z-10 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-primary/20 text-primary px-5 py-2 rounded-full shadow-sm mx-auto lg:mx-0 transition-colors">
            <Icon name="verified" className="text-sm md:text-base font-bold" />
            <span className="text-xs font-black tracking-widest uppercase">新版发布: 全平台应用上线！</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter text-slate-900 dark:text-white transition-colors">
            我去！<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-700 to-primary dark:from-white dark:via-blue-100 dark:to-primary">
              有这好事不早说
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed font-medium mx-auto lg:mx-0 transition-colors">
            专为学生设计的图书馆座位预约自动化系统，快速、可靠。快说，谢谢波奇酱！
          </p>

          <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center lg:justify-start">
            <Link to="/download" className="bg-primary text-white px-8 py-3.5 rounded-thick font-bold text-lg shadow-2xl shadow-primary/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group">
              <Icon name="download" /> 立即下载
            </Link>
            <a href="https://github.com/VenenoSix24/igolib-ldu" target="_blank" rel="noreferrer" className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-700 px-8 py-3.5 rounded-thick font-bold text-lg hover:bg-white dark:hover:bg-slate-700 hover:border-primary text-slate-700 dark:text-slate-200 hover:text-primary transition-all flex items-center justify-center gap-2">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.905-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.28-1.545 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.92 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg> GitHub
            </a>
          </div>
        </div>

        {/* Right 3D Visual */}
        <div className="relative flex items-center justify-center laptop-frame mt-10 lg:mt-0">

          {/* Floating Icon 1 - Top Left */}
          <div className="absolute -top-2 -left-4 lg:-left-16 animate-bobbing z-30">
            <div className="glass-card flex items-center justify-center p-3 md:p-4 rounded-2xl shadow-xl text-yellow-500 transform -rotate-12 border border-white/40 dark:border-white/10">
              <Icon name="desktop_windows" className="text-2xl md:text-3xl font-bold" />
            </div>
          </div>

          {/* Floating Icon 2 - Bottom Right */}
          <div className="absolute -bottom-6 -right-4 lg:-right-10 animate-bobbing-delayed z-30">
            <div className="glass-card flex items-center justify-center p-3 md:p-4 rounded-2xl shadow-xl text-lavender-accent transform rotate-12 border border-white/40 dark:border-white/10">
              <Icon name="terminal" className="text-2xl md:text-3xl font-bold" />
            </div>
          </div>

          {/* App Screenshot Display */}
          <div className="relative z-20 w-full max-w-[800px] aspect-[16/9.92] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300">
            {/* Light Mode Screenshot */}
            <img
              src={`${import.meta.env.BASE_URL}assets/Application-Interface-Light.png`}
              alt="Application Interface Light"
              className="w-full h-full object-cover block dark:hidden"
            />

            {/* Dark Mode Screenshot */}
            <img
              src={`${import.meta.env.BASE_URL}assets/Application-Interface-Dark.png`}
              alt="Application Interface Dark"
              className="w-full h-full object-cover hidden dark:block"
            />
          </div>

          {/* Shadow under laptop */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-slate-900/10 dark:bg-black/30 blur-xl rounded-full"></div>
        </div>
      </div>
    </section>
  );
};