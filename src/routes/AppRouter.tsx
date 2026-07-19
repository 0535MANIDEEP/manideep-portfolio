// ============================================================
// APP ROUTER — Lazy loading, Suspense, Protected routes
// ============================================================

import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';

// Lazy-loaded pages
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Projects = lazy(() => import('../pages/Projects'));
const ProjectDetail = lazy(() => import('../pages/Projects/ProjectDetail'));
const Skills = lazy(() => import('../pages/Skills'));
const Experience = lazy(() => import('../pages/Experience'));
const Achievements = lazy(() => import('../pages/Achievements'));
const Education = lazy(() => import('../pages/Education'));
const Services = lazy(() => import('../pages/Services'));
const Testimonials = lazy(() => import('../pages/Testimonials'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Skeleton fallback for lazy routes
function PageSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--color-bg)' }}>
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-10 h-10 border-2 border-t-transparent rounded-full animate-spin"
          style={{ borderColor: 'var(--color-primary)', borderTopColor: 'transparent' }}
        />
        <p className="text-xs" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-code)' }}>
          Loading…
        </p>
      </div>
    </div>
  );
}

export default function AppRouter() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Suspense fallback={<PageSkeleton />}>
                <Home />
              </Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <Suspense fallback={<PageSkeleton />}>
                <About />
              </Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/projects"
          element={
            <MainLayout>
              <Suspense fallback={<PageSkeleton />}>
                <Projects />
              </Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <MainLayout>
              <Suspense fallback={<PageSkeleton />}>
                <ProjectDetail />
              </Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/skills"
          element={
            <MainLayout>
              <Suspense fallback={<PageSkeleton />}>
                <Skills />
              </Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/experience"
          element={
            <MainLayout>
              <Suspense fallback={<PageSkeleton />}>
                <Experience />
              </Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/achievements"
          element={
            <MainLayout>
              <Suspense fallback={<PageSkeleton />}>
                <Achievements />
              </Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/education"
          element={
            <MainLayout>
              <Suspense fallback={<PageSkeleton />}>
                <Education />
              </Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/services"
          element={
            <MainLayout>
              <Suspense fallback={<PageSkeleton />}>
                <Services />
              </Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/testimonials"
          element={
            <MainLayout>
              <Suspense fallback={<PageSkeleton />}>
                <Testimonials />
              </Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Suspense fallback={<PageSkeleton />}>
                <Contact />
              </Suspense>
            </MainLayout>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <Suspense fallback={<PageSkeleton />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
