import React, { useEffect, useState } from 'react';
import { Icon } from '../components/Icon';

interface CommitAuthor {
  name: string;
  date: string;
}

interface Commit {
  sha: string;
  commit: {
    author: CommitAuthor;
    message: string;
  };
  html_url: string;
}

export const Changelog: React.FC = () => {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/VenenoSix24/igolib-ldu/commits?per_page=20');
        if (!response.ok) {
          throw new Error('Failed to fetch commits');
        }
        const data = await response.json();
        setCommits(data);
      } catch (err) {
        setError('无法加载更新日志，请稍后重试。');
      } finally {
        setLoading(false);
      }
    };

    fetchCommits();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('zh-CN', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 px-4 py-1.5 rounded-full mb-6 transition-colors">
            <Icon name="history" size="sm" />
            <span className="text-xs font-bold uppercase tracking-wider">Commit History</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 transition-colors">
            更新日志
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto transition-colors">
            每一次提交，都是为了更好的体验。
          </p>
        </div>

        {/* Content */}
        <div className="glass-card rounded-3xl p-8 md:p-12 relative transition-colors">
          {loading && (
             <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                <Icon name="sync" size="3xl" className="animate-spin mb-4" />
                <p>正在拉取最新数据...</p>
             </div>
          )}

          {error && (
            <div className="text-center py-20 text-slate-500">
               <Icon name="wifi_off" size="3xl" className="mb-4 text-slate-300" />
               <p>{error}</p>
            </div>
          )}

          {!loading && !error && (
            <div className="space-y-8 relative before:absolute before:left-[27px] md:before:left-[140px] before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-700">
              {commits.map((item) => (
                <div key={item.sha} className="relative flex flex-col md:flex-row gap-4 md:gap-12 group">
                  {/* Date Column */}
                  <div className="pl-14 md:pl-0 md:w-[140px] md:text-right shrink-0">
                    <div className="text-sm font-bold text-slate-500 dark:text-slate-400">
                       {formatDate(item.commit.author.date)}
                    </div>
                  </div>

                  {/* Dot on Timeline */}
                  <div className="absolute left-[21px] md:left-[134px] top-1.5 w-3.5 h-3.5 bg-white dark:bg-slate-800 border-2 border-primary rounded-full z-10 group-hover:scale-125 transition-transform"></div>

                  {/* Content Column */}
                  <div className="flex-1 pb-4 md:pb-0 pl-14 md:pl-0">
                    <a 
                      href={item.html_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-lg transition-all"
                    >
                      <p className="font-bold text-slate-800 dark:text-slate-200 mb-2 leading-relaxed">
                        {item.commit.message}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                         <Icon name="person" size="sm" className="text-[14px]" />
                         {item.commit.author.name}
                         <span className="mx-1">•</span>
                         <span className="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-slate-500 dark:text-slate-400">
                           {item.sha.substring(0, 7)}
                         </span>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};