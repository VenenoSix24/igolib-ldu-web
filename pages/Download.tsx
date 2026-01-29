import React, { useState, useEffect } from 'react';
import { Icon } from '../components/Icon';

type OS = 'Windows' | 'macOS' | 'Linux' | 'Android' | 'Unknown';

const DownloadCard: React.FC<{
  active: boolean;
  os: string;
  icon: string;
  onClick: () => void;
}> = ({ active, os, icon, onClick }) => (
  <button
    onClick={onClick}
    className={`relative group flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300 border ${
      active
        ? 'bg-white border-primary shadow-xl shadow-primary/10 scale-105 z-10'
        : 'bg-white/50 border-slate-200 hover:bg-white hover:border-slate-300 hover:scale-102'
    }`}
  >
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-colors ${active ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-400 group-hover:text-slate-600'}`}>
      <Icon name={icon} size="3xl" />
    </div>
    <span className={`font-bold ${active ? 'text-slate-900' : 'text-slate-500'}`}>{os}</span>
    {active && (
      <span className="absolute -top-3 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full shadow-lg">
        Selected
      </span>
    )}
  </button>
);

const CopyBlock: React.FC<{ command: string }> = ({ command }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-slate-300 relative group my-2">
      <div className="overflow-x-auto pr-10 whitespace-pre-wrap break-all">
        <span className="text-green-400">$</span> {command}
      </div>
      <button 
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded-md hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        title="Copy"
      >
        <Icon name={copied ? "check" : "content_copy"} size="sm" />
      </button>
    </div>
  );
};

