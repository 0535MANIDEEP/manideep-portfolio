// ============================================================
// CUSTOM ANIMATED CURSOR
// ============================================================

import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from '../../hooks';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const isTouchDevice = useMediaQuery('(hover: none)');

  useEffect(() => {
    if (isTouchDevice) return;

    let animId: number;
    let ringX = 0, ringY = 0;
    let dotX = 0, dotY = 0;

    const move = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
    };

    const animate = () => {
      // Smooth follow for ring
      ringX += (dotX - ringX) * 0.12;
      ringY += (dotY - ringY) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.left = `${dotX}px`;
        dotRef.current.style.top = `${dotY}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }
      animId = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);

    window.addEventListener('mousemove', move);
    animId = requestAnimationFrame(animate);

    // Add hover listeners to all interactive elements
    const targets = document.querySelectorAll('a, button, [role="button"], input, textarea, .hoverable');
    targets.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(animId);
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      <div ref={dotRef} className={`cursor-dot ${hovering ? 'hovering' : ''}`} aria-hidden="true" />
      <div ref={ringRef} className={`cursor-ring ${hovering ? 'hovering' : ''}`} aria-hidden="true" />
    </>
  );
}
