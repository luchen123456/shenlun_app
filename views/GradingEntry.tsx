import React from 'react';
import { View } from '../types';

interface GradingEntryProps {
  onNavigate: (view: View) => void;
}

export const GradingEntry: React.FC<GradingEntryProps> = ({ onNavigate }) => {
  return (
    <>
      <header className="flex items-center justify-between px-5 pt-6 pb-2 bg-background-light dark:bg-background-dark sticky top-0 z-10 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90">
        <button className="flex items-center justify-center size-10 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300">
          <span className="material-symbols-outlined text-2xl">grid_view</span>
        </button>
        <h1 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">申论 AI 智能批改教练</h1>
        <button className="flex items-center justify-center size-10 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors relative text-slate-700 dark:text-slate-300">
          <span className="material-symbols-outlined text-2xl">notifications</span>
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-background-light dark:border-background-dark"></span>
        </button>
      </header>

      <div className="flex-1 px-5 py-4 flex flex-col gap-6 overflow-y-auto no-scrollbar">
        {/* Hero Card */}
        <div className="group relative w-full overflow-hidden rounded-3xl bg-primary text-white shadow-glow transition-transform active:scale-[0.98]">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white opacity-5 blur-3xl"></div>
          <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-blue-400 opacity-10 blur-2xl"></div>
          <div className="relative flex flex-col items-center justify-center p-8 py-10 text-center">
            <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm shadow-inner ring-4 ring-white/10">
              <span className="material-symbols-outlined text-4xl text-white">photo_camera</span>
            </div>
            <h2 className="text-2xl font-bold leading-tight tracking-tight">上传手写试卷</h2>
            <p className="mt-2 text-blue-100 text-sm font-medium opacity-90">AI 智能识别字迹 · 秒出评分报告</p>
            <button className="mt-6 flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-primary shadow-lg transition-colors hover:bg-blue-50">
              <span>立即拍照</span>
              <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Paste Text Action */}
        <div 
          onClick={() => onNavigate('pasteText')}
          className="group flex items-center justify-between gap-4 rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-soft hover:shadow-card transition-all active:scale-[0.99] cursor-pointer border border-slate-100 dark:border-slate-700"
        >
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/30 text-primary">
              <span className="material-symbols-outlined text-2xl">edit_document</span>
            </div>
            <div className="flex flex-col">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">粘贴文本批改</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">支持直接输入或粘贴文字内容</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-slate-300 dark:text-slate-600">chevron_right</span>
        </div>

        {/* Recent History */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">最近批改记录</h3>
            <button onClick={() => onNavigate('history')} className="text-sm font-medium text-primary hover:text-blue-600 flex items-center gap-0.5">
              全部
              <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
            </button>
          </div>

          <div className="flex flex-col gap-3">
             <div onClick={() => onNavigate('report')} className="flex flex-col gap-3 rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-soft border border-slate-100 dark:border-slate-700 active:scale-[0.99] transition-transform cursor-pointer">
              <div className="flex justify-between items-start gap-3">
                <div className="flex gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400">
                    <span className="material-symbols-outlined text-xl">description</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white line-clamp-1 text-sm">2024年国考申论模拟卷一</h4>
                    <p className="text-xs text-slate-400 mt-1 font-medium">2023-10-27 14:30</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xl font-bold text-primary">78.5<span className="text-xs font-normal text-slate-400 ml-0.5">分</span></span>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3">
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                  <span className="font-bold text-primary mr-1">AI点评:</span>论点清晰明确，结构严谨，但在论据支撑方面略显单薄，建议增加具体案例分析...
                </p>
              </div>
            </div>

            <div onClick={() => onNavigate('report')} className="flex flex-col gap-3 rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-soft border border-slate-100 dark:border-slate-700 active:scale-[0.99] transition-transform cursor-pointer">
              <div className="flex justify-between items-start gap-3">
                <div className="flex gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                    <span className="material-symbols-outlined text-xl">history_edu</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white line-clamp-1 text-sm">“乡村振兴”主题专项练习</h4>
                    <p className="text-xs text-slate-400 mt-1 font-medium">2023-10-25 09:15</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xl font-bold text-slate-700 dark:text-slate-300">65.0<span className="text-xs font-normal text-slate-400 ml-0.5">分</span></span>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3">
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                  <span className="font-bold text-primary mr-1">AI点评:</span>字迹识别成功。文章逻辑性有待加强，段落之间的过渡不够自然，建议使用更多连接词...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};