"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [mounted, setMounted] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (typeof window === 'undefined') return;
    if (window.innerWidth <= 1024) return;

    const cursorOuter = cursorOuterRef.current;
    const cursorInner = cursorInnerRef.current;
    if (!cursorOuter || !cursorInner) return;

    // Smooth cursor animation
    let animationFrameId: number;
    
    const animate = () => {
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.15;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.15;
      
      cursorOuter.style.transform = `translate3d(${cursorPos.current.x - 25}px, ${cursorPos.current.y - 25}px, 0)`;
      cursorInner.style.transform = `translate3d(${mousePos.current.x - 5}px, ${mousePos.current.y - 5}px, 0)`;
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseEnterInteractive = (e: Event) => {
      setIsHovering(true);
      const target = e.target as HTMLElement;
      const text = target.getAttribute("data-cursor") || "";
      setCursorText(text);
    };

    const onMouseLeaveInteractive = () => {
      setIsHovering(false);
      setCursorText("");
    };

    window.addEventListener("mousemove", onMouseMove);

    // Add listeners after a delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const interactiveElements = document.querySelectorAll('a, button, [data-cursor], .single-item, .custom-btn, .menu ul li span, .social-icon, .skill-item, .quote-container, .fact-card');
      interactiveElements.forEach(el => {
        el.addEventListener("mouseenter", onMouseEnterInteractive);
        el.addEventListener("mouseleave", onMouseLeaveInteractive);
      });
    }, 500);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      clearTimeout(timer);
    };
  }, [mounted]);

  if (!mounted) return null;
  if (typeof window !== 'undefined' && window.innerWidth <= 1024) return null;

  return (
    <>
      {/* Cursor Outer Ring */}
      <div
        ref={cursorOuterRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isHovering ? "80px" : "50px",
          height: isHovering ? "80px" : "50px",
          borderRadius: "50%",
          border: isHovering ? "2px solid #ffcc00" : "1px solid rgba(255, 255, 255, 0.5)",
          backgroundColor: isHovering ? "rgba(255, 204, 0, 0.1)" : "transparent",
          pointerEvents: "none",
          zIndex: 999999,
          transition: "width 0.3s, height 0.3s, border 0.3s, background-color 0.3s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mixBlendMode: isHovering ? "difference" : "normal",
        }}
      >
        {cursorText && (
          <span style={{
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#fff",
          }}>
            {cursorText}
          </span>
        )}
      </div>
      
      {/* Cursor Inner Dot */}
      <div
        ref={cursorInnerRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isHovering ? "0px" : "10px",
          height: isHovering ? "0px" : "10px",
          borderRadius: "50%",
          backgroundColor: "#ffcc00",
          pointerEvents: "none",
          zIndex: 999999,
          transition: "width 0.2s, height 0.2s",
          boxShadow: "0 0 20px #ffcc00, 0 0 40px #ffcc00",
        }}
      />

      {/* Global cursor hide */}
      <style jsx global>{`
        @media (min-width: 1025px) {
          *, *::before, *::after {
            cursor: none !important;
          }
          
          html, body {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
