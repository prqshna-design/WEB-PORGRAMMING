
import { useState } from "react";
import "./App.css";
import ProjectList from "./components/ProjectList";
import FilterBar from "./components/FilterBar";

const projects = [
  {
    id: 1,
    title: "SeoulMate",
    description: "A website to explore Seoul and discover shopping destinations.",
    tech: ["React", "CSS", "JavaScript"],
    github: "https://github.com/prqshna-design/WEB-PORGRAMMING/tree/main/TEAM%20PROJECTS/SeoulMate",
    demo: "https://seoulmate-chi.vercel.app/en/guide"
  },
  {
    id: 2,
    title: "PR Digital Portfolio",
    description: "My personal portfolio website.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/prqshna-design/Portfolio",
    demo: "https://prqshna-design.github.io/Portfolio/"
  },
  {
    id: 3,
    title: "Student Registration System",
    description: "A web-based student registration form created using HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/prqshna-design/WEB-PORGRAMMING/blob/main/WEB%20week8%20%28mon%29/student%20registration.html",
    demo: "https://prqshna-design.github.io/WEB-PORGRAMMING/WEB%20week8%20(mon)/student%20registration.html"
  }
];

function App() {
  const [selectedTech, setSelectedTech] = useState("All");

  return (
    <div className="app">
      <h1>My Portfolio Gallery</h1>
      <p>Explore my projects and the technologies I use.</p>

      <FilterBar
        selectedTech={selectedTech}
        setSelectedTech={setSelectedTech}
      />

      <ProjectList
        projects={projects}
        selectedTech={selectedTech}
      />
    </div>
  );
}

export default App;
