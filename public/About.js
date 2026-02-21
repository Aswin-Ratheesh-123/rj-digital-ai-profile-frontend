import React, { useEffect, useRef } from "react";
import "../styles/About.css";

function About() {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);

  const heading = "About Us";

  const lines = [
    "We create AI-powered digital solutions",
    "including websites, AI videos, posters,",
    "and smart automation tools for growth."
  ];

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let progress = 1 - rect.top / windowHeight;
      progress = Math.max(0, Math.min(1, progress));

      /* LETTER FILL (unchanged) */
      const letters = container.querySelectorAll(".letter");
      const total = letters.length;

      letters.forEach((span, index) => {
        const threshold = index / total;
        if (progress > threshold) {
          span.classList.add("filled");
        } else {
          span.classList.remove("filled");
        }
      });

      /* IMAGE MOVEMENT */
      imagesRef.current.forEach((img, i) => {
        if (!img) return;

        const distance = progress * 220;

        const positions = [
          `translate(-${distance}px, -${distance}px)`,
          `translate(${distance}px, -${distance}px)`,
          `translate(-${distance}px, ${distance}px)`,
          `translate(${distance}px, ${distance}px)`
        ];

        img.style.transform = positions[i];
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderLetters = (text) =>
    text.split("").map((char, index) => (
      <span key={index} className="letter">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <section className="about-section" id="about">
      
      {/* Background moving images */}
      <div className="about-images">
        {[1, 2, 3, 4].map((num, i) => (
          <img
            key={i}
            src={`/images/about${num}.jpg`}
            alt="about visual"
            className="about-img"
            ref={(el) => (imagesRef.current[i] = el)}
          />
        ))}
      </div>

      {/* Text container */}
      <div className="about-container" ref={containerRef}>
        <h1 className="about-heading">
          {renderLetters(heading)}
        </h1>

        <p className="about-text">
          {lines.map((line, index) => (
            <span className="line" key={index}>
              {renderLetters(line)}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

export default About;
