// ============================================================
// 404 NOT FOUND PAGE
// ============================================================

import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 — Page Not Found</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <main
        className="min-h-screen flex items-center justify-center py-8 md:py-12"
        style={{ background: 'var(--color-bg)' }}
        aria-label="404 page not found"
      >
        <div className="container text-center">
          {/* Glitchy 404 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <motion.h1
              className="gradient-text mb-2"
              style={{ fontSize: 'clamp(6rem, 20vw, 12rem)', fontFamily: 'var(--font-heading)', lineHeight: 1 }}
              animate={{ opacity: [1, 0.8, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              404
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
              Page not found
            </h2>
            <p className="text-base mb-8 max-w-md mx-auto" style={{ color: 'var(--color-text-muted)' }}>
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link to="/" className="btn btn-primary hoverable gap-2">
                <Home size={15} /> Go Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="btn btn-outline hoverable gap-2"
              >
                <ArrowLeft size={15} /> Go Back
              </button>
            </div>
          </motion.div>

          {/* Decorative */}
          <motion.div
            className="mt-10 md:mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p
              className="text-xs"
              style={{ color: 'var(--color-text-subtle)', fontFamily: 'var(--font-code)' }}
            >
              Error: 404 · Page not found · Hyderabad, India
            </p>
          </motion.div>
        </div>
      </main>
    </>
  );
}
