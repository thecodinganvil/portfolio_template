"use client";

const skills = [
  { icon: "devicon-react-original", name: "React" },
  { icon: "devicon-javascript-plain", name: "JavaScript" },
  { icon: "devicon-typescript-plain", name: "TypeScript" },
  { icon: "devicon-figma-plain", name: "Figma" },
  { icon: "devicon-html5-plain", name: "HTML5" },
  { icon: "devicon-css3-plain", name: "CSS3" },
  { icon: "devicon-nodejs-plain", name: "Node.js" },
  { icon: "devicon-python-plain", name: "Python" },
];

const timeline = [
  { type: "experience", title: "Senior Developer", period: "2022 - Present", company: "Tech Company" },
  { type: "experience", title: "Full Stack Developer", period: "2020 - 2022", company: "Digital Agency" },
  { type: "experience", title: "Frontend Developer", period: "2018 - 2020", company: "Startup Inc." },
  { type: "experience", title: "Junior Developer", period: "2016 - 2018", company: "Web Studio" },
  { type: "education", title: "Bachelor of Science", period: "Computer Science", company: "University" },
];

const About = () => {
  return (
    <section className="about main-section flex-column-mobile" id="about">
      {/* INFO HOLDER STARTS */}
      <div className="info flex-column-mobile">
        {/* IMAGE STARTS */}
        <div
          className="img-container animated-layer image-animation my-photo-container fadeInUp wow"
          data-wow-offset={200}
          id="my-photo"
        >
          <div>
            <div>
              {/* Placeholder image - replace with your photo */}
              <div 
                className="my-photo" 
                style={{
                  width: '100%',
                  height: '400px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '14px',
                  textAlign: 'center',
                  padding: '20px',
                }}
              >
                Your Photo Here<br/>(Replace with your image)
              </div>
            </div>
          </div>
        </div>
        {/* IMAGE ENDS */}
        {/* INFO STARTS */}
        <div>
          <h2>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                John
              </span>
            </span>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                Doe
              </span>
            </span>
          </h2>
          <div className="infos">
            <ul>
              {[
                { label: "Profile", value: "Full Stack Developer" },
                { label: "Nationality", value: "Your Nationality" },
                { label: "Freelance", value: "Available" },
                { label: "Languages", value: "English" },
              ].map((item, index) => (
                <li key={index}>
                  <span>
                    <span className="animated-layer fade-in-up-animation fadeInUp wow">
                      {item.label} : {item.value}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <ul>
              {[
                { label: "Address", value: "Your City" },
                { label: "Phone", value: "+1 234 567 890" },
                { label: "Email", value: "hello@example.com" },
                { label: "LinkedIn", value: "John Doe" },
              ].map((item, index) => (
                <li key={index}>
                  <span>
                    <span className="animated-layer fade-in-up-animation fadeInUp wow">
                      {item.label} : {item.value}
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
                My Skills
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
                  className={`animated-layer ${index === 0 ? 'fade-in-down-animation fadeInLeft' : 'fade-in-up-animation fadeInRight'} wow`}
                >
                  <span>
                    <i className={skill.icon} />
                  </span>
                  <h4>{skill.name}</h4>
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
                My Resume
              </span>
            </span>
          </h3>
        </div>
        <div className="timeline">
          <ol className="animated-layer fade-in-animation">
            {timeline.map((item, index) => (
              <li key={index}>
                <div className={`animated-layer ${index % 2 === 0 ? 'fade-in-down-animation' : 'fade-in-up-animation'} fadeInUp wow`}>
                  <div className={item.type}>
                    <h4>{item.title}</h4>
                    <p>
                      <i className={item.type === "education" ? "fa-solid fa-graduation-cap" : "fa-regular fa-clock"} />
                      <span>{item.period}</span>
                    </p>
                    <p>
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
    </section>
  );
};

export default About;
