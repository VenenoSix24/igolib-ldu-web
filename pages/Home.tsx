import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Process } from '../components/Process';
import { Architecture } from '../components/Architecture';
import { FAQ } from '../components/FAQ';
import { Icon } from '../components/Icon';

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
      
      {/* Expanded Download Section */}
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
                <div className="flex justify-center gap-8 md:gap-16 mb-12 opacity-80">
                  <div className="flex flex-col items-center gap-3 group">
                    <div className="w-16 h-16 bg-blue-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <Icon name="window" size="3xl" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase">Windows</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 group">
                    <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-700 dark:text-slate-300 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <Icon name="apple" size="3xl" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase">macOS</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 group">
                    <div className="w-16 h-16 bg-green-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-green-600 dark:text-green-400 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <Icon name="android" size="3xl" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase">Android</span>
                  </div>
                   <div className="flex flex-col items-center gap-3 group">
                    <div className="w-16 h-16 bg-orange-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-orange-600 dark:text-orange-400 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <Icon name="terminal" size="3xl" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase">Linux</span>
                  </div>
                </div>

                <a href="/download" className="inline-flex items-center gap-3 bg-primary hover:bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/30 hover:shadow-2xl hover:-translate-y-1 transition-all group">
                   前往下载页面 
                   <Icon name="arrow_forward" className="group-hover:translate-x-1 transition-transform" />
                </a>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};