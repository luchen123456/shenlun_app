import React from 'react';

interface ScoreRingProps {
  score: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
}

export const ScoreRing: React.FC<ScoreRingProps> = ({ 
  score, 
  size = 48, 
  strokeWidth = 3,
  color = "text-primary"
}) => {
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className={`relative flex items-center justify-center rounded-full`} style={{ width: size, height: size }}>
      {/* Background Circle */}
      <svg className="absolute inset-0 rotate-[-90deg]" width={size} height={size}>
         <circle
          className="text-slate-100 dark:text-slate-700"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Progress Circle */}
        <circle
          className={color}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      <span className={`${color} font-bold text-sm z-10`}>{score.toFixed(1)}</span>
    </div>
  );
};