"use client";

import Header from "@/components/Header";
import ScrollBar from "@/components/ScrollBar";
import About from "@/components/sections/About";
import Blog from "@/components/sections/Blog";
import Clients from "@/components/sections/Clients";
import Contact from "@/components/sections/Contact";
import Copyright from "@/components/sections/Copyright";
import Facts from "@/components/sections/Facts";
import Home from "@/components/sections/Home";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Separator from "@/components/Separator";
import Switcher from "@/components/Switcher";
import UltraCursor from "@/components/UltraCursor";
import { jqueryFunction } from "@/lib/utils";
import { Fragment, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Premium Preloader Component
function PremiumPreloader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            onComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isComplete) return null;

  return (
    <>
      {/* Yellow Overlay */}
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#ffcc00',
        zIndex: 2147483645,
        transform: isComplete ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 1s cubic-bezier(0.76, 0, 0.24, 1)',
      }} />
      
      {/* Main Preloader */}
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2147483646,
        transform: count >= 100 ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 1s cubic-bezier(0.76, 0, 0.24, 1) 0.3s',
      }}>
        <span style={{
          fontSize: '12px',
          letterSpacing: '8px',
          textTransform: 'uppercase',
          color: 'rgba(255, 255, 255, 0.4)',
          fontWeight: 300,
          marginBottom: '20px',
        }}>
          Loading Experience
        </span>
        
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
          <span style={{
            fontSize: 'clamp(80px, 20vw, 180px)',
            fontWeight: 800,
            color: '#fff',
            fontFamily: 'Oswald, sans-serif',
            lineHeight: 1,
          }}>
            {count}
          </span>
          <span style={{
            fontSize: 'clamp(30px, 6vw, 50px)',
            fontWeight: 700,
            color: '#ffcc00',
          }}>
            %
          </span>
        </div>
        
        {/* Progress Bar */}
        <div style={{
          width: '250px',
          height: '3px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '3px',
          overflow: 'hidden',
          marginTop: '30px',
        }}>
          <div style={{
            width: `${count}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #ffcc00, #ff6b6b)',
            borderRadius: '3px',
            transition: 'width 0.1s ease',
            boxShadow: '0 0 20px #ffcc00',
          }} />
        </div>
      </div>
    </>
  );
}

// Noise Texture
function NoiseTexture() {
  return (
    <div style={{
      position: 'fixed',
      inset: '-50%',
      width: '200%',
      height: '200%',
      pointerEvents: 'none',
      zIndex: 9998,
      opacity: 0.02,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      animation: 'noiseMove 0.5s steps(10) infinite',
    }} />
  );
}

// Floating Orbs
function FloatingOrbs() {
  return (
    <>
      <div style={{
        position: 'fixed',
        top: '10%',
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255, 204, 0, 0.12) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        zIndex: 0,
        animation: 'floatOrb 15s ease-in-out infinite',
      }} />
      <div style={{
        position: 'fixed',
        bottom: '20%',
        left: '5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(255, 107, 107, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(50px)',
        pointerEvents: 'none',
        zIndex: 0,
        animation: 'floatOrb 18s ease-in-out infinite reverse',
      }} />
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '40%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(132, 94, 247, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0,
        animation: 'floatOrb 20s ease-in-out infinite',
        animationDelay: '-5s',
      }} />
      
      <style jsx global>{`
        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -20px) scale(1.05); }
          50% { transform: translate(-20px, 30px) scale(0.95); }
          75% { transform: translate(-30px, -15px) scale(1.02); }
        }
        
        @keyframes noiseMove {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-2%, -2%); }
          20% { transform: translate(2%, 2%); }
          30% { transform: translate(-2%, 2%); }
          40% { transform: translate(2%, -2%); }
          50% { transform: translate(-2%, -2%); }
          60% { transform: translate(2%, 2%); }
          70% { transform: translate(-2%, 2%); }
          80% { transform: translate(2%, -2%); }
          90% { transform: translate(-2%, -2%); }
        }
      `}</style>
    </>
  );
}

// Scroll Progress
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: `${progress}%`,
      height: '3px',
      background: 'linear-gradient(90deg, #ffcc00, #ff6b6b, #845ef7)',
      zIndex: 99999,
      boxShadow: '0 0 20px #ffcc00, 0 0 40px rgba(255, 204, 0, 0.5)',
      transition: 'width 0.1s ease',
    }} />
  );
}

export default function Index() {
  const [mounted, setMounted] = useState(false);
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !preloaderComplete) return;

    // Initialize jQuery functionality
    jqueryFunction();

    // GSAP Animations
    gsap.fromTo('.header-inner',
      { opacity: 0, y: -40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );

    gsap.fromTo('.home h1',
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power4.out", delay: 0.4 }
    );

    gsap.fromTo('.home .cta',
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(2)", delay: 0.8 }
    );

    // Skills animation
    gsap.fromTo('.skills-content > div > div',
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.8, stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: { trigger: '.skills-content', start: "top 80%" }
      }
    );

    // Facts animation
    gsap.fromTo('.facts > div > div',
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.8, stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: { trigger: '.facts', start: "top 80%" }
      }
    );

    // Portfolio animation
    gsap.fromTo('.single-item',
      { opacity: 0, y: 80 },
      {
        opacity: 1, y: 0,
        duration: 1, stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: { trigger: '.swiper-portfolio', start: "top 80%" }
      }
    );

    // Contact animation
    gsap.fromTo('.contact .boxes > div > div',
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0,
        duration: 0.8, stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: '.contact .boxes', start: "top 85%" }
      }
    );

    // Testimonials animation
    gsap.fromTo('.quote-container',
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1, scale: 1,
        duration: 1, stagger: 0.2,
        ease: "back.out(1.5)",
        scrollTrigger: { trigger: '.testimonials-container', start: "top 85%" }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [mounted, preloaderComplete]);

  if (!mounted) return null;

  return (
    <Fragment>
      {/* Premium Effects */}
      {!preloaderComplete && (
        <PremiumPreloader onComplete={() => setPreloaderComplete(true)} />
      )}
      
      {preloaderComplete && (
        <>
          <UltraCursor />
          <NoiseTexture />
          <FloatingOrbs />
          <ScrollProgress />
        </>
      )}
      
      <Switcher />
      
      <div className="page-content">
        <Header />
        <div id="wrapper">
          <main className="flex-column-mobile">
            <Home />
            <About />
            <Separator type={"down"} />
            <Facts />
            <Separator type={"up"} />
            <Portfolio />
            <Separator type={"down"} />
            <Testimonials />
            <Separator type={"up"} />
            <Contact />
            <Separator type={"down"} />
            <Clients />
            <Separator type={"up"} />
            <Blog />
            <Separator type={"down"} />
            <Copyright />
          </main>
        </div>
        <ScrollBar />
      </div>
    </Fragment>
  );
}
