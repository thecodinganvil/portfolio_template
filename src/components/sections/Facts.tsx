"use client";

const facts = [
  { value: "5", suffix: "+", label: "years of", sublabel: "experience" },
  { value: "50", suffix: "+", label: "Completed", sublabel: "Projects" },
  { value: "30", suffix: "+", label: "Happy", sublabel: "Clients" },
  { value: "10", suffix: "+", label: "Skills &", sublabel: "Technologies" },
  { value: "15", suffix: "+", label: "Industry", sublabel: "Awards" },
];

const Facts = () => {
  return (
    <section className="facts">
      <div className="flex-column-mobile">
        {facts.map((fact, index) => (
          <div
            key={index}
            className={`animated-layer fade-in-right-animation ${index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'} wow`}
            data-wow-offset={200}
          >
            <div>
              <div>
                <h3>{fact.value}{fact.suffix}</h3>
                <p>
                  {fact.label}
                  <span>{fact.sublabel}</span>
                </p>
              </div>
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

export default Facts;
