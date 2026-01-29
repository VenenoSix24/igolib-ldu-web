import React, { useState, useEffect } from 'react';
import { Icon } from './Icon';

type OS = 'Android' | 'Windows' | 'macOS' | 'Linux';

export const Download: React.FC = () => {
  const [activeTab, setActiveTab] = useState<OS>('Windows');
  const [show32Bit, setShow32Bit] = useState(false);

  // Simple heuristic for OS detection
  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (/Android/i.test(userAgent)) {
      setActiveTab('Android');
    } else if (/Win/i.test(userAgent)) {
      setActiveTab('Windows');
    } else if (/Mac/i.test(userAgent)) {
      setActiveTab('macOS');
    } else if (/Linux/i.test(userAgent)) {
      setActiveTab('Linux');
    }
  }, []);

  const tabs: { id: OS; icon: string; label: string }[] = [
    { id: 'Windows', icon: 'window', label: 'Windows' },
    { id: 'macOS', icon: 'laptop_mac', label: 'macOS' },
    { id: 'Android', icon: 'android', label: 'Android' },
    { id: 'Linux', icon: 'terminal', label: 'Linux' },
  ];

  return (
    <section className="py-32 relative" id="download">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-6">
            <Icon name="cloud_download" size="sm" />
            <span className="text-xs font-bold uppercase tracking-wider">Free Download</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">立即下载体验</h2>
          <p className="text-slate-500 text-lg">选择您的操作系统，获取最新版本的客户端</p>
        </div>

        <div className="glass-card rounded-3xl overflow-hidden shadow-2xl">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-slate-200 bg-slate-50/50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-6 px-4 flex items-center justify-center gap-3 font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-primary shadow-sm border-t-4 border-t-primary'
                    : 'text-slate-500 hover:bg-white/60 hover:text-slate-700'
                }`}
              >
                <Icon name={tab.icon} className={activeTab === tab.id ? 'text-primary' : ''} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="p-8 md:p-12 bg-white/40 min-h-[400px]">
            
            {/* Android Content */}
            {activeTab === 'Android' && (
              <div className="animate-fade-in max-w-2xl mx-auto">
                <div className="flex items-center justify-center mb-8">
                   <div className="bg-green-100 p-6 rounded-3xl text-green-600">
                     <Icon name="android" size="5xl" />
                   </div>
                </div>
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Android 客户端</h3>
                  <p className="text-slate-500">随时随地，极速抢座。支持 Android 8.0+</p>
                </div>
                
                <div className="space-y-4">
                  <button className="w-full bg-green-600 text-white p-4 rounded-xl font-bold shadow-lg shadow-green-600/20 hover:bg-green-500 hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                      <Icon name="download" /> 下载 arm64-v8a APK
                      <span className="bg-white/20 text-xs px-2 py-0.5 rounded ml-2">推荐</span>
                  </button>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <button className="w-full bg-white border border-slate-200 text-slate-700 p-4 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 text-sm">
                       <Icon name="download" size="sm" /> arm-v7a
                    </button>
                    <button className="w-full bg-white border border-slate-200 text-slate-700 p-4 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 text-sm">
                       <Icon name="download" size="sm" /> x86_64
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Windows Content */}
            {activeTab === 'Windows' && (
              <div className="animate-fade-in space-y-8">
                <div className="flex flex-col md:flex-row gap-8">
                   <div className="bg-blue-50 p-6 rounded-2xl text-primary shrink-0 h-fit hidden md:block">
                    <Icon name="window" size="5xl" />
                  </div>
                  <div className="flex-1 space-y-8">
                    <div>
                      <div className="inline-flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full text-xs font-bold mb-4">
                        <Icon name="verified" size="sm" /> 官方推荐
                      </div>
                      <h2 className="text-3xl font-black text-slate-900 mb-2">Windows 客户端</h2>
                      <p className="text-slate-500">版本 v2.1.0 • 适用于 Windows 10/11</p>
                    </div>
                    
                    {/* 64-bit Buttons */}
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
                      <div className="flex items-center justify-between">
                         <p className="text-xs text-slate-400 font-bold uppercase">更多选项</p>
                         <button 
                            onClick={() => setShow32Bit(!show32Bit)}
                            className="text-sm text-slate-500 hover:text-primary flex items-center gap-1 font-bold"
                         >
                            {show32Bit ? '收起 32位版本' : '显示 32位版本'} <Icon name={show32Bit ? "expand_less" : "expand_more"} size="sm" />
                         </button>
                      </div>

                      {/* 32-bit Collapsible Section */}
                      {show32Bit && (
                        <div className="mt-4 p-4 bg-slate-50 rounded-xl animate-fade-in border border-slate-100">
                           <h4 className="text-sm font-bold text-slate-700 mb-3">Windows 32 位</h4>
                           <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                             <button className="bg-white border border-slate-200 text-slate-600 p-2 rounded-lg hover:text-primary hover:border-primary/50 transition-colors text-xs font-bold">
                               exe 安装包
                             </button>
                             <button className="bg-white border border-slate-200 text-slate-600 p-2 rounded-lg hover:text-primary hover:border-primary/50 transition-colors text-xs font-bold">
                               便携版
                             </button>
                             <button className="bg-white border border-slate-200 text-slate-600 p-2 rounded-lg hover:text-primary hover:border-primary/50 transition-colors text-xs font-bold">
                               MSI 安装包
                             </button>
                           </div>
                        </div>
                      )}
                    </div>
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

            {/* macOS Content */}
            {activeTab === 'macOS' && (
              <div className="animate-fade-in space-y-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="bg-slate-100 p-6 rounded-2xl text-slate-800 shrink-0 h-fit hidden md:block">
                    <Icon name="laptop_mac" size="5xl" />
                  </div>
                  <div className="flex-1 space-y-8">
                    <div>
                      <h2 className="text-3xl font-black text-slate-900 mb-2">macOS 客户端</h2>
                      <p className="text-slate-500">支持 macOS 11.0 (Big Sur) 及以上版本</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border border-slate-200 rounded-xl hover:border-primary/50 transition-colors bg-white">
                        <h4 className="font-bold text-slate-900 mb-2">Apple Silicon (M系列)</h4>
                        <button className="w-full bg-slate-900 text-white py-2 rounded-lg font-bold hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
                          <Icon name="download" size="sm" /> 下载 .dmg
                        </button>
                      </div>
                      <div className="p-4 border border-slate-200 rounded-xl hover:border-primary/50 transition-colors bg-white">
                        <h4 className="font-bold text-slate-900 mb-2">Intel 芯片</h4>
                        <button className="w-full bg-white border border-slate-200 text-slate-700 py-2 rounded-lg font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                           <Icon name="download" size="sm" /> 下载 .dmg
                        </button>
                      </div>
                    </div>

                    <div className="bg-red-50 border border-red-100 rounded-xl p-5 flex gap-4">
                      <div className="text-red-500 shrink-0">
                        <Icon name="error" size="lg" />
                      </div>
                      <div className="text-sm text-slate-600 w-full">
                        <p className="font-bold text-red-700 mb-2">Important</p>
                        <p className="mb-2">如果打开时提示 「已损坏」 或 「无法验证开发者」，请在终端执行以下命令：</p>
                        
                        <div className="bg-slate-800 text-slate-300 p-3 rounded-lg font-mono text-xs overflow-x-auto mt-2">
                          <p className="mb-2 text-slate-500"># 如果已经安装应用</p>
                          <p className="mb-4 select-all">xattr -rd com.apple.quarantine /Applications/我去抢个座.app</p>
                          
                          <p className="mb-2 text-slate-500"># 如果针对下载的 .dmg 文件</p>
                          <p className="select-all">xattr -rd com.apple.quarantine ~/Downloads/我去抢个座_*.dmg</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Linux Content */}
            {activeTab === 'Linux' && (
              <div className="animate-fade-in space-y-8">
                 <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="bg-slate-800 p-6 rounded-2xl text-white shrink-0">
                    <Icon name="terminal" size="5xl" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Linux 客户端</h3>
                    <p className="text-slate-500 mb-6 max-w-lg">
                      我们提供了主流发行版的打包格式。请根据您的系统选择合适的安装包。
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                      <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-primary/20 hover:bg-blue-600 transition-colors flex items-center gap-2">
                        <Icon name="widgets" size="sm" /> DEB包
                      </button>
                      <button className="bg-white border border-slate-200 text-slate-700 px-8 py-3 rounded-lg font-bold hover:bg-slate-50 transition-colors">
                        RPM包
                      </button>
                      <button className="bg-white border border-slate-200 text-slate-700 px-8 py-3 rounded-lg font-bold hover:bg-slate-50 transition-colors">
                        AppImage
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};