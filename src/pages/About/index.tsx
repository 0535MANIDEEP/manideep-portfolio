// ============================================================
// ABOUT PAGE — Journey, Timeline, Values, FunFacts
// ============================================================

import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Target, Eye, Heart, Zap, Code2, Globe, Coffee, Music } from 'lucide-react';
import { PERSONAL_INFO } from '../../constants';

const values = [
  { icon: Target, title: 'Precision', description: 'I obsess over the details — clean code, pixel-perfect UI, and robust architecture.' },
  { icon: Zap, title: 'Speed', description: 'Fast iteration without sacrificing quality. Ship early, refine often.' },
  { icon: Eye, title: 'Clarity', description: 'Complex problems deserve elegant, simple solutions that are easy to understand.' },
  { icon: Heart, title: 'Passion', description: 'I genuinely love building things. Every project is an opportunity to create something remarkable.' },
];

const funFacts = [
  { icon: Code2, label: 'Lines of Code Written', value: '50k+' },
  { icon: Coffee, label: 'Cups of Coffee', value: '∞' },
  { icon: Globe, label: 'Countries Reached (via apps)', value: '5+' },
  { icon: Music, label: 'Playlists While Coding', value: '12' },
];

const timeline = [
  {
    year: '2020',
    title: 'Started B.Tech at VJIT',
    description: 'Began my Computer Science Engineering journey at Vidya Jyothi Institute of Technology, Hyderabad. Started with C programming and fell in love with coding.',
    tag: 'Education',
  },
  {
    year: '2023–24',
    title: 'Full Stack Intern at Crystalline Tech',
    description: 'Built a risk-management SPA with Vue + TypeScript, migrated legacy JavaScript to TypeScript, and integrated AWS S3 during my internship at Crystalline Software Technologies.',
    tag: 'Professional',
  },
  {
    year: '2024',
    title: 'Graduated B.Tech CSE',
    description: 'Completed Computer Science Engineering at VJIT. Earned Cisco certifications in Python, Java, and C. Started contributing to open-source and building full-stack projects.',
    tag: 'Milestone',
  },
  {
    year: '2025',
    title: 'AI Data Engineering at Swecha',
    description: 'Contributed to Viswam AI / Swecha Foundation (IIIT Hyderabad), curating Telugu datasets for LLM training with bias-mitigation workflows.',
    tag: 'AI/ML',
  },
  {
    year: '2025–Now',
    title: 'Full-Stack .NET + Angular',
    description: 'Currently learning and building with .NET and Angular, documenting the learning journey regularly on LinkedIn. Focused on enterprise-grade full-stack development.',
    tag: 'Present',
  },
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About — Manideep Daram</title>
        <meta name="description" content="Learn about Manideep Daram's journey as a Software Engineer, including internship experience, DSA problem-solving, and technical skills." />
      </Helmet>

      {/* Hero */}
      <section className="section" aria-label="About hero">
        <div className="container">
          <div className="max-w-3xl mx-auto md:mx-0">
            <motion.p
              className="section-label"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              About Me
            </motion.p>
            <motion.h1
              className="mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Building at the intersection of <span className="gradient-text">engineering</span> and <span className="gradient-text">design</span>
            </motion.h1>
            <motion.p
              className="text-lg leading-relaxed mb-6 md:mb-8"
              style={{ color: 'var(--color-text-muted)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* Personal Info Grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {[
                { label: 'Name', value: 'Manideep Daram' },
                { label: 'Role', value: 'Software Engineer' },
                { label: 'GPA', value: '8.53 CGPA' },
                { label: 'Education', value: 'B.Tech CSE' },
                { label: 'University', value: 'VJIT, Hyderabad' },
                { label: 'DSA Problems', value: '100+ Solved' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="card card-pad-sm"
                >
                  <p className="text-xs mb-1" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-code)' }}>{label}</p>
                  <p className="text-sm font-semibold" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>{value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" aria-label="Mission and vision">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="card card-pad-lg"
              style={{ background: 'linear-gradient(135deg, rgba(255,122,0,0.06), var(--color-card))' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,122,0,0.1)' }}>
                  <Target size={20} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>Mission</h3>
              </div>
              <p style={{ color: 'var(--color-text-muted)' }}>
                To craft web experiences that are not just functional, but delightful — combining technical excellence with intuitive design to solve real-world problems at scale.
              </p>
            </motion.div>

            <motion.div
              className="card card-pad-lg"
              style={{ background: 'linear-gradient(135deg, rgba(255,193,7,0.06), var(--color-card))' }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,193,7,0.1)' }}>
                  <Eye size={20} style={{ color: 'var(--color-secondary)' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>Vision</h3>
              </div>
              <p style={{ color: 'var(--color-text-muted)' }}>
                To become a world-class software architect who builds products that empower millions — from healthcare to education — while contributing meaningfully to the open-source community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section" aria-label="Core values">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 md:mb-12 text-center"
          >
            <p className="section-label justify-center">What I Stand For</p>
            <h2>Core <span className="gradient-text">Values</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  className="card card-pad text-center gradient-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: 'rgba(255,122,0,0.1)' }}
                  >
                    <Icon size={22} style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <h4 className="mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{v.title}</h4>
                  <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{v.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="section" aria-label="Career timeline">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 md:mb-12 text-center"
          >
            <p className="section-label justify-center">My Journey</p>
            <h2>Career <span className="gradient-text">Timeline</span></h2>
          </motion.div>

          <div className="relative max-w-2xl mx-auto">
            <div className="timeline-line" aria-hidden="true" />

            <div className="flex flex-col gap-8 relative">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  className={`flex gap-6 ${i % 2 === 0 ? 'flex-row' : 'flex-row md:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  {/* Dot */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-3 h-3 rounded-full border-2 border-primary mt-2 flex-shrink-0"
                      style={{
                        borderColor: 'var(--color-primary)',
                        background: 'var(--color-primary)',
                        boxShadow: '0 0 12px rgba(255,122,0,0.5)',
                      }}
                    />
                  </div>

                  {/* Card */}
                  <div className="flex-1 card card-pad">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span
                        className="text-xs font-bold"
                        style={{ fontFamily: 'var(--font-code)', color: 'var(--color-primary)' }}
                      >
                        {item.year}
                      </span>
                      <span className="badge">{item.tag}</span>
                    </div>
                    <h4 className="mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                      {item.title}
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="section" aria-label="Fun facts">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 md:mb-12 text-center"
          >
            <p className="section-label justify-center">Behind the Code</p>
            <h2>Fun <span className="gradient-text">Facts</span></h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {funFacts.map((fact, i) => {
              const Icon = fact.icon;
              return (
                <motion.div
                  key={fact.label}
                  className="card card-pad text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Icon size={24} className="mx-auto mb-3" style={{ color: 'var(--color-primary)' }} />
                  <p
                    className="text-2xl font-bold mb-1"
                    style={{ fontFamily: 'var(--font-number)', color: 'var(--color-text)' }}
                  >
                    {fact.value}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{fact.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
