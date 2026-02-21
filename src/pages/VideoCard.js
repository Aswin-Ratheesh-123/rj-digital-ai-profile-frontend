import React from "react";
import { motion, useTransform } from "framer-motion";

function VideoCard({ src, index, scrollYProgress }) {
  const start = index * 0.2;
  const end = start + 0.4;

  const y = useTransform(
    scrollYProgress,
    [start, end],
    [300, -400]
  );

  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.1, end],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [start, start + 0.2, end],
    [0.8, 1, 0.9]
  );

  return (
    <motion.div
      className="video-card"
      style={{ y, opacity, scale }}
    >
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="video-element"
      />
    </motion.div>
  );
}

export default VideoCard;
