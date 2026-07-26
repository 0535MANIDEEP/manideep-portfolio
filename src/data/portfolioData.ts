// ============================================================
// PORTFOLIO DATA — All data for the portfolio
// ============================================================

import type {
  Project,
  Skill,
  Experience,
  Education,
  Achievement,
  Testimonial,
  Service,
  Certificate,
} from '../types';

// ─── PROJECTS ────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 'blood-bank-management',
    title: 'BloodBank Management System',
    shortDescription:
      'Full-stack blood bank management with donor registration, inventory tracking, and role-based access.',
    description:
      'Production-ready blood bank management system with React/TypeScript frontend, Node.js/Express backend, and MongoDB Atlas. Features JWT authentication with three roles (Admin, Donor, Hospital), blood inventory tracking with FIFO allocation, emergency request handling, AI-powered donor eligibility checks, and ID proof upload via Multer/S3.',
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&q=80',
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80',
    ],
    techStack: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Multer'],
    github: 'https://github.com/0535MANIDEEP/BloodBankManagementSystem',
    liveDemo: 'https://bloodbank-portfolio.vercel.app',
    featured: true,
    category: 'Full Stack',
    status: 'completed',
    year: 2024,
    duration: '2 months',
    features: [
      'JWT auth with Admin/Donor/Hospital roles',
      'Blood inventory with FIFO allocation and expiry cleanup',
      'Emergency request fast-track with unit splitting',
      'AI donor eligibility engine (age, weight, health, 90-day interval)',
      'ID proof upload via Multer with S3/mock storage',
      'MongoDB Atlas with Mongoose ODM',
    ],
    problemStatement:
      'Blood banks lack efficient digital systems for managing donors, inventory, and requests, leading to delays in matching donors with recipients.',
    architecture:
      'React/TypeScript frontend with Node.js/Express backend. JWT authentication, MongoDB Atlas for persistence, Multer for file uploads. Deployed on Vercel with serverless API functions.',
    stats: [
      { label: 'API Endpoints', value: '15+' },
      { label: 'Database', value: 'MongoDB Atlas' },
      { label: 'Auth Roles', value: '3' },
    ],
  },
  {
    id: 'sutra-code',
    title: 'Sutra-Code',
    shortDescription:
      'Socratic AI mentor for Indian programmers with cultural analogies, voice interaction, and 22 language support.',
    description:
      'AI-powered educational platform that teaches programming through Socratic questioning and Indian cultural contexts. React/TypeScript frontend with MongoDB backend, JWT authentication, and session tracking. Features a Socratic engine that asks guiding questions instead of giving answers, cultural analogy generator (cricket, railways, cooking), student profiles with grit scoring, and multilingual support for 22 Indian languages.',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80',
    ],
    techStack: ['TypeScript', 'React', 'Node.js', 'MongoDB', 'JWT', 'WebSocket'],
    github: 'https://github.com/0535MANIDEEP/sutra-code',
    liveDemo: 'https://sutra-code-portfolio.vercel.app',
    featured: true,
    category: 'AI/ML',
    status: 'completed',
    year: 2025,
    duration: '2 months',
    features: [
      'Socratic engine: asks guiding questions instead of answers',
      'Cultural analogy generator (cricket, railways, cooking contexts)',
      'Student profiles with grit scoring and XP tracking',
      '22 Indian languages support',
      'Session persistence with MongoDB',
      'JWT auth with role-based access (student/recruiter/educator)',
    ],
    problemStatement:
      'Indian programming education suffers from copy-paste culture. Students need a platform that builds genuine problem-solving skills through guided questioning.',
    architecture:
      'React/TypeScript frontend with Node.js backend. MongoDB for user/session storage, JWT authentication, Socratic AI engine with cultural analogy system. Deployed on Vercel.',
    stats: [
      { label: 'Languages', value: '22' },
      { label: 'AI Engine', value: 'Socratic' },
      { label: 'Concepts', value: '15+' },
    ],
  },
  {
    id: 'hyderabad-hustlers',
    title: 'HyderabadHustlers — Multilingual Mandi',
    shortDescription:
      'AI-powered multilingual marketplace for Indian agricultural vendors with real-time translation and price discovery.',
    description:
      'Multilingual agricultural marketplace enabling farmers and buyers to communicate across language barriers. React/TypeScript frontend with Node.js/Express backend, MongoDB for user management, and WebSocket-based real-time negotiation. Features AI-powered translation between Telugu, Hindi, and English, crop price discovery across 5 markets, and RAG-based query system for agricultural knowledge.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    ],
    techStack: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'WebSocket', 'Docker'],
    github: 'https://github.com/0535MANIDEEP/HyderabadHustlers-MultilingualMandi',
    liveDemo: 'https://mandi-portfolio.vercel.app',
    featured: true,
    category: 'Full Stack',
    status: 'completed',
    year: 2025,
    duration: '3 months',
    features: [
      'Real-time translation between Telugu, Hindi, and English',
      'Crop price discovery across 5 agricultural markets',
      'WebSocket-based negotiation with AI mediation',
      'RAG pipeline for agricultural knowledge queries',
      'Docker containerization with multi-service orchestration',
      'MongoDB for user auth and negotiation session storage',
    ],
    problemStatement:
      'Indian agricultural markets operate in local languages, creating barriers for cross-region trade. Farmers need real-time price discovery and multilingual communication.',
    architecture:
      'React/TypeScript frontend with Node.js/Express backend. MongoDB for user/session storage, WebSocket for real-time negotiation, Docker for deployment. AI translation and RAG pipeline for agricultural queries.',
    stats: [
      { label: 'Markets', value: '5' },
      { label: 'Languages', value: '3' },
      { label: 'Crops', value: '10+' },
    ],
  },
  {
    id: 'ai-code-reviewer',
    title: 'AI Code Reviewer',
    shortDescription:
      'AI-powered code review tool that analyzes code for bugs, warnings, and optimizations.',
    description:
      'Full-stack AI code review application. Users paste code in any language and receive structured reviews covering bugs, security issues, performance suggestions, and optimization opportunities. React/Vite frontend with Vercel serverless API proxying to OVHcloud AI Endpoints (Mistral Small 3.2 24B). No API keys required.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    ],
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vercel Serverless', 'OVHcloud AI'],
    github: 'https://github.com/0535MANIDEEP/ai-code-reviewer',
    liveDemo: 'https://ai-code-reviewer-two-nu.vercel.app',
    featured: true,
    category: 'AI/ML',
    status: 'completed',
    year: 2025,
    duration: '1 week',
    features: [
      'Multi-language support (JS, TS, Python, Java, C++, Go, Rust)',
      'Structured JSON output: bugs, warnings, suggestions, optimizations',
      'Severity levels for each issue',
      'Vercel serverless backend with OVHcloud AI proxy',
      'No API keys required — free AI backend',
    ],
    problemStatement:
      'Developers need fast, automated code reviews to catch bugs and performance issues before shipping code.',
    architecture:
      'React/Vite frontend with Vercel serverless functions. API proxy routes requests to OVHcloud AI Endpoints (Mistral Small 3.2 24B). Structured JSON response with categorized findings.',
    stats: [
      { label: 'Languages', value: '8+' },
      { label: 'AI Model', value: 'Mistral 24B' },
      { label: 'Cost', value: 'Free' },
    ],
  },
  {
    id: 'ai-study-buddy',
    title: 'AI Study Buddy',
    shortDescription:
      'AI study tool that generates flashcards and quizzes from any topic or text.',
    description:
      'Full-stack AI study assistant. Users paste text or a topic and instantly get AI-generated flashcards and multiple choice quizzes. React/Vite frontend with Framer Motion animations, Vercel serverless API proxying to OVHcloud AI. Features flip-card animations, progress tracking, accuracy stats, and keyboard shortcuts.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
    ],
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'OVHcloud AI'],
    github: 'https://github.com/0535MANIDEEP/ai-study-buddy',
    liveDemo: 'https://ai-study-buddy-rho-jet.vercel.app',
    featured: false,
    category: 'AI/ML',
    status: 'completed',
    year: 2025,
    duration: '1 week',
    features: [
      'Auto-generate 10 flashcards + 5 quiz questions from any text',
      'Flip-card animations with keyboard navigation',
      'Quiz mode with explanations for incorrect answers',
      'Progress tracking: cards studied, accuracy, streak',
      'Summary generation for each topic',
    ],
    problemStatement:
      'Students need efficient tools to convert notes and textbook content into study materials without manual effort.',
    architecture:
      'React/Vite frontend with Vercel serverless functions. API proxy routes to OVHcloud AI (Mistral Small 3.2 24B). Client-side state for progress tracking.',
    stats: [
      { label: 'Flashcards', value: '10/session' },
      { label: 'Quiz Qs', value: '5/session' },
      { label: 'Cost', value: 'Free' },
    ],
  },
];

