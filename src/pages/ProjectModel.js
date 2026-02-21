import React from "react";
import "../styles/Projects.css";

function ProjectModal({ title, description, image, website, link, close }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={close}>
          ✕
        </button>

        <img src={image} alt={title} />

        <h3>{title}</h3>
        <p>{description}</p>

        {website && (
          <a
            href={website}
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
