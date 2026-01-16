"use client";

const testimonials = [
  {
    quote: "Exceptional work and attention to detail. The project exceeded our expectations and was delivered on time. Highly recommended!",
    name: "Sarah Johnson",
    role: "CEO",
    company: "Tech Startup",
  },
  {
    quote: "A true professional who delivers outstanding results. Great communication throughout the project. Will definitely work together again!",
    name: "Michael Chen",
    role: "Creative Director",
    company: "Design Agency",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="quote-container animated-layer fade-in-right-animation fadeInUp wow"
          >
            <div>
              <p>
                <span className="quote">
                  &ldquo;{testimonial.quote}&rdquo;
                </span>
                <span>
                  <span className="person">{testimonial.name}</span>
                  <span className="job">{testimonial.role} — {testimonial.company}</span>
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="/assets/separator-opposite.png"
      />
    </section>
  );
};

export default Testimonials;
