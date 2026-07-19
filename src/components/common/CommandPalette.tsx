// ============================================================
// COMMAND PALETTE — ⌘K / Ctrl+K
// ============================================================

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Home, User, Code2, Cpu, Briefcase, Trophy, GraduationCap, Settings, Phone, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCommandPalette } from '../../hooks';

const commands = [
  { id: 'home', label: 'Go to Home', path: '/', icon: Home, category: 'Navigation' },
  { id: 'about', label: 'Go to About', path: '/about', icon: User, category: 'Navigation' },
  { id: 'projects', label: 'Go to Projects', path: '/projects', icon: Code2, category: 'Navigation' },
  { id: 'skills', label: 'Go to Skills', path: '/skills', icon: Cpu, category: 'Navigation' },
  { id: 'experience', label: 'Go to Experience', path: '/experience', icon: Briefcase, category: 'Navigation' },
  { id: 'achievements', label: 'Go to Achievements', path: '/achievements', icon: Trophy, category: 'Navigation' },
  { id: 'education', label: 'Go to Education', path: '/education', icon: GraduationCap, category: 'Navigation' },
  { id: 'services', label: 'Go to Services', path: '/services', icon: Settings, category: 'Navigation' },
  { id: 'contact', label: 'Go to Contact', path: '/contact', icon: Phone, category: 'Navigation' },
  { id: 'resume', label: 'Download Resume', path: '/resume.pdf', icon: ArrowRight, category: 'Actions', download: true },
  { id: 'github', label: 'Open GitHub', path: 'https://github.com/podagatlarajendra', icon: Code2, category: 'Social', external: true },
  { id: 'linkedin', label: 'Open LinkedIn', path: 'https://linkedin.com/in/podagatlarajendra', icon: User, category: 'Social', external: true },
];

interface Command {
  id: string;
  label: string;
  path: string;
  icon: React.ComponentType<{ size?: number }>;
  category: string;
  download?: boolean;
  external?: boolean;
}

export default function CommandPalette() {
  const { open, setOpen } = useCommandPalette();
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const filtered: Command[] = query
    ? commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()))
    : commands;

  useEffect(() => {
    if (open) {
      setQuery('');
      setSelected(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const execute = (cmd: Command) => {
    setOpen(false);
    if (cmd.external) {
      window.open(cmd.path, '_blank', 'noopener noreferrer');
    } else if (cmd.download) {
      const a = document.createElement('a');
      a.href = cmd.path;
      a.download = 'Resume.pdf';
      a.click();
    } else {
      navigate(cmd.path);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelected((v) => Math.min(v + 1, filtered.length - 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setSelected((v) => Math.max(v - 1, 0)); }
    if (e.key === 'Enter' && filtered[selected]) execute(filtered[selected]);
    if (e.key === 'Escape') setOpen(false);
  };

  const categories = [...new Set(filtered.map((c) => c.category))];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="command-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.div
            className="command-box"
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            onKeyDown={handleKeyDown}
          >
            {/* Search Input */}
            <div
              className="flex items-center gap-3 p-4"
              style={{ borderBottom: '1px solid var(--color-border)' }}
            >
              <Search size={16} style={{ color: 'var(--color-text-muted)', flexShrink: 0 }} />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => { setQuery(e.target.value); setSelected(0); }}
                placeholder="Search commands…"
                className="flex-1 bg-transparent outline-none text-sm"
                style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}
              />
              <button
                onClick={() => setOpen(false)}
                className="w-6 h-6 rounded flex items-center justify-center"
                style={{ background: 'var(--color-border)' }}
              >
                <X size={12} style={{ color: 'var(--color-text-muted)' }} />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-80 overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <p className="text-center py-8 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  No results found
                </p>
              ) : (
                categories.map((cat) => (
                  <div key={cat} className="mb-2">
                    <p
                      className="px-2 py-1 text-xs uppercase tracking-wider"
                      style={{ color: 'var(--color-text-subtle)', fontFamily: 'var(--font-code)' }}
                    >
                      {cat}
                    </p>
                    {filtered
                      .filter((c) => c.category === cat)
                      .map((cmd) => {
                        const globalIdx = filtered.indexOf(cmd);
                        const Icon = cmd.icon;
                        return (
                          <button
                            key={cmd.id}
                            onClick={() => execute(cmd)}
                            onMouseEnter={() => setSelected(globalIdx)}
                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm transition-all duration-150"
                            style={{
                              background: selected === globalIdx ? 'rgba(255,122,0,0.1)' : 'transparent',
                              color: selected === globalIdx ? 'var(--color-primary)' : 'var(--color-text)',
                            }}
                          >
                            <Icon size={15} />
                            <span>{cmd.label}</span>
                            {selected === globalIdx && (
                              <ArrowRight size={13} className="ml-auto" />
                            )}
                          </button>
                        );
                      })}
                  </div>
                ))
              )}
            </div>

            {/* Footer hint */}
            <div
              className="flex items-center gap-4 px-4 py-2.5 text-xs"
              style={{
                borderTop: '1px solid var(--color-border)',
                color: 'var(--color-text-muted)',
                fontFamily: 'var(--font-code)',
              }}
            >
              <span>↑↓ Navigate</span>
              <span>↵ Select</span>
              <span>Esc Close</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
