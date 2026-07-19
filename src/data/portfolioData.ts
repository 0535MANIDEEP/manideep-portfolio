// ============================================================
// PORTFOLIO DATA — All mock data for the portfolio
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
    id: 'freelancer-hub',
    title: 'Freelancer Hub',
    shortDescription:
      'A real-time freelance collaboration platform connecting talent with enterprise through instant data synchronization.',
    description:
      'Freelancer Hub is a comprehensive ecosystem designed for high-velocity collaboration. The platform optimizes the bridge between talent and enterprise through instant data synchronization, real-time messaging, project management, and intelligent matching algorithms.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
    ],
    techStack: ['React.js', 'Node.js', 'Socket.IO', 'MongoDB', 'Express', 'Redux', 'JWT', 'Redis'],
    github: 'https://github.com/podagatlarajendra/freelancer-hub',
    liveDemo: 'https://freelancer-hub.vercel.app',
    featured: true,
    category: 'Full Stack',
    status: 'completed',
    year: 2024,
    duration: '4 months',
    features: [
      'Real-time messaging with Socket.IO',
      'Intelligent freelancer-client matching',
      'Project milestone & payment tracking',
      'Integrated video calls',
      'Role-based access control',
      'Advanced search & filter',
    ],
    problemStatement:
      'Traditional freelance platforms suffer from slow communication and poor collaboration tools, leading to project delays and client dissatisfaction.',
    architecture:
      'Microservices architecture with a React frontend, Node.js/Express REST API, Socket.IO for real-time features, Redis for caching, and MongoDB for data persistence.',
    stats: [
      { label: 'Latency Reduction', value: '40%' },
      { label: 'Active Users (Beta)', value: '200+' },
      { label: 'Real-time Messages', value: '10k+' },
    ],
  },
  {
    id: 'smart-resume-generator',
    title: 'Smart Resume Generator',
    shortDescription:
      'AI-powered resume generator that leverages LLMs to transform career data into industry-optimized documentation.',
    description:
      'Smart Resume Generator uses Google Gemini API to intelligently parse user career data and generate tailored, ATS-optimized resumes. The system analyzes job descriptions and aligns resume content for maximum compatibility.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80',
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
    ],
    techStack: ['Next.js', 'TypeScript', 'Gemini API', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com/podagatlarajendra/smart-resume-gen',
    liveDemo: 'https://smart-resume-gen.vercel.app',
    featured: true,
    category: 'AI/ML',
    status: 'completed',
    year: 2024,
    duration: '3 months',
    features: [
      'AI-powered content generation via Gemini API',
      'ATS score optimization',
      'Multiple professional templates',
      'Real-time preview',
      'PDF export',
      'Job description keyword matching',
    ],
    problemStatement:
      'Job seekers struggle to tailor resumes for each application, resulting in poor ATS scores and missed opportunities.',
    architecture:
      'Next.js app with server-side rendering, Gemini API integration for AI content, PostgreSQL for user data, and PDF generation pipeline.',
    stats: [
      { label: 'ATS Score Improvement', value: '40%' },
      { label: 'Time Saved', value: '3hrs/resume' },
      { label: 'Templates', value: '12+' },
    ],
  },
  {
    id: 'medifusion',
    title: 'MediFusion',
    shortDescription:
      'A robust healthcare management system prioritizing patient care, data integrity, and HIPAA compliance.',
    description:
      'MediFusion is a comprehensive healthcare platform that manages patient records, appointments, and critical alerts. Built with security and compliance at its core, the system implements HIPAA-compliant data architecture.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    ],
    techStack: ['React.js', 'Node.js', 'PostgreSQL', 'Twilio', 'JWT', 'Express', 'Redis'],
    github: 'https://github.com/podagatlarajendra/medifusion',
    liveDemo: 'https://medifusion.vercel.app',
    featured: true,
    category: 'Full Stack',
    status: 'completed',
    year: 2023,
    duration: '5 months',
    features: [
      'Patient record management',
      'Twilio SMS alerts for critical updates',
      'HIPAA-compliant data encryption',
      'Appointment scheduling',
      'Analytics dashboard',
      'Role-based access (Doctor/Admin/Patient)',
    ],
    problemStatement:
      'Healthcare providers lack integrated systems for managing patient data and sending timely critical alerts, leading to communication gaps.',
    architecture:
      'React frontend with a Node.js/Express backend, PostgreSQL for structured medical data, Twilio for SMS notifications, and end-to-end encryption.',
    stats: [
      { label: 'Patient Records', value: '500+' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Alert Delivery', value: '<3s' },
    ],
  },
];

