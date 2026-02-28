import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";


import "swiper/css";
import "swiper/css/autoplay";
import "../styles/AIVideos.css";

const videos = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4",
  "/videos/video4.mp4",
  "/videos/video5.mp4",
  "/videos/video6.mp4",
];

function AIVideos() {


  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const fadeElements = section.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset first (important)
            fadeElements.forEach((el) => {
              el.classList.remove("show");
            });

            // Re-trigger animation
            fadeElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("show");
              }, index * 200);
            });
          } else {
            // Remove when leaving
            fadeElements.forEach((el) => {
              el.classList.remove("show");
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="ai-section"
      id="ai-videos"
    >
      {/* Background text */}
      <div className="ai-bg-text">
        <h2 className="bg-heading fade-up">AI VIDEOS</h2>
      </div>

      {/* Foreground content */}
      <div className="ai-foreground">
        <p className="ai-subtext fade-up">
          AI-generated marketing, explainer, and promotional videos
          designed to capture attention and drive engagement.
        </p>

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
            1024: { slidesPerView: 3 },
          }}
        >
          {videos.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="video-card">
                <video
                  src={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="video-element"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="view-more-container">
        <Link to="/ai-videos" className="view-more-btn">
          View More →
        </Link>
      </div>
    </section>
  );
}

export default AIVideos;
