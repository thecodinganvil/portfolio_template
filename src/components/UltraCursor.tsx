"use client";

import { useEffect, useRef, useState } from "react";

export default function UltraCursor() {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth > 1024) {
      setMounted(true);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Animation loop for smooth cursor
    const animate = () => {
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.12;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.12;
      
      if (outerRef.current) {
        outerRef.current.style.left = `${currentPos.current.x}px`;
        outerRef.current.style.top = `${currentPos.current.y}px`;
      }
      if (innerRef.current) {
        innerRef.current.style.left = `${targetPos.current.x}px`;
        innerRef.current.style.top = `${targetPos.current.y}px`;
      }
      
      rafId.current = requestAnimationFrame(animate);
    };
    
    rafId.current = requestAnimationFrame(animate);

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener("mousemove", handleMouseMove);

    // Add hover listeners after a delay
    setTimeout(() => {
      const elements = document.querySelectorAll('a, button, .custom-btn, .single-item, [data-cursor]');
      elements.forEach(el => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    }, 1000);

    // Add style to hide default cursor
    const style = document.createElement('style');
    style.id = 'cursor-hide-style';
    style.textContent = `
      @media (min-width: 1025px) {
        * { cursor: none !important; }
        html, body { cursor: none !important; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      cancelAnimationFrame(rafId.current);
      document.removeEventListener("mousemove", handleMouseMove);
      const existingStyle = document.getElementById('cursor-hide-style');
      if (existingStyle) existingStyle.remove();
    };
  }, [mounted]);

  if (!mounted) return null;

  const outerSize = isHovering ? 70 : 50;
  const innerSize = isHovering ? 0 : 10;

  return (
    <>
      {/* Outer Ring */}
      <div
        ref={outerRef}
        style={{
          position: 'fixed',
          width: `${outerSize}px`,
          height: `${outerSize}px`,
          marginLeft: `-${outerSize / 2}px`,
          marginTop: `-${outerSize / 2}px`,
          borderRadius: '50%',
          border: isHovering ? '2px solid #ffcc00' : '1.5px solid rgba(255, 255, 255, 0.5)',
          backgroundColor: isHovering ? 'rgba(255, 204, 0, 0.1)' : 'transparent',
          pointerEvents: 'none',
          zIndex: 2147483647,
          transition: 'width 0.25s ease, height 0.25s ease, border 0.25s ease, background 0.25s ease, margin 0.25s ease',
          mixBlendMode: isHovering ? 'difference' : 'normal',
          boxShadow: isHovering ? '0 0 30px rgba(255, 204, 0, 0.3)' : 'none',
        }}
      />
      
      {/* Inner Dot */}
      <div
        ref={innerRef}
        style={{
          position: 'fixed',
          width: `${innerSize}px`,
          height: `${innerSize}px`,
          marginLeft: `-${innerSize / 2}px`,
          marginTop: `-${innerSize / 2}px`,
          borderRadius: '50%',
          backgroundColor: '#ffcc00',
          pointerEvents: 'none',
          zIndex: 2147483647,
          transition: 'width 0.15s ease, height 0.15s ease, margin 0.15s ease',
          boxShadow: '0 0 20px #ffcc00, 0 0 40px rgba(255, 204, 0, 0.5)',
        }}
      />
    </>
  );
}
