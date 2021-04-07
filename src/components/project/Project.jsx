import React from "react";

function Project({ title, image, text }) {
  return (
    <div className="project-card">
      <img src={image} alt="project-img" className="project-img" />
    </div>
  );
}

export default Project;
