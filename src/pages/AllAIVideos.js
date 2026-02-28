import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AllAIVideos.css";

const videos = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4",
  "/videos/video4.mp4",
  "/videos/video5.mp4",
  "/videos/video6.mp4",
  "/videos/video7.mp4",
  "/videos/video8.mp4",
  "/videos/video9.mp4",
  "/videos/video10.mp4",

];

function AllAIVideos() {
  const navigate = useNavigate();

  return (
    <section className="all-ai-section">
      {/* Back button */}
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back to Home
      </button>

      <h1 className="all-ai-heading">All AI Videos</h1>

      <div className="all-ai-grid">
        {videos.map((src, i) => (
          <div className="all-ai-card" key={i}>
            <video
              src={src}
              controls
              loop
              className="all-ai-video"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default AllAIVideos;
