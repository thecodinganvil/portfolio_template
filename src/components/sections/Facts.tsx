"use client";

const facts = [
  { value: "1.5", suffix: "", label: "years of", sublabel: "experience", color: "#ffcc00" },
  { value: "3", suffix: "+", label: "Yrs Exp. on", sublabel: "Design Tools", color: "#ff6b6b" },
  { value: "20", suffix: "+", label: "Design", sublabel: "Projects", color: "#845ef7" },
  { value: "5", suffix: "+", label: "Adobe", sublabel: "Applications", color: "#20c997" },
  { value: "3", suffix: "+", label: "Years of", sublabel: "Freelancer", color: "#f783ac" },
];

const Facts = () => {
  return (
    <section className="facts" style={{ position: "relative" }}>
      {/* Background gradient */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          height: "300px",
          background: "radial-gradient(ellipse, rgba(255, 204, 0, 0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      
      <div className="flex-column-mobile">
        {facts.map((fact, index) => (
          <div
            key={index}
            className={`animated-layer fade-in-right-animation ${index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'} wow fact-card`}
            data-wow-offset={200}
            style={{
              position: "relative",
              background: "rgba(255, 255, 255, 0.02)",
              borderRadius: "24px",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              padding: "30px",
              textAlign: "center",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              overflow: "hidden",
            }}
          >
            {/* Top gradient line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "60%",
                height: "3px",
                background: `linear-gradient(90deg, transparent, ${fact.color}, transparent)`,
              }}
            />
            
            <div>
              <div>
                <h3 
                  className="fact-number"
                  style={{
                    fontSize: "clamp(48px, 8vw, 72px)",
                    fontWeight: 700,
                    fontFamily: "Oswald, sans-serif",
                    background: `linear-gradient(135deg, ${fact.color}, #fff)`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: "15px",
                    transition: "all 0.3s ease",
                  }}
                >
                  {fact.value}{fact.suffix}
                </h3>
                <p style={{ 
                  fontSize: "14px", 
                  opacity: 0.7,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}>
                  {fact.label}
                  <span 
                    style={{ 
                      display: "block", 
                      color: fact.color,
                      fontWeight: 600,
                      marginTop: "5px",
                    }}
                  >
                    {fact.sublabel}
                  </span>
                </p>
              </div>
            </div>
            
            {/* Hover glow effect */}
            <div
              className="fact-glow"
              style={{
                position: "absolute",
                inset: 0,
                background: `radial-gradient(circle at center, ${fact.color}10 0%, transparent 70%)`,
                opacity: 0,
                transition: "opacity 0.4s ease",
                pointerEvents: "none",
              }}
            />
          </div>
        ))}
      </div>
      
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="/assets/separator-opposite.png"
      />
      
      <style jsx global>{`
        .fact-card:hover {
          transform: scale(1.05) translateY(-5px) !important;
          background: rgba(255, 255, 255, 0.05) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        
        .fact-card:hover .fact-glow {
          opacity: 1 !important;
        }
        
        .fact-card:hover .fact-number {
          text-shadow: 0 0 40px currentColor;
        }
      `}</style>
    </section>
  );
};
export default Facts;
