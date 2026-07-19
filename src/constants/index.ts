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
  { platform: 'GitHub', url: 'https://github.com/podagatlarajendra', icon: 'github' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/podagatlarajendra', icon: 'linkedin' },
  { platform: 'Twitter', url: 'https://twitter.com/podagatlaraj', icon: 'twitter' },
  { platform: 'Email', url: 'mailto:rajendra@example.com', icon: 'mail' },
];

export const STATS: Stat[] = [
  { label: 'Projects Completed', value: 15, suffix: '+' },
  { label: 'Years Experience', value: 2, suffix: '+' },
  { label: 'Technologies', value: 20, suffix: '+' },
  { label: 'GitHub Stars', value: 150, suffix: '+' },
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
  'Full Stack Developer',
  'React Specialist',
  'Node.js Engineer',
  'UI/UX Enthusiast',
  'Problem Solver',
  'Open Source Contributor',
];

export const PERSONAL_INFO = {
  name: 'Podagatla Rajendra',
  shortName: 'P. Rajendra',
  role: 'Full Stack Developer',
  email: 'rajendra@example.com',
  phone: '+91 9876543210',
  location: 'Hyderabad, India',
  availability: 'Available for freelance & full-time roles',
  resumeUrl: '/resume.pdf',
  bio: 'A passionate Full Stack Developer with 2+ years of experience building scalable web applications. I specialize in React, Node.js, and modern web technologies, crafting solutions that are both technically sound and visually compelling.',
  shortBio: 'Building scalable, elegant web experiences from Hyderabad, India.',
};
