import React from 'react';
import { View } from '../types';

interface PasteTextProps {
  onNavigate: (view: View) => void;
  onBack: () => void;
}

export const PasteText: React.FC<PasteTextProps> = ({ onNavigate, onBack }) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between px-4 py-3 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md sticky top-0 z-20 border-b border-slate-200/50 dark:border-slate-800">
        <button onClick={onBack} className="group flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined text-slate-900 dark:text-white group-hover:text-primary transition-colors">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight flex-1 text-center pr-10">
          粘贴文本
        </h2>
      </header>

      {/* Main Scrollable Content */}
      <main className="flex-1 overflow-y-auto no-scrollbar w-full max-w-lg mx-auto p-4 pb-32">
        {/* Topic Input Section */}
        <div className="mb-6 animate-fade-in-up">
          <label className="block mb-2 ml-1">
            <span className="text-slate-900 dark:text-slate-100 text-base font-bold">题目</span>
            <span className="text-slate-500 dark:text-slate-400 text-xs font-normal ml-2">有助于 AI 更精准评分</span>
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors text-[20px]">title</span>
            </div>
            <input 
              className="w-full pl-11 pr-4 py-4 bg-white dark:bg-surface-dark border border-transparent focus:border-primary/20 rounded-2xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-primary/10 shadow-soft transition-all duration-200 font-medium" 
              placeholder="请输入申论题目..." 
              type="text" 
            />
          </div>
        </div>

        {/* Essay Body Input Section */}
        <div className="flex-1 flex flex-col animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <div className="flex justify-between items-center mb-2 ml-1">
            <label className="text-slate-900 dark:text-slate-100 text-base font-bold">正文</label>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/5 hover:bg-primary/10 dark:bg-primary/20 dark:hover:bg-primary/30 text-primary text-xs font-bold transition-all active:scale-95">
              <span className="material-symbols-outlined text-[16px]">content_paste</span>
              <span>一键粘贴</span>
            </button>
          </div>
          <div className="relative flex-1 flex flex-col bg-white dark:bg-surface-dark rounded-2xl shadow-soft overflow-hidden group border border-transparent focus-within:border-primary/20 focus-within:ring-4 focus-within:ring-primary/10 transition-all duration-200">
            <textarea 
              className="w-full flex-1 min-h-[400px] resize-none border-none bg-transparent p-5 text-base text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-0 leading-loose" 
              placeholder={`请粘贴或直接输入您的申论文章...\n\n建议直接粘贴，AI 将自动识别段落结构。`}
            ></textarea>
            {/* Character Counter Footer */}
            <div className="px-5 py-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
                <span className="material-symbols-outlined text-[16px]">info</span>
                <span className="text-xs">支持最大 3000 字</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold font-mono tabular-nums">
                0<span className="text-slate-300 dark:text-slate-600 mx-1">/</span>1000 字
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Action Area */}
      <div className="fixed bottom-0 left-0 right-0 p-4 pb-8 bg-gradient-to-t from-background-light via-background-light/95 to-transparent dark:from-background-dark dark:via-background-dark/95 z-30 pointer-events-none">
        <div className="max-w-lg mx-auto pointer-events-auto">
          <button 
            onClick={() => onNavigate('report')}
            className="w-full relative group overflow-hidden rounded-2xl bg-primary h-14 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 active:shadow-primary/20 transition-all duration-200"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
            <div className="relative flex items-center justify-center gap-3">
              <span className="material-symbols-outlined text-white">auto_awesome</span>
              <span className="text-white text-lg font-bold tracking-wide">开始 AI 智能批改</span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/5 to-transparent -z-10 pointer-events-none"></div>
    </div>
  );
};