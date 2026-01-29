import React from 'react';
import { Icon } from './Icon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary p-2 rounded-xl text-white">
                <Icon name="event_seat" size="2xl" />
              </div>
              <h2 className="text-2xl font-black text-slate-900">我去抢个座</h2>
            </div>
            <p className="text-slate-500 max-w-sm font-medium leading-relaxed">
              用科技重新定义校园效率。我们致力于为每一位在学术道路上奔跑的同学提供最稳健的后勤支持。
            </p>
          </div>
          
          <div>
            <h4 className="font-black text-slate-900 mb-6">快速链接</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><a href="#features" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-slate-300 rounded-full group-hover:bg-primary transition-colors"></span>功能特性</a></li>
              <li><a href="#process" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-slate-300 rounded-full group-hover:bg-primary transition-colors"></span>使用流程</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-slate-300 rounded-full group-hover:bg-primary transition-colors"></span>开发者博客</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-slate-300 rounded-full group-hover:bg-primary transition-colors"></span>常见问题</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-slate-900 mb-6">关注我们</h4>
            <div className="flex gap-4">
              {['alternate_email', 'chat_bubble', 'hub'].map((icon) => (
                <div key={icon} className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:text-primary hover:bg-blue-50 transition-all cursor-pointer hover:-translate-y-1">
                  <Icon name={icon} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm font-bold">
          <p>© 2024 我去抢个座 - 活力UI细节优化版</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-600 transition-colors">服务条款</a>
            <a href="#" className="hover:text-slate-600 transition-colors">隐私权政策</a>
          </div>
        </div>
      </div>
    </footer>
  );
};