import React, { useState } from 'react';
import { Icon } from './Icon';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-slate-200 dark:border-slate-700 last:border-0">
    <button 
      onClick={onClick}
      className="w-full py-6 flex items-center justify-between text-left group"
    >
      <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-primary' : 'text-slate-800 dark:text-slate-200 group-hover:text-primary'}`}>
        {question}
      </span>
      <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-slate-400'}`}>
        <Icon name="expand_more" />
      </span>
    </button>
    <div 
      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
    >
      <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
        {answer}
      </p>
    </div>
  </div>
);

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "使用这个软件会导致账号被封禁吗？",
      answer: "我们的核心逻辑是模拟真实用户的网页操作（Http Request），并且不包含任何暴力破解或攻击性行为。虽然我们尽力模拟正常请求频率，但任何自动化工具都存在理论风险，建议合理设置刷新间隔（推荐 3000ms 以上）。"
    },
    {
      question: "为什么 Windows 提示“已保护您的电脑”？",
      answer: "这是因为我们是开源免费项目，没有购买昂贵的 EV 代码签名证书（每年需数千元）。请点击弹窗中的「更多信息」然后选择「仍要运行」即可。代码完全开源，安全可查。"
    },
    {
      question: "支持哪些学校的图书馆系统？",
      answer: "目前完美支持使用“利昂系统” (Lyd) 的大多数高校图书馆。如果您的学校系统 API 结构与标准版一致，只需在设置中更改 API 域名即可直接使用。我们也正在适配更多系统。"
    },
    {
      question: "如何获取我的 Cookie？",
      answer: "最简单的方法是：在电脑浏览器登录学校图书馆网页 -> 按 F12 打开开发者工具 -> 刷新页面 -> 在 Network 选项卡找到第一个请求 -> 复制 Request Headers 中的 Cookie 字段值粘贴到软件中。"
    },
    {
      question: "软件是收费的吗？",
      answer: "完全免费且开源。本项目旨在技术交流与方便同学，严禁用于任何商业用途或倒卖。如果您觉得好用，可以在 GitHub 给我们要给 Star。"
    }
  ];

  return (
    <section className="py-32 relative" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">常见问题解答</h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">您可能关心的安全与使用疑问，都在这里</p>
        </div>

        <div className="glass-card rounded-3xl px-8 md:px-12 py-4">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              {...faq} 
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-500 dark:text-slate-400">
            还有其他问题？欢迎加入我们的 <a href="#" className="text-primary font-bold hover:underline">Telegram 交流群</a> 或提交 <a href="#" className="text-primary font-bold hover:underline">GitHub Issue</a>
          </p>
        </div>
      </div>
    </section>
  );
};