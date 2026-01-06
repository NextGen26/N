
export enum UserRole {
  STUDENT = 'STUDENT',
  PARENT = 'PARENT'
}

export interface Transaction {
  id: string;
  type: 'EARN' | 'SPEND';
  amount: number;
  description: string;
  date: string;
  category: 'ACADEMIC' | 'BEHAVIOR' | 'STORE' | 'REWARD';
}

export interface Assignment {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  status: 'PENDING' | 'SUBMITTED' | 'GRADED';
  grade?: number;
  description: string;
}

export interface GradeData {
  subject: string;
  score: number;
  trend: 'UP' | 'DOWN' | 'STABLE';
}

export interface UserProfile {
  name: string;
  role: UserRole;
  studentId?: string;
  avatar: string;
  balance?: number; // Added for Nova Bank
}

export interface WeeklyGoal {
  id: string;
  text: string;
  completed: boolean;
  category: 'Academic' | 'Personal' | 'Project';
}

export interface WeeklyFocusData {
  weekDate: string;
  theme: string;
  description: string;
  goals: WeeklyGoal[];
  skillSpotlight: string;
  quote: string;
}
