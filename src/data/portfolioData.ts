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
    title: 'BloodBankManagementSystem',
    shortDescription:
      'Full-stack blood bank workflow connecting a TypeScript React UI to backend APIs with secure proxying.',
    description:
      'A comprehensive blood bank management system built with TypeScript React frontend and backend APIs. The application handles donor registration, blood inventory tracking, and request management through secure API proxying logic that keeps client-server interactions controlled. Includes unit tests and detailed README for setup and verification.',
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&q=80',
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80',
    ],
    techStack: ['TypeScript', 'React', 'Node.js', 'Express', 'JWT', 'REST APIs'],
    github: 'https://github.com/0535MANIDEEP/BloodBankManagementSystem',
    liveDemo: '#',
    featured: true,
    category: 'Full Stack',
    status: 'completed',
    year: 2024,
    duration: '2 months',
    features: [
      'Donor registration and management',
      'Blood inventory tracking',
      'Request management workflow',
      'Secure API proxying',
      'Unit testing suite',
      'Setup documentation',
    ],
    problemStatement:
      'Blood banks lack efficient digital systems for managing donors, inventory, and requests, leading to delays in matching donors with recipients.',
    architecture:
      'TypeScript React frontend with a Node.js/Express backend, JWT authentication, and secure API proxying layer for controlled client-server interactions.',
    stats: [
      { label: 'API Endpoints', value: '15+' },
      { label: 'Test Coverage', value: '80%' },
      { label: 'Tech Stack', value: 'Full-Stack' },
    ],
  },
  {
    id: 'sutra-code',
    title: 'Sutra-Code',
    shortDescription:
      'TypeScript + React mentoring-style application with backend API integration and prompt management.',
    description:
      'Sutra-Code is a mentoring-style application built with TypeScript and React, featuring backend API integration for prompt management and consistent request handling. The system includes API proxying logic and comprehensive tests with thorough project documentation.',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80',
    ],
    techStack: ['TypeScript', 'React', 'Node.js', 'Express', 'REST APIs', 'Jest'],
    github: 'https://github.com/0535MANIDEEP/sutra-code',
    liveDemo: '#',
    featured: false,
    category: 'Full Stack',
    status: 'completed',
    year: 2024,
    duration: '2 months',
    features: [
      'Mentoring-style user experience',
      'Prompt management system',
      'API proxying for request handling',
      'Unit and integration tests',
      'Comprehensive documentation',
    ],
    problemStatement:
      'Developers and learners need a structured platform for mentoring interactions with consistent API request handling.',
    architecture:
      'TypeScript React frontend with Node.js/Express backend, API proxying layer, and Jest test suite for reliability.',
    stats: [
      { label: 'Test Suites', value: '5+' },
      { label: 'API Routes', value: '10+' },
    ],
  },
  {
    id: 'hyderabad-hustlers',
    title: 'HyderabadHustlers-MultilingualMandi',
    shortDescription:
      'Multilingual ingestion and search platform with API endpoints for bulk CSV operations and search indexing.',
    description:
      'A multilingual data ingestion and search platform featuring API endpoints for bulk CSV operations, search indexing improvements, and faster query behavior. The project includes Dockerized setup and a Postman collection for API testing, making it production-ready for multilingual content management.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    ],
    techStack: ['TypeScript', 'React', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'Jest', 'Postman'],
    github: 'https://github.com/0535MANIDEEP/HyderabadHustlers-MultilingualMandi',
    liveDemo: '#',
    featured: false,
    category: 'Full Stack',
    status: 'completed',
    year: 2024,
    duration: '3 months',
    features: [
      'Multilingual content ingestion',
      'Bulk CSV upload and processing',
      'Search indexing optimization',
      'Dockerized deployment setup',
      'Postman API testing collection',
      'Faster query performance',
    ],
    problemStatement:
      'Managing multilingual content at scale requires efficient ingestion pipelines and optimized search capabilities.',
    architecture:
      'TypeScript React frontend with Node.js/Express API, PostgreSQL database, Docker containerization, and Postman test collection.',
    stats: [
      { label: 'Languages Supported', value: '3+' },
      { label: 'CSV Throughput', value: '10k+ rows' },
      { label: 'Docker Services', value: '3' },
    ],
  },
];

