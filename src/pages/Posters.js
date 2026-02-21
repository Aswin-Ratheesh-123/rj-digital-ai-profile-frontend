import React, { useEffect, useRef } from "react";
import "../styles/Posters.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";



const posters = [
  "/images/poster1.jpeg",
  "/images/poster2.jpeg",
  "/images/poster3.jpeg",
  "/images/poster4.jpeg",

];

function Posters() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const textElements = section.querySelectorAll(".fade-up");

    /* Fade-in observer */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.4 }
    );

    textElements.forEach((el) => observer.observe(el));

    /* Poster animation */
    const handleScroll = () => {
      cardsRef.current.forEach((card) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const progress = 1 - rect.top / windowHeight;
        const clamped = Math.max(0, Math.min(1, progress));

        const translateY = 120 - clamped * 120;
        const scale = 0.85 + clamped * 0.15;
        const rotate = (0.5 - clamped) * 20;

        card.style.transform = `
          translateY(${translateY}px)
          scale(${scale})
          rotateY(${rotate}deg)
        `;

        card.style.opacity = 0.3 + clamped * 0.7;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="posters-section" ref={sectionRef} id="posters">

      {/* Background heading */}
      <div className="posters-bg-text">
        <h2 className="bg-heading fade-up">POSTERS</h2>
      </div>

      {/* Foreground content */}
      <div className="posters-foreground">
        <p className="posters-subtext fade-up">
          High-impact promotional posters designed to capture attention,
          communicate ideas clearly, and elevate your brand presence.
        </p>

        {/* Desktop layout */}
        <div className="poster-stage">
          {posters.map((src, i) => (
            <div
              className="poster-card"
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
            >
              <img src={src} alt="poster" />
            </div>
          ))}
        </div>

        {/* Mobile vertical slider */}
        {/* Mobile slider (AI video style) */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={12}
          slidesPerView={2.8}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1.4 },
            480: { slidesPerView: 1.6 },
            768: { slidesPerView: 2 },
          }}
          className="poster-swiper"
        >
          {posters.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="poster-card mobile-card">
                <img src={src} alt="poster" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      <div className="poster-view-more">
        <Link to="/all-posters" className="view-more-btn">
          View More Posters →
        </Link>
      </div>
    </section>
  );

}

export default Posters;






