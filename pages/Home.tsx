import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Process } from '../components/Process';
import { Architecture } from '../components/Architecture';

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
    }
  }, [location]);

  return (
    <div className="animate-fade-in">
      <Hero />
      <Features />
      <Process />
      <Architecture />
      
      {/* Call to Action for Download at bottom of Home */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-black text-slate-900 mb-6">准备好开始了吗？</h2>
          <p className="text-slate-500 mb-8">立即下载全平台客户端，体验极速抢座的快感。</p>
          <a href="/download" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform">
             前往下载页面 <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </section>
    </div>
  );
};