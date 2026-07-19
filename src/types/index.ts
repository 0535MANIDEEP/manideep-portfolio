// ============================================================
// GLOBAL TYPE DEFINITIONS
// ============================================================

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  images: string[];
  techStack: string[];
  github: string;
  liveDemo: string;
  featured: boolean;
  category: ProjectCategory;
  status: 'completed' | 'in-progress' | 'planned';
  year: number;
  duration: string;
  features: string[];
  problemStatement: string;
  architecture: string;
  stats?: { label: string; value: string }[];
}

export type ProjectCategory =
  | 'All'
  | 'Full Stack'
  | 'Frontend'
  | 'Backend'
  | 'AI/ML'
  | 'Mobile';

export interface Skill {
  name: string;
  icon: string;
  level: number; // 0–100
  category: SkillCategory;
  color: string;
}

export type SkillCategory =
  | 'Frontend'
  | 'Backend'
  | 'Data'
  | 'Database'
  | 'Cloud'
  | 'DevOps'
  | 'AI/ML'
  | 'Languages'
  | 'Tools';

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: 'Full-time' | 'Internship' | 'Freelance' | 'Contract';
  duration: string;
  startDate: string;
  endDate: string | 'Present';
  location: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  logo: string;
  companyUrl: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  grade: string;
  duration: string;
  startYear: number;
  endYear: number | 'Present';
  location: string;
  description: string;
  achievements: string[];
  subjects: string[];
  logo: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'Hackathon' | 'Certification' | 'Award' | 'Leadership' | 'Open Source' | 'Community';
  icon: string;
  badge?: string;
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  date: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
  popular?: boolean;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  readTime: number;
  publishedAt: string;
  likes: number;
  author: {
    name: string;
    avatar: string;
  };
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  credentialUrl: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
  icon?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  avatar?: string;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface ThemeState {
  mode: 'dark' | 'light';
}

export interface NotificationState {
  notifications: Notification[];
}

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  timestamp: number;
}
