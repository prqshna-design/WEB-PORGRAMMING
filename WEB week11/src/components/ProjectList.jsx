
import ProjectCard from "./ProjectCard";

function ProjectList({ projects, selectedTech }) {
  const filteredProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((project) =>
          project.tech.includes(selectedTech)
        );

  return (
    <div className="project-list">
      {filteredProjects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
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
