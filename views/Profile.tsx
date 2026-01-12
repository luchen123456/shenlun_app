import React from 'react';

export const Profile: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Top Navigation Bar */}
      <div className="sticky top-0 z-50 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 justify-between border-b border-slate-200 dark:border-slate-800">
        <div className="w-12"></div>
        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">个人中心</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex items-center justify-center rounded-full w-10 h-10 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-white">
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>notifications</span>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-6">
        {/* Profile Header Section */}
        <div className="flex flex-col items-center pt-8 pb-8 px-4">
          <div className="relative mb-4 group cursor-pointer">
            <div 
              className="bg-center bg-no-repeat bg-cover rounded-full h-24 w-24 shadow-lg ring-4 ring-white dark:ring-slate-800" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzvwDO14jq1YkN51aZxjygorSPXQmaS9vpjtkhn12U0Oa8At7XhLG1iXEC0gMUFW2V7TZ3pXNuPcyewxwKIRMuJksDElgjppxcIB4BZSfDWtxmvV3d3eqoV60d1NQZG5BDwC7HkmtUX3aG9MdQU5DaGmThRpCOjW9pJzj0QTbxjpPPniDryeTU1rAF-HhpY7kRnJUJmizD6CpA3rp7Ho7Z-XzDqHr9TCicJ6-utnX2r9edvIYwDcgveN3CjcDL7QlhxR0ntm7yNoo")' }}
            >
            </div>
            <div className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-1.5 border-2 border-white dark:border-slate-800 shadow-sm flex items-center justify-center">
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>edit</span>
            </div>
          </div>
          <h1 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight text-center mb-1">申论考生小王</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium text-center mb-4">ID: 8839201</p>
          
          {/* Stats & VIP Card */}
          <div className="flex items-center justify-center gap-3 w-full max-w-sm">
            <div className="flex-1 bg-white dark:bg-slate-800 rounded-2xl p-3 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center gap-1">
              <span className="text-primary font-bold text-xl">12</span>
              <span className="text-slate-500 dark:text-slate-400 text-xs font-medium">累计批改</span>
            </div>
            <div className="flex-1 bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-3 shadow-md shadow-primary/20 flex flex-col items-center justify-center gap-1 text-white relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>workspace_premium</span>
                <span className="font-bold text-sm">VIP 会员</span>
              </div>
              <span className="text-white/80 text-xs font-medium">有效期至 2024.12</span>
            </div>
          </div>
        </div>

        {/* Menu List */}
        <div className="px-4 w-full max-w-xl mx-auto space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="group flex items-center gap-4 px-4 py-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer border-b border-slate-100 dark:border-slate-700/50 last:border-0">
              <div className="flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 shrink-0 w-10 h-10">
                <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>bookmark</span>
              </div>
              <div className="flex-1 flex items-center justify-between">
                <p className="text-slate-900 dark:text-white text-base font-medium">我的收藏</p>
                <span className="material-symbols-outlined text-slate-400 dark:text-slate-500" style={{ fontSize: '20px' }}>chevron_right</span>
              </div>
            </div>
            <div className="group flex items-center gap-4 px-4 py-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer border-b border-slate-100 dark:border-slate-700/50 last:border-0">
              <div className="flex items-center justify-center rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 shrink-0 w-10 h-10">
                <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>history_edu</span>
              </div>
              <div className="flex-1 flex items-center justify-between">
                <p className="text-slate-900 dark:text-white text-base font-medium">批改记录</p>
                <span className="material-symbols-outlined text-slate-400 dark:text-slate-500" style={{ fontSize: '20px' }}>chevron_right</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="group flex items-center gap-4 px-4 py-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer border-b border-slate-100 dark:border-slate-700/50 last:border-0">
              <div className="flex items-center justify-center rounded-xl bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 shrink-0 w-10 h-10">
                <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>chat_bubble_outline</span>
              </div>
              <div className="flex-1 flex items-center justify-between">
                <p className="text-slate-900 dark:text-white text-base font-medium">意见反馈</p>
                <span className="material-symbols-outlined text-slate-400 dark:text-slate-500" style={{ fontSize: '20px' }}>chevron_right</span>
              </div>
            </div>
            <div className="group flex items-center gap-4 px-4 py-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer border-b border-slate-100 dark:border-slate-700/50 last:border-0">
              <div className="flex items-center justify-center rounded-xl bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 shrink-0 w-10 h-10">
                <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>info</span>
              </div>
              <div className="flex-1 flex items-center justify-between">
                <p className="text-slate-900 dark:text-white text-base font-medium">关于我们</p>
                <span className="material-symbols-outlined text-slate-400 dark:text-slate-500" style={{ fontSize: '20px' }}>chevron_right</span>
              </div>
            </div>
             <div className="group flex items-center gap-4 px-4 py-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer border-b border-slate-100 dark:border-slate-700/50 last:border-0">
              <div className="flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 shrink-0 w-10 h-10">
                <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>settings</span>
              </div>
              <div className="flex-1 flex items-center justify-between">
                <p className="text-slate-900 dark:text-white text-base font-medium">设置</p>
                <span className="material-symbols-outlined text-slate-400 dark:text-slate-500" style={{ fontSize: '20px' }}>chevron_right</span>
              </div>
            </div>
          </div>

          <button className="w-full py-3.5 rounded-2xl bg-white dark:bg-slate-800 text-red-500 font-bold shadow-sm border border-slate-100 dark:border-slate-700 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
            退出登录
          </button>
        </div>
      </div>
    </div>
  );
};