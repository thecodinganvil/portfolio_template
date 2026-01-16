"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

const skills = [
  { icon: "devicon-figma-plain", name: "Ui/Ux" },
  { icon: "devicon-figma-plain", name: "Wireframing" },
  { icon: "devicon-figma-plain", name: "Figma" },
  { icon: "devicon-figma-plain", name: "Prototyping" },
  { icon: "devicon-photoshop-plain", name: "Photoshop" },
  { icon: "devicon-illustrator-plain", name: "Illustrator" },
  { icon: "devicon-aftereffects-plain", name: "After Effect" },
  { icon: "devicon-premierepro-plain", name: "Premiere Pro" },
];

const timeline = [
  { type: "experience", title: "Ui/Ux Designer", period: "May 2022 - Ongoing", company: "DataEinstein Pvt. Ltd." },
  { type: "experience", title: "UI and Visual Designer - Freelance", period: "Sept 2021- April 2022", company: "Orient Trading Company" },
  { type: "experience", title: "Visual & Ui/Ux Intern", period: "May 2021- Aug 2021", company: "Sashree Infotech" },
  { type: "experience", title: "Graphic Design Intern", period: "April 2020 - July 2021", company: "YVPL" },
  { type: "education", title: "Bachelor in Technology", period: "Computer Science", company: "AKTU" },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal animation
      gsap.fromTo(
        imageRef.current,
        { 
          clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1.5,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
          },
        }
      );

      // Image parallax effect
      gsap.to(".about-image", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-image",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about main-section flex-column-mobile" id="about" ref={sectionRef}>
      {/* INFO HOLDER STARTS */}
      <div className="info flex-column-mobile">
        {/* IMAGE STARTS */}
        <div
          ref={imageRef}
          className="img-container animated-layer image-animation my-photo-container fadeInUp wow"
          data-wow-offset={200}
          id="my-photo"
          style={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div>
            <div style={{ position: "relative" }}>
              <img 
                className="my-photo about-image" 
                src="/assets/about.jpg" 
                alt="Sanjay Jaiswal"
                style={{
                  transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />
              {/* Image overlay gradient */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, transparent 50%, rgba(255, 204, 0, 0.2) 100%)",
                  pointerEvents: "none",
                }}
              />
              {/* Decorative frame */}
              <div
                style={{
                  position: "absolute",
                  top: "-10px",
                  right: "-10px",
                  bottom: "10px",
                  left: "10px",
                  border: "2px solid var(--main-color, #ffcc00)",
                  opacity: 0.3,
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        </div>
        {/* IMAGE ENDS */}
        {/* INFO STARTS */}
        <div>
          <h2>
            <span style={{ display: "block", overflow: "hidden" }}>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                <span style={{ 
                  background: "linear-gradient(135deg, #fff, rgba(255,255,255,0.8))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  Sanjay
                </span>
              </span>
            </span>
            <span style={{ display: "block", overflow: "hidden" }}>
              <span 
                className="animated-layer fade-in-up-animation fadeInUp wow"
                style={{
                  color: "var(--main-color, #ffcc00)",
                }}
              >
                Jaiswal
              </span>
            </span>
          </h2>
          <div className="infos">
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                { label: "Profile", value: "Product Designer" },
                { label: "Nationality", value: "Indian" },
                { label: "Freelance", value: "Available", highlight: true },
                { label: "Languages", value: "English, Hindi" },
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: "15px" }}>
                  <span>
                    <span className="animated-layer fade-in-up-animation fadeInUp wow">
                      <span style={{ opacity: 0.5 }}>{item.label} :</span>
                      <span style={{ 
                        marginLeft: "10px",
                        color: item.highlight ? "var(--main-color, #ffcc00)" : "inherit",
                        fontWeight: item.highlight ? 600 : 400,
                      }}>
                        {item.value}
                      </span>
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                { label: "Address", value: "New Delhi" },
                { label: "Phone", value: "+91 93102 15495" },
                { label: "Email", value: "connectwithsanjayjaiswal@gmail.com" },
                { label: "LinkedIn", value: "Sanjay Jaiswal" },
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: "15px" }}>
                  <span>
                    <span className="animated-layer fade-in-up-animation fadeInUp wow">
                      <span style={{ opacity: 0.5 }}>{item.label} :</span>
                      <span style={{ marginLeft: "10px" }}>{item.value}</span>
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* INFO ENDS */}
      </div>
      {/* INFO HOLDER ENDS */}
      
      {/* SKILLS STARTS */}
      <div className="skills flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title">
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation fadeInUp wow">
                <span style={{ 
                  background: "linear-gradient(135deg, #fff 0%, var(--main-color, #ffcc00) 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  My Skills
                </span>
              </span>
            </span>
          </h3>
        </div>
        {/* TITLE ENDS */}
        <div className="skills-content">
          {[0, 2, 4, 6].map((startIndex) => (
            <div key={startIndex}>
              {skills.slice(startIndex, startIndex + 2).map((skill, index) => (
                <div 
                  key={skill.name}
                  className={`animated-layer ${index === 0 ? 'fade-in-down-animation fadeInLeft' : 'fade-in-up-animation fadeInRight'} wow skill-item`}
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    borderRadius: "16px",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    padding: "20px",
                    textAlign: "center",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <span
                    style={{
                      width: "70px",
                      height: "70px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02))",
                      borderRadius: "20px",
                      margin: "0 auto 15px",
                      transition: "all 0.4s ease",
                    }}
                  >
                    <i className={skill.icon} style={{ fontSize: "32px" }} />
                  </span>
                  <h4 style={{ fontSize: "14px", fontWeight: 500 }}>{skill.name}</h4>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* SKILLS ENDS */}
      
      {/* RESUME STARTS */}
      <div className="resume flex-column-mobile">
        <div className="custom-title fadeInUp wow">
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation">
                <span style={{ 
                  background: "linear-gradient(135deg, #fff 0%, var(--main-color, #ffcc00) 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  My Resume
                </span>
              </span>
            </span>
          </h3>
        </div>
        <div className="timeline">
          <ol className="animated-layer fade-in-animation" style={{ position: "relative" }}>
            {timeline.map((item, index) => (
              <li key={index}>
                <div 
                  className={`animated-layer ${index % 2 === 0 ? 'fade-in-down-animation' : 'fade-in-up-animation'} fadeInUp wow`}
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    borderRadius: "12px",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    padding: "25px",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Decorative line */}
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: "3px",
                      height: "100%",
                      background: item.type === "education" 
                        ? "linear-gradient(to bottom, #845ef7, #20c997)"
                        : "linear-gradient(to bottom, var(--main-color, #ffcc00), #ff6b6b)",
                    }}
                  />
                  <div className={item.type}>
                    <h4 style={{ 
                      fontSize: "18px", 
                      fontWeight: 600,
                      marginBottom: "10px",
                    }}>
                      {item.title}
                    </h4>
                    <p style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "10px",
                      opacity: 0.7,
                      marginBottom: "5px",
                    }}>
                      <i className={item.type === "education" ? "fa-solid fa-graduation-cap" : "fa-regular fa-clock"} />
                      <span>{item.period}</span>
                    </p>
                    <p style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "10px",
                      color: "var(--main-color, #ffcc00)",
                    }}>
                      <i className={item.type === "education" ? "fa-solid fa-building-columns" : "fa-regular fa-building"} />
                      <span>{item.company}</span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
            <li />
          </ol>
        </div>
      </div>
      {/* RESUME ENDS */}
      
      <img
        alt=""
        className="separator hide-mobile"
        src="/assets/separator.png"
      />
      
      <style jsx global>{`
        .skill-item:hover {
          transform: translateY(-10px) scale(1.05) !important;
          background: rgba(255, 255, 255, 0.05) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        
        .skill-item:hover span {
          background: linear-gradient(135deg, var(--main-color, #ffcc00), #ff6b6b) !important;
        }
        
        .skill-item:hover span i {
          color: #000;
        }
        
        .timeline li > div:hover {
          transform: translateX(15px) !important;
          background: rgba(255, 255, 255, 0.05) !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        
        .my-photo-container:hover .my-photo {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};
export default About;
