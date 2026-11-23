
import { useState } from "react";
import "./App.css";
import ProjectList from "./components/ProjectList";
import FilterBar from "./components/FilterBar";

const projects = [
  {
    id: 1,
    title: "SeoulMate",
    category: "Team Project",
    description:
      "A website to explore Seoul, discover shopping destinations, and find useful travel information.",
    tech: ["React", "CSS", "JavaScript"],
    github:
      "https://github.com/prqshna-design/WEB-PORGRAMMING/tree/main/TEAM%20PROJECTS/SeoulMate",
    demo: "https://seoulmate-chi.vercel.app/en/guide",
  },
  {
    id: 2,
    title: "PR Digital Portfolio",
    category: "Personal Project",
    description:
      "My personal portfolio website showcasing my background, skills, and web development projects.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/prqshna-design/Portfolio",
    demo: "https://prqshna-design.github.io/Portfolio/",
  },
  {
    id: 3,
    title: "Student Registration System",
    category: "Web Development",
    description:
      "A web-based student registration form created using HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/prqshna-design/WEB-PORGRAMMING/blob/main/WEB%20week8%20%28mon%29/student%20registration.html",
    demo:
      "https://prqshna-design.github.io/WEB-PORGRAMMING/WEB%20week8%20(mon)/student%20registration.html",
  },
];

function App() {
  const [selectedTech, setSelectedTech] = useState("All");

  const filteredProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((project) =>
          project.tech.includes(selectedTech)
        );

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">MY CREATIVE SPACE · 2026</p>

        <h1>
          Projects & <span>Ideas.</span>
        </h1>

        <p className="hero-description">
          Welcome to my portfolio gallery! Here you can explore
          the projects I've created, the technologies I've learned,
          and my journey as a web developer.
        </p>

        <div className="hero-decoration">
          <span>DESIGN</span>
          <span>·</span>
          <span>DEVELOP</span>
          <span>·</span>
          <span>CREATE</span>
        </div>
      </header>

      <section className="gallery-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2>My Projects</h2>
          </div>

          <p className="project-count">
            {filteredProjects.length} PROJECT
            {filteredProjects.length !== 1 ? "S" : ""}
          </p>
        </div>

        <FilterBar
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
        />

        <ProjectList
          projects={projects}
          selectedTech={selectedTech}
        />
      </section>

      <footer className="footer">
        <p>MADE WITH CURIOSITY & CREATIVITY</p>
        <p>© 2026 · MY PORTFOLIO GALLERY</p>
      </footer>
    </main>
  );
}

export default App;
