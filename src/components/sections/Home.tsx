"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const Home = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animation for heading lines
      gsap.fromTo(
        ".hero-line",
        { 
          opacity: 0, 
          y: 100,
          rotateX: -40,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.15,
          delay: 2.8, // After preloader
          ease: "power4.out",
        }
      );

      // Animate the intro text
      gsap.fromTo(
        ".hero-intro",
        { 
          opacity: 0, 
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 3.5,
          ease: "power3.out",
        }
      );

      // Animate CTA button
      gsap.fromTo(
        ".hero-cta",
        { 
          opacity: 0, 
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 3.8,
          ease: "back.out(1.7)",
        }
      );

      // Floating animation for decorative elements
      gsap.to(".floating-element", {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="home image" id="home" ref={sectionRef}>
      {/* Background gradient orbs */}
      <div 
        className="floating-element"
        style={{
          position: "absolute",
          top: "10%",
          right: "20%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, var(--main-color, #ffcc00) 0%, transparent 70%)",
          opacity: 0.1,
          borderRadius: "50%",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div 
        className="floating-element"
        style={{
          position: "absolute",
          bottom: "20%",
          left: "10%",
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle, #ff6b6b 0%, transparent 70%)",
          opacity: 0.08,
          borderRadius: "50%",
          filter: "blur(40px)",
          pointerEvents: "none",
          animationDelay: "1s",
        }}
      />
      
      <div>
        <div className="position-relative" style={{ perspective: "1000px" }}>
          <h1 ref={headingRef} style={{ transformStyle: "preserve-3d" }}>
            <span className="hero-line" style={{ display: "block", overflow: "hidden" }}>
              <span 
                className="animated-layer"
                style={{
                  display: "inline-block",
                  background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.8) 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                Hello<span style={{ color: "var(--main-color, #ffcc00)" }}>.</span>
              </span>
            </span>
            <span className="hero-line position-relative" style={{ display: "block", overflow: "hidden" }}>
              <span className="animated-layer" style={{ display: "inline-block" }}>I am</span>
              <span 
                className="intro animated-layer hero-intro"
                style={{
                  background: "linear-gradient(90deg, var(--main-color, #ffcc00), #ff6b6b, var(--main-color, #ffcc00))",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "gradientShift 3s ease infinite",
                }}
              >
                Ui/Ux & Visual Designer with 3 years of experience based in India
              </span>
            </span>
            <span className="hero-line" style={{ display: "block", overflow: "hidden" }}>
              <span 
                className="animated-layer"
                style={{
                  display: "inline-block",
                  textShadow: "0 0 40px var(--main-color, #ffcc00)",
                }}
              >
                Sanjay
              </span>
            </span>
          </h1>
        </div>
      </div>
      {/* CALL TO ACTION STARTS */}
      <span 
        className="animated-layer animated-btn cta hero-cta pulse-glow" 
        id="cta"
        style={{
          boxShadow: "0 0 30px rgba(255, 204, 0, 0.3)",
        }}
      >
        <span></span>
      </span>
      {/* CALL TO ACTION ENDS */}
      
      {/* Scroll indicator */}
      <div 
        className="scroll-indicator floating"
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          opacity: 0.5,
        }}
      >
        <span style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, var(--main-color, #ffcc00), transparent)",
          }}
        />
      </div>
    </section>
  );
};
export default Home;
