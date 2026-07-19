// ============================================================
// UTILITY FUNCTIONS
// ============================================================

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge Tailwind classes safely */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a date string */
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/** Truncate text to a specified length */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '…';
}

/** Simple fuzzy search — returns true if all query chars appear in order */
export function fuzzyMatch(str: string, query: string): boolean {
  const s = str.toLowerCase();
  const q = query.toLowerCase();
  let idx = 0;
  for (const char of q) {
    const found = s.indexOf(char, idx);
    if (found === -1) return false;
    idx = found + 1;
  }
  return true;
}

/** Filter projects by search query and category */
export function filterProjects<T extends { title: string; shortDescription: string; techStack: string[]; category: string }>(
  items: T[],
  query: string,
  category: string
): T[] {
  return items.filter((item) => {
    const matchCategory = category === 'All' || item.category === category;
    const matchQuery =
      !query ||
      fuzzyMatch(item.title, query) ||
      fuzzyMatch(item.shortDescription, query) ||
      item.techStack.some((t) => fuzzyMatch(t, query));
    return matchCategory && matchQuery;
  });
}

/** Generate a consistent color from a string (for avatars etc.) */
export function stringToColor(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = hash % 360;
  return `hsl(${h}, 60%, 50%)`;
}

/** Clamp a number between min and max */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/** Map a value from one range to another */
export function mapRange(
  value: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number
): number {
  return ((value - inputMin) / (inputMax - inputMin)) * (outputMax - outputMin) + outputMin;
}

/** Debounce a function */
export function debounce<T extends (...args: unknown[]) => void>(fn: T, delay: number): T {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: unknown[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  }) as T;
}
