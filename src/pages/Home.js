import React, { useEffect, useRef } from "react";
import "../styles/Home.css";
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";

function Home() {
  const contentRef = useRef(null);

  useEffect(() => {
    const element = contentRef.current;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // If near top (home section area)
      if (scrollY < window.innerHeight * 0.6) {
        element.classList.add("show");
      } else {
        element.classList.remove("show");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="home-section" id="home" >

      {/* Social icons */}
      <div className="home-socials">
        <a href="https://www.instagram.com/rjatlasdigitalai_/" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61578274954523#" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://www.linkedin.com/in/rj-atlas-digital-ai-a22217385" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
        <a href="https://www.youtube.com/@RJATLASDIGITALAI/shorts" aria-label="YouTube">
          <FaYoutube />
        </a>

      </div>


      {/* Main content */}
      <div ref={contentRef} className="home-content fade-enter">
        <h1 className="headline">
          Designing for
          <span className="word-slider">
            <span>You</span>
            <span>Products</span>
            <span>Startups</span>
          </span>
        </h1>

        <p>Websites, AI Videos, Posters & Digital Solutions</p>
      </div>
    </section>
  );
}

export default Home;
