import React from 'react';
import { Course } from '../types';

const courses: Course[] = [
  {
    id: '1',
    title: '2024 公务员备考冲刺班',
    subtitle: '名师带队，7天掌握核心考点',
    tag: '热门课程',
    tagColor: 'bg-primary',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_75YSKjEAEz0MgVjkPwHCpRkoD0KnI3_xMTC9ntEJOrSv1xopAflboGQRO-4SAuChtZZgIkPej-5dDOoacBJaV1CawHDfOdsX-vF8sekK_HUCYY6TrXECuTqHU_BaBVub7lnM82ArMQewPHyqlw-eRuV0WKJkX5lvR9jH5a3MosZrJTr1rXy64H5zrWnwg9zPMd--xKLlQ4TIbEs7orhOKSl8ifTno0Cxi4Civ9QMxcVOwxsgIQhEq4aQcceYnwvnTxIHfoOaHn8'
  },
  {
    id: '2',
    title: '智能批改 3.0 上线',
    subtitle: '更精准的评分，更详细的逻辑分析',
    tag: 'AI 新功能',
    tagColor: 'bg-purple-600',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPj0f_jeatv6LLNds7F0KWWkYiGJg5pLUilcSLTi3UjW-VIEYyO5SMWVFrSxiGN1Wac8iry6sEQzuZvFSGiZ-cobeST7QbcDeAxxYf29DAdHPY-VRgns0xfiF_fkrC8UwlbYqOa8ytYx0AjFcdkOZvy_EjcxEPLgvn4rSNktNuy-Vo-OU9lUYHhKAQzqfsHJtOzxTxLWWGqXGwdlSaN9Nrym0IZAxcJfLlGi6pLAHRJwNUL9IJf4E41mdSyDkgUVMF4fiLUHf1grQ'
  },
  {
    id: '3',
    title: '如何构建满分文章结构',
    subtitle: '逻辑结构模版深度解析',
    tag: '写作技巧',
    tagColor: 'bg-teal-600',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAj2DSAt68Y7fdgrIqgoZa2paAQf_SbGwgEQf7ZwIzrm0kmiq6JrgU9VWBigsJMiQk4WRshK6DpMO9FjOQKGx4OOXo9tpPzGO11bN9YERd3zMcAJiWlgtbq6XRsPstYz8XGOurVHtk0izCvYcHDkqzDrKyhSKBBn76zoZ31mw2NwxpzAjy8pfoAOKvxAJ541ZwAU1yN2laGc7l_pJyNY0gjnaiNvZKkGCX4-Ya-CEBRDolDrLK4t4G6k0m87WfHvbcYOG3nPKREGqY'
  }
];