// ─── SKILLS ──────────────────────────────────────────────────
export const skills: Skill[] = [
  { name: 'React', icon: 'react', level: 85, category: 'Frontend', color: '#61DAFB' },
  { name: 'TypeScript', icon: 'typescript', level: 80, category: 'Frontend', color: '#3178C6' },
  { name: 'Vue.js', icon: 'vuejs', level: 70, category: 'Frontend', color: '#4FC08D' },
  { name: 'JavaScript', icon: 'javascript', level: 88, category: 'Frontend', color: '#F7DF1E' },
  { name: 'Node.js', icon: 'nodejs', level: 82, category: 'Backend', color: '#339933' },
  { name: 'Express', icon: 'express', level: 80, category: 'Backend', color: '#FFFFFF' },
  { name: 'REST API Design', icon: 'api', level: 85, category: 'Backend', color: '#FF7A00' },
  { name: 'JWT Auth', icon: 'jwt', level: 78, category: 'Backend', color: '#FF3366' },
  { name: '.NET / C#', icon: 'dotnet', level: 55, category: 'Backend', color: '#512BD4' },
  { name: 'Angular', icon: 'angular', level: 50, category: 'Frontend', color: '#DD0031' },
  { name: 'MongoDB', icon: 'mongodb', level: 80, category: 'Data', color: '#47A248' },
  { name: 'PostgreSQL', icon: 'postgresql', level: 75, category: 'Data', color: '#336791' },
  { name: 'MySQL', icon: 'mysql', level: 72, category: 'Data', color: '#4479A1' },
  { name: 'AWS', icon: 'aws', level: 65, category: 'Cloud', color: '#FF9900' },
  { name: 'Docker', icon: 'docker', level: 68, category: 'DevOps', color: '#2496ED' },
  { name: 'Git', icon: 'git', level: 88, category: 'DevOps', color: '#F05032' },
  { name: 'GitHub Actions', icon: 'githubactions', level: 65, category: 'DevOps', color: '#2088FF' },
  { name: 'Jest', icon: 'jest', level: 75, category: 'Tools', color: '#C21325' },
  { name: 'Postman', icon: 'postman', level: 85, category: 'Tools', color: '#FF6C37' },
];