export const Download: React.FC = () => {
  const [detectedOS, setDetectedOS] = useState<OS>('Windows');
  const [activeTab, setActiveTab] = useState<OS>('Windows');

  useEffect(() => {
    const userAgent = navigator.userAgent;
    let os: OS = 'Unknown';
    if (/Android/i.test(userAgent)) os = 'Android';
    else if (/Win/i.test(userAgent)) os = 'Windows';
    else if (/Mac/i.test(userAgent)) os = 'macOS';
    else if (/Linux/i.test(userAgent)) os = 'Linux';

    if (os !== 'Unknown') {
      setDetectedOS(os);
      setActiveTab(os);
    }
  }, []);

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            下载 <span className="text-primary">我去抢个座</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            全平台支持，毫秒级同步。选择您的操作系统，开始高效的预约体验。
          </p>
        </div>

        {/* OS Selector Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
          {(['Windows', 'macOS', 'Linux', 'Android'] as OS[]).map((os) => (
            <DownloadCard
              key={os}
              os={os}
              active={activeTab === os}
              icon={
                os === 'Windows' ? 'window' :
                os === 'macOS' ? 'laptop_mac' :
                os === 'Android' ? 'android' : 'terminal'
              }
              onClick={() => setActiveTab(os)}
            />
          ))}
        </div>

        {/* Main Download Area */}
        <div className="glass-card rounded-3xl p-8 md:p-12 animate-fade-in relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"></div>

          {/* Windows View */}
          {activeTab === 'Windows' && (
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full text-xs font-bold mb-4">
                    <Icon name="verified" size="sm" /> 官方推荐
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 mb-2">Windows 客户端</h2>
                  <p className="text-slate-500">版本 v2.1.0 • 适用于 Windows 10/11</p>
                </div>
                
                <div className="flex flex-col gap-3">
                  <button className="bg-primary text-white p-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-blue-600 hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                    <Icon name="download" /> 下载 64位安装包 (.exe)
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                     <button className="bg-white border border-slate-200 text-slate-700 p-3 rounded-xl font-bold hover:bg-slate-50 transition-colors text-sm flex items-center justify-center gap-2">
                       便携版 (Portable)
                     </button>
                     <button className="bg-white border border-slate-200 text-slate-700 p-3 rounded-xl font-bold hover:bg-slate-50 transition-colors text-sm flex items-center justify-center gap-2">
                       MSI 安装包
                     </button>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs text-slate-400 font-bold uppercase mb-3">更多选项</p>
                  <a href="#" className="text-sm text-slate-500 hover:text-primary flex items-center gap-1">
                    下载 32位版本 <Icon name="open_in_new" size="sm" />
                  </a>
                </div>
              </div>

              {/* Windows Guide */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                 <h3 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
                   <Icon name="info" className="text-primary" /> 安装指引
                 </h3>
                 <div className="space-y-4 text-sm text-slate-600">
                   <details className="group">
                     <summary className="flex items-center justify-between cursor-pointer list-none font-medium hover:text-primary">
                       <span>提示 "Windows 已保护您的电脑"？</span>
                       <Icon name="expand_more" className="transition-transform group-open:rotate-180" />
                     </summary>
                     <div className="pt-3 pb-1 pl-4 border-l-2 border-slate-200 ml-1 mt-2 space-y-2">
                       <p>这是因为应用暂未购买昂贵的 EV 证书。请按以下步骤操作：</p>
                       <ol className="list-decimal list-inside space-y-1 text-slate-500">
                         <li>点击弹窗中的 <span className="font-bold text-slate-800">"更多信息"</span></li>
                         <li>点击下方的 <span className="font-bold text-slate-800">"仍要运行"</span> 按钮</li>
                       </ol>
                     </div>
                   </details>
                   
                   <details className="group">
                     <summary className="flex items-center justify-between cursor-pointer list-none font-medium hover:text-primary">
                       <span>Windows 7 用户必读</span>
                       <Icon name="expand_more" className="transition-transform group-open:rotate-180" />
                     </summary>
                     <div className="pt-3 pb-1 text-slate-500">
                       由于 Tauri 2.0 依赖较新的 WebView2 运行时，Win7 用户可能需要手动安装 WebView2 Runtime 或升级系统。建议使用 Windows 10 及以上版本。
                     </div>
                   </details>
                 </div>
              </div>
            </div>
          )}

          {/* macOS View */}
          {activeTab === 'macOS' && (
            <div className="grid md:grid-cols-2 gap-12">
               <div className="space-y-6">
                <div>
                   <div className="inline-flex items-center gap-2 text-slate-600 bg-slate-100 px-3 py-1 rounded-full text-xs font-bold mb-4">
                    <Icon name="apple" size="sm" /> macOS
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 mb-2">macOS 客户端</h2>
                  <p className="text-slate-500">支持 macOS 11.0 (Big Sur) 及以上版本</p>
                </div>
                
                <div className="flex flex-col gap-3">
                  <button className="bg-slate-900 text-white p-4 rounded-xl font-bold shadow-lg shadow-slate-900/20 hover:bg-slate-800 hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                    <Icon name="download" /> Apple Silicon (M1/M2/M3)
                  </button>
                  <button className="bg-white border border-slate-200 text-slate-700 p-4 rounded-xl font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-3">
                    <Icon name="download" /> Intel 芯片版本
                  </button>
                </div>
              </div>

               {/* macOS Guide */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                 <h3 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
                   <Icon name="terminal" className="text-slate-700" /> 终端修复指引
                 </h3>
                 <div className="space-y-4 text-sm text-slate-600">
                   <p>如果打开应用时提示 <span className="font-bold text-red-500">"已损坏"</span> 或 <span className="font-bold text-red-500">"无法验证开发者"</span>，请在终端中执行以下命令来移除隔离属性：</p>
                   
                   <div>
                     <p className="text-xs font-bold text-slate-400 mb-1">针对已安装的应用:</p>
                     <CopyBlock command="xattr -rd com.apple.quarantine /Applications/我去抢个座.app" />
                   </div>

                   <div>
                     <p className="text-xs font-bold text-slate-400 mb-1">针对下载的 DMG 文件:</p>
                     <CopyBlock command="xattr -rd com.apple.quarantine ~/Downloads/我去抢个座_*.dmg" />
                   </div>
                 </div>
              </div>
            </div>
          )}

           {/* Linux View */}
           {activeTab === 'Linux' && (
            <div className="text-center py-10">
              <div className="inline-flex p-4 bg-slate-100 rounded-full mb-6 text-slate-700">
                <Icon name="terminal" size="4xl" />
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-4">Linux 客户端</h2>
              <p className="text-slate-500 max-w-lg mx-auto mb-8">
                既然你使用 Linux，相信你已经知道如何安装了。我们提供了主流的打包格式。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                 <button className="bg-slate-800 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-700 transition-colors flex items-center gap-2">
                   .deb (Debian/Ubuntu)
                 </button>
                 <button className="bg-white border border-slate-200 text-slate-700 px-8 py-3 rounded-xl font-bold hover:bg-slate-50 transition-colors flex items-center gap-2">
                   .rpm (Fedora/RHEL)
                 </button>
                 <button className="bg-white border border-slate-200 text-slate-700 px-8 py-3 rounded-xl font-bold hover:bg-slate-50 transition-colors flex items-center gap-2">
                   .AppImage (Universal)
                 </button>
              </div>
            </div>
          )}

          {/* Android View */}
          {activeTab === 'Android' && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-black text-slate-900 mb-2">Android 客户端</h2>
                  <p className="text-slate-500">随时随地，极速抢座。支持 Android 8.0+</p>
                </div>
                
                <button className="bg-green-600 text-white p-4 rounded-xl font-bold shadow-lg shadow-green-600/20 hover:bg-green-500 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 w-full md:w-auto">
                    <Icon name="android" /> 下载 APK (arm64-v8a)
                    <span className="bg-white/20 text-xs px-2 py-0.5 rounded ml-2">推荐</span>
                </button>
                
                <div className="flex gap-3">
                   <button className="flex-1 bg-white border border-slate-200 text-slate-600 p-2 rounded-lg font-bold hover:bg-slate-50 text-xs">
                     arm-v7a
                   </button>
                   <button className="flex-1 bg-white border border-slate-200 text-slate-600 p-2 rounded-lg font-bold hover:bg-slate-50 text-xs">
                     x86_64
                   </button>
                </div>
              </div>
              <div className="bg-slate-100 rounded-2xl p-8 flex items-center justify-center">
                 <div className="text-center space-y-4">
                    <div className="w-32 h-32 bg-white rounded-xl mx-auto flex items-center justify-center shadow-sm">
                      <Icon name="qr_code_2" size="6xl" className="text-slate-800" />
                    </div>
                    <p className="text-sm font-bold text-slate-500">扫码直接下载</p>
                 </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};