// ============================================================
// BACK TO TOP BUTTON
// ============================================================

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScrollY } from '../../hooks';

export default function BackToTop() {
  const scrollY = useScrollY();
  const visible = scrollY > 400;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="back-to-top hoverable"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          aria-label="Back to top"
        >
          <ArrowUp size={18} color="#000" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
