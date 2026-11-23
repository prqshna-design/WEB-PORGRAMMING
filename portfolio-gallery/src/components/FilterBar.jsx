
function FilterBar({ selectedTech, setSelectedTech }) {
  const technologies = [
    "All",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
  ];

  return (
    <div className="filter-bar" aria-label="Filter projects by technology">
      {technologies.map((tech) => (
        <button
          key={tech}
          type="button"
          onClick={() => setSelectedTech(tech)}
          className={selectedTech === tech ? "active" : ""}
          aria-pressed={selectedTech === tech}
        >
          {tech}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
