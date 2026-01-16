"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import MagneticButton from "@/components/MagneticButton";

const socialLinks = [
  { icon: "fa-instagram", url: "https://www.instagram.com/sanjayjaiswaldesign/?hl=en", label: "Instagram" },
  { icon: "fa-linkedin", url: "https://www.linkedin.com/in/thecroder/", label: "LinkedIn" },
  { icon: "fa-dribbble", url: "#", label: "Dribbble" },
  { icon: "fa-behance", url: "#", label: "Behance" },
];

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate social icons on hover
      const socialIcons = document.querySelectorAll('.social-icon');
      socialIcons.forEach((icon) => {
        icon.addEventListener('mouseenter', () => {
          gsap.to(icon, {
            scale: 1.2,
            rotate: 5,
            duration: 0.3,
            ease: "back.out(1.7)",
          });
        });
        
        icon.addEventListener('mouseleave', () => {
          gsap.to(icon, {
            scale: 1,
            rotate: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      className="contact main-section flex-column-mobile" 
      id="contact"
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, var(--main-color, #ffcc00) 0%, transparent 70%)",
          opacity: 0.05,
          borderRadius: "50%",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />
      
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              <span style={{ 
                background: "linear-gradient(135deg, #fff 0%, var(--main-color, #ffcc00) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Get in touch
              </span>
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      
      {/* CTA Text */}
      <div 
        className="reveal-up"
        style={{
          marginBottom: "40px",
          maxWidth: "400px",
        }}
      >
        <p style={{ 
          fontSize: "18px", 
          opacity: 0.7,
          lineHeight: 1.8,
        }}>
          Have a project in mind? Let&apos;s create something amazing together.
        </p>
      </div>
      
      {/* CONTACTS STARTS */}
      <div className="boxes">
        <div>
          {/* CONTACT ITEM STARTS */}
          <div 
            className="animated-layer fade-in-down-animation fadeInUp wow glass tilt-card"
            style={{
              borderRadius: "16px",
              padding: "30px",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <i 
              className="fa fa-phone" 
              style={{
                width: "60px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, var(--main-color, #ffcc00), #ff6b6b)",
                borderRadius: "16px",
                marginBottom: "20px",
                fontSize: "24px",
                color: "#000",
              }}
            />
            <p>
              <span className="small-text" style={{ opacity: 0.5 }}>phone</span>
              <span style={{ 
                fontSize: "20px", 
                fontWeight: 600,
                display: "block",
                marginTop: "5px",
              }}>
                +91 9310215495
              </span>
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
          {/* CONTACT ITEM STARTS */}
          <div 
            className="animated-layer fade-in-up-animation fadeInUp wow glass tilt-card"
            style={{
              borderRadius: "16px",
              padding: "30px",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <i 
              className="fa fa-location-dot"
              style={{
                width: "60px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #ff6b6b, #845ef7)",
                borderRadius: "16px",
                marginBottom: "20px",
                fontSize: "24px",
                color: "#fff",
              }}
            />
            <p>
              <span className="small-text" style={{ opacity: 0.5 }}>address</span>
              <span style={{ 
                fontSize: "20px", 
                fontWeight: 600,
                display: "block",
                marginTop: "5px",
              }}>
                Delhi, India
              </span>
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
        </div>
        <div>
          {/* CONTACT ITEM STARTS */}
          <div 
            className="animated-layer fade-in-down-animation fadeInUp wow glass tilt-card"
            style={{
              borderRadius: "16px",
              padding: "30px",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <i 
              className="fa fa-envelope"
              style={{
                width: "60px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #845ef7, #20c997)",
                borderRadius: "16px",
                marginBottom: "20px",
                fontSize: "24px",
                color: "#fff",
              }}
            />
            <p>
              <span className="small-text" style={{ opacity: 0.5 }}>email</span>
              <a 
                href="mailto:connectwithsanjayjaiswal@gmail.com"
                className="link-underline"
                style={{ 
                  fontSize: "16px", 
                  fontWeight: 600,
                  display: "block",
                  marginTop: "5px",
                  color: "#fff",
                }}
              >
                connectwithsanjayjaiswal@gmail.com
              </a>
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
          {/* CONTACT ITEM STARTS */}
          <div 
            className="animated-layer fade-in-up-animation fadeInUp wow glass"
            style={{
              borderRadius: "16px",
              padding: "30px",
            }}
          >
            <i 
              className="fa fa-share-nodes"
              style={{
                width: "60px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #20c997, var(--main-color, #ffcc00))",
                borderRadius: "16px",
                marginBottom: "20px",
                fontSize: "24px",
                color: "#000",
              }}
            />
            <span className="small-text" style={{ opacity: 0.5 }}>follow me</span>
            <ul 
              className="social" 
              style={{ 
                display: "flex", 
                gap: "15px", 
                marginTop: "15px",
                listStyle: "none",
                padding: 0,
              }}
            >
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <MagneticButton strength={0.3}>
                    <a 
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label={social.label}
                      style={{
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "50%",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <i className={`fa-brands ${social.icon}`} style={{ fontSize: "20px" }} />
                    </a>
                  </MagneticButton>
                </li>
              ))}
            </ul>
          </div>
          {/* CONTACT ITEM ENDS */}
        </div>
      </div>
      {/* CONTACTS ENDS */}
      <img
        alt=""
        className="separator hide-mobile"
        src="/assets/separator.png"
      />
      
      <style jsx global>{`
        .contact .boxes > div > div:hover {
          transform: translateY(-10px) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .social-icon:hover {
          background: var(--main-color, #ffcc00) !important;
          border-color: var(--main-color, #ffcc00) !important;
        }
        
        .social-icon:hover i {
          color: #000;
        }
      `}</style>
    </section>
  );
};
export default Contact;
