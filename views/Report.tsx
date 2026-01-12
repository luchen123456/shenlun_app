import React from 'react';

interface ReportProps {
  onBack: () => void;
}

export const Report: React.FC<ReportProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark">
      {/* Header */}
      <div className="flex items-center bg-white dark:bg-slate-900 px-4 py-3 sticky top-0 z-30 shadow-sm border-b border-slate-100 dark:border-slate-800">
        <div onClick={onBack} className="text-slate-600 dark:text-slate-300 flex size-10 shrink-0 items-center justify-center rounded-full active:bg-slate-100 dark:active:bg-slate-800 transition-colors cursor-pointer">
          <span className="material-symbols-outlined">arrow_back</span>
        </div>
        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight flex-1 text-center pr-10">AI 专家批改报告</h2>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-32">
        <div className="flex flex-col gap-5 px-4 max-w-md mx-auto w-full pt-6">
          {/* Main Score Card */}
          <div className="animate-fade-in flex flex-col items-center justify-center bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-card border-t-4 border-primary relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full -mr-10 -mt-10 pointer-events-none"></div>
            <div className="relative size-60 flex items-center justify-center mb-2">
              <div className="absolute inset-0 rounded-full border-[12px] border-slate-100 dark:border-slate-700/50"></div>
              <svg className="size-full -rotate-90 transform drop-shadow-lg relative z-10" viewBox="0 0 120 120">
                <circle cx="60" cy="60" fill="none" r="54" stroke="url(#scoreGradient)" strokeDasharray="278 339" strokeLinecap="round" strokeWidth="12"></circle>
                <defs>
                  <linearGradient id="scoreGradient" x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#1162d4"></stop>
                    <stop offset="100%" stopColor="#c5a365"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute flex flex-col items-center justify-center inset-0 z-20">
                <div className="flex items-baseline">
                  <span className="text-7xl font-black text-primary dark:text-blue-400 tracking-tighter drop-shadow-sm">82</span>
                  <span className="text-xl font-bold text-slate-400 dark:text-slate-500 ml-1">/100</span>
                </div>
                <div className="mt-2 px-3 py-1 bg-gov-gold-light dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-xs font-bold rounded-full border border-yellow-200 dark:border-yellow-700 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-gov-gold">workspace_premium</span>
                  超越 92% 考生
                </div>
              </div>
            </div>
            <p className="text-slate-500 text-sm font-medium dark:text-slate-400 mt-2">批改时间：2023.10.27 14:30</p>
          </div>

          {/* Detailed Scores */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-card border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-5 bg-gov-gold rounded-full"></div>
              <h3 className="text-slate-900 dark:text-white font-bold text-lg">各维度评分详情</h3>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { label: '要点全面性', score: 35, total: 40, comment: '关键采分点提取精准，仅遗漏“产业联动”次要点。', color: 'text-green-600' },
                { label: '语言精炼度', score: 22, total: 30, comment: '部分长难句表述不够简洁，建议多用短句。', color: 'text-orange-600' },
                { label: '逻辑结构', score: 18, total: 20, comment: '总分结构运用娴熟，层级关系清晰合理。', color: 'text-green-600' },
                { label: '格式规范', score: 7, total: 10, comment: '标题未居中，段落首行缩进有误。', color: 'text-orange-600' }
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{item.label}</span>
                    <div className="text-xs font-medium text-slate-500">
                      <span className="text-primary font-bold text-base">{item.score}</span> / {item.total}
                    </div>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2 mb-1.5 overflow-hidden">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${(item.score / item.total) * 100}%` }}></div>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-700/50 p-2 rounded border border-slate-100 dark:border-slate-700">
                    <span className={`${item.color} font-bold mr-1`}>评语:</span>
                    {item.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Checklist */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-card border border-slate-100 dark:border-slate-700">
            <div className="p-4 bg-blue-50/50 dark:bg-slate-700/30 border-b border-blue-100 dark:border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">fact_check</span>
                <h3 className="text-slate-900 dark:text-white font-bold text-lg">要点核对表</h3>
              </div>
              <span className="text-xs font-medium text-slate-500 bg-white dark:bg-slate-600 px-2 py-1 rounded border border-slate-200 dark:border-slate-500">匹配度 85%</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-700">
                  <tr>
                    <th className="px-4 py-3 w-[45%]" scope="col">材料核心要点</th>
                    <th className="px-2 py-3 w-[20%] text-center" scope="col">状态</th>
                    <th className="px-4 py-3 w-[35%]" scope="col">未体现原因/备注</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                  <tr className="bg-white dark:bg-slate-800">
                    <td className="px-4 py-3 font-medium text-slate-700 dark:text-slate-200">依托特色资源发展乡村旅游</td>
                    <td className="px-2 py-3 text-center">
                      <div className="inline-flex items-center justify-center size-6 rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                        <span className="material-symbols-outlined text-sm">check</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-400">-</td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-800">
                    <td className="px-4 py-3 font-medium text-slate-700 dark:text-slate-200">引进专业人才，完善培训机制</td>
                    <td className="px-2 py-3 text-center">
                      <div className="inline-flex items-center justify-center size-6 rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                        <span className="material-symbols-outlined text-sm">check</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-400">概括精准</td>
                  </tr>
                  <tr className="bg-slate-50/50 dark:bg-slate-700/20">
                    <td className="px-4 py-3 font-medium text-slate-700 dark:text-slate-200">推动一二三产业融合发展</td>
                    <td className="px-2 py-3 text-center">
                      <div className="inline-flex items-center justify-center size-6 rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                        <span className="material-symbols-outlined text-sm">close</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs text-orange-600 dark:text-orange-400 font-medium">遗漏关键点</td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-800">
                    <td className="px-4 py-3 font-medium text-slate-700 dark:text-slate-200">加强基础设施建设</td>
                    <td className="px-2 py-3 text-center">
                      <div className="inline-flex items-center justify-center size-6 rounded-full bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400">
                        <span className="material-symbols-outlined text-sm">remove</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-500">表述不够具体</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-card border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-4 text-gov-gold">
              <span className="material-symbols-outlined">auto_awesome</span>
              <h3 className="text-slate-900 dark:text-white font-bold text-lg">文章亮点</h3>
            </div>
            <div className="grid gap-3">
              <div className="flex gap-3 bg-gov-gold-light/30 dark:bg-yellow-900/10 p-3 rounded-xl border border-gov-gold-light dark:border-yellow-900/20">
                <span className="text-xl">🎯</span>
                <div>
                  <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100">审题精准</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">准确抓住了“乡村振兴”的核心矛盾，首句即点明主旨。</p>
                </div>
              </div>
              <div className="flex gap-3 bg-gov-gold-light/30 dark:bg-yellow-900/10 p-3 rounded-xl border border-gov-gold-light dark:border-yellow-900/20">
                <span className="text-xl">💎</span>
                <div>
                  <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100">用词规范</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">使用了“多措并举”、“协同推进”等标准申论术语，提升了文章的行政色彩。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Advice */}
           <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-card border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-4 text-primary">
              <span className="material-symbols-outlined">lightbulb</span>
              <h3 className="text-slate-900 dark:text-white font-bold text-lg">提升建议</h3>
            </div>
            <div className="space-y-4">
              <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                <div className="bg-slate-50 dark:bg-slate-700/50 px-4 py-2 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-500 uppercase">针对问题：逻辑衔接生硬</span>
                </div>
                <div className="p-4 grid gap-3">
                  <div className="relative pl-3 border-l-2 border-red-300 dark:border-red-800/50">
                    <div className="absolute -left-[5px] top-0 size-2 bg-red-400 rounded-full"></div>
                    <p className="text-xs text-slate-400 mb-1">您的表述</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 line-through decoration-red-400/50">
                      农村要发展，必须搞好环境。还有人才也是关键因素，不能忽视。
                    </p>
                  </div>
                  <div className="relative pl-3 border-l-2 border-green-500 dark:border-green-600">
                    <div className="absolute -left-[5px] top-0 size-2 bg-green-500 rounded-full"></div>
                    <p className="text-xs text-green-600 dark:text-green-400 font-bold mb-1">建议修改</p>
                    <p className="text-sm text-slate-800 dark:text-white font-medium">
                      农村发展<span className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded mx-0.5 text-primary">不仅</span>要优化人居环境，夯实生态之基，<span className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded mx-0.5 text-primary">更</span>要强化人才支撑，筑牢智力保障。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Comment */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-card border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-3 text-slate-700 dark:text-slate-200">
              <span className="material-symbols-outlined">rate_review</span>
              <h3 className="text-slate-900 dark:text-white font-bold text-lg">详细专家评语</h3>
            </div>
            <div className="prose prose-sm dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
              <p className="leading-relaxed text-justify mb-2">
                这就一篇质量较高的归纳概括题作答。考生能够较好地代入政府工作人员身份，对给定资料进行了全方位的梳理。
              </p>
              <p className="leading-relaxed text-justify">
                但在"产业融合"这一难点上，未能透过现象看本质，仅停留在表面叙述。整篇卷面稍显杂乱，影响了第一印象分。建议在后续练习中，加强对材料深层逻辑的挖掘，并注重卷面书写的规范性训练。
              </p>
            </div>
            <div className="mt-4 flex justify-end">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-full bg-slate-200 overflow-hidden">
                   <img alt="Expert" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4haPTdq8q22ZvSmHHnHTuFaaiJlgpx5U2bpIDDeWWLcP04_tJ2mKx7uHVqMCp6Y_87nA3vYIqMuSb_zlUSbh9N0d2Ju3vz1Pkx1PQxQXZBodC3N7bcqlfKqAnF8-F8l9JaY1jn9i864oLG7TonEOJc7ccjzJDobJkc-g3l6YW7PVQxUiNwtelhpsl2gu27m9tdrJ5QjGlr0Dxt1o9CexQAjVw1dcz4EzmhKlKQjrHmZ3Rohw-sR6nlD_gPug7VRF0CKWSTBDWuGc"/>
                </div>
                <div className="text-xs">
                  <p className="font-bold text-slate-900 dark:text-white">阅卷组长 AI</p>
                  <p className="text-slate-400">模拟 20 年阅卷经验</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white/90 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-4 z-40 safe-area-bottom">
        <div className="max-w-md mx-auto flex gap-3">
          <button className="flex-1 bg-white border border-slate-200 text-slate-700 font-bold py-3.5 rounded-xl shadow-sm hover:bg-slate-50 active:scale-[0.98] transition-all flex items-center justify-center gap-2 dark:bg-slate-800 dark:border-slate-700 dark:text-white">
            <span className="material-symbols-outlined text-[20px]">history</span>
            查看原题
          </button>
          <button className="flex-[2] bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-500/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[20px]">edit_note</span>
            针对性强化训练
          </button>
        </div>
      </div>
    </div>
  );
};