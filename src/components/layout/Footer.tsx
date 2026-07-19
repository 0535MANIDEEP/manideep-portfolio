// ============================================================
// FOOTER — Minimal, Social, Newsletter, Back to Top
// ============================================================

import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../../constants';

const socialLinks = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/podagatlarajendra' },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://linkedin.com/in/podagatlarajendra' },
  { icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com/podagatlaraj' },
  { icon: Mail, label: 'Email', href: 'mailto:rajendra@example.com' },
];

export default function Footer() {
  return (
    <footer
      className="relative mt-24"
      style={{ borderTop: '1px solid var(--color-border)', background: 'var(--color-dark)' }}
      role="contentinfo"
    >
      {/* Glow accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #FF7A00, transparent)' }}
        aria-hidden="true"
      />

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                style={{
                  background: 'linear-gradient(135deg, #FF7A00, #FFC107)',
                  color: '#000',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                PR
              </div>
              <span
                className="font-semibold"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
              >
                Podagatla Rajendra
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Full Stack Developer building scalable, elegant web experiences from Hyderabad, India.
            </p>

            {/* Availability */}
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: '#22c55e' }}
                aria-hidden="true"
              />
              <span className="text-xs" style={{ color: '#22c55e' }}>
                Available for freelance & full-time roles
              </span>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center hoverable"
                  style={{
                    background: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-text-muted)',
                  }}
                  whileHover={{
                    scale: 1.1,
                    borderColor: 'rgba(255,122,0,0.5)',
                    color: 'var(--color-primary)',
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-sm font-semibold mb-4 uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-code)', color: 'var(--color-text-muted)' }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <NavLink
                    to={link.href}
                    className="text-sm group flex items-center gap-1 transition-colors duration-200"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    <span className="group-hover:text-primary transition-colors duration-200"
                      style={{}}>
                      {link.label}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3
              className="text-sm font-semibold mb-4 uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-code)', color: 'var(--color-text-muted)' }}
            >
              Stay Updated
            </h3>
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-muted)' }}>
              Subscribe for the latest projects, articles, and insights.
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); }}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 rounded-lg text-sm outline-none"
                style={{
                  background: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text)',
                  fontFamily: 'var(--font-body)',
                }}
              />
              <button
                type="submit"
                className="btn btn-primary py-2 px-3 text-sm"
                aria-label="Subscribe"
              >
                <ArrowUpRight size={14} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-6"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          <p className="text-xs" style={{ color: 'var(--color-text-subtle)' }}>
            © {new Date().getFullYear()} Podagatla Rajendra. Crafted with ❤️ in Hyderabad.
          </p>
          <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--color-text-subtle)' }}>
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
