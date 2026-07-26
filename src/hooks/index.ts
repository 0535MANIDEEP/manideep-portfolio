// ============================================================
// CUSTOM HOOKS
// ============================================================

import { useState, useEffect, useRef, useCallback } from 'react';
import { useAppSelector, useAppDispatch } from './useRedux';
import { toggleTheme } from '../redux/slices/themeSlice';

/** Track scroll direction: 'up' | 'down' | null */
export function useScrollDirection() {
  const [direction, setDirection] = useState<'up' | 'down' | null>(null);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setDirection(y > lastY.current ? 'down' : 'up');
      lastY.current = y;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return direction;
}

/** Track scroll position */
export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handle = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);
  return scrollY;
}

/** Theme hook */
export function useTheme() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((s) => s.theme.mode);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  return { mode, toggle: () => dispatch(toggleTheme()) };
}

/** Track mouse position */
export function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handle = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);
  return pos;
}

/** Detect if element is in viewport */
export function useInView(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/** Scroll progress (0–1) */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handle = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(totalHeight > 0 ? window.scrollY / totalHeight : 0);
    };
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);
  return progress;
}

/** Local storage state with JSON serialization */
export function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? (JSON.parse(stored) as T) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  const set = useCallback((val: T | ((prev: T) => T)) => {
    setValue((prev) => {
      const next = typeof val === 'function' ? (val as (p: T) => T)(prev) : val;
      localStorage.setItem(key, JSON.stringify(next));
      return next;
    });
  }, [key]);

  return [value, set] as const;
}

/** Media query hook */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia(query);
    const handle = (e: MediaQueryListEvent) => setMatches(e.matches);
    mq.addEventListener('change', handle);
    setMatches(mq.matches);
    return () => mq.removeEventListener('change', handle);
  }, [query]);

  return matches;
}

/** Command palette visibility */
export function useCommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, []);

  return { open, setOpen };
}
