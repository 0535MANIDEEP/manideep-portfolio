// ============================================================
// PAGE LOADER — Premium loading screen
// ============================================================

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageLoaderProps {
  onComplete?: () => void;
}

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const intervals = [
      setTimeout(() => setProgress(30), 200),
      setTimeout(() => setProgress(60), 500),
      setTimeout(() => setProgress(80), 800),
      setTimeout(() => setProgress(100), 1100),
      setTimeout(() => {
        setVisible(false);
        setTimeout(() => onComplete?.(), 500);
      }, 1400),
    ];
    return () => intervals.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Logo Mark */}
            <div className="relative">
              <motion.div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #FF7A00, #FFC107)',
                  boxShadow: '0 0 40px rgba(255,122,0,0.4)',
                }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              <div
                className="absolute inset-1 rounded-xl flex items-center justify-center"
                style={{ background: 'var(--color-dark)' }}
              >
                <span
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    background: 'linear-gradient(135deg, #FF7A00, #FFC107)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  PR
                </span>
              </div>
            </div>

            {/* Name */}
            <div className="text-center">
              <p
                className="text-sm tracking-widest uppercase"
                style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-code)' }}
              >
                Podagatla Rajendra
              </p>
            </div>

            {/* Progress Bar */}
            <div className="loader-progress">
              <motion.div
                className="loader-progress-bar"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </div>

            <p
              className="text-xs"
              style={{ color: 'var(--color-text-subtle)', fontFamily: 'var(--font-code)' }}
            >
              {progress < 100 ? 'Initializing...' : 'Ready'}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
