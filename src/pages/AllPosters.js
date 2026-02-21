import React from "react";
import { Link } from "react-router-dom";
import "../styles/AllPosters.css";

const posters = [
  "/images/poster1.jpeg",
  "/images/poster2.jpeg",
  "/images/poster3.jpeg",
  "/images/poster4.jpeg",
  "/images/poster5.jpeg",
  "/images/poster6.jpeg",
  "/images/poster7.jpeg",
];

function AllPosters() {
  return (
    <section className="all-posters-section">
      <h1 className="all-posters-heading">All Posters</h1>

      <div className="all-posters-grid">
        {posters.map((src, i) => (
          <div key={i} className="all-poster-card">
            <img src={src} alt="poster" />
          </div>
        ))}
      </div>

      {/* Back button */}
      <div className="back-container">
        <Link to="/" className="back-btn">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}

export default AllPosters;
