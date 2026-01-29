import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icon';

// Apple Logo SVG Component
const AppleLogo = () => (
  <svg viewBox="0 0 384 512" fill="currentColor" className="w-8 h-8">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/>
  </svg>
);

export const DownloadCTA: React.FC = () => {
  return (
    <section id="download-cta" className="py-24 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-900/50 transition-colors relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="glass-card rounded-thick p-8 md:p-16 text-center relative overflow-hidden border border-slate-200/60 dark:border-slate-700/60">
           {/* Decorative Background Blobs inside card */}
           <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
           <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

           <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-4 py-1.5 rounded-full mb-8">
                <Icon name="rocket_launch" size="sm" className="text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider">Ready for Speed?</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 transition-colors">
                多端同步，即刻出发
              </h2>
              
              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                原生开发，极致性能。无论是在宿舍的电脑前，还是路上的手机里，选择最适合你的抢座姿势。
              </p>

              {/* Platform Icons Visual */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-16 mb-12 opacity-80">
                <div className="flex flex-col items-center gap-3 group w-20 md:w-auto">
                  <div className="w-16 h-16 bg-blue-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Icon name="window" size="3xl" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase">Windows</span>
                </div>
                <div className="flex flex-col items-center gap-3 group w-20 md:w-auto">
                  <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-900 dark:text-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <div className="scale-125"><AppleLogo /></div>
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase">macOS</span>
                </div>
                <div className="flex flex-col items-center gap-3 group w-20 md:w-auto">
                  <div className="w-16 h-16 bg-green-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-green-600 dark:text-green-400 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Icon name="android" size="3xl" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase">Android</span>
                </div>
                 <div className="flex flex-col items-center gap-3 group w-20 md:w-auto">
                  <div className="w-16 h-16 bg-orange-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-orange-600 dark:text-orange-400 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Icon name="terminal" size="3xl" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase">Linux</span>
                </div>
              </div>

              <Link to="/download" className="inline-flex items-center gap-3 bg-primary hover:bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/30 hover:shadow-2xl hover:-translate-y-1 transition-all group">
                 前往下载页面 
                 <Icon name="arrow_forward" className="group-hover:translate-x-1 transition-transform" />
              </Link>
           </div>
        </div>
      </div>
    </section>
  );
};