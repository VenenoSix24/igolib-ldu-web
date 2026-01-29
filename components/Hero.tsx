import React from 'react';
import { Icon } from './Icon';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background Gradient - Removed animate-pulse to fix button flickering */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-lavender-accent/10 to-cyan-accent/10 rounded-full blur-[100px] -z-10 dark:opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="relative z-10 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-primary/20 text-primary px-5 py-2 rounded-full shadow-sm mx-auto lg:mx-0 transition-colors">
            <Icon name="verified" className="text-sm md:text-base font-bold" />
            <span className="text-xs font-black tracking-widest uppercase">新版发布: 桌面端深度优化</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter text-slate-900 dark:text-white transition-colors">
            抢座无忧<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-cyan-500 to-lavender-accent">
              学习更专注
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed font-medium mx-auto lg:mx-0 transition-colors">
            专为高效学子打造的全平台预约系统。3D可视化界面配合本地化驱动逻辑，助你在激烈的竞争中稳操胜券。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center lg:justify-start">
            <button className="bg-primary text-white px-10 py-5 rounded-thick font-bold text-lg shadow-2xl shadow-primary/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group">
              立即下载 <Icon name="download" className="group-hover:animate-bounce" />
            </button>
            <button className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-700 px-10 py-5 rounded-thick font-bold text-lg hover:bg-white dark:hover:bg-slate-700 hover:border-primary text-slate-700 dark:text-slate-200 hover:text-primary transition-all flex items-center justify-center gap-2">
              GitHub <Icon name="code" />
            </button>
          </div>
        </div>

        {/* Right 3D Visual */}
        <div className="relative flex items-center justify-center laptop-frame mt-10 lg:mt-0">
          
          {/* Floating Icon 1 */}
          <div className="absolute -top-10 left-0 lg:-left-4 animate-bobbing z-30">
            <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-thick shadow-2xl border border-blue-50 dark:border-slate-700 text-yellow-500 transform -rotate-12 transition-colors">
              <Icon name="desktop_windows" className="text-4xl md:text-5xl font-bold" />
            </div>
          </div>
          
          {/* Floating Icon 2 */}
          <div className="absolute bottom-10 right-0 lg:-right-4 animate-bobbing-delayed z-30">
            <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-thick shadow-2xl border border-purple-50 dark:border-slate-700 text-lavender-accent transform rotate-12 transition-colors">
              <Icon name="terminal" className="text-4xl md:text-5xl font-bold" />
            </div>
          </div>

          {/* Laptop Screen */}
          <div className="relative z-20 laptop-screen w-full max-w-[650px] aspect-[16/10] bg-white dark:bg-slate-800 rounded-2xl p-2 border-[6px] border-slate-200 dark:border-slate-700 shadow-2xl transition-colors duration-300">
            <div className="w-full h-full bg-slate-50 dark:bg-slate-900 rounded-lg overflow-hidden relative border border-slate-100 dark:border-slate-800 flex flex-col transition-colors">
              
              {/* Fake Browser Bar */}
              <div className="h-8 bg-slate-100 dark:bg-slate-800 flex items-center px-4 gap-2 border-b border-slate-200 dark:border-slate-700 shrink-0 transition-colors">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>

              {/* Fake UI Content */}
              <div className="p-4 md:p-6 grid grid-cols-12 gap-4 h-full overflow-hidden">
                {/* Sidebar */}
                <div className="col-span-3 space-y-3 hidden sm:block">
                  <div className="h-6 bg-primary/20 rounded-md w-full animate-pulse"></div>
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-md w-3/4 transition-colors"></div>
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-md w-1/2 transition-colors"></div>
                  <div className="mt-8 space-y-2">
                    <div className="h-8 bg-white dark:bg-slate-800 rounded-lg w-full border border-slate-200 dark:border-slate-700 transition-colors"></div>
                    <div className="h-8 bg-white dark:bg-slate-800 rounded-lg w-full border border-slate-200 dark:border-slate-700 transition-colors"></div>
                    <div className="h-8 bg-white dark:bg-slate-800 rounded-lg w-full border border-slate-200 dark:border-slate-700 transition-colors"></div>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="col-span-12 sm:col-span-9 space-y-4">
                  <div className="h-32 md:h-40 bg-gradient-to-br from-primary/5 to-lavender-accent/5 dark:from-primary/10 dark:to-lavender-accent/10 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center relative overflow-hidden group transition-colors">
                     <Icon name="grid_view" className="text-6xl text-slate-200 dark:text-slate-700 group-hover:scale-110 transition-all duration-500" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-16 md:h-20 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-colors"></div>
                    <div className="h-16 md:h-20 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-colors"></div>
                    <div className="h-16 md:h-20 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-colors"></div>
                  </div>
                  <div className="h-10 bg-primary rounded-xl w-full flex items-center justify-center font-bold text-white shadow-lg shadow-primary/20 mt-4 cursor-pointer hover:bg-blue-600">
                    开始自动抢座
                  </div>
                </div>
              </div>

              {/* Screen Glare Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none dark:opacity-10"></div>
            </div>
          </div>
          
          {/* Shadow under laptop */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-slate-900/10 dark:bg-black/30 blur-xl rounded-full"></div>
        </div>
      </div>
    </section>
  );
};