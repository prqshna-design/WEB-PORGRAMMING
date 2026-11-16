
function FilterBar({ selectedTech, setSelectedTech }) {
 const technologies = [
  "All",
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Node"
];

  return (
    <div className="filter-bar">
      {technologies.map((tech) => (
        <button
          key={tech}
          onClick={() => setSelectedTech(tech)}
          className={selectedTech === tech ? "active" : ""}
        >
          {tech}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