// ─── SKILLS ──────────────────────────────────────────────────
export const skills: Skill[] = [
  // Frontend
  { name: 'React.js', icon: 'react', level: 95, category: 'Frontend', color: '#61DAFB' },
  { name: 'TypeScript', icon: 'typescript', level: 88, category: 'Frontend', color: '#3178C6' },
  { name: 'Next.js', icon: 'nextjs', level: 85, category: 'Frontend', color: '#FFFFFF' },
  { name: 'Tailwind CSS', icon: 'tailwind', level: 92, category: 'Frontend', color: '#06B6D4' },
  { name: 'Redux Toolkit', icon: 'redux', level: 85, category: 'Frontend', color: '#764ABC' },
  { name: 'Framer Motion', icon: 'framer', level: 80, category: 'Frontend', color: '#FF0050' },
  // Backend
  { name: 'Node.js', icon: 'nodejs', level: 90, category: 'Backend', color: '#339933' },
  { name: 'Express.js', icon: 'express', level: 88, category: 'Backend', color: '#FFFFFF' },
  { name: 'Socket.IO', icon: 'socketio', level: 80, category: 'Backend', color: '#010101' },
  { name: 'REST APIs', icon: 'api', level: 92, category: 'Backend', color: '#FF7A00' },
  { name: 'GraphQL', icon: 'graphql', level: 72, category: 'Backend', color: '#E10098' },
  // Database
  { name: 'MongoDB', icon: 'mongodb', level: 88, category: 'Database', color: '#47A248' },
  { name: 'PostgreSQL', icon: 'postgresql', level: 82, category: 'Database', color: '#336791' },
  { name: 'Redis', icon: 'redis', level: 75, category: 'Database', color: '#DC382D' },
  { name: 'Prisma', icon: 'prisma', level: 78, category: 'Database', color: '#2D3748' },
  // Cloud & DevOps
  { name: 'AWS', icon: 'aws', level: 72, category: 'Cloud', color: '#FF9900' },
  { name: 'Vercel', icon: 'vercel', level: 90, category: 'Cloud', color: '#FFFFFF' },
  { name: 'Docker', icon: 'docker', level: 70, category: 'DevOps', color: '#2496ED' },
  { name: 'Git/GitHub', icon: 'git', level: 92, category: 'DevOps', color: '#F05032' },
  { name: 'CI/CD', icon: 'cicd', level: 68, category: 'DevOps', color: '#FF7A00' },
  // AI/ML
  { name: 'Python', icon: 'python', level: 80, category: 'AI/ML', color: '#3776AB' },
  { name: 'TensorFlow', icon: 'tensorflow', level: 65, category: 'AI/ML', color: '#FF6F00' },
  { name: 'OpenCV', icon: 'opencv', level: 70, category: 'AI/ML', color: '#5C3EE8' },
  { name: 'Gemini API', icon: 'gemini', level: 78, category: 'AI/ML', color: '#4285F4' },
  // Languages
  { name: 'JavaScript', icon: 'javascript', level: 95, category: 'Languages', color: '#F7DF1E' },
  { name: 'SQL', icon: 'sql', level: 80, category: 'Languages', color: '#CC2927' },
  // Tools
  { name: 'Postman', icon: 'postman', level: 88, category: 'Tools', color: '#FF6C37' },
  { name: 'Figma', icon: 'figma', level: 75, category: 'Tools', color: '#F24E1E' },
];