// ─── EXPERIENCE ───────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    id: 'crystalline-intern',
    company: 'Crystalline Software Technologies',
    role: 'Software Engineer Intern',
    type: 'Internship',
    duration: '7 months',
    startDate: 'Dec 2023',
    endDate: 'Jun 2024',
    location: 'Hyderabad (On-site)',
    description:
      'Built production-ready Vue.js components for internal enterprise applications. Integrated REST APIs, collaborated in Agile sprints, and contributed to TypeScript migration efforts.',
    responsibilities: [
      'Built production-ready Vue.js components for enterprise applications',
      'Integrated REST APIs with real-time data rendering',
      'Collaborated in Agile sprints, standups, and code reviews',
      'Debugged and optimized UI responsiveness',
      'Worked on API contracts and error handling with backend teams',
    ],
    achievements: [
      'Delivered modular, reusable UI components across enterprise features',
      'Migrated legacy JavaScript modules to TypeScript',
      'Reduced UI rendering issues through systematic debugging',
    ],
    technologies: ['Vue.js', 'React.js', 'JavaScript', 'TypeScript', 'REST APIs', 'Git', 'Firebase'],
    logo: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=100&q=80',
    companyUrl: '#',
  },
  {
    id: 'viswam-ai',
    company: 'Viswam AI / Swecha Foundation (IIIT Hyderabad)',
    role: 'AI Data Engineering Contributor',
    type: 'Contract',
    duration: '2 months',
    startDate: 'Jul 2025',
    endDate: 'Aug 2025',
    location: 'Hyderabad',
    description:
      'Curated and audited Telugu datasets for LLM training pipelines. Implemented preprocessing steps and bias-mitigation checks to improve data quality for language model training.',
    responsibilities: [
      'Curated high-quality Telugu language datasets for LLM training',
      'Audited data for quality, consistency, and bias',
      'Implemented preprocessing pipelines for data cleaning',
      'Performed bias-mitigation checks on training data',
    ],
    achievements: [
      'Improved Telugu LLM training data quality through systematic auditing',
      'Developed reusable bias-detection workflows for dataset auditing',
    ],
    technologies: ['Python', 'Data Curation', 'Data Preprocessing', 'AI/ML Pipelines'],
    logo: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&q=80',
    companyUrl: 'https://www.viswam.ai',
  },
  {
    id: 'current-learning',
    company: 'Continuous Learning',
    role: 'Full-Stack Developer',
    type: 'Full-time',
    duration: 'Ongoing',
    startDate: 'Sep 2025',
    endDate: 'Present',
    location: 'Hyderabad',
    description:
      'Upskilling in .NET and Angular while building production projects. Solving DSA problems on LeetCode/GFG and documenting progress on LinkedIn.',
    responsibilities: [
      'Learning .NET backend development with C# and ASP.NET',
      'Building frontend applications with Angular',
      'Solving DSA problems on LeetCode and GeeksforGeeks',
      'Documenting learning journey on LinkedIn',
    ],
    achievements: [
      '100+ DSA problems solved on LeetCode/GFG',
      '5+ production projects deployed on Vercel with MongoDB backends',
    ],
    technologies: ['.NET', 'C#', 'ASP.NET', 'Angular', 'TypeScript'],
    logo: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=100&q=80',
    companyUrl: '#',
  },
];

