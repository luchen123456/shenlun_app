export type View = 'home' | 'history' | 'profile' | 'gradingEntry' | 'pasteText' | 'report';

export interface EssayRecord {
  id: string;
  title: string;
  date: string;
  score: number;
  tags: string[];
  comment?: string;
  type?: 'A类' | 'B类' | '行政执法' | '专项' | '模拟';
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  tagColor: string; // Tailwind class
  image: string;
}

export interface NavItem {
  id: View;
  label: string;
  icon: string;
}