"use client";

const testimonials = [
  {
    quote: "I've been working with Sanjay, he is very talented and skillful in his field, whether in designing the UI, or other visuals.",
    name: "Nikhil Mishra",
    role: "Head of Operations",
    company: "DataEinstein",
  },
  {
    quote: "Sanjay is a freelancer since 3 years and I am connected with him from last 1.5 year, his services are awesome and designs are up to the marks as per my expectation.",
    name: "Ankur Gupta",
    role: "Client",
    company: "Orient Trading Company",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" style={{ position: "relative" }}>
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "30%",
          transform: "translate(-50%, -50%)",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(132, 94, 247, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      
      <div className="testimonials-container flex-column-mobile">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="quote-container animated-layer fade-in-right-animation fadeInUp wow glass"
            style={{
              borderRadius: "24px",
              padding: "40px",
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            {/* Quote icon */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                fontSize: "60px",
                opacity: 0.1,
                color: "var(--main-color, #ffcc00)",
                fontFamily: "Georgia, serif",
              }}
            >
              &ldquo;
            </div>
            
            {/* Rating stars */}
            <div style={{ marginBottom: "20px", display: "flex", gap: "5px" }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <i 
                  key={star}
                  className="fa-solid fa-star" 
                  style={{ 
                    color: "var(--main-color, #ffcc00)",
                    fontSize: "14px",
                  }} 
                />
              ))}
            </div>
            
            <div>
              <p style={{ position: "relative", zIndex: 1 }}>
                <span 
                  className="quote"
                  style={{
                    fontSize: "18px",
                    lineHeight: 1.8,
                    fontStyle: "italic",
                    display: "block",
                    marginBottom: "30px",
                  }}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </span>
                
                <span style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  {/* Avatar placeholder */}
                  <span
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, var(--main-color, #ffcc00), #ff6b6b)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#000",
                    }}
                  >
                    {testimonial.name.charAt(0)}
                  </span>
                  
                  <span style={{ display: "flex", flexDirection: "column" }}>
                    <span 
                      className="person"
                      style={{
                        fontWeight: 600,
                        fontSize: "16px",
                        marginBottom: "3px",
                      }}
                    >
                      {testimonial.name}
                    </span>
                    <span 
                      className="job"
                      style={{
                        fontSize: "13px",
                        opacity: 0.6,
                      }}
                    >
                      {testimonial.role} — {testimonial.company}
                    </span>
                  </span>
                </span>
              </p>
            </div>
            
            {/* Decorative gradient line */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "3px",
                background: "linear-gradient(90deg, var(--main-color, #ffcc00), #ff6b6b, #845ef7)",
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
        .quote-container:hover {
          transform: translateY(-10px) !important;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3) !important;
        }
      `}</style>
    </section>
  );
};
export default Testimonials;
