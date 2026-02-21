import React from "react";
import "../styles/Projects.css";

function ProjectModal({ title, description, image, link, close }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={close}>
          ✕
        </button>

        <img src={image} alt={title} />

        <h3>{title}</h3>
        <p>{description}</p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="visit-btn"
          >
            Visit Website →
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectModal;
