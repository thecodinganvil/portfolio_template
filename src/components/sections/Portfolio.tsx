"use client";

import { salimovSlider } from "@/lib/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef, useEffect } from "react";
import gsap from "gsap";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const portfolioItems = [
  {
    id: 1,
    title: "EdTech Website",
    image: "/assets/portfolio/website.jpg",
    project: "User Interface Design",
    company: "DataEinstein Technology Pvt. Ltd.",
    duration: "2 Months",
    skills: "UI, Wireframing, Figma, Adobe Suite",
    link: "https://www.figma.com/proto/gHfv6KwtjvhZyvtqKtIkPY/DE-Website?page-id=0%3A1&type=design&node-id=1-4059&viewport=415%2C384%2C0.07&t=VS9HYkvij7Noz8Cw-1&scaling=min-zoom&mode=design",
  },
  {
    id: 2,
    title: "ABES Yearbook",
    image: "/assets/portfolio/yearbook.jpg",
    project: "Magazine of 200 Pages",
    company: "ABES, Ghaziabad",
    duration: "2 months",
    skills: "Illustrator, Photoshop & Indesign",
    link: "https://online.fliphtml5.com/ktpko/gsss/",
  },
  {
    id: 3,
    title: "Security Website",
    image: "/assets/portfolio/Security.jpg",
    project: "User Interface Design",
    company: "DE Guardian Angels",
    duration: "1 months",
    skills: "UI, Wireframing, Figma, Adobe Suite",
    link: "https://www.figma.com/proto/6ZpMmmtIoNXDSQ602dqbrm/Untitled?page-id=0%3A1&type=design&node-id=1-141&viewport=846%2C1368%2C0.28&t=iJg6FwIkBxTNFQiL-1&scaling=min-zoom&mode=design",
  },
  {
    id: 4,
    title: "Product Website UI",
    image: "/assets/portfolio/otca.jpg",
    project: "User Interface Design",
    company: "Orient Trading Company",
    duration: "1 months",
    skills: "UI, Wireframing, Figma, Adobe Suite",
    link: "https://www.figma.com/proto/jvyqR9pZkrFtknKpFwCuYf/OTC-Paints-Website?page-id=1%3A88&type=design&node-id=1-120&viewport=517%2C375%2C0.13&t=Fr158BfNQYn0ytlG-1&scaling=min-zoom&mode=design",
  },
];

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Portfolio items reveal animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".portfolio-item",
        { 
          opacity: 0, 
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".swiper-portfolio",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="portfolio main-section flex-column-mobile"
      id="portfolio"
      ref={sectionRef}
    >
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
                My Portfolio
              </span>
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      <Swiper
        {...salimovSlider.portfolio}
        modules={[Navigation, Pagination]}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        {portfolioItems.map((item, index) => (
          <SwiperSlide 
            key={item.id} 
            className="single-item swiper-slide portfolio-item"
            data-cursor-text="View"
          >
            {/* ITEM MAIN CONTENT STARTS */}
            <div 
              className="main-content shimmer"
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "8px",
              }}
            >
              <img
                className="img-fluid"
                src={item.image}
                alt={item.title}
                style={{
                  transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />
              {/* Overlay on hover */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                }}
                className="project-overlay"
              />
              {/* Project number */}
              <span
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  color: "var(--main-color, #ffcc00)",
                  background: "rgba(0,0,0,0.5)",
                  padding: "8px 16px",
                  borderRadius: "30px",
                  backdropFilter: "blur(10px)",
                }}
              >
                0{index + 1}
              </span>
            </div>
            {/* ITEM MAIN CONTENT ENDS */}
            {/* ITEM DETAILS STARTS */}
            <div className="details glass" style={{ borderRadius: "8px", marginTop: "10px" }}>
              <h4 style={{ 
                position: "relative",
                display: "inline-block",
              }}>
                {item.title}
                <span
                  style={{
                    position: "absolute",
                    bottom: "-5px",
                    left: 0,
                    width: "50px",
                    height: "3px",
                    background: "var(--main-color, #ffcc00)",
                    borderRadius: "2px",
                  }}
                />
              </h4>
              <div>
                <ul>
                  <li>
                    <span>
                      <i className="fa-regular fa-file-lines" /> Project :
                    </span>
                    <span>{item.project}</span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-regular fa-user" /> Company :
                    </span>
                    <span>{item.company}</span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-regular fa-hourglass" /> Duration :
                    </span>
                    <span>{item.duration}</span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-code-branch" /> Skills :
                    </span>
                    <span>{item.skills}</span>
                  </li>
                </ul>
              </div>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="custom-btn glow-border"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span>
                  View Project
                  <i 
                    className="fa-solid fa-arrow-up-right-from-square" 
                    style={{ marginLeft: "8px" }}
                  />
                </span>
              </a>
            </div>
            {/* ITEM DETAILS ENDS */}
          </SwiperSlide>
        ))}
        
        <div className="nav-item next-item animated-btn magnetic-button">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn magnetic-button">
          <span />
        </div>
      </Swiper>
      <img
        alt=""
        className="separator hide-mobile"
        src="/assets/separator.png"
      />
      
      <style jsx global>{`
        .single-item:hover .main-content img {
          transform: scale(1.1);
        }
        
        .single-item:hover .project-overlay {
          opacity: 1 !important;
        }
        
        .single-item .details {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .single-item:hover .details {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </section>
  );
};
export default Portfolio;
