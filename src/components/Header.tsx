"use client";

import MagneticButton from "@/components/MagneticButton";

const menuItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  return (
    <header>
      {/* Desktop Menu Starts */}
      <div className="header-inner hide-mobile glass-dark" style={{
        borderRadius: "0 0 20px 20px",
        padding: "20px 40px",
        backdropFilter: "blur(20px)",
      }}>
        {/* MENU STARTS */}
        <div className="menu">
          <nav>
            <ul style={{ display: "flex", gap: "10px" }}>
              {menuItems.map((item, index) => (
                <li key={item.id}>
                  <MagneticButton strength={0.2}>
                    <span 
                      className={index === 0 ? "active" : ""} 
                      id={`${item.id}-link`}
                      style={{
                        position: "relative",
                        padding: "10px 20px",
                        cursor: "pointer",
                        fontSize: "14px",
                        fontWeight: 500,
                        letterSpacing: "1px",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <span style={{ position: "relative", zIndex: 1 }}>
                        {item.label}
                      </span>
                    </span>
                  </MagneticButton>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* MENU ENDS */}
        {/* FREELANCE STARTS */}
        <div className="mail" style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}>
          <span 
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#20c997",
              borderRadius: "50%",
              animation: "pulse 2s infinite",
            }}
          />
          <p style={{ fontSize: "13px", opacity: 0.7 }}>
            Available for work
          </p>
        </div>
        {/* FREELANCE ENDS */}
      </div>
      {/* Desktop Menu Ends */}
      
      {/* Mobile Menu Starts */}
      <nav className="mobile-menu">
        <div id="menuToggle">
          <input type="checkbox" id="checkboxmenu" />
          <span style={{ backgroundColor: "var(--main-color, #ffcc00)" }} />
          <span style={{ backgroundColor: "#fff" }} />
          <span style={{ backgroundColor: "var(--main-color, #ffcc00)" }} />
          <ul 
            className="list-unstyled glass-dark" 
            id="menu"
            style={{
              backdropFilter: "blur(30px)",
            }}
          >
            {menuItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>
                  <span style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    letterSpacing: "2px",
                  }}>
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a href="#blog">
                <span style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  letterSpacing: "2px",
                }}>
                  Blog
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Mobile Menu Ends */}
      
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }
        
        .menu ul li span:hover {
          color: var(--main-color, #ffcc00);
        }
        
        .menu ul li span.active {
          color: var(--main-color, #ffcc00);
        }
        
        .header-inner {
          background: rgba(0, 0, 0, 0.3) !important;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </header>
  );
};
export default Header;
