
import ProjectCard from "./ProjectCard";

function ProjectList({ projects, selectedTech }) {
  const filteredProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((project) =>
          project.tech.includes(selectedTech)
        );

  if (filteredProjects.length === 0) {
    return (
      <div className="empty-message">
        <span aria-hidden="true">✦</span>
        <h3>No projects found</h3>
        <p>Try selecting another technology.</p>
      </div>
    );
  }

  return (
    <div className="project-list">
      {filteredProjects.map((project, index) => (
        <ProjectCard
          key={project.id}
          number={String(index + 1).padStart(2, "0")}
          title={project.title}
          category={project.category}
          description={project.description}
          tech={project.tech}
          github={project.github}
          demo={project.demo}
        />
      ))}
    </div>
  );
}

export default ProjectList;