// ─── EXPERIENCE ───────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    id: 'cognifyz-intern',
    company: 'Cognifyz Technologies',
    role: 'Full Stack Development Intern',
    type: 'Internship',
    duration: '6 months',
    startDate: 'Jan 2024',
    endDate: 'Jun 2024',
    location: 'Remote',
    description:
      'Contributed to building and maintaining enterprise-level web applications, working across the full stack with modern technologies.',
    responsibilities: [
      'Engineered responsive front-end components using React.js and Tailwind CSS',
      'Developed robust backend APIs with Node.js and Express, implementing JWT authentication',
      'Streamlined deployment workflows on AWS and Vercel, ensuring 99.9% uptime',
      'Collaborated with cross-functional teams using Agile/Scrum methodology',
      'Optimized database queries reducing average response time by 35%',
    ],
    achievements: [
      'Reduced front-end load times by 20% through code splitting and lazy loading',
      'Implemented CI/CD pipeline reducing deployment time by 60%',
      'Received "Best Intern" recognition for Q2 2024',
    ],
    technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'AWS', 'JWT', 'Tailwind CSS'],
    logo: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=100&q=80',
    companyUrl: 'https://cognifyz.com',
  },
  {
    id: 'freelance',
    company: 'Freelance',
    role: 'Full Stack Developer',
    type: 'Freelance',
    duration: '1+ year',
    startDate: 'Jun 2023',
    endDate: 'Present',
    location: 'Remote',
    description:
      'Building custom web applications for clients across various industries, from startups to established businesses.',
    responsibilities: [
      'Architected and delivered 10+ full-stack web applications end-to-end',
      'Managed client relationships and translated requirements into technical solutions',
      'Built RESTful APIs and integrated third-party services',
      'Implemented responsive designs with pixel-perfect accuracy',
    ],
    achievements: [
      '100% client satisfaction rate across all projects',
      'Generated 150+ GitHub stars across open-source contributions',
      'Reduced project delivery time by 30% through component reusability',
    ],
    technologies: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'Vercel'],
    logo: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&q=80',
    companyUrl: '#',
  },
];

// ─── EDUCATION ────────────────────────────────────────────────
export const education: Education[] = [
  {
    id: 'sandip-university',
    institution: 'Sandip University',
    degree: 'B.Tech (Hons.)',
    field: 'Computer Science and Engineering',
    grade: '8.9 CGPA',
    duration: '2024 – 2028',
    startYear: 2024,
    endYear: 'Present',
    location: 'Nashik, Maharashtra',
    description:
      'Pursuing a Bachelor of Technology with Honors in Computer Science and Engineering, focusing on modern software development, algorithms, and AI/ML.',
    achievements: [
      'GDSC GenAI Labs participant',
      'Team Leader for university hackathon',
      'Active contributor to university tech club',
    ],
    subjects: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
      'Machine Learning',
      'Software Engineering',
      'Web Technologies',
      'Cloud Computing',
    ],
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=100&q=80',
  },
];

// ─── ACHIEVEMENTS ─────────────────────────────────────────────
export const achievements: Achievement[] = [
  {
    id: 'gdsc-genai',
    title: 'GDSC GenAI Labs',
    description:
      'Selected as a participant in Google Developer Student Clubs GenAI Labs, exploring cutting-edge AI technologies and building GenAI-powered applications.',
    date: '2024',
    category: 'Community',
    icon: '🤖',
    badge: 'GDSC',
    link: 'https://developers.google.com/community/gdsc',
  },
  {
    id: 'team-leadership',
    title: 'Team Leadership Award',
    description:
      'Led a team of 5 developers in a university-level hackathon, successfully delivering a healthcare platform prototype within 24 hours.',
    date: '2024',
    category: 'Leadership',
    icon: '👑',
  },
  {
    id: 'healthcare-platform',
    title: 'Healthcare Platform Recognition',
    description:
      'MediFusion recognized for innovative approach to healthcare data management and HIPAA compliance implementation.',
    date: '2023',
    category: 'Award',
    icon: '🏆',
  },
  {
    id: 'cognifyz-best-intern',
    title: 'Best Intern — Cognifyz Technologies',
    description:
      'Awarded "Best Intern" for exceptional performance, technical excellence, and going beyond the scope of internship responsibilities in Q2 2024.',
    date: 'Jun 2024',
    category: 'Award',
    icon: '⭐',
  },
  {
    id: 'open-source',
    title: 'Open Source Contributor',
    description:
      'Contributed to multiple open-source projects, amassing 150+ GitHub stars and helping improve tools used by developers globally.',
    date: '2023 – Present',
    category: 'Open Source',
    icon: '🌟',
  },
  {
    id: 'hackathon-winner',
    title: 'University Hackathon Finalist',
    description:
      'Reached the finals of the annual university hackathon, presenting an AI-powered education platform to a panel of industry judges.',
    date: '2023',
    category: 'Hackathon',
    icon: '⚡',
  },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Priya Sharma',
    role: 'Product Manager',
    company: 'TechCorp Solutions',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    content:
      'Rajendra delivered our project with exceptional quality and 2 weeks ahead of schedule. His ability to translate complex requirements into clean, functional code is remarkable. The real-time features he built are exactly what we envisioned.',
    rating: 5,
    date: '2024',
  },
  {
    id: 't2',
    name: 'Arjun Mehta',
    role: 'CTO',
    company: 'StartupBridge',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    content:
      'Working with Rajendra was a game-changer. He has an eye for design and an engineering mind. Our platform went from concept to production in record time. Highly recommend for any full-stack work.',
    rating: 5,
    date: '2024',
  },
  {
    id: 't3',
    name: 'Sneha Kapoor',
    role: 'Senior Engineer',
    company: 'Cognifyz Technologies',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    content:
      'During his internship, Rajendra showed maturity and skill beyond his experience. He took ownership of critical features and delivered them with zero bugs. He is an absolute asset to any team.',
    rating: 5,
    date: '2024',
  },
  {
    id: 't4',
    name: 'Vikram Singh',
    role: 'Founder',
    company: 'HealthTech Ventures',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    content:
      'Rajendra built MediFusion for us with incredible attention to security and HIPAA compliance. The system handles thousands of patient records flawlessly. His technical depth and professionalism are outstanding.',
    rating: 5,
    date: '2023',
  },
];

