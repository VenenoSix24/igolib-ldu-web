import React from 'react';
import { Icon } from './Icon';

export const Architecture: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-primary dark:text-blue-300 px-4 py-1.5 rounded-full transition-colors">
            <Icon name="terminal" size="sm" />
            <span className="text-xs font-bold uppercase tracking-wider">Tech Stack Upgrade</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight transition-colors">
            全栈重构<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-lavender-accent">
              纯前端驱动架构
            </span>
          </h2>
          
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-medium transition-colors">
            本项目已完成从 Python 后端到纯前端驱动跨平台架构的全面迁移。核心业务逻辑、GraphQL API 交互、WebSocket 队列处理以及任务调度器均已重写为 TypeScript 模块。
          </p>

          <p className="text-slate-500 dark:text-slate-400 leading-relaxed transition-colors">
             通过使用 <strong>Tauri 2.0</strong>，应用现已完美适配 Android、iOS、Windows、macOS 以及 Linux 平台，提供一致的极致体验。
          </p>
          
          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
              <div className="bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 p-3 rounded-xl shrink-0">
                <Icon name="layers" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 dark:text-slate-200">Tauri 2.0 核心</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">src-tauri 原生配置与权限定义，构建安全轻量的应用底座。</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
              <div className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-3 rounded-xl shrink-0">
                <Icon name="code" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 dark:text-slate-200">TypeScript 业务重构</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">从 LibraryService 到 WebSocketService，全链路类型安全。</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Code Structure Visual */}
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-lavender-accent rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity transform rotate-1"></div>
          
          <div className="relative bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden transform group-hover:-translate-y-1 transition-transform duration-500">
            {/* IDE Header */}
            <div className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-4 py-3 flex items-center justify-between transition-colors">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                <Icon name="data_object" size="sm" className="text-[10px]" />
                seat-grabber-v2
              </div>
              <div className="w-10"></div>
            </div>

            {/* IDE Content */}
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto bg-white dark:bg-slate-900 transition-colors">
              <div className="flex flex-col gap-1 select-none">
                
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-1">
                  <Icon name="expand_more" size="sm" />
                  <span className="font-bold text-slate-700 dark:text-slate-200">seat-grabber-v2</span>
                </div>
                
                <div className="flex flex-col gap-1 border-l border-slate-100 dark:border-slate-800 ml-2 pl-3">
                  
                  {/* src-tauri */}
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 py-1">
                    <Icon name="folder" size="sm" className="text-orange-400" />
                    <span className="font-semibold">src-tauri</span>
                    <span className="text-xs text-slate-300 dark:text-slate-600 ml-auto italic pr-4 hidden sm:inline">Permissions</span>
                  </div>

                  {/* src */}
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 py-1">
                     <Icon name="folder_open" size="sm" className="text-blue-400" />
                     <span className="font-semibold">src</span>
                  </div>
                    
                  {/* src children */}
                  <div className="flex flex-col gap-1 border-l border-slate-100 dark:border-slate-800 ml-2 pl-3">
                       
                       {/* services folder */}
                       <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                          <Icon name="folder_open" size="sm" className="text-purple-400" />
                          <span>services</span>
                       </div>
                       
                       {/* services files */}
                       <div className="flex flex-col gap-0.5 border-l border-slate-100 dark:border-slate-800 ml-2 pl-3 mb-1">
                          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 bg-blue-50/50 dark:bg-blue-900/20 rounded px-2 py-1 border border-blue-100/50 dark:border-blue-800/50">
                             <Icon name="description" size="sm" className="text-blue-500" />
                             <span className="text-slate-700 dark:text-slate-200">LibraryService.ts</span>
                             <span className="text-[10px] text-blue-400 ml-auto">GraphQL</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded px-2 py-1 transition-colors">
                             <Icon name="description" size="sm" className="text-blue-500" />
                             <span>SchedulerService.ts</span>
                             <span className="text-[10px] text-slate-300 dark:text-slate-600 ml-auto">Core</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded px-2 py-1 transition-colors">
                             <Icon name="description" size="sm" className="text-blue-500" />
                             <span>WebSocketService.ts</span>
                             <span className="text-[10px] text-slate-300 dark:text-slate-600 ml-auto">Socket</span>
                          </div>
                       </div>

                       {/* pages folder */}
                       <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 py-1">
                          <Icon name="folder" size="sm" className="text-emerald-400" />
                          <span>pages</span>
                          <span className="text-xs text-slate-300 dark:text-slate-600 ml-auto pr-4 hidden sm:inline">Dashboard</span>
                       </div>

                       {/* components folder */}
                       <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 py-1">
                          <Icon name="folder" size="sm" className="text-yellow-400" />
                          <span>components</span>
                       </div>
                  </div>

                </div>
              </div>
            </div>
            
            {/* Status Bar */}
            <div className="bg-primary text-white text-[10px] px-3 py-1.5 flex justify-between items-center font-sans tracking-wide">
               <div className="flex gap-4">
                 <span className="flex items-center gap-1"><Icon name="branch" size="sm" className="text-[10px]" /> main</span>
                 <span>0 errors</span>
               </div>
               <div className="flex gap-3 opacity-90">
                 <span>Ln 12, Col 34</span>
                 <span>UTF-8</span>
                 <span>TypeScript React</span>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};