import React from 'react';
import { View } from '../types';

interface LayoutProps {
  currentView: View;
  children: React.ReactNode;
  onNavigate: (view: View) => void;
}

export const Layout: React.FC<LayoutProps> = ({ currentView, children, onNavigate }) => {
  const showBottomNav = ['home', 'history', 'profile', 'gradingEntry'].includes(currentView);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl border-x border-slate-200 dark:border-slate-800">
      <div className={`flex-1 flex flex-col ${showBottomNav ? 'pb-20' : ''}`}>
        {children}
      </div>

      {showBottomNav && (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 pb-safe pt-1 max-w-md mx-auto">
          <div className="flex justify-around items-end h-16 pb-2">
            <button 
              onClick={() => onNavigate('home')}
              className={`flex flex-col items-center gap-1 w-full transition-colors ${currentView === 'home' ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <span className={`material-symbols-outlined text-[24px] ${currentView === 'home' ? 'filled' : ''}`}>home</span>
              <span className="text-[10px] font-medium">首页</span>
            </button>

            <button 
              onClick={() => onNavigate('history')}
              className={`flex flex-col items-center gap-1 w-full transition-colors ${currentView === 'history' ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}`}
            >
               <span className={`material-symbols-outlined text-[24px] ${currentView === 'history' ? 'filled' : ''}`}>history_edu</span>
              <span className="text-[10px] font-medium">历史</span>
            </button>

            <div className="relative -top-6">
              <button 
                onClick={() => onNavigate('gradingEntry')}
                className="flex items-center justify-center size-14 bg-primary rounded-full shadow-lg shadow-primary/40 text-white transform active:scale-95 transition-transform border-4 border-background-light dark:border-background-dark"
              >
                <span className="material-symbols-outlined text-3xl">edit_document</span>
              </button>
            </div>

            <button 
              className="flex flex-col items-center gap-1 w-full text-slate-400 hover:text-slate-600 transition-colors"
            >
              <span className="material-symbols-outlined text-[24px]">forum</span>
              <span className="text-[10px] font-medium">社区</span>
            </button>

            <button 
              onClick={() => onNavigate('profile')}
              className={`flex flex-col items-center gap-1 w-full transition-colors ${currentView === 'profile' ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <span className={`material-symbols-outlined text-[24px] ${currentView === 'profile' ? 'filled' : ''}`}>person</span>
              <span className="text-[10px] font-medium">我的</span>
            </button>
          </div>
        </nav>
      )}
    </div>
  );
};