// ─── EDUCATION ────────────────────────────────────────────────
export const education: Education[] = [
  {
    id: 'vjit',
    institution: 'Vidya Jyothi Institute of Technology',
    degree: 'B.Tech',
    field: 'Computer Science Engineering',
    grade: '8.53 CGPA',
    duration: '2020 – 2024',
    startYear: 2020,
    endYear: 2024,
    location: 'Hyderabad, Telangana',
    description:
      'Bachelor of Technology in Computer Science Engineering. Coursework in DSA, DBMS, OS, Computer Networks, and Software Engineering.',
    achievements: [
      'Cisco Networking Academy certifications in Python, Java, and C',
      'Active open-source contributor',
      'AI data engineering project collaboration',
    ],
    subjects: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
      'Software Engineering',
      'Web Technologies',
    ],
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=100&q=80',
  },
];

// ─── ACHIEVEMENTS ─────────────────────────────────────────────
export const achievements: Achievement[] = [
  {
    id: 'ai-data-contributor',
    title: 'AI Data Engineering — Viswam AI',
    description:
      'Contributed to LLM training pipelines at Viswam AI / Swecha Foundation (IIIT Hyderabad). Curated and audited Telugu datasets with bias-mitigation checks.',
    date: '2025',
    category: 'Community',
    icon: 'AI',
    badge: 'AI',
    link: 'https://www.viswam.ai',
  },
  {
    id: 'typescript-migration',
    title: 'TypeScript Migration — Crystalline Tech',
    description:
      'Migrated legacy JavaScript modules to TypeScript during internship, improving code reliability and maintainability.',
    date: '2024',
    category: 'Award',
    icon: 'TS',
  },
  {
    id: 'cisco-certifications',
    title: 'Cisco Networking Academy',
    description:
      'Certified in Python, Java, and C Programming through Cisco Networking Academy.',
    date: '2024',
    category: 'Certification',
    icon: 'CC',
    badge: 'Cisco',
  },
  {
    id: 'open-source',
    title: 'Open Source Contributor',
    description:
      '5+ projects on GitHub with full-stack applications, AI tools, and deployment automation.',
    date: '2024 – Present',
    category: 'Open Source',
    icon: 'OS',
  },
  {
    id: 'docker-setup',
    title: 'Docker Deployment',
    description:
      'Implemented Docker containerization with multi-service orchestration for the Multilingual Mandi project.',
    date: '2025',
    category: 'Award',
    icon: 'DK',
  },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Team Lead',
    role: 'Senior Developer',
    company: 'Crystalline Software Technologies',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    content:
      'Manideep showed strong initiative during his internship, especially in migrating our legacy JavaScript codebase to TypeScript. His attention to detail and ability to quickly learn Vue.js made him a valuable contributor.',
    rating: 5,
    date: '2024',
  },
  {
    id: 't2',
    name: 'Project Mentor',
    role: 'AI Research Lead',
    company: 'Viswam AI / Swecha Foundation',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    content:
      'Manideep contributed to our Telugu dataset curation pipeline with great diligence. His bias-mitigation checks and preprocessing work improved the quality of our LLM training data significantly.',
    rating: 5,
    date: '2025',
  },
  {
    id: 't3',
    name: 'Peer Reviewer',
    role: 'Full Stack Developer',
    company: 'GitHub Collaborator',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    content:
      'Manideep\'s code is clean, well-documented, and follows TypeScript best practices. The API proxying implementation shows solid architectural thinking.',
    rating: 5,
    date: '2025',
  },
];

