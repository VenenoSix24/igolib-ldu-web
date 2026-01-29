import React from 'react';
import { Icon } from './Icon';

const Arrow: React.FC = () => (
  <div className="hidden md:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20 text-slate-300 dark:text-slate-600">
    <Icon name="trending_flat" size="3xl" />
  </div>
);

export const Process: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50/30 dark:bg-slate-900/30 relative transition-colors" id="process">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 transition-colors">使用流程</h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-lg transition-colors">四步开启图书馆学习之旅，简单直观</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Step 1 */}
          <div className="relative group">
            <div className="glass-card p-8 rounded-thick relative z-10 hover:border-primary/30 transition-colors h-full">
              <div className="text-5xl font-black text-primary/10 dark:text-primary/20 absolute top-4 right-6 pointer-events-none">01</div>
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center mb-6 text-primary transition-colors">
                <Icon name="school" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">配置学校</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">输入并设置全局 API 接口路径，适配所在学校环境。</p>
            </div>
            <Arrow />
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <div className="glass-card p-8 rounded-thick relative z-10 hover:border-primary/30 transition-colors h-full">
              <div className="text-5xl font-black text-primary/10 dark:text-primary/20 absolute top-4 right-6 pointer-events-none">02</div>
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center mb-6 text-primary transition-colors">
                <Icon name="key" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">凭证加载</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">直接粘贴用户 Cookie，系统将自动进行有效性校验。</p>
            </div>
            <Arrow />
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <div className="glass-card p-8 rounded-thick relative z-10 hover:border-primary/30 transition-colors h-full">
              <div className="text-5xl font-black text-primary/10 dark:text-primary/20 absolute top-4 right-6 pointer-events-none">03</div>
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center mb-6 text-primary transition-colors">
                <Icon name="touch_app" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">智能选座</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">从动态加载的场馆与座位列表中，精准挑选心仪位置。</p>
            </div>
            <Arrow />
          </div>

          {/* Step 4 */}
          <div className="relative group">
            <div className="glass-card p-8 rounded-thick relative z-10 hover:border-primary/30 transition-colors h-full">
              <div className="text-5xl font-black text-primary/10 dark:text-primary/20 absolute top-4 right-6 pointer-events-none">04</div>
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center mb-6 text-primary transition-colors">
                <Icon name="play_arrow" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">启动任务</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">点击开始并保持应用在前台运行，静待成功消息通知。</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};