export const Home: React.FC = () => {
  return (
    <>
      {/* Top App Bar */}
      <div className="sticky top-0 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
        <div className="flex items-center justify-between p-4 h-14">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
            <span className="material-symbols-outlined">person</span>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight text-center flex-1">学习中心</h2>
          <div className="flex size-10 shrink-0 items-center justify-center text-slate-900 dark:text-white relative">
            <span className="material-symbols-outlined">notifications</span>
            <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-slate-900"></div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar">
        {/* Hero Carousel */}
        <div className="flex w-full overflow-x-auto no-scrollbar px-4 py-6 gap-4 snap-x snap-mandatory">
          {courses.map((course) => (
            <div key={course.id} className="snap-center shrink-0 w-[85%] sm:w-[320px] relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
              <div 
                className="w-full aspect-[16/9] bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                style={{ backgroundImage: `url("${course.image}")` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                <span className={`inline-block px-2 py-1 ${course.tagColor} text-white text-xs font-bold rounded mb-2 w-fit`}>{course.tag}</span>
                <h3 className="text-white text-lg font-bold leading-snug">{course.title}</h3>
                <p className="text-slate-200 text-sm mt-1 line-clamp-1">{course.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Resources Header */}
        <div className="px-5 pt-2 pb-2">
          <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight flex items-center gap-2">
            学习资源
            <span className="material-symbols-outlined text-primary text-sm">auto_stories</span>
          </h3>
        </div>

        {/* Resource Grid */}
        <div className="grid grid-cols-2 gap-3 p-4">
          <div className="col-span-1 flex flex-col gap-3 rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-sm border border-slate-100 dark:border-slate-700 active:scale-95 transition-transform cursor-pointer">
            <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>article</span>
            </div>
            <div>
              <h2 className="text-slate-900 dark:text-white text-base font-bold leading-tight">高分范文库</h2>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">历年真题满分卷解析</p>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-3 rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-sm border border-slate-100 dark:border-slate-700 active:scale-95 transition-transform cursor-pointer">
            <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>format_quote</span>
            </div>
            <div>
              <h2 className="text-slate-900 dark:text-white text-base font-bold leading-tight">申论常用金句</h2>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">积累核心加分素材</p>
            </div>
          </div>
          <div className="col-span-2 flex flex-row items-center gap-4 rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-sm border border-slate-100 dark:border-slate-700 active:scale-95 transition-transform cursor-pointer">
            <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>schema</span>
            </div>
            <div className="flex-1">
              <h2 className="text-slate-900 dark:text-white text-base font-bold leading-tight">逻辑结构模版</h2>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">万能写作框架，快速构建文章骨架</p>
            </div>
            <div className="text-slate-300 dark:text-slate-600">
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </div>
        </div>

        <div className="h-2 bg-slate-100 dark:bg-slate-800/50 w-full my-2"></div>

        {/* Daily Recommendations */}
        <div className="px-5 pt-4 pb-2 flex justify-between items-end">
          <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight">每日推荐</h3>
          <span className="text-xs text-primary font-medium cursor-pointer">查看全部</span>
        </div>

        <div className="flex flex-col px-4 pb-4 gap-3">
          <div className="flex gap-4 p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 active:bg-slate-50 dark:active:bg-slate-700/50 cursor-pointer">
            <div className="w-20 h-20 shrink-0 rounded-lg bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCNagC5WsuPVQIk8d7HpYquzeVTPh147rQuUGYwNBHzYq6Yn6FqnPGA5Tphp8Iox_z-SuPMOn6kxeWXq5d0O9YeQiZfP-nTdSJ5GY34FjQFlrxcPXWT_cEBy2328A1m4Zd8ozHfUGgwcZdYqzUPJvttC1TMV3rZBq-4_ct1Drs5DpUod26Icnz7sceLTAnqkVRlv1LVEnxwOdfXhoOv8ZcuRiiosZs-VfeQBOm0HaKdxopwV0PV_B44fUB0mfyM_wYWGzjDt-KAUYY")' }}></div>
            <div className="flex flex-col justify-between py-1 flex-1">
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug line-clamp-2">2023 国考申论副省级真题深度解析与范文</h4>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span> 10分钟</span>
                <span>•</span>
                <span>1.2k 阅读</span>
              </div>
            </div>
          </div>

           <div className="flex gap-4 p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 active:bg-slate-50 dark:active:bg-slate-700/50 cursor-pointer">
            <div className="w-20 h-20 shrink-0 rounded-lg bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDE5C-C1QqFm2vg7cLV629Ux2snh8QDD7tKh7H9_TFORkIj89Uipoyze2nGYmNhk3_H4rr1D7g_qQqe_5Tbd0IcoZ0JKC3cQCKkd7Wef_F-Kj0rST5PnTmnX11DVUi7deRZti1Qae9Vw20ZPz8dOeTLbLQyLHSFAjeMIQZa_Ep97wrmDZgBOW4LcB4Ck5Ar2zxtxYj3F6ptbmExvdMdA8uKAXv_gidA_6TwNmpGaFXmVxXB_1DpoqlXwbdc3aDUOXSTZzfEr4A0Nxw")' }}></div>
            <div className="flex flex-col justify-between py-1 flex-1">
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug line-clamp-2">环保话题 5 个必背金句，直接套用！</h4>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span> 3分钟</span>
                <span>•</span>
                <span>856 阅读</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};