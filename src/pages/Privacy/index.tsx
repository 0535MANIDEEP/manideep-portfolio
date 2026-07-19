// ============================================================
// PRIVACY POLICY — GDPR / CCPA compliant
// ============================================================

import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Shield, Mail } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — Manideep Daram</title>
        <meta name="description" content="Privacy policy for Manideep Daram's portfolio. Explains data collection, usage, and user rights under GDPR and CCPA." />
      </Helmet>

      <section className="section" aria-label="Privacy policy">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 md:mb-12"
          >
            <p className="section-label">Legal</p>
            <h1 className="mb-4 md:mb-6">
              Privacy <span className="gradient-text">Policy</span>
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
                  Overview
                </h2>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                This Privacy Policy describes how Manideep Daram ("I", "me", "my") collects, uses, and
                protects information when you visit this portfolio website. I am committed to protecting
                your privacy and handling your data in an open and transparent manner.
              </p>
            </div>

            <div className="card card-pad-lg">
              <h2 className="text-lg mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                1. Information I Collect
              </h2>
              <div className="flex flex-col gap-4 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: 'var(--color-text)' }}>Contact Form Data</h3>
                  <p className="leading-relaxed">
                    When you submit the contact form, I collect your name, email address, subject, and message.
                    This data is used solely to respond to your inquiry and is not stored permanently on any server.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: 'var(--color-text)' }}>Cookie Data</h3>
                  <p className="leading-relaxed">
                    This site uses essential cookies for basic functionality: your theme preference (dark/light mode)
                    and your cookie consent status. These are stored locally in your browser and are not transmitted
                    to any third party.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: 'var(--color-text)' }}>No Analytics or Tracking</h3>
                  <p className="leading-relaxed">
                    This website does not use Google Analytics, Facebook Pixel, or any other analytics or tracking
                    services. No browsing data is collected or shared with third parties.
                  </p>
                </div>
              </div>
            </div>

            <div className="card card-pad-lg">
              <h2 className="text-lg mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                2. How I Use Your Information
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                Any information collected is used exclusively for:
              </p>
              <ul className="flex flex-col gap-2 text-sm mt-3" style={{ color: 'var(--color-text-muted)' }}>
                <li>• Responding to your contact form messages</li>
                <li>• Remembering your theme preference</li>
                <li>• Maintaining your cookie consent choice</li>
              </ul>
            </div>

            <div className="card card-pad-lg">
              <h2 className="text-lg mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                3. Data Sharing
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                I do not sell, trade, or otherwise transfer your personal information to outside parties.
                The only third-party service used is EmailJS for contact form delivery, which processes
                your message solely to deliver it to my email inbox. EmailJS's privacy policy governs their handling of this data.
              </p>
            </div>

            <div className="card card-pad-lg">
              <h2 className="text-lg mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                4. Data Retention
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                Contact form messages are not stored on this website's servers. Messages delivered via EmailJS
                are retained according to EmailJS's data retention policies. Cookie data (theme preference,
                consent status) is stored locally in your browser and can be cleared at any time.
              </p>
            </div>

            <div className="card card-pad-lg">
              <h2 className="text-lg mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                5. Your Rights (GDPR)
              </h2>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-muted)' }}>
                Under the General Data Protection Regulation (GDPR), you have the right to:
              </p>
              <ul className="flex flex-col gap-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                <li>• <strong>Access</strong> — Request a copy of any personal data I hold about you</li>
                <li>• <strong>Rectification</strong> — Request correction of inaccurate personal data</li>
                <li>• <strong>Erasure</strong> — Request deletion of your personal data</li>
                <li>• <strong>Restriction</strong> — Request restriction of processing of your personal data</li>
                <li>• <strong>Portability</strong> — Request transfer of your personal data</li>
                <li>• <strong>Objection</strong> — Object to processing of your personal data</li>
              </ul>
              <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--color-text-muted)' }}>
                To exercise any of these rights, contact me at{' '}
                <a href="mailto:manideepdaram@gmail.com" className="underline hover:text-primary">manideepdaram@gmail.com</a>.
              </p>
            </div>

            <div className="card card-pad-lg">
              <h2 className="text-lg mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                6. Your Rights (CCPA)
              </h2>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-muted)' }}>
                Under the California Consumer Privacy Act (CCPA), California residents have the right to:
              </p>
              <ul className="flex flex-col gap-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                <li>• Know what personal information is being collected</li>
                <li>• Request deletion of personal information</li>
                <li>• Opt-out of the sale of personal information (I do not sell data)</li>
                <li>• Not be discriminated against for exercising your rights</li>
              </ul>
            </div>

            <div className="card card-pad-lg">
              <h2 className="text-lg mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                7. Data Security
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                I implement appropriate technical and organizational measures to protect your personal
                information. This website uses HTTPS encryption for all communications. However, no
                method of transmission over the Internet is 100% secure.
              </p>
            </div>

            <div className="card card-pad-lg">
              <h2 className="text-lg mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                8. Changes to This Policy
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                I may update this Privacy Policy from time to time. Any changes will be reflected on this
                page with an updated "Last updated" date. Continued use of this website after changes
                constitutes acceptance of the updated policy.
              </p>
            </div>

            <div className="card card-pad-lg">
              <h2 className="text-lg mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                9. Contact
              </h2>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-muted)' }}>
                If you have any questions about this Privacy Policy or your data, please contact:
              </p>
              <a
                href="mailto:manideepdaram@gmail.com?subject=Privacy%20Inquiry"
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                style={{ color: 'var(--color-text-muted)' }}
              >
                <Mail size={14} />
                manideepdaram@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
