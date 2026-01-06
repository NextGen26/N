
import { Assignment, GradeData, UserRole, UserProfile, WeeklyFocusData, Transaction } from './types';

export const MOCK_STUDENT: UserProfile = {
  name: "Alex Johnson",
  role: UserRole.STUDENT,
  studentId: "NG-2024-001",
  avatar: "https://picsum.photos/seed/alex/200",
  balance: 450
};

export const MOCK_PARENT: UserProfile = {
  name: "Sarah Johnson",
  role: UserRole.PARENT,
  avatar: "https://picsum.photos/seed/sarah/200"
};

export const MOCK_GRADES: GradeData[] = [
  { subject: 'Algebra II', score: 92, trend: 'UP' },
  { subject: 'World History', score: 88, trend: 'STABLE' },
  { subject: 'Physics', score: 85, trend: 'DOWN' },
  { subject: 'Literature', score: 95, trend: 'UP' },
  { subject: 'Computer Science', score: 98, trend: 'UP' }
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: 't1', type: 'EARN', amount: 50, description: 'Algebra Mastery Quiz', date: '2024-05-14', category: 'ACADEMIC' },
  { id: 't2', type: 'EARN', amount: 100, description: 'Weekly Socratic Seminar Lead', date: '2024-05-12', category: 'REWARD' },
  { id: 't3', type: 'SPEND', amount: 25, description: 'Extra 15m Recess Pass', date: '2024-05-10', category: 'STORE' },
  { id: 't4', type: 'EARN', amount: 25, description: 'Perfect Attendance Week 8', date: '2024-05-08', category: 'BEHAVIOR' },
  { id: 't5', type: 'SPEND', amount: 50, description: 'NextGen School Hoodie', date: '2024-05-05', category: 'STORE' },
];

export const MOCK_ASSIGNMENTS: Assignment[] = [
  {
    id: '1',
    title: 'Linear Equations Mastery',
    subject: 'Algebra II',
    dueDate: '2024-05-20',
    status: 'PENDING',
    description: 'Solve the problem set involving systems of linear equations using substitution and elimination.'
  },
  {
    id: '2',
    title: 'French Revolution Essay',
    subject: 'World History',
    dueDate: '2024-05-18',
    status: 'SUBMITTED',
    description: 'Write a 1000-word essay on the primary causes of the French Revolution.'
  },
  {
    id: '3',
    title: 'Kinematics Lab Report',
    subject: 'Physics',
    dueDate: '2024-05-15',
    status: 'GRADED',
    grade: 85,
    description: 'Document the findings from the projectile motion lab conducted on Tuesday.'
  },
  {
    id: '4',
    title: 'Python Sorting Algorithms',
    subject: 'Computer Science',
    dueDate: '2024-05-25',
    status: 'PENDING',
    description: 'Implement Quick Sort and Merge Sort in Python and compare their performance.'
  }
];

export const MOCK_WEEKLY_FOCUS: WeeklyFocusData = {
  weekDate: "May 13 - May 19",
  theme: "Deep Inquiry",
  description: "This week at NextGen we're focusing on asking 'Why?' and digging beneath the surface of our current units in History and Physics.",
  goals: [
    { id: 'g1', text: "Complete the French Revolution primary source analysis.", completed: true, category: 'Academic' },
    { id: 'g2', text: "Draft the project proposal for the Community Impact initiative.", completed: false, category: 'Project' },
    { id: 'g3', text: "Practice active recall for the upcoming Physics quiz.", completed: false, category: 'Academic' },
    { id: 'g4', text: "Participate in the Wednesday Socratic Seminar.", completed: true, category: 'Personal' }
  ],
  skillSpotlight: "Evidence-Based Argumentation",
  quote: "The important thing is not to stop questioning. Curiosity has its own reason for existence."
};
