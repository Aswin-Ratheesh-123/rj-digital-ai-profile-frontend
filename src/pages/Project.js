import React, { useState, useEffect, useRef } from "react";
import ProjectModal from "./ProjectModel";

function Project({
  title,
  description,
  image,
  tags,
  website,
  setPreview,
}) {
  const [open, setOpen] = useState(false);
  const rowRef = useRef(null);

  useEffect(() => {
  const element = rowRef.current;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add("row-show");
      } else {
        element.classList.remove("row-show");
      }
    },
    { threshold: 0.3 }
  );

  if (element) observer.observe(element);

  return () => {
    if (element) observer.unobserve(element);
  };
}, []);


  return (
    <>
      <div
        ref={rowRef}
        className="project-row"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <h3 className="project-title">{title}</h3>
          <div className="project-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <button
          className="read-btn"
          onClick={() => setOpen(true)}
        >
          Read More →
        </button>
      </div>

      {open && (
        <ProjectModal
          title={title}
          description={description}
          image={image}
          website={website}
          close={() => setOpen(false)}
        />
      )}
    </>
  );
}

export default Project;