// ─── SKILLS ──────────────────────────────────────────────────
export const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: 'react', level: 85, category: 'Frontend', color: '#61DAFB' },
  { name: 'TypeScript', icon: 'typescript', level: 80, category: 'Frontend', color: '#3178C6' },
  { name: 'Vue (Composition API)', icon: 'vuejs', level: 70, category: 'Frontend', color: '#4FC08D' },
  { name: 'JavaScript (ES6)', icon: 'javascript', level: 88, category: 'Frontend', color: '#F7DF1E' },
  // Backend
  { name: 'Node.js', icon: 'nodejs', level: 82, category: 'Backend', color: '#339933' },
  { name: 'Express', icon: 'express', level: 80, category: 'Backend', color: '#FFFFFF' },
  { name: 'REST API Design', icon: 'api', level: 85, category: 'Backend', color: '#FF7A00' },
  { name: 'JWT Authentication', icon: 'jwt', level: 78, category: 'Backend', color: '#FF3366' },
  { name: '.NET / C#', icon: 'dotnet', level: 55, category: 'Backend', color: '#512BD4' },
  { name: 'Angular', icon: 'angular', level: 50, category: 'Frontend', color: '#DD0031' },
  // Data
  { name: 'MongoDB', icon: 'mongodb', level: 80, category: 'Data', color: '#47A248' },
  { name: 'PostgreSQL', icon: 'postgresql', level: 75, category: 'Data', color: '#336791' },
  { name: 'MySQL', icon: 'mysql', level: 72, category: 'Data', color: '#4479A1' },
  // Cloud & DevOps
  { name: 'AWS (EC2/S3/Lambda)', icon: 'aws', level: 65, category: 'Cloud', color: '#FF9900' },
  { name: 'Docker', icon: 'docker', level: 68, category: 'DevOps', color: '#2496ED' },
  { name: 'Git / GitHub', icon: 'git', level: 88, category: 'DevOps', color: '#F05032' },
  { name: 'GitHub Actions', icon: 'githubactions', level: 65, category: 'DevOps', color: '#2088FF' },
  // Testing/Tools
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
      'Contributed to internal enterprise applications, collaborating on modular UI components, implementing bug fixes, and working with Git and backend service contracts.',
    responsibilities: [
      'Built production-ready Vue.js components for internal enterprise applications',
      'Integrated REST APIs and implemented real-time data rendering',
      'Collaborated in Agile sprints, daily standups, and code reviews',
      'Participated in debugging workflows and optimized UI responsiveness',
      'Worked alongside backend teams on API contracts and error handling',
    ],
    achievements: [
      'Delivered modular, reusable UI components across enterprise features',
      'Reduced UI rendering issues through debugging and optimization',
      'Gained real-world experience with Agile/Scrum development cycles',
    ],
    technologies: ['Vue.js', 'React.js', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Git', 'Firebase'],
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
      'Curated and audited Telugu datasets for LLM training pipelines, implementing preprocessing steps and bias-mitigation checks.',
    responsibilities: [
      'Curated high-quality Telugu language datasets for LLM training',
      'Audited data for quality, consistency, and bias',
      'Implemented preprocessing pipelines for data cleaning',
      'Performed bias-mitigation checks to improve data quality',
    ],
    achievements: [
      'Contributed to improving Telugu language model training data quality',
      'Developed bias-detection workflows for dataset auditing',
    ],
    technologies: ['Python', 'Data Curation', 'Data Preprocessing', 'AI/ML Pipelines'],
    logo: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&q=80',
    companyUrl: 'https://www.viswam.ai',
  },
  {
    id: 'current-learning',
    company: 'Continuous Learning',
    role: 'Full-Stack Developer (Self-directed)',
    type: 'Full-time',
    duration: 'Ongoing',
    startDate: 'Sep 2025',
    endDate: 'Present',
    location: 'Hyderabad',
    description:
      'Actively upskilling in .NET and Angular while sharing learning progress on LinkedIn. Continuing to solve DSA problems and build projects.',
    responsibilities: [
      'Learning .NET backend development with C# and ASP.NET',
      'Building frontend applications with Angular',
      'Documenting learning journey and sharing insights on LinkedIn',
      'Solving DSA problems on LeetCode and GeeksforGeeks',
    ],
    achievements: [
      '100+ DSA problems solved on LeetCode/GFG',
      'Regular LinkedIn posts documenting full-stack development learning',
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
      'Pursuing a Bachelor of Technology in Computer Science Engineering, building a strong foundation in software development, algorithms, and systems.',
    achievements: [
      'Cisco Networking Academy certified in Python, Java, and C Programming',
      'Active contributor to open-source projects',
      'Participated in AI data engineering projects',
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
      'Contributed to LLM training pipelines at Viswam AI / Swecha Foundation (IIIT Hyderabad), curating and auditing Telugu datasets with bias-mitigation checks.',
    date: '2024 – 2025',
    category: 'Community',
    icon: '🤖',
    badge: 'AI',
    link: 'https://www.viswam.ai',
  },
  {
    id: 'typescript-migration',
    title: 'TypeScript Migration — Crystalline Tech',
    description:
      'Successfully migrated legacy JavaScript modules to TypeScript during internship at Crystalline Software Technologies, improving code reliability.',
    date: '2024 – 2025',
    category: 'Award',
    icon: '⚡',
  },
  {
    id: 'cisco-certifications',
    title: 'Cisco Networking Academy Certifications',
    description:
      'Earned certifications in Python, Java, and C Programming through Cisco Networking Academy, building a strong programming foundation.',
    date: '2024',
    category: 'Certification',
    icon: '🎓',
    badge: 'Cisco',
  },
  {
    id: 'open-source',
    title: 'Open Source Contributor',
    description:
      'Active contributor on GitHub with projects in blood bank management, mentoring platforms, and multilingual search tools.',
    date: '2024 – Present',
    category: 'Open Source',
    icon: '🌟',
  },
  {
    id: 'docker-setup',
    title: 'Dockerized Project Deployment',
    description:
      'Implemented Docker containerization for the HyderabadHustlers multilingual search project with multi-service orchestration.',
    date: '2024',
    category: 'Award',
    icon: '🐳',
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
      'Manideep showed strong initiative during his internship, especially in migrating our legacy JavaScript codebase to TypeScript. His attention to detail and ability to quickly learn Vue.js and integrate AWS services made him a valuable contributor to our risk-management platform.',
    rating: 5,
    date: '2025',
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
      'I reviewed Manideep\'s BloodBankManagementSystem and Sutra-Code projects. His code is clean, well-documented, and follows TypeScript best practices. The API proxying implementation shows solid architectural thinking.',
    rating: 5,
    date: '2024',
  },
];

// ─── SERVICES ─────────────────────────────────────────────────
export const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description:
      'Building modern, responsive web applications with TypeScript, React/Vue, and Node.js from concept to deployment.',
    icon: '🌐',
    features: ['React / Vue Frontend', 'Node.js / Express Backend', 'TypeScript Codebase', 'API Integration'],
    popular: false,
  },
  {
    id: 'fullstack',
    title: 'Full Stack Solutions',
    description:
      'End-to-end web product development with TypeScript, covering architecture, REST APIs, authentication, and deployment.',
    icon: '⚡',
    features: ['System Architecture', 'CRUD REST APIs', 'JWT Auth & Security', 'GitHub Actions CI/CD'],
    popular: true,
  },
  {
    id: 'api-dev',
    title: 'API Development',
    description:
      'Building robust REST APIs with proper authentication, documentation, and third-party integrations.',
    icon: '🔗',
    features: ['REST APIs', 'JWT / OAuth Authentication', 'Postman Collections', 'Third-party Integration'],
    popular: false,
  },
  {
    id: 'data-engineering',
    title: 'Data Curation & Engineering',
    description:
      'Data preprocessing, curation, and bias-mitigation for AI/ML training pipelines.',
    icon: '📊',
    features: ['Data Cleaning & Curation', 'Bias Mitigation', 'Dataset Auditing', 'Preprocessing Pipelines'],
    popular: false,
  },
  {
    id: 'cloud-setup',
    title: 'Cloud & DevOps Setup',
    description:
      'AWS services configuration, Docker containerization, and CI/CD pipeline setup for reliable deployments.',
    icon: '☁️',
    features: ['AWS (EC2/S3/Lambda)', 'Docker Containerization', 'GitHub Actions', 'Deployment Automation'],
    popular: false,
  },
  {
    id: 'code-review',
    title: 'Code Review & Testing',
    description:
      'Code quality review, unit testing with Jest, and documentation for maintainable codebases.',
    icon: '💡',
    features: ['Code Review', 'Jest Unit Testing', 'TypeScript Migration', 'Documentation'],
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
