"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const preloader = preloaderRef.current;
    const counter = counterRef.current;
    const text = textRef.current;
    const overlay = overlayRef.current;

    if (!preloader || !counter || !text || !overlay) return;

    // Counter animation
    const count = { value: 0 };
    
    const tl = gsap.timeline({
      onComplete: () => {
        setIsComplete(true);
      },
    });

    // Animate counter from 0 to 100
    tl.to(count, {
      value: 100,
      duration: 2.5,
      ease: "power2.inOut",
      onUpdate: () => {
        counter.textContent = Math.round(count.value).toString();
      },
    });

    // Animate text
    tl.to(
      text,
      {
        y: -20,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      },
      "-=0.5"
    );

    // Reveal animation - slide up
    tl.to(
      overlay,
      {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
      },
      "-=0.3"
    );

    tl.to(
      preloader,
      {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
      },
      "-=0.9"
    );

    // Trigger page animations after preloader
    tl.call(() => {
      gsap.to(".header-inner", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });
      
      gsap.to(".home h1 span span, .hero-line", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    });

    return () => {
      tl.kill();
    };
  }, [mounted]);

  if (!mounted || isComplete) return null;

  return (
    <>
      <div
        ref={overlayRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#ffcc00",
          zIndex: 100000,
        }}
      />
      <div
        ref={preloaderRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 100001,
        }}
      >
        <div
          ref={textRef}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              letterSpacing: "8px",
              textTransform: "uppercase",
              color: "rgba(255, 255, 255, 0.5)",
              fontWeight: 300,
            }}
          >
            Loading
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "5px",
            }}
          >
            <span
              ref={counterRef}
              style={{
                fontSize: "clamp(80px, 15vw, 200px)",
                fontWeight: 700,
                color: "#fff",
                fontFamily: "Oswald, sans-serif",
                lineHeight: 1,
              }}
            >
              0
            </span>
            <span
              style={{
                fontSize: "clamp(24px, 5vw, 48px)",
                fontWeight: 700,
                color: "#ffcc00",
              }}
            >
              %
            </span>
          </div>
          <div
            style={{
              width: "200px",
              height: "2px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "2px",
              overflow: "hidden",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#ffcc00",
                transformOrigin: "left",
                animation: "loadingBar 2.5s ease-in-out forwards",
              }}
            />
          </div>
        </div>
        <style jsx>{`
          @keyframes loadingBar {
            from {
              transform: scaleX(0);
            }
            to {
              transform: scaleX(1);
            }
          }
        `}</style>
      </div>
    </>
  );
}
