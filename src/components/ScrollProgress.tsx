"use client";

import { useEffect, useState, useRef } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      {/* Top Progress Bar */}
      <div
        ref={progressRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${progress}%`,
          height: "3px",
          background: "linear-gradient(90deg, #ffcc00, #ff6b6b, #845ef7)",
          zIndex: 100000,
          transition: "width 0.1s ease-out",
          boxShadow: "0 0 20px #ffcc00, 0 0 40px #ffcc00",
        }}
      />
      
      {/* Side Progress Indicator */}
      <div
        style={{
          position: "fixed",
          right: "30px",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
          zIndex: 9999,
        }}
      >
        {["Home", "About", "Portfolio", "Contact"].map((section, index) => (
          <div
            key={section}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: progress > (index * 25) ? "linear-gradient(135deg, #ffcc00, #ff6b6b)" : "rgba(255, 255, 255, 0.2)",
              boxShadow: progress > (index * 25) ? "0 0 15px rgba(255, 204, 0, 0.5)" : "none",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            title={section}
          />
        ))}
      </div>
      
      {/* Percentage Display */}
      <div
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "2px",
          color: "rgba(255, 255, 255, 0.3)",
          zIndex: 9999,
          fontFamily: "monospace",
        }}
      >
        {Math.round(progress)}%
      </div>
    </>
  );
}
