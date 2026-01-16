"use client";

import { Fragment, useState, useEffect } from "react";

const colors = [
  { id: 1, name: "yellow", hex: "#ffcc00" },
  { id: 2, name: "green", hex: "#20c997" },
  { id: 3, name: "red", hex: "#ff6b6b" },
  { id: 4, name: "blue", hex: "#339af0" },
  { id: 5, name: "orange", hex: "#fd7e14" },
  { id: 6, name: "yellowgreen", hex: "#82c91e" },
  { id: 7, name: "pink", hex: "#f783ac" },
  { id: 8, name: "goldenrod", hex: "#fab005" },
];

const Switcher = () => {
  const [color, setColor] = useState("yellow");
  const [toggle, setToggle] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Dynamically update the stylesheet
    const existingLink = document.getElementById("color-skin-link") as HTMLLinkElement;
    if (existingLink) {
      existingLink.href = `/css/skins/${color}.css`;
    } else {
      const link = document.createElement("link");
      link.id = "color-skin-link";
      link.rel = "stylesheet";
      link.href = `/css/skins/${color}.css`;
      document.head.appendChild(link);
    }
  }, [color, mounted]);

  if (!mounted) return null;

  return (
    <Fragment>
      <div
        id="switcher"
        className={toggle ? "open" : "close"}
        style={{ 
          display: "block",
          borderRadius: "0 20px 20px 0",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderLeft: "none",
          background: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div 
          className="content-switcher"
          style={{ padding: "25px" }}
        >
          <h4 style={{ 
            fontSize: "12px", 
            letterSpacing: "3px", 
            opacity: 0.5,
            marginBottom: "20px",
          }}>
            THEME COLOR
          </h4>
          <ul style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(4, 1fr)", 
            gap: "10px",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}>
            {colors.map((colorItem) => (
              <li key={colorItem.id} style={{ margin: 0 }}>
                <a
                  href="#"
                  title={colorItem.name}
                  className={`color-option ${color === colorItem.name ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setColor(colorItem.name);
                  }}
                  style={{
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: colorItem.hex,
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                    border: color === colorItem.name 
                      ? "2px solid #fff" 
                      : "2px solid transparent",
                    transform: color === colorItem.name ? "scale(1.1)" : "scale(1)",
                    boxShadow: color === colorItem.name 
                      ? `0 0 20px ${colorItem.hex}` 
                      : "none",
                  }}
                >
                  {color === colorItem.name && (
                    <i 
                      className="fa-solid fa-check" 
                      style={{ 
                        color: "#000", 
                        fontSize: "14px",
                        fontWeight: "bold",
                      }} 
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <div 
            id="hideSwitcher" 
            onClick={() => setToggle(false)}
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              width: "30px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "18px",
              transition: "all 0.3s ease",
            }}
          >
            ×
          </div>
        </div>
      </div>
      <div
        id="showSwitcher"
        className={toggle ? "close" : "open"}
        onClick={() => setToggle(true)}
        style={{
          background: "linear-gradient(135deg, var(--main-color, #ffcc00), #ff6b6b)",
          borderRadius: "0 12px 12px 0",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 5px 20px rgba(255, 204, 0, 0.3)",
          transition: "all 0.3s ease",
        }}
      >
        <i 
          className="fa fa-palette" 
          style={{ 
            color: "#000", 
            fontSize: "20px",
          }} 
        />
      </div>
    </Fragment>
  );
};
export default Switcher;
