import React, { useState, useEffect, useRef } from "react";
import Project from "./Project";
import { myProjects } from "../data/Projects";
import "../styles/Projects.css";
import { Link } from "react-router-dom";

function Projects() {
  const [preview, setPreview] = useState(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const titleRef = useRef(null);

  const handleMouseMove = (e) => {
    setCursor({
      x: e.clientX + 20,
      y: e.clientY + 20,
    });
  };

  useEffect(() => {
    const element = titleRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("slide-in");
        } else {
          element.classList.remove("slide-in");
        }

      },
      {
        threshold: 0.5, // triggers when 50% visible
      }
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      className="projects-section"
      id="projects"
      onMouseMove={handleMouseMove}
    >
      <h2 ref={titleRef} className="projects-title">
        Website Projects
      </h2>

      <div className="projects-list">
        {myProjects.map((project) => (
          <Project
            key={project.id}
            {...project}
            setPreview={setPreview}
          />
        ))}
      </div>

      {preview && (
        <img
          src={preview}
          alt="preview"
          className="preview-image"
          style={{ top: cursor.y, left: cursor.x }}
        />
      )}

      <div className="view-more-container">
        <Link to="/websites" className="view-more-btn">
          View More →
        </Link>
      </div>
    </section>
  );
}

export default Projects;
