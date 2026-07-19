// ============================================================
// MAIN LAYOUT — wraps all public pages
// ============================================================

import { type ReactNode, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CustomCursor from '../components/common/CustomCursor';
import BackToTop from '../components/common/BackToTop';
import CommandPalette from '../components/common/CommandPalette';
import CookieConsent from '../components/common/CookieConsent';

interface MainLayoutProps {
  children: ReactNode;
}

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export default function MainLayout({ children }: MainLayoutProps) {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--color-bg)' }}>
      {/* Skip to content — WCAG 2.4.1 */}
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>

      <CustomCursor />
      <CommandPalette />
      <Navbar />

      <motion.main
        key={pathname}
        variants={pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="flex-1 pt-16"
        id="main-content"
      >
        {children}
      </motion.main>

      <Footer />
      <BackToTop />
      <CookieConsent />
    </div>
  );
}
