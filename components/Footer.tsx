import React from 'react';
import { Icon } from './Icon';
import { Link } from 'react-router-dom';

interface SocialLinkProps {
  href: string;
  icon?: string; // Material Symbol Name
  svgPath?: React.ReactNode; // Custom SVG Path
  label: string;
}

const SocialButton: React.FC<SocialLinkProps> = ({ href, icon, svgPath, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-primary hover:bg-blue-50 dark:hover:bg-slate-700 transition-all cursor-pointer group"
  >
    {svgPath ? (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        {svgPath}
      </svg>
    ) : (
      <Icon name={icon || 'link'} size="sm" />
    )}
  </a>
);

export const Footer: React.FC = () => {
  const socialLinks: SocialLinkProps[] = [
    {
      label: "GitHub",
      href: "https://github.com/VenenoSix24/igolib-ldu", // Replace with actual URL
      svgPath: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    },
    {
      label: "Blog",
      href: "https://love.ivyris.top/", // Replace with actual URL
      svgPath: <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9zM6.18 15.64c-1.2 0-2.18.98-2.18 2.18s.98 2.18 2.18 2.18 2.18-.98 2.18-2.18-.98-2.18-2.18-2.18z" />
    },
    {
      label: "Website",
      href: "https://ivyris.top/", // Replace with actual URL
      svgPath: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    },
    {
      label: "X (Twitter)",
      href: "https://x.com/S1xlg", // Replace with actual URL
      svgPath: <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    },
    {
      label: "Telegram",
      href: "https://t.me/s1xig", // Replace with actual URL
      svgPath: <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    }
  ];

  return (
    <footer className="bg-white dark:bg-slate-900 py-16 border-t border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img src={`${import.meta.env.BASE_URL}assets/android-chrome-192x192.png`} alt="Logo" className="w-9 h-9 object-contain" />
              <h2 className="text-xl font-black text-slate-900 dark:text-white transition-colors">我去抢个座</h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm font-medium leading-relaxed text-sm transition-colors">
              专为学生设计的图书馆座位预约自动化系统，快速、可靠。<br />快说，谢谢波奇酱！
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 text-sm uppercase tracking-wider transition-colors">快速链接</h4>
            <ul className="space-y-3 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <li><a href="#features" className="hover:text-primary transition-colors flex items-center gap-2">功能特性</a></li>
              <li><a href="#process" className="hover:text-primary transition-colors flex items-center gap-2">使用流程</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors flex items-center gap-2">常见问题</a></li>
              <li><Link to="/changelog" className="hover:text-primary transition-colors flex items-center gap-2">更新日志</Link></li>
              <li><Link to="/#download-cta" className="hover:text-primary transition-colors flex items-center gap-2">下载客户端</Link></li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 text-sm uppercase tracking-wider transition-colors">关注我们</h4>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((link, index) => (
                <SocialButton key={index} {...link} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-bold transition-colors">
          <p>© 2026 我去抢个座 • All Rights Reserved</p>
          <div className="flex gap-6">
            <span>App Version: 1.0.25</span>
            <span>Core Logic: 4.6.25 TS</span>
            <a href="#" className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors">隐私权政策</a>
            <a href="#" className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};