// ─── SERVICES ─────────────────────────────────────────────────
export const services: Service[] = [
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    description:
      'End-to-end web applications with React/TypeScript frontend, Node.js/Express backend, and MongoDB.',
    icon: 'FS',
    features: ['React / Vue Frontend', 'Node.js / Express Backend', 'MongoDB / PostgreSQL', 'JWT Auth'],
    popular: true,
  },
  {
    id: 'api-dev',
    title: 'API Development',
    description:
      'RESTful APIs with authentication, validation, and third-party integrations.',
    icon: 'API',
    features: ['REST APIs', 'JWT / OAuth', 'Postman Collections', 'API Documentation'],
    popular: false,
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    description:
      'Integrate AI capabilities into applications using open-source models and serverless functions.',
    icon: 'AI',
    features: ['LLM Integration', 'Serverless AI Proxy', 'RAG Pipelines', 'Structured AI Output'],
    popular: false,
  },
  {
    id: 'cloud-setup',
    title: 'Cloud & DevOps',
    description:
      'Deployment automation with Vercel, Docker, GitHub Actions, and AWS services.',
    icon: 'CD',
    features: ['Vercel / AWS Deployment', 'Docker', 'GitHub Actions CI/CD', 'Environment Config'],
    popular: false,
  },
  {
    id: 'code-review',
    title: 'Code Review & Testing',
    description:
      'Code quality review, unit testing with Jest, and TypeScript migration.',
    icon: 'CR',
    features: ['Code Review', 'Jest Testing', 'TypeScript Migration', 'Documentation'],
    popular: false,
  },
];

// ─── CERTIFICATES ─────────────────────────────────────────────
export const certificates: Certificate[] = [
  {
    id: 'c1',
    title: 'Python Programming',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    credentialId: 'CISCO-PYTHON-2024',
    credentialUrl: '#',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80',
  },
  {
    id: 'c2',
    title: 'Java Programming',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    credentialId: 'CISCO-JAVA-2024',
    credentialUrl: '#',
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&q=80',
  },
  {
    id: 'c3',
    title: 'C Programming',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    credentialId: 'CISCO-C-2024',
    credentialUrl: '#',
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&q=80',
  },
];
