
function ProjectCard({ title, description, tech, github, demo }) {
  return (
    <div className="project-card">
      <h2>{title}</h2>

      <p>{description}</p>

      <p>
        <strong>Tech Stack:</strong> {tech.join(", ")}
      </p>

      <div className="project-links">
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>

        <a href={demo} target="_blank" rel="noreferrer">
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
