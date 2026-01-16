"use client";

import { salimovSlider } from "@/lib/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const portfolioItems = [
  {
    id: 1,
    title: "Project One",
    project: "Web Development",
    company: "Client Name",
    duration: "2 Months",
    skills: "React, Node.js, MongoDB",
    link: "#",
  },
  {
    id: 2,
    title: "Project Two",
    project: "Mobile App Design",
    company: "Client Name",
    duration: "3 Months",
    skills: "Figma, React Native",
    link: "#",
  },
  {
    id: 3,
    title: "Project Three",
    project: "E-Commerce Platform",
    company: "Client Name",
    duration: "4 Months",
    skills: "Next.js, Stripe, PostgreSQL",
    link: "#",
  },
  {
    id: 4,
    title: "Project Four",
    project: "Brand Identity",
    company: "Client Name",
    duration: "1 Month",
    skills: "Illustrator, Photoshop",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <section
      className="portfolio main-section flex-column-mobile"
      id="portfolio"
    >
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              My Portfolio
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
        {portfolioItems.map((item) => (
          <SwiperSlide key={item.id} className="single-item swiper-slide">
            {/* ITEM MAIN CONTENT STARTS */}
            <div className="main-content shimmer">
              {/* Placeholder image - replace with your project screenshots */}
              <div 
                style={{
                  width: '100%',
                  height: '300px',
                  background: `linear-gradient(135deg, hsl(${item.id * 60}, 70%, 60%) 0%, hsl(${item.id * 60 + 40}, 70%, 50%) 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '14px',
                  textAlign: 'center',
                }}
              >
                Project Screenshot<br/>(Replace with your image)
              </div>
            </div>
            {/* ITEM MAIN CONTENT ENDS */}
            {/* ITEM DETAILS STARTS */}
            <div className="details">
              <h4>{item.title}</h4>
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
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="custom-btn">
                <span>View Project</span>
              </a>
            </div>
            {/* ITEM DETAILS ENDS */}
          </SwiperSlide>
        ))}
        
        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>
      <img
        alt=""
        className="separator hide-mobile"
        src="/assets/separator.png"
      />
    </section>
  );
};

export default Portfolio;
