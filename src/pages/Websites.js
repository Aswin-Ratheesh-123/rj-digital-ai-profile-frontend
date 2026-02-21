import React from "react";
import { myProjects } from "../data/Projects";
import "../styles/Websites.css";
import { Link } from "react-router-dom";

function Websites() {
  return (
    <section className="websites-section">
      <div className="back-container">
        <Link to="/" className="back-btn">
          ← Back to Home
        </Link>
      </div>
      <h1 className="websites-heading">All Website Projects</h1>

      <div className="websites-grid">
        {myProjects.map((project) => (
          <div key={project.id} className="website-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>


    </section>
  );
}

export default Websites;
