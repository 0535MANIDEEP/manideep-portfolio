// ============================================================
// PORTFOLIO CONSTANTS — NAV LINKS, SOCIALS, ETC.
// ============================================================

import type { NavLink, SocialLink, Stat } from '../types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Experience', href: '/experience' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Education', href: '/education' },
  { label: 'Services', href: '/services' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/0535MANIDEEP', icon: 'github' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/manideep-daram', icon: 'linkedin' },
  { platform: 'Email', url: 'mailto:manideepdaram@gmail.com', icon: 'mail' },
];

export const STATS: Stat[] = [
  { label: 'Projects Completed', value: 3, suffix: '+' },
  { label: 'DSA Problems Solved', value: 100, suffix: '+' },
  { label: 'Technologies', value: 15, suffix: '+' },
  { label: 'Certifications', value: 3, suffix: '+' },
];

export const COLORS = {
  primary: '#FF7A00',
  secondary: '#FFC107',
  dark: '#0B0B0F',
  background: '#111111',
  card: '#1A1A1A',
  border: 'rgba(255,255,255,0.08)',
  accent: '#F4A261',
} as const;

export const TYPING_STRINGS = [
  'Software Engineer',
  'React Developer',
  'Full-Stack Developer',
  'Problem Solver',
  'API Integration Specialist',
  'Open to SDE Roles',
];

export const PERSONAL_INFO = {
  name: 'Manideep Daram',
  shortName: 'M. Daram',
  role: 'Software Engineer',
  email: 'manideepdaram@gmail.com',
  phone: '+91 7386296828',
  location: 'Hyderabad, Telangana, India',
  availability: 'Open to SDE / Full-Stack / Frontend roles',
  resumeUrl: '/manideep_daram_resume.pdf',
  bio: 'Computer Science graduate (GPA 8.53) with hands-on internship experience and real-world GitHub projects. I build scalable front-end interfaces using React and Vue, with backend awareness in Node.js, REST APIs, and MongoDB. Solved 100+ DSA problems on LeetCode/GFG. Actively learning .NET + Angular for enterprise full-stack development.',
  shortBio: 'Software Engineer building scalable web apps with React, Node.js & TypeScript from Hyderabad.',
};
