import React, { useState, useEffect } from 'react';
import { Icon } from './Icon';

type OS = 'Android' | 'Windows' | 'macOS' | 'Linux';

export const Download: React.FC = () => {
  const [activeTab, setActiveTab] = useState<OS>('Windows');

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
              <div className="animate-fade-in space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-green-100 p-4 rounded-2xl text-green-600 shrink-0">
                    <Icon name="android" size="4xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Android 客户端</h3>
                    <p className="text-slate-500 mb-4">适用于 Android 8.0 及以上版本</p>
                    <div className="flex flex-wrap gap-3">
                      <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold shadow-lg shadow-primary/20 hover:bg-blue-600 transition-colors flex items-center gap-2">
                        <Icon name="download" size="sm" /> arm64 (推荐)
                      </button>
                      <button className="bg-white border border-slate-200 text-slate-700 px-6 py-2 rounded-lg font-bold hover:bg-slate-50 transition-colors">
                        arm
                      </button>
                      <button className="bg-white border border-slate-200 text-slate-700 px-6 py-2 rounded-lg font-bold hover:bg-slate-50 transition-colors">
                        x86_64
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Windows Content */}
            {activeTab === 'Windows' && (
              <div className="animate-fade-in space-y-8">
                <div className="flex flex-col md:flex-row gap-8">
                   <div className="bg-blue-50 p-6 rounded-2xl text-primary shrink-0 h-fit">
                    <Icon name="window" size="5xl" />
                  </div>
                  <div className="flex-1 space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">Windows 64 位</h3>
                      <div className="flex flex-wrap gap-3">
                        <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold shadow-lg shadow-primary/20 hover:bg-blue-600 transition-colors flex items-center gap-2">
                           <Icon name="download" size="sm" /> exe (推荐)
                        </button>
                         <button className="bg-white border border-slate-200 text-slate-700 px-6 py-2 rounded-lg font-bold hover:bg-slate-50 transition-colors">
                          便携版 (次推荐)
                        </button>
                        <button className="bg-white border border-slate-200 text-slate-700 px-6 py-2 rounded-lg font-bold hover:bg-slate-50 transition-colors">
                          msi
                        </button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-4">Windows 32 位</h3>
                      <div className="flex flex-wrap gap-3">
                        <button className="bg-white border border-slate-200 text-slate-700 px-5 py-2 rounded-lg font-bold hover:bg-slate-50 transition-colors">
                          exe (推荐)
                        </button>
                         <button className="bg-white border border-slate-200 text-slate-700 px-5 py-2 rounded-lg font-bold hover:bg-slate-50 transition-colors">
                          便携版
                        </button>
                        <button className="bg-white border border-slate-200 text-slate-700 px-5 py-2 rounded-lg font-bold hover:bg-slate-50 transition-colors">
                          msi
                        </button>
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-100 rounded-xl p-5 flex gap-4">
                      <div className="text-amber-500 shrink-0">
                        <Icon name="warning" size="lg" />
                      </div>
                      <div className="text-sm text-slate-600 space-y-2">
                        <p className="font-bold text-amber-700">Important</p>
                        <p>由于构建未封装 Webview ，可能不能在 Windows 7 上运行。</p>
                        <p>安装时如果弹出 「Windows 已保护您的电脑」，请点击 <span className="font-bold">“更多信息” -> “仍要运行”</span>。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* macOS Content */}
            {activeTab === 'macOS' && (
              <div className="animate-fade-in space-y-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="bg-slate-100 p-6 rounded-2xl text-slate-800 shrink-0 h-fit">
                    <Icon name="laptop_mac" size="5xl" />
                  </div>
                  <div className="flex-1 space-y-8">
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
                 <div className="flex items-start gap-6">
                  <div className="bg-slate-800 p-4 rounded-2xl text-white shrink-0">
                    <Icon name="terminal" size="4xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Linux 客户端</h3>
                    <div className="flex flex-wrap gap-3">
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