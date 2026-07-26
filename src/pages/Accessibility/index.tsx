// ============================================================
// ACCESSIBILITY STATEMENT — WCAG 2.2 AA Compliance
// ============================================================

import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Shield, Mail, ExternalLink } from 'lucide-react';

export default function AccessibilityPage() {
  return (
    <>
      <Helmet>
        <title>Accessibility Statement — Manideep Daram</title>
        <meta name="description" content="Accessibility statement for Manideep Daram's portfolio. Commitment to WCAG 2.2 Level AA compliance." />
      </Helmet>

      <section className="section" aria-label="Accessibility statement">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 md:mb-12"
          >
            <p className="section-label">Accessibility</p>
            <h1 className="mb-4 md:mb-6">
              Accessibility <span className="gradient-text">Statement</span>
            </h1>
            <p className="text-sm" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-code)' }}>
              Last updated: July 2026
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="card card-pad-lg">
              <div className="flex items-center gap-3 mb-4">
                <Shield size={20} style={{ color: 'var(--color-primary)' }} />
                <h2 className="text-lg" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                  Our Commitment
                </h2>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-muted)' }}>
                This website is committed to ensuring digital accessibility for people with disabilities.
                We are continually improving the user experience for everyone and applying the relevant
                accessibility standards to ensure we provide equal access to all users.
              </p>
            </div>

            <div className="card card-pad-lg">
              <h2 className="text-lg mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                Conformance Status
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-muted)' }}>
                We aim to conform to the <strong>Web Content Accessibility Guidelines (WCAG) 2.2 Level AA</strong> standard.
                These guidelines explain how to make web content more accessible for people with disabilities
                and more user-friendly for everyone.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                The guidelines have three levels of accessibility (A, AA, and AAA). We target Level AA compliance,
                which is the standard recommended by the W3C, ADA, Section 508, and the European Accessibility Act.
              </p>
            </div>

            <div className="card card-pad-lg">
              <h2 className="text-lg mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                Accessibility Features
              </h2>
              <ul className="flex flex-col gap-3 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--color-primary)' }}>•</span>
                  Skip-to-content navigation link for keyboard users
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--color-primary)' }}>•</span>
                  Semantic HTML structure with proper heading hierarchy
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--color-primary)' }}>•</span>
                  All images include descriptive alt text
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--color-primary)' }}>•</span>
                  Form inputs are labeled and error messages are announced to screen readers
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--color-primary)' }}>•</span>
                  Full keyboard navigation support across all interactive elements
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--color-primary)' }}>•</span>
                  Visible focus indicators on all focusable elements
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--color-primary)' }}>•</span>
                  ARIA landmarks, labels, and live regions for screen reader compatibility
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--color-primary)' }}>•</span>
                  Color contrast ratios meeting WCAG AA minimum (4.5:1 for text)
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--color-primary)' }}>•</span>
                  Responsive design that adapts to all screen sizes and zoom levels up to 200%
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--color-primary)' }}>•</span>
                  Reduced motion support via <code className="text-xs" style={{ fontFamily: 'var(--font-code)', color: 'var(--color-primary)' }}>prefers-reduced-motion</code>
                </li>
              </ul>
            </div>

            <div className="card card-pad-lg">
              <h2 className="text-lg mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                Assistive Technologies Tested With
              </h2>
              <ul className="flex flex-col gap-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                <li>• NVDA and JAWS screen readers (Windows)</li>
                <li>• VoiceOver (macOS / iOS)</li>
                <li>• TalkBack (Android)</li>
                <li>• Keyboard-only navigation</li>
                <li>• Browser zoom up to 200%</li>
              </ul>
            </div>

            <div className="card card-pad-lg">
              <h2 className="text-lg mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                Known Limitations
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-muted)' }}>
                While we strive for full accessibility, some areas may have limitations:
              </p>
              <ul className="flex flex-col gap-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                <li>• Third-party embedded content (if any) may not be fully accessible</li>
                <li>• Decorative animations can be disabled via the <code className="text-xs" style={{ fontFamily: 'var(--font-code)', color: 'var(--color-primary)' }}>prefers-reduced-motion</code> media query</li>
              </ul>
            </div>

            <div className="card card-pad-lg">
              <h2 className="text-lg mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                Feedback & Contact
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-muted)' }}>
                We welcome your feedback on the accessibility of this website. If you encounter any
                accessibility barriers or have suggestions for improvement, please contact us:
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:manideepdaram@gmail.com?subject=Accessibility%20Feedback"
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  <Mail size={14} />
                  manideepdaram@gmail.com
                </a>
                <a
                  href="/contact"
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  <ExternalLink size={14} />
                  Use the contact form
                </a>
              </div>
              <p className="text-sm leading-relaxed mt-4" style={{ color: 'var(--color-text-muted)' }}>
                We aim to respond to accessibility feedback within 5 business days.
              </p>
            </div>

            <div className="card card-pad-lg">
              <h2 className="text-lg mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                Formal Compliance
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                This accessibility statement applies to{' '}
                <a href="/" className="underline hover:text-primary">https://manideep-daram.dev</a>.
                This statement is prepared in accordance with:
              </p>
              <ul className="flex flex-col gap-2 text-sm mt-3" style={{ color: 'var(--color-text-muted)' }}>
                <li>• Section 508 of the Rehabilitation Act</li>
                <li>• Americans with Disabilities Act (ADA)</li>
                <li>• European Accessibility Act (EAA)</li>
                <li>• Web Content Accessibility Guidelines (WCAG) 2.2 Level AA</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
