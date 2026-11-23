
function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
  category,
  number,
}) {
  return (
    <article className="project-card">
      <div className="card-top">
        <span className="project-category">{category}</span>
        <span className="project-number">{number}</span>
      </div>

      <h3>{title}</h3>

      <p className="project-description">{description}</p>

      <div className="tech-stack" aria-label="Technologies used">
        {tech.map((technology) => (
          <span className="tech-tag" key={technology}>
            {technology}
          </span>
        ))}
      </div>

      <div className="project-links">
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>

        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="demo-link"
        >
          Live Demo <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
