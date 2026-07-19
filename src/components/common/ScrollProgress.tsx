// ============================================================
// SCROLL PROGRESS BAR
// ============================================================

import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="scroll-progress"
      style={{ width: `${progress * 100}%` }}
      aria-hidden="true"
    />
  );
}
