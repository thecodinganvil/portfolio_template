"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  triggerOnScroll?: boolean;
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  as: Component = "span",
  triggerOnScroll = false,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    const animation = {
      y: "100%",
    };

    gsap.set(text, animation);

    const tl = gsap.timeline({
      scrollTrigger: triggerOnScroll
        ? {
            trigger: container,
            start: "top 90%",
            toggleActions: "play none none reverse",
          }
        : undefined,
      delay: triggerOnScroll ? 0 : delay,
    });

    tl.to(text, {
      y: "0%",
      duration: 1,
      ease: "power4.out",
    });

    return () => {
      tl.kill();
    };
  }, [delay, triggerOnScroll]);

  return (
    <Component
      ref={containerRef as React.RefObject<HTMLHeadingElement>}
      className={`text-reveal-container ${className}`}
      style={{
        overflow: "hidden",
        display: "inline-block",
      }}
    >
      <span
        ref={textRef as React.RefObject<HTMLSpanElement>}
        style={{
          display: "inline-block",
          transform: "translateY(100%)",
        }}
      >
        {children}
      </span>
    </Component>
  );
}
