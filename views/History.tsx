import React from 'react';
import { EssayRecord, View } from '../types';
import { ScoreRing } from '../components/ScoreRing';

const historyData: EssayRecord[] = [
  { id: '1', title: '2024年国考申论副省级真题：关于“流动中国”的思考', date: '2024.03.15 14:30', score: 78.5, type: 'A类', tags: ['A类'] },
  { id: '2', title: '2023年省考联考申论B卷：乡村振兴战略实施路径', date: '2024.03.12 09:15', score: 68.0, type: 'B类', tags: ['B类'] },
  { id: '3', title: '2022年国考申论行政执法卷：法治政府建设', date: '2024.03.01 16:45', score: 59.5, type: '行政执法', tags: ['行政执法'] },
  { id: '4', title: '2021年江苏省考申论A类：高质量发展', date: '2024.02.28 20:10', score: 82.0, type: 'A类', tags: ['江苏A类'] },
  { id: '5', title: '大作文专项训练：科技创新与人文精神', date: '2024.02.15 11:20', score: 72.5, type: '专项', tags: ['专项'] },
];

interface HistoryProps {
    onNavigate: (view: View) => void;
}

export const History: React.FC<HistoryProps> = ({ onNavigate }) => {
  return (
    <>
      <header className="flex items-center justify-center bg-background-light dark:bg-background-dark p-4 pt-12 pb-2 sticky top-0 z-20">
        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">批改历史</h2>
      </header>

      {/* Search Bar */}
      <div className="px-4 py-2 bg-background-light dark:bg-background-dark z-10">
        <label className="flex flex-col h-11 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-full h-full shadow-sm">
            <div className="text-slate-400 flex border-none bg-white dark:bg-surface-dark items-center justify-center pl-4 rounded-l-full border-r-0">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input 
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-full text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-white dark:bg-surface-dark focus:border-none h-full placeholder:text-slate-400 px-3 pl-2 text-sm font-normal leading-normal" 
              placeholder="搜索申论题目..." 
            />
          </div>
        </label>
      </div>

      {/* Filter Chips */}
      <div className="flex gap-2 px-4 py-2 overflow-x-auto no-scrollbar bg-background-light dark:bg-background-dark z-10 pb-4">
        <button className="flex h-8 shrink-0 items-center justify-center gap-x-1 rounded-full bg-primary text-white pl-4 pr-3 shadow-md shadow-primary/20 transition-all">
          <p className="text-sm font-medium leading-normal">全部</p>
        </button>
        {['近三天', '本周', '本月'].map((label) => (
          <button key={label} className="flex h-8 shrink-0 items-center justify-center gap-x-1 rounded-full bg-white dark:bg-surface-dark pl-4 pr-3 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 shadow-sm transition-all">
            <p className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-normal">{label}</p>
            <span className="material-symbols-outlined text-[18px] text-slate-400">expand_more</span>
          </button>
        ))}
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-3">
        {historyData.map((item) => (
          <div 
            key={item.id} 
            onClick={() => onNavigate('report')}
            className="group bg-surface-light dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700/50 flex items-center justify-between cursor-pointer active:scale-[0.99] transition-transform"
          >
            <div className="flex flex-col flex-1 mr-4 min-w-0">
              <h3 className="text-slate-900 dark:text-white text-[15px] font-bold leading-tight mb-2 truncate">{item.title}</h3>
              <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500">
                <span>{item.date}</span>
                <span className="w-[1px] h-3 bg-slate-300 dark:bg-slate-600"></span>
                {item.type && (
                  <span className="bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 px-1.5 py-0.5 rounded text-[10px]">{item.type}</span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <ScoreRing 
                score={item.score} 
                size={48} 
                color={item.score >= 80 ? 'text-primary' : item.score >= 60 ? 'text-primary' : 'text-orange-500'} 
              />
              <span className="material-symbols-outlined text-slate-300 dark:text-slate-600">chevron_right</span>
            </div>
          </div>
        ))}
        
        <div className="py-4 flex justify-center">
          <span className="text-xs text-slate-400">没有更多记录了</span>
        </div>
      </div>
    </>
  );
};