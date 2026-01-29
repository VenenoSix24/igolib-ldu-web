import React from 'react';
import { Icon } from './Icon';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  colorClass: string;
  iconColorClass: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, colorClass, iconColorClass }) => (
  <div className="glass-card p-8 rounded-thick hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:border-primary/20 group h-full">
    <div className={`w-14 h-14 ${colorClass} ${iconColorClass} rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
      <Icon name={icon} size="3xl" className="font-bold" />
    </div>
    <h3 className="text-xl font-black mb-3 text-slate-800 group-hover:text-primary transition-colors">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
  </div>
);

export const Features: React.FC = () => {
  const features = [
    {
      icon: 'devices',
      title: '全平台覆盖',
      description: '完美支持 Android, Windows, macOS 以及 Linux，多端同步，无缝切换。',
      colorClass: 'bg-blue-100',
      iconColorClass: 'text-primary'
    },
    {
      icon: 'memory',
      title: '纯单机驱动',
      description: '采用异步并发逻辑，本地与服务器直接通信，无云端延迟中转。',
      colorClass: 'bg-cyan-100',
      iconColorClass: 'text-cyan-600'
    },
    {
      icon: 'cloud_sync',
      title: '动态数据获取',
      description: '实时拉取场馆状态与座位信息，拒绝静态映射，确保数据100%准确。',
      colorClass: 'bg-purple-100',
      iconColorClass: 'text-lavender-accent'
    },
    {
      icon: 'account_tree',
      title: '多校区自由配置',
      description: '支持自定义 API 域名、Origin 及 Referer，轻松适配不同校区系统。',
      colorClass: 'bg-yellow-100',
      iconColorClass: 'text-yellow-600'
    },
    {
      icon: 'calendar_today',
      title: '明日预约模式',
      description: 'WebSocket 队列仿真，针对次日预约进行毫秒级精准对时起跑。',
      colorClass: 'bg-emerald-100',
      iconColorClass: 'text-emerald-600'
    },
    {
      icon: 'electric_bolt',
      title: '即时抢座模式',
      description: '智能重试策略配合极速响应，实时捡漏与释放抢夺的终极利器。',
      colorClass: 'bg-red-100',
      iconColorClass: 'text-red-600'
    },
    {
      icon: 'palette',
      title: '精美 Web UI',
      description: '基于 TailwindCSS 与动画库构建，体验流畅丝滑的高颜值交互界面。',
      colorClass: 'bg-indigo-100',
      iconColorClass: 'text-indigo-600'
    },
    {
      icon: 'dark_mode',
      title: '深色模式支持',
      description: '支持随系统主题自动切换或手动调节，夜间使用也能护眼专注。',
      colorClass: 'bg-slate-200',
      iconColorClass: 'text-slate-700'
    },
  ];

  return (
    <section className="py-32 relative bg-transparent" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">功能特性</h2>
          <p className="text-slate-500 font-medium text-lg">全方位技术支撑，重新定义图书馆抢座效率</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};