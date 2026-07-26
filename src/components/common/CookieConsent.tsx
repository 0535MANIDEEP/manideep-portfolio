// ============================================================
// COOKIE CONSENT BANNER — GDPR / CCPA compliant
// ============================================================

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

const COOKIE_KEY = 'cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(COOKIE_KEY, 'rejected');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Cookie consent"
          aria-modal="false"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[9990] p-4 md:p-6"
        >
          <div
            className="container max-w-3xl mx-auto rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            style={{
              background: 'var(--color-card)',
              border: '1px solid var(--color-border)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
            }}
          >
            <div className="flex items-start gap-3 flex-1">
              <Cookie size={20} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: 2 }} />
              <div>
                <p className="text-sm font-medium mb-1" style={{ color: 'var(--color-text)' }}>
                  Cookie Notice
                </p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  This site uses essential cookies for functionality (theme preference, consent record).
                  No tracking or analytics cookies are used. By continuing to browse, you agree to the use of essential cookies.
                  Read our <a href="/privacy" className="underline hover:text-primary">Privacy Policy</a> for details.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={reject}
                className="px-4 py-2 rounded-lg text-xs font-medium transition-colors"
                style={{
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-muted)',
                  background: 'transparent',
                }}
              >
                Reject
              </button>
              <button
                onClick={accept}
                className="btn btn-primary py-2 px-4 text-xs"
              >
                Accept
              </button>
              <button
                onClick={accept}
                className="w-7 h-7 rounded flex items-center justify-center"
                aria-label="Dismiss cookie notice"
                style={{ color: 'var(--color-text-muted)' }}
              >
                <X size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