// ─── SERVICES ─────────────────────────────────────────────────
export const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description:
      'Building fast, scalable, and visually stunning web applications from concept to deployment using modern frameworks.',
    icon: '🌐',
    features: ['React / Next.js Frontend', 'Node.js / Express Backend', 'Database Design', 'API Integration'],
    popular: false,
  },
  {
    id: 'fullstack',
    title: 'Full Stack Solutions',
    description:
      'End-to-end development of complete web products, handling architecture, development, and deployment.',
    icon: '⚡',
    features: ['System Architecture', 'Full CRUD APIs', 'Authentication & Auth', 'Deployment & CI/CD'],
    popular: true,
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design & Dev',
    description:
      'Crafting pixel-perfect, responsive interfaces that delight users and drive conversions.',
    icon: '🎨',
    features: ['Figma Design', 'Responsive Implementation', 'Animation & Motion', 'Design Systems'],
    popular: false,
  },
  {
    id: 'api-dev',
    title: 'API Development',
    description:
      'Building robust RESTful and GraphQL APIs with proper documentation, authentication, and rate limiting.',
    icon: '🔗',
    features: ['REST / GraphQL APIs', 'JWT Authentication', 'API Documentation', 'Third-party Integration'],
    popular: false,
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    description:
      'Integrating AI/ML capabilities into web applications using modern LLM APIs and ML frameworks.',
    icon: '🤖',
    features: ['LLM API Integration', 'AI-powered Features', 'Computer Vision', 'Data Analysis'],
    popular: false,
  },
  {
    id: 'consultation',
    title: 'Tech Consultation',
    description:
      'Providing expert technical guidance on architecture, tech stack selection, and development strategy.',
    icon: '💡',
    features: ['Architecture Review', 'Tech Stack Advice', 'Code Review', 'Performance Audit'],
    popular: false,
  },
];

// ─── CERTIFICATES ─────────────────────────────────────────────
export const certificates: Certificate[] = [
  {
    id: 'c1',
    title: 'Full Stack Web Development',
    issuer: 'Cognifyz Technologies',
    date: 'Jun 2024',
    credentialId: 'CZ-FSW-2024-001',
    credentialUrl: '#',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80',
  },
  {
    id: 'c2',
    title: 'GDSC GenAI Labs',
    issuer: 'Google Developer Student Clubs',
    date: '2024',
    credentialId: 'GDSC-GENAI-2024',
    credentialUrl: 'https://developers.google.com',
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&q=80',
  },
  {
    id: 'c3',
    title: 'React & Redux Masterclass',
    issuer: 'Udemy',
    date: '2023',
    credentialId: 'UD-REACT-2023',
    credentialUrl: '#',
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&q=80',
  },
];
